// VARIABLES

// DOM selectors declaration
const header = document.querySelector('#header')
const main = document.querySelector('#main')
const footer = document.querySelector('#footer')
const postsContainer = document.querySelector('#postsContainer')
const photoOverlay = document.querySelector('#photoOverlay')
const overlayButton = document.querySelector('#overlayButton')

// Api fetching variables declaration
const postsFetchUrl = 'https://lanciweb.github.io/demo/api/pictures/'
let postData = null
let postId = null
let postTitle = null
let postDate = null
let postUrl = null

// FUNCTIONS

/**
 * Function that generates cards upon data collected by AJAX calls
 * @constructor
 * @param {string} url // Url for fetch method to get data from 
 * @param {string} container // Container where posts cards need to be entered 
 */
function addCardsToContainerFromApi(url, container) {
    // API call to fetch all posts and enter them in a variable
    fetch(url)

        // It converts data in json when fetched
        .then(response => response.json())

        // It executes arrow function when data is converted in json format
        .then(data => {

            // It iterates for every element in data fetched
            for (let i = 0; i < data.length; i++) {
                // Api fetching variables assignments
                postData = data[i]
                postId = postData.id
                postTitle = postData.title.toUpperCase()
                postDate = postData.date
                postUrl = postData.url

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
                container.innerHTML += postCardMarkup
            }

            // Variable selector for newly created post cards
            const postcardImageAll = document.querySelectorAll('.post-card-image')

            // Remove d-none to overlay to make it appear on card image click
            postcardImageAll.forEach(postcard => {
                postcard.addEventListener('click', () => {
                    photoOverlay.classList.remove('d-none')
                })
            })   

            // Add d-none class to overlay when clicking overlay button
            overlayButton.addEventListener('click', () => {
                photoOverlay.classList.add('d-none')
            })
    })

    // It logs errors in api fetching
    .catch(err => console.error(err))
}

// MAIN

addCardsToContainerFromApi(postsFetchUrl, postsContainer)