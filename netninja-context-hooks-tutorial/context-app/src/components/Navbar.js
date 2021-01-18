import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const currentTheme = isLightTheme ? light : dark;

	return (
		<nav
			style={{
				background: currentTheme.ui,
				color: currentTheme.text,
			}}>
			<h1>Context App</h1>
			<div onClick={toggleAuth}>
				{isAuthenticated ? "Logged In" : "Logged Out"}
			</div>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
