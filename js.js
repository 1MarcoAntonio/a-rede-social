const ul = document.querySelector('.lista')

window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

    fetch('https://dummyjson.com/users&#39;')
        .then(res => res.json())
        .then( ({users}) => {
            users.forEach( user => {
                const li = document.createElement('li')
                const name = document.createTextNode(user.username)
                li.appendChild(name)
                ul.appendChild(li)
            });
        })
})

