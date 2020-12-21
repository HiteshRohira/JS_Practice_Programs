import React, { Component } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
	render() {
		return (
			<AuthContext.Consumer>
				{(authContext) => {
					const { isAuthenticated, toggleAuth } = authContext;
					return (
						<ThemeContext.Consumer>
							{(themeContext) => {
								const { isLightTheme, light, dark } = themeContext;
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
							}}
						</ThemeContext.Consumer>
					);
				}}
			</AuthContext.Consumer>
		);
	}
}

export default Navbar;
