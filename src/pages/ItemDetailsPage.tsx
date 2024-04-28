import React from 'react';
import Header from "../components/Header.tsx";
import Banner from "../components/Banner.tsx";
import Footer from "../components/Footer.tsx";
import ItemDetails from "../components/ItemDetails.tsx";

const ItemDetailsPage : React.FC = () => {
    return (
        <>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <ItemDetails />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ItemDetailsPage;
