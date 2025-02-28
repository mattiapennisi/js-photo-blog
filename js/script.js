// VARIABLES

// Selectors
const header = document.querySelector('#header')
const main = document.querySelector('#main')
const footer = document.querySelector('#footer')
const postsContainer = document.querySelector('#postsContainer')

// All api posts array
let postsFromApi = []

// Card markup for posts
let postCardMarkup = `
<div class="post-card card p-2 pb-3 d-flex gap-2 col-6">
    <img class="post-card-pin" src="img/pin.svg" alt="">
    <img class="post-image" src="${postUrl}" alt="Post photo ${postId}">
    <p class="post-text">${postDate}</p>
    <p class="post-text">${post}</p>
</div>
`

// FUNCTIONS

/**
 * Function that generates cards upon data collected by AJAX call
 * @constructor
 */
function generatesCards() {
    // For loop to iterate all posts array
    for (let i = 0; i < postsFromApi.length; i++) {
        let postId = postsFromApi[i]['id']
        let postTitle = postsFromApi[i].title
        let postDate = postsFromApi[i].date
        let postUrl = postsFromApi[i].url

        postsContainer.innerHTML += postCardMarkup

    }
}

// APIs

// API call to fetch all posts and enter them in a variable
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        postsFromApi.push(data)
        generatesCards()
    })
    .catch(err => console.error(err))

