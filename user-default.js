window.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault();
const main = document.querySelector("#main");
const pNome = document.querySelector("#nome");
const imgUser = document.querySelector("#user");
const age = document.querySelector("#age");
const birthDate = document.querySelector("#birth");
const address = document.querySelector("#address");
const city = document.querySelector("#city")
const gender = document.querySelector("#gender");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");




async function perfil(){
    await fetch(`https://dummyjson.com/users/1`)
    .then(res => res.json())
    .then(res => {
        pNome.textContent = res.firstName;
        imgUser.src = res.image;
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        imgUser.style.backgroundColor = "#" + randomColor;
        age.textContent = res.age;
        gender.textContent = res.gender;
        birthDate.textContent = res.birthDate;
        address.textContent = res.address.address;
        city.textContent = res.address.city;
        email.textContent = res.email;
        phone.textContent = res.phone;

    });
}

perfil();
})