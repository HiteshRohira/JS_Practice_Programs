import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{(context) => {
					const { isLightTheme, light, dark } = context;
					const currentTheme = isLightTheme ? light : dark;
					return (
						<div
							className="book-list"
							style={{ color: currentTheme.text, background: currentTheme.bg }}>
							<ul>
								<li style={{ background: currentTheme.ui }}>
									The Way of Kings
								</li>
								<li style={{ background: currentTheme.ui }}>
									The Game of Thrones
								</li>
								<li style={{ background: currentTheme.ui }}>
									The Subtle Art of Giving A F**k
								</li>
							</ul>
						</div>
					);
				}}
			</ThemeContext.Consumer>
		);
	}
}

export default BookList;
