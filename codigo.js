window.addEventListener('DOMContentLoaded', e =>{
  e.preventDefault()
const main = document.querySelector("#main");
const div4 = document.querySelector("#div-4");
const div3 = document.querySelector("#div-3");
const div2 = document.querySelector("#div-2");
const div1 = document.querySelector("#div-1");
fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(({posts})=>{
  posts.forEach(posts => {
    const textoPost = document.createElement("p").className = "texto-post";
    const imgPost = document.createElement("img").src = "photos/149071.png".className = "user-photo1"
    const pPost = document.createElement("p")
    const textoP = document.createTextNode("nome usuario")
    
    const post = document.createElement("div").className = "post"
    textoPost = posts.title;
    post.appendChild(textoPost)
    main.appendChild(post)
  });
})

function att(){
  return fetch('https://dummyjson.com/users/1')
  .then(res => res.json())
  .then(res => {
    const img = document.querySelector(".user-photo");
    const div = document.querySelector(".div-head2");
    img.src = res.image;
    div.appendChild(img)
})}
att()


})


