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

async function usersAndImagens(imgUser, nameUser) {
  await fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(({users})=>{
    let random = Math.floor(Math.random() * users.length); 
    const post = users[random];
      
    imgUser.classList.add("user-photo1")
    imgUser.src = post.image;
    
    nameUser.textContent = post.firstName
    nameUser.classList.add('user-name-post')

    imgUser.addEventListener("click", ()=> sessionStorage.setItem("valor", post.id))
        
  
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
      const ancor = document.createElement("a")
      const imgUser = document.createElement('img')
      const nameUser = document.createElement('p')
      const title = document.createElement("p");
      title.textContent = post.title
      const postBody = document.createElement("p");
      postBody.textContent = post.body
      const imgPost = document.createElement("img")
      
      divConteiner.classList.add("div-conteiner")
      button.classList.add("button-like")
      span.textContent = "comments"
      ancor.href = "user.html"
      button.appendChild(span)
      usersAndImagens(imgUser, nameUser)

      button.addEventListener("click", ()=>{
        comentarios(divConteiner)
      })

      
      dogPost(imgPost)
      
      imgPost.classList.add("content-post")
      ancor.appendChild(imgUser)
      ancor.appendChild(nameUser)
      divConteiner.appendChild(ancor)
      divConteiner.appendChild(imgPost)
      divConteiner.appendChild(title)
      divConteiner.appendChild(postBody)
      divConteiner.appendChild(button)
      main.appendChild(divConteiner)
  })
  }




  async function dogPost(imgPost){  
    await fetch("https://dog.ceo/api/breeds/image/random")
    .then( res=> res.json())
    .then( res => {
      imgPost.src = res.message

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
