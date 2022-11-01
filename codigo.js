window.addEventListener('DOMContentLoaded', e =>{
  e.preventDefault()
const main = document.querySelector("#main");

async function userHeader(){
  await fetch('https://dummyjson.com/users/1')
  .then(res => res.json())
  .then(res => {
    const img = document.querySelector(".user-photo");
    const div = document.querySelector(".div-head2");
    img.src = res.image
    div.appendChild(img)
  })
 }

async function usersAndImagens(conteiner, userPostName) {
  await fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(({users})=>{
    let random = Math.floor(Math.random() * users.length); 
    const post = users[random];
      
    conteiner.classList.add("user-photo1")
    conteiner.src = post.image;
    
    userPostName.textContent = post.firstName
    userPostName.classList.add('user-name-post')
        
  
})}


  async function fotoTitlePost () {
    await fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(({posts}) =>{
      let  random = Math.floor(Math.random() * posts.length); 
      const post = posts[random];
      const button = document.createElement("button")
      const span = document.createElement("span")
      const divConteiner = document.createElement("div")
      const imgUser = document.createElement('img')
      const nameUser = document.createElement('p')
      divConteiner.classList.add("div-conteiner")
      button.classList.add("button-like")
      span.textContent = "comments"
      button.appendChild(span)
      usersAndImagens(imgUser, nameUser)

      button.addEventListener("click", ()=>{
        
      })

      const title = document.createElement("p");
      title.textContent = post.title
      const postBody = document.createElement("p");
      postBody.textContent = post.body
      const imgPost = document.createElement("img")
      imgPost.src = "photos/cyberpunk_mercenarios.webp"
      imgPost.classList.add("content-post")
      divConteiner.appendChild(imgUser)
      divConteiner.appendChild(nameUser)
      divConteiner.appendChild(imgPost)
      divConteiner.appendChild(title)
      divConteiner.appendChild(postBody)
      divConteiner.appendChild(button)
      comentarios(divConteiner)
      
      main.appendChild(divConteiner)
    
  })
  }










  async function comentarios (conteiner) {
    await fetch('https://dummyjson.com/comments')
    .then( res => res.json())
    .then( res => {
      let random = Math.floor(Math.random() * res.comments.length); 
      const comment = res.comments[random];
      const comentPost = document.createElement("p")
      comentPost.textContent = comment.body
      conteiner.appendChild(comentPost)
  
  
  

})
}



userHeader()



  for (let i = 0; i < 10; i++) {
 
    fotoTitlePost()
  
  } 

  
})






 

 /* async function userPhotoPost() {
  await fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(res => {
    
  })
} */
