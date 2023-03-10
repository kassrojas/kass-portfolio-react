import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="min-vh-100 contact">
        <h1 className="text-center p-2"> Contact Me </h1>
        <form className="p-2 m-2" action="mailto:kassandrarojass@gmail.com">
          <button type="submit" className="btn btn-primary m-2">
            Email Me at kassandrarojass@gmail.com
          </button>
        </form>
      </section>
    </>
  );
}
