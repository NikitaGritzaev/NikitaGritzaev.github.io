export default () => /*форма входа*/ `
<div class="card p-0 mx-auto my-4 bold log" style="width: 85%; display: none">
    <div class="card-body">
        <form>
            <label for="inputLogin">Логин</label>
            <input type="text" class="form-control my-2" id="login" placeholder="Введите логин">

            <label for="inputPassword">Пароль</label>
            <input type="password" class="form-control my-2" id="password" placeholder="Введите пароль">

            <button type="button" class="btn btn-primary my-2" id="loginBtn">Войти</button>
            <a type="button" class="btn btn-secondary my-2 mw-75" id="regBtn" href="/register">Зарегистрироваться</a>
        </form>
    </div>
</div>
`;