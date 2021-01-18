import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { books } = useContext(BookContext);
	const currentTheme = isLightTheme ? light : dark;

	return (
		<div
			className="book-list"
			style={{ color: currentTheme.text, background: currentTheme.bg }}>
			<ul>
				{books.map((book) => {
					return (
						<li key={book.id} style={{ background: currentTheme.ui }}>
							{book.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BookList;
