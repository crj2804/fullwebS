import React from "react";
import "../styling/contact.scss";
import axios from "axios";

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  

  handleSubmit(e) {
    const { name, email, message } = this.state;
    e.preventDefault();
    axios ({
      method: "post",
      url: "http://localhost:3000/contact",
      data: {
        name, 
        email,
        message
      }
    }).then((response) => {
      if (response.data.message === 'success'){
        alert("Message Sent.");
      } else if(response.data.message === 'fail'){
        alert("Message failed to send.")
      }
    });
    document.getElementById("myForm").reset();
    alert('Message Sent');
  }


  render() {
    return (
      <div className="form-container">
        <h1>Contact Us</h1>
        <form class="contact-form" id="myForm" onSubmit={this.handleSubmit} method="post">
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            className="namefield"
            onChange={this.handleChange}
            required
          />
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            className="emailfield"
            onChange={this.handleChange}
            required
          />
          <label for="message"> Message: </label>
          <textarea
            type="text"
            name="message"
            className="messagefield"
            onChange={this.handleChange}
            required
          />
          <button id = "btn" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
