import React from "react";
import about from "../assets/images/about.JPG";

const AboutPage = () => {
  return (
    <div className="justify-center bg-primary md:grid md:grid-cols-2 md:gap-4 md-p-5">
      <div className="p-3 mx-10 md:m-10 max-w-md max-h-md flex justify-self-center">
        <img
          src={about}
          alt="A photo of the business owner working in her studio"
        />
      </div>
      <div className="p-3 m-10">
        <h2 className="font-light text-xl my-9">Natasha Lily Rose</h2>
        <p className="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
