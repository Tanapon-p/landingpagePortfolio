import React from "react";

import { ContactCard } from "../components";
import { contacts } from "../data";

export const Contact = () => {
  return (
    <section id="contact" className="my-24">
      <div className="py-4 my-4  flex items-center justify-center">
        <h2 className="font-semibold text-3xl tracking-normal lg:text-5xl dark:text-white">
          Contacts Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        {contacts.map((contacts) => (
          <ContactCard contacts={contacts} key={contacts.id} />
        ))}
      </div>
    </section>
  );
};
