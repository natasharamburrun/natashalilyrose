import React from "react";
import about from "../assets/images/about.JPG";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row bg-primary">
      <div className="p-3 m-10">
        <img
          src={about}
          alt="A photo of the business owner working in her studio "
        />
      </div>
      <div className="p-3 m-10">
        <h2 className="font-bold text-xl my-3">Natasha Lily Rose</h2>
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
