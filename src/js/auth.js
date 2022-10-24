export async function authUser() {
    let token = localStorage.getItem("jwt");
    let guest = { auth: false, user: {} };
    if (!token) return guest;
    try {
        let response = await fetch(`${api_url}/account/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${token}`
            }
        });
        let json = await response.json();

        let user = {
            auth: true,
            user: json
        };
        localStorage.setItem("user", JSON.stringify(user))
        return user;
    }
    catch {
        localStorage.removeItem("jwt");
        localStorage.setItem("user", JSON.stringify(user))
        return guest;
    }
}

export async function logoutUser() {
    let token = localStorage.getItem("jwt");
    localStorage.removeItem("jwt");
    let user = {
        auth: false,
        user: {}
    };
    localStorage.setItem("user", JSON.stringify(user));
    if (!token) return;
    try {
        await fetch(`${api_url}/account/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": `Bearer ${token}`
            }
        });
    }
    finally {
        location.reload();
    }
}

export async function loginUser(login, password) {
    try {
        if (login.length < 2 ||
            login.length > 32 ||
            !login.match(/^[a-zA-Z0-9\-_]+$/) ||
            password.length < 8 ||
            password.length > 64 ||
            !password.match(/^[a-zA-Z0-9\-_!@#№$%^&?*+=(){}[\]<>~]+$/)) return;

        let response = await fetch(`${api_url}/account/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                "username": login,
                "password": password
            })
        });
        if (response.ok) {
            let json = await response.json();
            localStorage.setItem("jwt", json.token);
            location.pathname = "/";
        }
        else {
            $("#warn").removeClass("d-none");
        }
    }
    catch (err) {
        alert("Ошибка входа");
    }
}

export async function registerUser(log, pass, passConfirm, email, name, birth, sex) {
    let date = new Date($("#birthday").val());
    if (pass != passConfirm ||
        log.length < 2 ||
        log.length > 32 ||
        !log.match(/^[a-zA-Z0-9\-_]+$/) ||
        pass.length < 8 ||
        pass.length > 64 ||
        !pass.match(/^[a-zA-Z0-9\-_!@#№$%^&?*+=(){}[\]<>~]+$/) ||
        name.length < 4 ||
        name.length > 64 ||
        !name.match(/^[а-яА-ЯёЁa-zA-Z0-9\-_ ]+$/) ||
        !email.match(/^\S+@\S+\.\S+$/) ||
        date > Date.now() ||
        date < new Date("1900-01-01")) return;

    try {
        let response = await fetch(`${api_url}/account/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify({
                "userName": log,
                "name": name,
                "password": pass,
                "email": email,
                "birthDate": `${birth}T00:00:00.000Z`,
                "gender": sex == "Мужской" ? 1 : 0
            })
        });
        if (response.ok) {
            let json = await response.json();
            localStorage.setItem("jwt", json.token);
            location.pathname = "/";
        }
    } catch {
        alert("ошибка!")
    }
}