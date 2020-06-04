import { fetchMovies, fetchMovie, fetchFavorite } from "./data-fetcher.js";
import { renderDetails } from "../ui/utilities.js";

// Fetch the data from data-fetcher and pass it into the movie-list
const setMovies = async () => {
	const movieListElement = document.createElement("movie-list");
	const containerElement = document.querySelector(".container");
	containerElement.appendChild(movieListElement);
	try {
		// If success, create the element and show the movies
		const data = await fetchMovies();
		movieListElement.movies = data;
	} catch (error) {
		// If error, show the error
		console.log(`${error} when rendering the movies`);
		movieListElement.renderError(error);
	}
};

// Fetch the data from data-fetcher and pass it into the #item-details
const setDetails = async (id) => {
	const itemNameElement = document.querySelector("#item-name");
	const itemRatingElement = document.querySelector("#item-rating");
	const itemFullNameElement = document.querySelector("#full-name");
	try {
		// If success, render details
		const data = await fetchMovie(id);
		renderDetails(data[0]);
	} catch (error) {
		// If error, set details to the error
		console.log(`${error} when setting details`);
		itemNameElement.textContent = error;
		itemRatingElement.textContent = "NaN";
		itemFullNameElement.textContent = error;
	}
};

const setFavorite = async () => {
	const favoriteElement = document.querySelector("sidebar-favorite");
	try {
		// If success, render favorite
		const data = await fetchFavorite();
		favoriteElement.movies = data;
	} catch (error) {
		// If error, set favorite to the error
		console.log(`${error} when rendering the favorite`);
		favoriteElement.renderError(error);
	}
};

export { setMovies, setDetails, setFavorite };
