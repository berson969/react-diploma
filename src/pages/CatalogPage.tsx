import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import More from "../components/More";
import TopSales from "../components/TopSales";
import Categories from "../components/Categories";
import Items from "../components/Items";
import SearchForm from "../components/SearchForm";

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
                            <SearchForm type='search-form' />
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
