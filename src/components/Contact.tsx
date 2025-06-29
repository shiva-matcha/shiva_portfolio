import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const form = useRef();

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    form.current!,
    'YOUR_PUBLIC_KEY'
  )
  .then(
    () => {
      alert("Message sent successfully!");
    },
    (error) => {
      alert("Failed to send message: " + error.text);
    }
  );
};
