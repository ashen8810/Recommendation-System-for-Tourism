import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <h1 className='heading-tag'>Get in Touch with Traveling Lanka Experts</h1>
            <p>
                Welcome to our Travel Haven! Whether you have questions about exotic destinations, need personalized recommendations, or just want to share your amazing travel experiences, we're here for you. Connect with us using the options below, and let the journey begin!
            </p>
            <div className="contact section">
                <p className='visit us'>
                    <span className="contact-label">Visit Us:</span>
                    457/1, White Street, Kandy, Sri Lanka.
                </p>

                <p className='call us'>
                    <span className="contact-label">Call Us:</span>
                    Customer Care Hotline: 081-1000-2000 (081-1000-2001)
                </p>

                <p className='email us'>
                    <span className="contact-label">Email Us:</span>
                    General Inquiries: <a href="mailto:travelinglankainfo@gmail.com">travelinglankainfo@gmail.com</a><br />
                    Collaborations & Partnerships: <a href="travelinglankapartnership@gmail.com">travelinglankapartnership@gmail.com</a>
                </p>

                <p className='office hour'>
                    <span className="contact-label">Office Hours:</span>
                    Monday - Friday: 8:00 AM - 5:00 PM (GMT)
                </p>

            </div>

            <div className="social-links">
                <p>
                    <span className="contact-label">Socialize with Us:</span>
                    Connect with us on social media for daily travel inspiration, tips, and exclusive deals!
                </p>
                <ul>
                    <li><a href="https://www.facebook.com/Traveling Lanka" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com/Traveling Lanka" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com/Traveling Lanka" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>

            <br />

            <p>
                Can't find what you're looking for? Fill out our online form, and our team of travel enthusiasts will get back to you faster than you can say "adventure awaits"!
            </p>
            <a href="#" className="contact-form-link">Contact Form (coming soon)</a>
            <br /><br />

            <h3>
                Thank you for choosing Traveling Lanka as your travel companion.<br />
                Let's create unforgettable memories together!!!
            </h3>

        </div>
    );
}

export default ContactUs;
