// Variables

const header = document.querySelector('#header')
const main = document.querySelector('#main')
const footer = document.querySelector('#footer')
const postsContainer = document.querySelector('#postsContainer')

let postsFromApi = []
let postCardMarkup = `
<div class="post-card card p-2 pb-3 d-flex gap-2 col-6">
    <img class="post-card-pin" src="img/pin.svg" alt="">
    <img class="post-image" src="https://picsum.photos/220/230" alt="Post photo 1">
    <p class="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
`
// API call to fetch all posts and enter them in a variable
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        postsFromApi.push(data)
        console.log(postsFromApi);
    })
    .catch(err => console.error(err))

