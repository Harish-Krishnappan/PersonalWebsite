import { useRef }  from "react"
import { Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import Image from './mail.png'
import './Contact.css'

function Contact()
{
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_abgosdj', 'template_m5pi14s', form.current, '9OlUggknYeKYAXBQI')
      .then((result) => {
          document.getElementById('span').innerHTML = "     Thank You! Your Message has been Sent!";
        }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return(
    <section id = "contact">
    <div id="Contact">
    <br/>
      <h1 id = "contactTitle">Send me a Message</h1>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" required/>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="form-control" rows="5" required />
        </div>
        <br/>
        <Button id = "button" variant="primary" size="sm" type="submit">Send Message</Button>
        <div id = "gmail">
        <a id = "atag" href="mailto:hkrishnappan2@huskers.unl.edu" target = "_blank" rel="noreferrer" style={{textDecoration: "none"}}>
          <img id="mail" src={Image} alt="mail"/>
        <span id = "email">&nbsp;Hkrishnappan2@huskers.unl.edu</span>
        </a>
        </div>
        <div id = "span"></div>
      </form>
    </div>
    <br/><br/><br/>
    </section>
  );
}

export default Contact