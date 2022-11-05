window.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()
const user = sessionStorage.getItem("valor")

async function perfil(){
    await fetch(`https://dummyjson.com/users/${parseInt(user)}`)
    .then(res => res.json())
    .then(res => {

    });
}
})