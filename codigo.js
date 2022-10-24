function att(){
  return fetch('https://dummyjson.com/users/1')
  .then(res => res.json())
  .then(res => {
    document.getElementById("user-name").innerHTML=res.users
  })}

  att();
