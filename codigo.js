window.addEventListener('DOMContentLoaded', e =>{
  e.preventDefault()
const main = document.querySelector("#main");
const div4 = document.querySelector("#div-4");
const div3 = document.querySelector("#div-3");
const div2 = document.querySelector("#div-2");
const div1 = document.querySelector("#div-1");
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(({users})=>{
  users.forEach(users => {
    const imgPost = document.createElement("img")
    imgPost.classList.add("user-photo1")
    imgPost.src = users.image;
    const userPostName = document.createElement("p");
    const textName = document.createTextNode(users.firstName)
    userPostName.classList.add('user-name-post')
    userPostName.appendChild(textName)

    
     
    const divPost = document.createElement("div")
    
    

    divPost.appendChild(imgPost)
    divPost.appendChild(userPostName)
    divPost.appendChild(conteudoPost)
    main.appendChild(divPost)
  });
})

function userPhotoPost() {
  return fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(res => {
    
  })
}

function userHeader(){
  return fetch('https://dummyjson.com/users/1')
  .then(res => res.json())
  .then(res => {
    const img = document.querySelector(".user-photo");
    const div = document.querySelector(".div-head2");
    img.src = res.image;
    div.appendChild(img)
})}
userHeader()


})


