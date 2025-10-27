# AI Agent Instructions for natashalilyrose E-commerce Project

## Project Architecture

This is a modern e-commerce application built with:

- Frontend: React + Vite, Redux Toolkit, TailwindCSS
- Backend: Express.js, MongoDB
- Key integrations: AWS S3, Stripe

### Core Architecture Components

1. **Frontend Structure** (`/src`):

   - Components organized by feature in `/src/components`
   - State management using Redux Toolkit in `/src/Features`
   - Pages and shared components in `/src/Pages`

2. **Backend Structure** (`/server`):
   - RESTful API using Express
   - MongoDB integration with Mongoose
   - Product data seeding from `/server/data/productData.JSON`
   - Modular route handling in `/server/routes`

## Key Development Workflows

### Local Development

```bash
# Start frontend development server
npm run dev

# Start backend server
cd server && node server.js
```

### Environment Setup

Required environment variables (in `.env`):

- `MONGO_URI`: MongoDB connection string
- `AWS_ACCESS_KEY_ID`: AWS credentials for S3
- `STRIPE_SECRET_KEY`: Stripe payment processing

## Project-Specific Patterns

1. **State Management**:

   - Use Redux slices for state management (see `/src/Features`)
   - Example: `ProductsSlice.jsx`, `cartSlice.jsx` for patterns

2. **API Integration**:

   - Backend routes defined in `/server/routes`
   - Frontend API calls centralized in `/src/api.js`

3. **Data Flow**:
   - Products loaded from MongoDB on server start
   - Product data structure defined in `/server/model/productSchema.jsx`
   - Cart state managed client-side with Redux

## Common Tasks

1. **Adding New Products**:

   - Update `/server/data/productData.JSON`
   - Products automatically seeded on server start if DB is empty

2. **Implementing New Features**:
   - Add Redux slice in `/src/Features` if state management needed
   - Create component in `/src/components`
   - Update routes in `/server/routes` if API endpoints needed

## Integration Points

1. **AWS S3**:

   - Image storage handled through `/server/routes/awsRoutes.js`
   - Use pre-signed URLs for secure uploads

2. **Stripe Payments**:
   - Payment processing integrated in checkout flow
   - Stripe configuration in server-side code

## Best Practices

1. Use TailwindCSS for styling (see `tailwind.config.js`)
2. Follow established folder structure for new features
3. Implement error handling as shown in `connectDB()` function
4. Use Redux toolkit for complex state management
