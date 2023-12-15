import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initial email data structure
const eData = {
  name: undefined,
  email: undefined,
  number: undefined,
  msg: undefined,
};

function ContactMe() {
  // State to manage the form data
  const [emailData, setEmailData] = useState({ ...eData });

  // Elastic Email API key
  const apiKey =
    "CD1150CC9C4E6FC3A2A80FDF826A8B99154F62E90380B37B01B32FA34C824FE1C27AB14D4B46F963C57EAEFB86B7396D";

  // Toast configuration options
  const alertOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
  };

  // Toast success function
  const success = (e) => toast.success(e, alertOptions);

  // Toast error function
  const errorMsg = (e) => toast.error(e, alertOptions);

  // Function to send email
  async function sendEmail(e) {
    e.preventDefault();

    // Check if fields are empty
    for (const key in emailData) {
      if (!emailData[key]) {
        errorMsg("Please enter all the input fields");
        return;
      }
    }

    // Extract data from the state
    const senderName = emailData.name;
    const senderEmail = emailData.email;
    const senderPhone = emailData.number;
    const msg = emailData.msg;

    try {
      // Send the email using the Elastic Email API
      const response = await fetch(
        `https://api.elasticemail.com/v2/email/send?apikey=${apiKey}&bodyText=${msg}&from=${senderEmail}&senderName=${senderName}-phone:${senderPhone}&subject=EmailFromMyPortfolio&msgTo=ibrahim11elian@gmail.com&`,
        {
          method: "POST",
        }
      );

      // Check if the email was sent successfully
      const responseBody = await response.json();
      if (responseBody.success) {
        success("Email sent successfully!");
      } else {
        throw new Error("Error sending email.");
      }
    } catch (error) {
      console.error(error);
      errorMsg("An error occurred while sending the email.");
    }
  }

  // Render the Contact Me section
  return (
    <section className="contact-me" id="contact">
      {/* Toast container for displaying notifications */}
      <ToastContainer />

      {/* Section title */}
      <h1 className="section-title">contact me</h1>

      {/* Contact form */}
      <form action="" onSubmit={(e) => sendEmail(e)} className="contact-form">
        {/* Name input */}
        <input
          data-aos="fade-right"
          type="text"
          name="name"
          placeholder="Enter your name"
          className="box"
          required
          onChange={(e) => setEmailData({ ...emailData, name: e.target.value })}
        />

        {/* Email input */}
        <input
          data-aos="fade-left"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="box"
          required
          onChange={(e) =>
            setEmailData({ ...emailData, email: e.target.value })
          }
        />

        {/* Phone number input */}
        <input
          data-aos="fade-up"
          type="number"
          min="0"
          name="number"
          placeholder="Enter your phone number"
          className="box"
          required
          onChange={(e) =>
            setEmailData({ ...emailData, number: e.target.value })
          }
        />

        {/* Message textarea */}
        <textarea
          data-aos="fade-up"
          name="message"
          className="text-box"
          required
          placeholder="Enter your message"
          cols="30"
          rows="10"
          onChange={(e) => setEmailData({ ...emailData, msg: e.target.value })}
        ></textarea>

        {/* Submit button */}
        <input
          type="submit"
          data-aos="zoom-in"
          value="Send message"
          name="send"
          className="btn"
          onClick={(e) => sendEmail(e)}
        ></input>
      </form>

      {/* Contact information boxes */}
      <div className="box-container">
        {/* Phone box */}
        <div className="box" data-aos="zoom-in">
          <span>
            <i className="fas fa-phone" />
          </span>
          <h3>phone</h3>
          <p>+20 01157676284</p>
        </div>

        {/* Email box */}
        <div className="box" data-aos="zoom-in">
          <span>
            <i className="fas fa-envelope" />
          </span>
          <h3>email</h3>
          <p>ibrahim11elian@gmail.com</p>
        </div>

        {/* Address box */}
        <div className="box" data-aos="zoom-in">
          <span>
            <i className="fas fa-map-marker-alt" />
          </span>
          <h3>address</h3>
          <p> Giza, Egypt</p>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
