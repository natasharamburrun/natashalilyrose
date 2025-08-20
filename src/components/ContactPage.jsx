import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-auto p-4 md:p-16 xl:p-20">
        <div className="text-center mx-auto">
          <h2 className="font-neues font-bold text-brand-blue leading-8 text-2xl md:text-3xl lg:text-4xl my-8 text-center uppercase">
            Get in touch
          </h2>
          <div className="h-0.5 bg-secondary w-14 mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 mb-6">
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
                info@natashalilyrose.com
              </p>
              <p className="font-neues text-brand-blue text-2xl font-bold mb-6">
                Phone
              </p>
              <p className="font-neues text-brand-blue text-base font-medium mb-6">
                07985140265
              </p>
            </div>
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label for="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-grey-400 block w-full p-3 dark:border-black-700 dark:placeholder:text-gray-300/50"
                      placeholder="Enter your name"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                    {errors.name && <span>{errors.name}</span>}
                    <label for="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-grey-400 block w-full p-3 dark:border-black-700 dark:placeholder:text-gray-300/50"
                      placeholder="Enter your email"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                    <label for="message" className="sr-only">
                      Message
                    </label>
                    <input
                      type="text"
                      name="message"
                      id="message"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-grey-400 block w-full p-3 dark:border-black-700 dark:placeholder:text-gray-300/50"
                      placeholder="Enter your message"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                    {errors.message && <span>{errors.message}</span>}
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
