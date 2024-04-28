import React from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Banner from "../components/Banner.tsx";
import TopSales from "../components/TopSales.tsx";
import Items from "../components/Items.tsx";
import Categories from "../components/Categories.tsx";
import More from "../components/More.tsx";

const MainPage : React.FC = () => {
	return (
		<>
			<Header />
			<main className="container">
				<div className="row">
					<div className="col">
						<Banner />
						<TopSales />
						<section className="catalog">
							<h2 className="text-center">Каталог</h2>
							<Categories />
							<Items />
							<More />
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default MainPage;
