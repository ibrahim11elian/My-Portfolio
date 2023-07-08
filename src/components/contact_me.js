import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const eData = {
  name: undefined,
  email: undefined,
  number: undefined,
  msg: undefined,
};

function ContactMe() {
  const [emailData, setEmailData] = useState({ ...eData });
  const apiKey =
    "CD1150CC9C4E6FC3A2A80FDF826A8B99154F62E90380B37B01B32FA34C824FE1C27AB14D4B46F963C57EAEFB86B7396D";
  const alertOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
  };
  const success = (e) => toast.success(e, alertOptions);
  const errorMsg = (e) => toast.error(e, alertOptions);
  async function sendEmail(e) {
    e.preventDefault();

    // check if fields are empty
    for (const key in emailData) {
      if (!emailData[key]) {
        errorMsg("please enter all the input fields");
        return;
      }
    }
    const senderName = emailData.name;
    const senderEmail = emailData.email;
    const senderPhone = emailData.number;
    const msg = emailData.msg;

    try {
      // Send the email using the Elastic Email API
      await fetch(
        `https://api.elasticemail.com/v2/email/send?apikey=${apiKey}&bodyText=${msg}&from=${senderEmail}&senderName=${senderName}-phone:${senderPhone}&subject=EmailFromMyPortfolio&msgTo=ibrahim11elian@gmail.com&`,
        {
          method: "POST",
        }
      ).then((response) => {
        if (response.body.success) {
          success("Email sent successfully!");
        } else {
          throw new Error("Error sending email.");
        }
      });
    } catch (error) {
      console.error(error);
      errorMsg("An error occurred while sending the email.");
    }
  }

  return (
    <section className="contact-me" id="contact">
      <ToastContainer />
      <h1 className="section-title">contact me</h1>
      <form action="" onSubmit={(e) => sendEmail(e)} className="contact-form">
        <input
          data-aos="fade-right"
          type="text"
          name="name"
          placeholder="enter your name"
          className="box"
          required
          onChange={(e) => setEmailData({ ...emailData, name: e.target.value })}
        />
        <input
          data-aos="fade-left"
          type="email"
          name="email"
          placeholder="enter your email"
          className="box"
          required
          onChange={(e) =>
            setEmailData({ ...emailData, email: e.target.value })
          }
        />
        <input
          data-aos="fade-up"
          type="number"
          min="0"
          name="number"
          placeholder="enter your phone number"
          className="box"
          required
          onChange={(e) =>
            setEmailData({ ...emailData, number: e.target.value })
          }
        />
        <textarea
          data-aos="fade-up"
          name="message"
          className="text-box"
          required
          placeholder="enter your message"
          cols="30"
          rows="10"
          onChange={(e) => setEmailData({ ...emailData, msg: e.target.value })}
        ></textarea>
        <input
          type="submit"
          data-aos="zoom-in"
          value="send message"
          name="send"
          className="btn"
          onClick={(e) => sendEmail(e)}
        ></input>
      </form>

      <div className="box-container">
        <div className="box" data-aos="zoom-in">
          <span>
            <i className="fas fa-phone" />
          </span>
          <h3>phone</h3>
          <p>+20 01157676284</p>
        </div>

        <div className="box" data-aos="zoom-in">
          <span>
            <i className="fas fa-envelope" />
          </span>
          <h3>email</h3>
          <p>ibrahim11elian@gmail.com</p>
        </div>

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
