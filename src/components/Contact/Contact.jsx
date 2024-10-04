import React,{useState} from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c6dde261-7b2f-45ee-8267-fe80853ccf14");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <>
    <div className="contact" id='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge
                MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label><input type="text" placeholder='Enter your name' name='name' required />
                <label htmlFor="">Phone</label><input type="tel" name='phone'
                placeholder='+91 9213456780' required />
                <label htmlFor="">Message</label><textarea name="message" id="" rows={6}></textarea>
                <button className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
      
    </>
  )
}

export default Contact
