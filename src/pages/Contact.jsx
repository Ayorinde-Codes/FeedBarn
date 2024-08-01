import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import ContactBreadcrumb from '../components/Banner/ContactBreadcrumb';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <ContactBreadcrumb />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;