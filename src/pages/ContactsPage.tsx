import React from 'react';
import Header from "../components/Header.tsx";
import Banner from "../components/Banner.tsx";
import Footer from "../components/Footer.tsx";
import ContactsContent from "../components/ContactsContent.tsx";


const ContactsPage : React.FC = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <ContactsContent />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactsPage;
