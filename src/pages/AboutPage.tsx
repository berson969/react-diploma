import React from 'react';
import Header from "../components/Header.tsx";
import Banner from "../components/Banner.tsx";
import AboutContent from "../components/AboutContent.tsx";
import Footer from "../components/Footer.tsx";

const AboutPage : React.FC = () => {
	return (
		<div>
			<Header />
			<main className="container">
				<div className="row">
					<div className="col">
						<Banner />
						<AboutContent />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default AboutPage;
