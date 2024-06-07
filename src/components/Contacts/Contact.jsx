import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { CiMail } from "react-icons/ci";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_69nc1po',
        'template_lbqubbu',
        form.current,
        'fGP_CYv5tOfMUdkAR'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Message sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' });
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id="connect">
      <div className='headCont'>
        <h3>Contact with us</h3>
        <hr className="contDivider" />
      </div>
      <div className='ques'>
        <h4>Do you have any questions ?</h4>
        <a href='clotever321@gmail.com'><CiMail/> clotever321@gmail.com
        </a>
      </div>
      <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" value={formData.user_name}
            onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" value={formData.user_email}
            onChange={handleChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message}
            onChange={handleChange} required />
        </div>
        <button className="submit" type="submit">Submit</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
      
    </div>
  );
};

export default Contact;
