import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";
import {connectDB} from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import awsRoutes from "./routes/awsRoutes.js";


dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/api/aws", awsRoutes);


//routes
app.use("/api/products", productRoutes)

app.post('/create-checkout-session', async (req, res) => {
  try {
    const cart = req.body.items; 

    const line_items = cart.map(item => {
      const unitAmount = Math.round((item.price || 0) * 100); 

      return {
        price_data: {
          currency: 'gbp',
          unit_amount: unitAmount,
          product_data: {
            name: item.productName || 'Unnamed product',
            description: item.description || undefined,
            images: item.image ? [item.image] : undefined,
          },
        },
        quantity: item.quantity || 1,
      };
    });

    console.log('line_items payload:', JSON.stringify(line_items, null, 2));

    const shippingRate = await stripe.shippingRates.retrieve('shr_1SNs52DP1vYuSt1TBkIpheiL');

    const session = await stripe.checkout.sessions.create({

      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
      name_collection: {
        individual: {
          enabled: true,
          optional: false,
        },
      },
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB'],
      },
      shipping_options: [
        {
          shipping_rate: shippingRate.id,
        },
      ],
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Error creating Stripe session:', err);
    res.status(500).json({ error: err.message });
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  })
});
