import React from 'react';
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Component404 from "../components/Component404.tsx";
import Banner from "../components/Banner.tsx";

const Page404 : React.FC  = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <Component404 />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Page404;
