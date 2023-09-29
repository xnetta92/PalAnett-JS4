const lista = [];

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ufo_urlap.email.value)) {
        return (true)
    }
    alert("Helytelen email cím!")
    return (false)
}


document.addEventListener("DOMContentLoaded", () => {
    const urlap = document.forms["ufo_urlap"];
    urlap.addEventListener("submit", (event) => {

        ValidateEmail(document.ufo_urlap.email)
        event.preventDefault();


        const name = urlap["name"].value;
        const datetime = urlap["datetime"].value;
        const location = urlap["location"].value;
        const type = urlap["type"].value;
        const text = urlap["text"].value;
        const email = urlap["email"].value;
    });

    let mindent_kitoltott = true;
    if (uname.lenght == 0) {
        window.alert("A név megadása kötelező");
        mindent_kitoltott = false;
    }

    if (datetime.lenght == 0) {
        window.alert("Az időpont kötelező!");
        mindent_kitoltott = false;
    }

    if (location.length == 0) {
        window.alert("A helyszín kötelező!");
        mindent_kitoltott = false;
    }

    if (type.length == 0) {
        window.alert("A kitöltése kötelező");
        mindent_kitoltott = false;
    }

    if (text.length == 0) {
        window.alert("A kitöltése kötelező");
        mindent_kitoltott = false;
    }

    if (email.length == 0) {
        window.alert("A kitöltése kötelező");
        mindent_kitoltott = false;
    }

    if (mindent_kitoltott) {
        const adatok = {
            uname: uname,
            datetime: datetime,
            location: location,
            type: type,
            text: text,
            email: email
        };

        lista.push(adatok);
        console.log(lista);
    }
});