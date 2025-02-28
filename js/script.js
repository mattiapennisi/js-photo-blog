// VARIABLES

// Selectors
const header = document.querySelector('#header')
const main = document.querySelector('#main')
const footer = document.querySelector('#footer')
const postsContainer = document.querySelector('#postsContainer')

// All api posts array
// let postsFromApi = []

// FUNCTIONS

/**
 * Function that generates cards upon data collected by AJAX calls
 * @constructor
 */
function addElementsToContainerFromApi() {
    
}

// APIs

// API call to fetch all posts and enter them in a variable
fetch('https://lanciweb.github.io/demo/api/pictures/')
    // It converts data in json when fetched
    .then(response => response.json())
    // It executes arrow function when data is converted in json format
    .then(data => {
        // It iterates for every element in data fetched
        for (let i = 0; i < data.length; i++) {
            // Api fetching variables
            const postData = data[i]
            const postId = postData.id
            const postTitle = postData.title.toUpperCase()
            const postDate = postData.date
            const postUrl = postData.url

            // Card markup for posts
            let postCardMarkup = `
                <div class="post-card card p-2 pb-3 d-flex gap-2 col">
                <img class="post-card-pin" src="img/pin.svg" alt="">
                <img class="post-card-image" src="${postUrl}" alt="Post photo ${postId}">
                <p class="post-card-date">${postDate}</p>
                <p class="post-card-title">${postTitle}</p>
                </div>
                `

            // It adds the postcard markup to posts container
            postsContainer.innerHTML += postCardMarkup
        }

    })
    // It logs errors in Api fetching
    .catch(err => console.error(err))