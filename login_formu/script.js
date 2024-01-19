

function login() {
    const baslik = document.getElementById("baslik");
    baslik.style.color = "red"

    const ad = document.getElementById("ad").value;

    const soyad = document.getElementById("soyad").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const parola = document.getElementById("parola").value;
    const sifre = document.getElementById("sifre");

    const gonder = document.getElementById("gonder");



    if (ad === '') {
        baslik.textContent = "Lütfen Adınızı Giriniz!";
    } else if (soyad === '') {
        baslik.textContent = "Lütfen Soyadınızı Giriniz!";
    } else if (email === '') {
        baslik.textContent = "Lütfen Email Adresinizi Giriniz!";
    } else if (date === '') {
        baslik.textContent = "Lütfen Doğum Tarihinizi Giriniz!";
    } else if (parola === '') {
        baslik.textContent = "Lütfen Şifrenizi Giriniz!";
    } else {
        baslik.textContent = "Form Başarılı Bir Şekilde Gönderildi!"
        const ad = document.getElementById("ad").value = ''
        const soyad = document.getElementById("soyad").value = ''
        const email = document.getElementById("email").value = ''
        const date = document.getElementById("date").value = ''
        const parola = document.getElementById("parola").value = ''
    }
}
//şifre göster

// function gosterr() {
//     const parola = document.getElementById("parola");
//     if (parola.type == "password") {
//         parola.type = "text";
//     } else {
//         parola.type = "password";
//     }

// }

// function gosterr() {
//     const goster2 = document.getElementById("goster2");
//     const goster = document.getElementById("goster");

//     if (goster.style.display === "none") {
//         goster.style.display = "block";
//         goster2.style.display = "none";
//     } else {
//         goster.style.display = "none";
//         goster2.style.display = "block";
//     }
// }




function gosterr() {
    const parola = document.getElementById("parola");
    const goster2 = document.getElementById("goster2");
    
    const goster = document.getElementById("goster");

    if (parola.type === "password") {
        parola.type = "text";
        goster2.style.display = "block";
        goster.style.display = "none";
    } else {
        parola.type = "password";
        goster2.style.display = "none";
        goster.style.display = "block";
    }
}




//RASTGELE ŞİFRE OLUŞTURMA
function olustur() {
    let string_set = "acbdefgqzxDTYUIOPCVBM123456789!+$_&"
    let password = ""

    for (let i = 0; i < 12; i++) {
        password += string_set.charAt(Math.floor(Math.random() * string_set.length))
    }
    const parola = document.getElementById("parola");
    parola.value = password
}



































