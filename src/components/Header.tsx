import React from 'react';
import NavBar from "./NavBar.tsx";
import {Link} from "react-router-dom";
import HeaderControls from "./HeaderControls.tsx";

const Header: React.FC = () => {
	return (
		<header className="container">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-sm navbar-light bg-light">
						<Link className="navbar-brand" to="/">
							<img src="/src/img/header-logo.png" alt="Bosa Noga"/>
						</Link>
						<div className="collapse navbar-collapse" id="navbarMain">
							<NavBar/>
							<HeaderControls/>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header;
