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

async function usersAndImagens(conteiner) {
  await fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(({users})=>{
    let random = Math.floor(Math.random() * users.length); 
        const post = users[random];
      const imgPost = document.createElement("img")
      imgPost.classList.add("user-photo1")
      imgPost.src = post.image;
      const userPostName = document.createElement("p");
      userPostName.textContent = post.firstName
      const div1 = document.createElement("div")
      div1.classList.add("div1")
      userPostName.classList.add('user-name-post')
      div1.appendChild(imgPost)
      div1.appendChild(userPostName)
      conteiner.appendChild(div1)
      
      
  
})}


  async function fotoTitlePost (conteiner) {
    await fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(({posts}) =>{
      let  random = Math.floor(Math.random() * posts.length); 
      const post = posts[random];
      const title = document.createElement("p");
      title.textContent = post.title
      const postBody = document.createElement("p");
      postBody.textContent = post.body
      const div2 = document.createElement("div");
      div2.classList.add("div2")
      const imgPost = document.createElement("img")
      imgPost.src = "photos/cyberpunk_mercenarios.webp"
      imgPost.classList.add("content-post")
      div2.appendChild(imgPost)
      const div3 = document.createElement("div");
      div3.appendChild(title)
      div3.appendChild(postBody)
      conteiner.appendChild(div2)
      conteiner.appendChild(div3)
      
      
    
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

async function test5(conteiner) {
  return await Promise.all([
                            
                           await usersAndImagens(conteiner),
                           await fotoTitlePost (conteiner),
                           await fotoTitlePost (conteiner),
                           await comentarios (conteiner),
                           ]
                           );
                           
}


userHeader()

async function await (conteiner) {
   await test5
  conteiner.classList.add('div-conteiner')
  main.appendChild(conteiner)
 }


 for (let i = 0; i < 10; i++) {
  const divConteiner = document.createElement("div")
  test5(divConteiner)
  await(divConteiner)

} 

  
})






 

 /* async function userPhotoPost() {
  await fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(res => {
    
  })
} */
