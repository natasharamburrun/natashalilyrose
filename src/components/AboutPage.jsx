import React from "react";
import aboutme from "../assets/images/Brand-photography/aboutme2.jpg";
import aboutpagehero from "../assets/images/Brand-photography/aboutpageherob-w.jpg";
import aboutmedesign from "../assets/images/Brand-photography/polishing-colour.jpg";

const AboutPage = () => {
  return (
    <div>
      <div>
        <img
          src={aboutpagehero}
          alt="A photo of the business owner working in her studio"
        />
      </div>
      <div className="justify-center bg-primary md:grid md:grid-cols-2 md:gap-4 md-p-5">
        <div className=" p-8 lg:px-8 xl:m-auto">
          <img
            className="p-8 object-center w-full max-w-90"
            src={aboutme}
            alt="A photo of the business owner from her work bench"
          />
          <h2 className="font-harlow text-brand-blue text-sm md:text-lg lg:text-xl xl:text-2xl text-nowrap text-center">
            Natasha Ramburrun
          </h2>
          <h2 className="font-neues text-brand-blue text-sm lg:text-xl xl:text-2xl text-center px-8 mb-4">
            Founder and hands-on maker behind Natasha Lily Rose, established in
            2025.
          </h2>
        </div>
        <div className="p-8 content-center">
          <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4">
            From her home studio in Hertfordshire, Natasha, the founder of
            Natasha Lily Rose, creates jewellery inspired by luxury, a timeless,
            elegant, and sentimental collection designed to be worn every day or
            treasured for special occasions.
          </p>
          <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4">
            Natasha’s journey into jewellery making began in 2023, when she
            purchased her first tools and enrolled in online courses to learn
            the fundamentals. After being made redundant from her role as a web
            developer, she embraced the opportunity for a career change and
            pursued her passion full-time. This led her to train with Jewellers
            Academy, where she completed a diploma in silver jewellery. She
            continues to refine her skills, exploring advanced techniques and
            expanding her craft.
          </p>
          <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center tracking-wide">
            Alongside building her jewellery business, Natasha is a proud mum to
            two girls, Ava and Sofia, who remain her greatest inspiration. The
            brand name, Natasha Lily Rose, is a blend of her first name and her
            daughters’ middle names, a heartfelt symbol of the love and meaning
            behind every piece she creates.
          </p>
        </div>
      </div>
      <div className="justify-center bg-primary md:grid md:grid-cols-2 md:gap-4 md-p-5">
        <div>
          <div className="p-8">
            <div className="h-0.5 bg-secondary w-14 mx-auto m-12 md:hidden"></div>
            <h2 className="font-neues font-black text-brand-blue text-lg md:text-lg lg:text-xl xl:text-2xl text-nowrap text-center p-8">
              Natasha Lily Rose brand ethos
            </h2>
            <i className="bx  bx-home-heart flex justify-center p-4"></i>
            <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4 tracking-wide">
              <span className="font-black text-lg">Handmade in the UK</span>
              <br />
              Crafted with traditional jewellery-making techniques.
            </p>
            <i class="bx  bx-recycle flex justify-center p-4"></i>
            <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4 tracking-wide">
              <span className="font-black text-lg">Sustainable</span> <br />
              Made using 100% recycled metals, ethically sourced gemstones from
              reputable suppliers, and eco-friendly packaging.
            </p>
            <i class="bx  bx-diamond-alt flex justify-center p-4"></i>
            <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4 tracking-wide">
              <span className="font-black text-lg">Quality</span> <br />
              Solid precious metals, designed to last a lifetime, hold their
              value, and be cherished for generations.
            </p>
            <i class="bx  bx-fingerprint flex justify-center p-4"></i>
            <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4 tracking-wide">
              <span className="font-black text-lg">Made for You </span> <br />
              One of a kind pieces, unique to the person wearing them.
            </p>
          </div>
        </div>
        <div className="flex items-start lg:items-center">
          <img
            className="p-8 object-center"
            src={aboutmedesign}
            alt="A photo of the business owner from her work bench"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
