let api_url = "https://react-midterm.kreosoft.space/api";

async function getFilms(page) {
    let response = await fetch(`${api_url}/movies/${page}`);
    if (response.ok) {
        let json = await response.json();
        return json.movies;
    } else {
        return new Array();
    }
}

//TODO: переписать на JQuery
async function showFilms(page) {
    let films = await getFilms(page);
    if (page) {
        let movieContainer = document.getElementById("films-container");
        let movieTemplate = document.getElementById("movie-template");
        films.forEach((currentMovie) => {
            let newFilm = movieTemplate.cloneNode(true);
            newFilm.classList.remove("d-none");
            newFilm.querySelector(".card-title").textContent = currentMovie.name;
            newFilm.querySelector("img").src = currentMovie.poster;
            newFilm.querySelector(".year").textContent = currentMovie.year;
            newFilm.querySelector(".country").textContent = currentMovie.country;
            newFilm.querySelector(".genre").textContent = currentMovie.genres.reduce((previousValue, currentValue) =>
                previousValue + ", " + currentValue.name
            , "").slice(2);

            let badgeRating = newFilm.querySelector(".badge");
            if (currentMovie.reviews.length) {
                badgeRating.textContent = "Средняя оценка - " + currentMovie.reviews.reduce((previousValue, currentValue) =>
                previousValue + currentValue.rating
            , 0) / currentMovie.reviews.length;
            }
            else {
                badgeRating.textContent = "Ещё нет оценок"
            }
            movieContainer.append(newFilm);
        })
    } else {

    }
}
showFilms(1);
