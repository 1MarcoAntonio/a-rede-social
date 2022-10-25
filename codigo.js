function att(){
  return fetch('https://dummyjson.com/users/1')
  .then(res => res.json())
  .then(res => {
    const img = document.querySelector(".user-photo");
    const div = document.querySelector(".div-head2")
    img.src = res.image
    
 div.appendChild(img)
  })}

 att()

