export default () => /*фильм из избранного*/ `
<div class="card rounded-0 film" style="display: none">
    <div class="row">
        <div class="mt-2 mb-2" style="width: 130px; height: 130px">
            <img src="..." style="width: 100%; height: 100%;" class="rounded-0" alt="...">
        </div>
        <div class="col-9 p-2">
            <h3 class="card-title p-0"><a></a></h3>
            <div class="year"></div>
            <div>
                <p class="country-genre mb-1"></p>
            </div>
            <span class="badge bg-primary"></span>
        </div>
        <div class="col my-auto">
            <button type="button" class="btn btn-danger my-2 p-2 deleteFavorite">Удалить из избранного</button>
        </div>
    </div>
</div>
`;