import React from 'react';
import Header from "../components/Header.tsx";
import Banner from "../components/Banner.tsx";
import Footer from "../components/Footer.tsx";
import More from "../components/More.tsx";
import TopSales from "../components/TopSales.tsx";
import Search from "../components/Search.tsx";
import Categories from "../components/Categories.tsx";
import Items from "../components/Items.tsx";

const CatalogPage : React.FC = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <section className="catalog">
                            <TopSales />
                            <h2 className="text-center">Каталог</h2>
                            <Search />
                            <Categories />
                            <Items />
                            <More />
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CatalogPage;
