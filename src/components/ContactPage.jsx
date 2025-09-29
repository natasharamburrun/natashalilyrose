import ContactUsForm from "../Pages/ContactUsForm";

function ContactPage() {
  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-auto p-4 md:p-16 xl:p-20">
        <div className="text-center mx-auto">
          <h2 className="font-harlow font-bold text-brand-blue leading-8 text-2xl md:text-3xl lg:text-4xl my-8 text-center uppercase">
            Get in touch
          </h2>
          <div className="h-0.5 bg-secondary w-14 mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 mb-6">
            <div className="justify-items-start text-left">
              <h2 className="font-neues text-brand-blue font-bold leading-8 text-3xl mb-6">
                Contact details
              </h2>
              <p className="font-neues text-brand-blue text-2xl font-bold mb-6">
                Email
              </p>
              <p className="font-neues text-brand-blue text-base font-medium mb-2">
                We will aim to get back to you within 24hours
              </p>
              <p className="font-neues text-brand-blue text-base font-medium mb-6">
                hello@natashalilyrose.com
              </p>
              <p className="font-neues text-brand-blue text-2xl font-bold mb-6">
                Phone
              </p>
              <p className="font-neues text-brand-blue text-base font-medium mb-6">
                07985140265
              </p>
            </div>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
