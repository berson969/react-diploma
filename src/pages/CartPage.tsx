import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Order from "../components/Order";

const CartPage : React.FC = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <Cart />
                        <Order />

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;