import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2p9hix7', 'template_ff8fl3s', form.current, '3YMU3CqDp8N4jWUTr')
            .then((result) => {
                alert('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                alert('Failed to send message, please try again later.');
                console.error(error.text);
            });
    };

    return (
        <div className="container py-5">
            <motion.h2
                className="text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Me
            </motion.h2>

            <motion.div
                className="row justify-content-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="col-md-8">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="user_name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" name="user_name" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="user_email" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="user_email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" name="message" rows="4" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-outline-primary">Send Message</button>
                    </form>

                    <hr className="my-5" />

                    <div className="d-flex flex-column align-items-center gap-2">
                        <a href="mailto:ashutoshmitra110@gmail.com" className="text-decoration-none">
                            📧 <strong>Email:</strong> ashutoshmitra110@gmail.com
                        </a>

                        <a href="https://github.com/AshutoshMitraJi" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            💻 <strong>GitHub:</strong> @AshutoshMitraJi
                        </a>

                        <a href="https://linkedin.com/in/ashutoshmitraji" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            🔗 <strong>LinkedIn:</strong> ashutoshmitraji
                        </a>

                        <a href="https://github.com/AshutoshMitraJi/ashutosh-portfolio-web" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            🗂️ <strong>Portfolio Repo:</strong> View on GitHub
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;
