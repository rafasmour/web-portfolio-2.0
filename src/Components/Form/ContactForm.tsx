import { useState } from 'react';
import emailjs from '@emailjs/browser';
import InputText from './InputText';
import SubTitle from '../Blocks/SubTitle';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const serviceId: string = import.meta.env.VITE_MAILJS_SERVICE_ID
  const templateId: string = import.meta.env.VITE_MAILJS_TEMPLATE_ID
  const publicKey: string = import.meta.env.VITE_MAILJS_TEMPLATE_PUBLIC_KEY
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.target as HTMLFormElement,
        publicKey,
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log(error);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={sendEmail} className="w-full flex flex-col space-y-4 border-4 border-light-accent dark:border-dark-accent p-4 rounded-lg focus:border-light-secondary dark:focus:border-dark-secondary transition-all">
        <legend className="text-3xl text-center text-light-primary dark:text-dark-primary">Send me a message</legend>
      <InputText name="from_name" placeholder="Your name" />
      <InputText name="from_email" placeholder="Your email" />
      <textarea
        name="message"
        placeholder="Your message..."
        className="w-full p-2 bg-transparent border-2 rounded-md border-light-accent dark:border-dark-accent text-light-primary dark:text-dark-primary text-xl 
        focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent 
        focus:outline-none focus:border-light-accent dark:focus:border-dark-accent transition-all"
        required
      />
      <input
        type="submit"
        value="Send"
        disabled={isSubmitting}
        className="border-2 text-center w-32 p-2 rounded-2xl self-center md:self-start border-light-accent dark:border-dark-accent bg-transparent text-light-primary dark:text-dark-primary text-2xl font-bold  hover:bg-light-accent hover:dark:bg-dark-accent hover:text-light-primary hover:dark:text-dark-primary transition-all cursor-pointer"
      />
      <SubTitle context={stateMessage}/>
    </form>
  );
};

export default ContactForm;