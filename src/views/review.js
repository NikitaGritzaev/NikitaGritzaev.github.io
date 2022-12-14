export default () => /*шаблон отзыва*/ `
<div class="card p-0 mt-5">
    <div class="card-header mb-2">
        <div class="row align-items-center">
            <img class="avatar" src="...">
                <div class="col-8 bold reviewHeading"></div>
                <div class="col">
                    <div class="row">
                        <div class="text-end">Оценка: <div class="badge reviewRating"></div>
                        </div>
                        <div class="text-end reviewDate"></div>
                    </div>
                </div>
        </div>
    </div>
    <p class="px-3 reviewText"></p>
    <div class="card-footer reviewAuthorOptions">
        <button type="button" class="btn btn-warning my-1" id="editReviewBtn">Редактировать</button>
        <button type="button" class="btn btn-danger my-1" id="deleteReviewBtn">Удалить</button>
    </div>
</div>
`;