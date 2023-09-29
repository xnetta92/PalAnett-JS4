const lista = [];

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(regisztracios_urlap.email.value))
  {
    return (true)
  }
    alert("Helytelen email cím!")
    return (false)
}

function compare(){
    if(document.getElementById('pass').value ===
            document.getElementById('confirm_password').value) {
        document.getElementById('message').innerHTML = "Egyezik";
    } else {
        document.getElementById('message').innerHTML = "Nem egyezik";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const urlap = document.forms["regisztracios_urlap"];
    urlap.addEventListener("submit", (event) => {
        
        ValidateEmail(document.regisztracios_urlap.email)
        event.preventDefault();

        const fnev = urlap["fnev"].value;
        const email = urlap["email"].value;
        const pass = urlap["pass"].value;
        const confirm_password = urlap["confirm_password"].value;
        const birthdate = urlap["birthdate"].value;
        });

        let mindent_kitoltott = true;
        if (fnev.lenght == 0) {
            window.alert("A név megadása kötelező");
            mindent_kitoltott = false;
        }

        if (email.lenght == 0) {
            window.alert("Az email megadása kötelező");
            mindent_kitoltott = false;
        }

        if(pass.length == 0){
            window.alert("A jelszó megadása kötelező");
            mindent_kitoltott = false;
        }

        if (mindent_kitoltott) {
            const adatok = {
                fnev: fnev,
                email: email,
                pass: pass,
                birthdate: birthdate
        
            };
            lista.push(adatok);
            console.log(lista);
        }
    });