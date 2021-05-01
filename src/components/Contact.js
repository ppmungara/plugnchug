import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleNameChange = (e) => {
    setName((currentName) => {
      return e.target.value;
    });
  };

  const handleEmailChange = (e) => {
    setEmail((currentEmail) => {
      return e.target.value;
    });
  };

  const handleMessageChange = (e) => {
    setMessage((currentMessage) => {
      return e.target.value;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && emailIsValid(email) && message) {
      console.log(name, email, message);
      setName("");
      setEmail("");
      setMessage("");
      setMessageSent(true);
    }
    if (!emailIsValid(email)) {
      const emailMessage = document.querySelector(".email-message");
      emailMessage.innerText = "*Email is not valid";
      emailMessage.style.color = "tomato";
      setEmail("");
      const getEmail = document.querySelector("#contact-email");
      getEmail.classList.add("invalid");
      getEmail.placeholder = "Please enter a valid email";
    }
    if (!name) {
      const getName = document.querySelector("#contact-name");
      getName.classList.add("invalid");
      getName.placeholder = "Please enter your name";
    }
    if (!message) {
      const getMessage = document.querySelector("#contact-message");
      getMessage.classList.add("invalid");
      getMessage.placeholder = "Please enter your message";
    }
  };

  return (
    <>
      {messageSent ? (
        <div className="contact">
          <div className="container flex-column">
            <h2>Told you we don't bite!</h2>
            <p>
              Well, thank you for contacting us, we will get back to you within
              24 hours.
            </p>
          </div>
        </div>
      ) : (
        <div className="contact">
          <div className="container flex-column">
            <h2>Send us a message, we don't bite.</h2>
            <form className="form flex-column">
              <div className="form-control flex">
                <label htmlFor="contact-name">Name: </label>
                <input
                  type="text"
                  name="contact-name"
                  id="contact-name"
                  value={name}
                  placeholder="John Doe"
                  onChange={(e) => {
                    handleNameChange(e);
                  }}
                />
              </div>
              <div className="form-control flex">
                <label htmlFor="contact-email">Email: </label>
                <input
                  type="text"
                  name="contact-email"
                  id="contact-email"
                  value={email}
                  placeholder="john@gmail.com"
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                />
              </div>

              <div className="form-control flex">
                <label htmlFor="contact-message">Message: </label>
                <textarea
                  name="contact-message"
                  id="contact-message"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => {
                    handleMessageChange(e);
                  }}
                />
              </div>
              <div className="form-control-button flex">
                <button
                  type="submit"
                  className="btn"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit
                </button>
              </div>
              <p className="email-message"></p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
