//rafce
import NewsletterForm from "./NewsletterForm";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/natashalilyrose/",
  },
  {
    id: 2,
    icon: <FaFacebook />,
    url: "https://www.facebook.com/profile.php?id=61575853972500",
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-8 px-4 md:px-16 lg:px-28 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:flex justify-between">
        <div>
          <h3 className="text-md font-bold font-harlow text-white">Socials</h3>
          <ul className="flex gap-2 lg:gap-4 py-4">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-brand-blue hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm duration-300 p-1"
              >
                <i className="text-md lg:text-2xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-bold font-harlow text-white">
            Customer care
          </h3>
          <div className="flex flex-col items-start">
            <button className="pb-1 text-md font-light font-neues text-white">
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </button>
            <button className="pb-1 text-md font-light font-neues text-white">
              <a href="/privacy-policy">Privacy Policy</a>
            </button>
          </div>
        </div>
        <div>
          <h3 className="py-2 text-md font-bold font-harlow text-white">
            Sign up to Newsletter
          </h3>
          <p className="py-2 text-md font-light font-neues text-white">
            Join to know about new collection, launches, special offers and
            updates
          </p>
          <p className="py-1 text-xs font-light font-neues text-white">
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
