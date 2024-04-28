import React, {useState} from 'react';
import NavBar from "./NavBar.tsx";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const toggleSearchForm = () => {
		setVisible(!visible);
	};

	return (
		<header className="container">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-sm navbar-light bg-light">
						<Link className="navbar-brand" to="/">
							<img src="/src/img/header-logo.png" alt="Bosa Noga" />
						</Link>
						<div className="collapse navbar-collapse" id="navbarMain">
							<NavBar />
							<div>
								<div className="header-controls-pics">
									<div
										data-id="search-expander"
										className="header-controls-pic header-controls-search"
										onClick={toggleSearchForm}
									></div>
                                    {/*Do programmatic navigation on click to /cart.html*/}
									<div className="header-controls-pic header-controls-cart">
										<div className="header-controls-cart-full">1</div>
										<div className="header-controls-cart-menu"></div>
									</div>
								</div>
								<form
									data-id="search-form"
									className={`header-controls-search-form form-inline ${visible ? '' : 'invisible'}`}
								>
									<input className="form-control" placeholder="Поиск" />
								</form>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
};

export default Header;
