import React from "react";
// import { ReactNotifications, Store } from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";

export default function Contact() {
  return (
    <>
      <section className="min-vh-100">
        <h1 className="text-center p-2"> Contact Me </h1>
        <form className="p-2 m-2">
          <div>
            <label for="nameInput" className="form-label">
              Name
            </label>
            <input type="name" className="form-control" id="nameInput" />
          </div>
          <div>
            <label for="emailInput" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="emailInput" />
          </div>
          <div>
            <label for="messageInput" className="form-label">
              Message
            </label>
            <input type="message" className="form-control" id="messageInput" />
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
