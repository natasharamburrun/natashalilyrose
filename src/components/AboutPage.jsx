import React from "react";
import aboutme from "../assets/images/Brand-photography/aboutme.jpg";
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
        <div className="p-8 lg:px-8 xl:m-auto">
          <img
            className="p-8 object-center"
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
        <div className="p-8">
          <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4">
            From my home studio in Hertfordshire, I make Jewellery inspired by
            luxury creating a timeless, elegant, and sentimental collection
            which can be worn everyday or treasured for special occasions.
          </p>
          <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4">
            My journey began in 2023, where I bought some essential tools and
            enrolled in online courses to learn the basics of jewellery making.
            After being made redundant from my role as a web developer, I
            decided to shift my focus towards a career change. This led me to
            train with Jewellers Academy, where I completed a diploma in silver
            jewellery. I’m now continuing to build on those foundations by
            learning more advanced techniques and refining my craft.
          </p>
          <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center tracking-wide">
            Alongside making jewellery, I’m a proud mum to two girls, Ava and
            Sofia, who are my greatest inspiration. The name Natasha Lily Rose
            is a blend of my first name and their middle names, symbolising the
            heart behind everything I create.
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
            <i class="bx  bx-home-heart flex justify-center p-4"></i>
            <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4 tracking-wide">
              <span className="font-black text-lg">Handmade in the UK</span>
              <br />
              Crafted with traditional jewellery-making techniques.
            </p>
            <i class="bx  bx-recycle flex justify-center p-4"></i>
            <p className="font-neues font-light text-brand-blue text-sm lg:text-lg xl:text-2xl text-center mb-4 tracking-wide">
              <span className="font-black text-lg">Sustainable</span> <br />
              Made using recycled metals, ethically sourced gemstones from
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
