// import React from "react";

const Contact = () => {
  return (
    <section
      className="py-24 sm:py-32 px-6 lg:px-10"
      style={{ backgroundColor: "#00dcda" }}
    >
      <div className="mx-auto container">
        <div className="flex flex-col flex-start">
          <h2
            className="xl:text-[16rem] lg:text-[13rem] md:text-[10rem] text-[5rem] break-words
                        font-sans font-500 md:leading-[16rem] leading-[5rem] text-[#00224c] tracking-tighter"
          >
            Reach Out
          </h2>
          <p className="mt-6 text-left md:text-4xl text-md text-black opacity-50">
            New opportunities? projects? components? pages? Tell me more.
            Connect with me via email at chungvuiloong@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
