import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ItemDetails from "../components/ItemDetails";

const ItemDetailsPage : React.FC = () => {
    return (
        <div>
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
        </div>
    );
};

export default ItemDetailsPage;
