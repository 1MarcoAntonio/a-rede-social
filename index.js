window.addEventListener('DOMContentLoaded', e =>{
  e.preventDefault();
const main = document.querySelector("#main");

async function userHeader(){
  await fetch('https://dummyjson.com/users/1')
  .then(res => res.json())
  .then(res => {
    const nome = document.querySelector(".user-name");
    const img = document.querySelector(".user-photo");
    const div = document.querySelector(".div-head2");
    const a = document.querySelector(".a-logo")
    nome.textContent = res.firstName;
    img.src = res.image;
    a.appendChild(nome);
    a.appendChild(img);
    div.appendChild(a);
  })
 }

async function usersAndImagens(imgUser, nameUser ) {
  await fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(({users})=>{
    let random = Math.floor(Math.random() * users.length); 
    const post = users[random];
      
    imgUser.classList.add("user-photo1");
    imgUser.src = post.image;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    imgUser.style.backgroundColor = "#" + randomColor;
    nameUser.textContent = post.firstName;
    nameUser.classList.add('user-name-post');

    imgUser.addEventListener("click", ()=> sessionStorage.setItem("valor", post.id));
        
  
})}



  async function fotoTitlePost () {
    await fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(({posts}) =>{
      let  random = Math.floor(Math.random() * posts.length); 
      const post = posts[random];
      const commentButton = document.createElement("button")
      const spanComment = document.createElement("span")
      const likeButton = document.createElement("button")
      const spanLike = document.createElement("span")
      const divConteiner = document.createElement("div")
      const ancor = document.createElement("a")
      const imgUser = document.createElement('img')

      const nameUser = document.createElement('p')
      const title = document.createElement("p");
      title.textContent = post.title
      const postBody = document.createElement("p");
      postBody.textContent = post.body
      const imgPost = document.createElement("img")
      const divButton = document.createElement("div")

      divConteiner.classList.add("div-conteiner")
      divButton.classList.add("button")
      likeButton.classList.add("button-like")
      commentButton.classList.add("button-like")
      spanLike.textContent = "Like"
      spanComment.textContent = "Comments"
      ancor.href = "user.html"

      likeButton.appendChild(spanLike)
      commentButton.appendChild(spanComment)
      usersAndImagens(imgUser, nameUser)

      commentButton.addEventListener("click", ()=>{
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
      divButton.appendChild(likeButton)
      divButton.appendChild(commentButton)
      divConteiner.appendChild(divButton)
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
      const commentPost = document.createElement("p")
      commentPost.textContent = comment.body
      commentPost.classList.add("comment")

      conteiner.appendChild(commentPost)
  
  
  

})
}



userHeader()



  for (let i = 0; i < 10; i++) {
 
    fotoTitlePost()
  
  } 

  
})

