import React from "react";
import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="min-vh-100 contact">
        <h1 className="text-center p-2"> Contact Me </h1>
        <form className="p-2 contact-form" action="mailto:kassandrarojass@gmail.com">
          <h4>Email Me</h4>
          <button type="submit" className="btn btn-primary">
            <FaEnvelope />
          </button>
        </form>
      </section>
    </>
  );
}
