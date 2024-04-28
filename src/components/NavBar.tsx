import React from 'react';
import {Link, useLocation} from "react-router-dom";

const NavBar : React.FC = () => {
	const location = useLocation();

	return (
		<ul className="navbar-nav mr-auto">
			<li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
				<Link className="nav-link" to="/">Главная</Link>
			</li>
			<li className={`nav-item ${location.pathname === '/catalog' ? 'active' : ''}`}>
				<Link className="nav-link" to="/catalog">Каталог</Link>
			</li>
			<li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
				<Link className="nav-link" to="/about">О магазине</Link>
			</li>
			<li className={`nav-item ${location.pathname === '/contacts' ? 'active' : ''}`}>
				<Link className="nav-link" to="/contacts">Контакты</Link>
			</li>
		</ul>
	);
};

export default NavBar;
