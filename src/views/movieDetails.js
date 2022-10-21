export default () => /*детали фильма*/ ` 
<div class="row mt-4 mx-4 mb-4 bg-white px-4 py-4" id="film-container">
    <div class="col-12 col-md-3">
        <img class="card-img-top h-100" src="" alt="" id="poster">
    </div>

    <div class="col-12 col-md-9">
        <h1 id="name"></h1>
        <p id="about"></p>
        <button type="button" class="btn btn-outline-primary d-none" id="toggleFavorite">Добавить в избранное +</button>
        <h2 class="mt-5">О фильме</h2>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Год производства</div>
            <div class="col-6 text-end py-2 bold" id="year">—</div>
        </div>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Страна</div>
            <div class="col-6 text-end py-2 bold" id="country">—</div>
        </div>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Жанр</div>
            <div class="col-6 text-end py-2 bold" id="genres">—</div>
        </div>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Время</div>
            <div class="col-6 text-end py-2 bold" id="time">—</div>
        </div>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Слоган</div>
            <div class="col-6 text-end py-2 bold" id="tagline">—</div>
        </div>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Режиссёр</div>
            <div class="col-6 text-end py-2 bold" id="director">—</div>
        </div>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Бюджет</div>
            <div class="col-6 text-end py-2 bold" id="budget">—</div>
        </div>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Сборы в мире</div>
            <div class="col-6 text-end py-2 bold" id="fees">—</div>
        </div>
        <div class="row border-bottom border-secondary" style="border-bottom: 1px solid gray;">
            <div class="col-6 text-start py-2">Возраст</div>
            <div class="col-6 text-end py-2">
                <p class="badge bg-secondary my-0" id="ageLimit">?</p>
            </div>
        </div>
    </div>
    <h3 class="mt-5" id="reviewSectionHeading">Отзывы и оценки</h3>
</div>
`;