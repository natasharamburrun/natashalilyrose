//rafce

import React from "react";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer className="bg-primary px-4 md:px-16 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:flex justify-between">
        <div>
          <h3 className="text-md font-bold font-harlow text-brand-blue">
            Socials
          </h3>
        </div>
        <div>
          <h3 className="text-md font-bold font-harlow text-brand-blue">
            Customer care
          </h3>
        </div>
        <div>
          <h3 className="py-2 text-md font-bold font-harlow text-brand-blue">
            Sign up to Newsletter
          </h3>
          <p className="py-2 text-md font-light font-neues text-brand-blue">
            Join to know about new collection, launches, special offers and
            updates
          </p>
          <p className="py-1 text-xs font-light font-neues text-brand-blue">
            By signing up, you agree to receive marketing emails. View our
            privacy policy and terms of service for more info.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
