import React from "react";
import { SectionContainer } from "@components/SectionContainer";
import { SectionTitle } from "@components/SectionTitle";

const Contact = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col flex-start">
        <SectionTitle>Reach Out</SectionTitle>
        <p className="mt-6 text-left md:text-4xl text-md text-black opacity-50">
          New opportunities? projects? components? pages? Tell me more.
          Connect with me via email at chungvuiloong@gmail.com
        </p>
      </div>
    </SectionContainer>
  );
};

export default Contact;
