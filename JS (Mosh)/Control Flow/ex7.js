const movie = {
    title: "a",
    releaseYear: 2018,
    rating: 4.5,
    director: "b"
};

showProperties(movie);

function showProperties(movie) {
    for (let property in movie){
        if (typeof(movie[property]) === "string") console.log(property, movie[property]);
    }
}