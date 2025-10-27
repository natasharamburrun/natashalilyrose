import React from "react";

const AnnouncementBanner = () => {
  return (
    <div className="sticky top-0 w-full z-10 bg-brand-blue text-white p-3 text-center">
      <p className="font-neues text-sm md:text-lg">
        Please expect up to 14 days for order processing and delivery
      </p>
    </div>
  );
};

export default AnnouncementBanner;
