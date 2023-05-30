import React from "react";
import Resume from "./resume.component";
import ContactDetails from "./contact-details.component";
import { FaDownload, FaEye } from 'react-icons/fa';
import "./contact.styles.scss";

export default function Contact() {
  const resumeView = [
    {
      id: '1rdown',
      label: 'download',
      action: `download="Kassandra-Rojas-Resume"`,
      icon: <FaDownload />,
    },
    {
      id: '1rview',
      label: 'view',
      action: '',
      icon: <FaEye />,
    }
  ];

  return (
    <div className="contact-container">
      <Resume resumeView={resumeView} />
      <ContactDetails />
    </div>
  );
}
