// 1 target elements using query selector
//2 identify them
//3 populate them with content

//0.
const movieList=document.querySelector("nav#movie-list")
let movieArr
let currentMovie // start from instructions

//lab time work
function getMovies () {
    return fetch("http://localhost:3000/movies") //endpoint
        .then(resp => resp.json()) //from JSON to JS 
        //.then((movieData)=>console.log(movieData))
        .then (movies => {
            movieArr=movies
            currentMovie=movieArr[0]

             movieArr.map(movie => {
                createImages(movie)
            })
        
                movieDetail(currentMovie) //invoking the movie detail fx here
        })
                    } 


// function addImgToNav (movie){
//      0. select the nav element
//     1. create an Element
//     2. assign the movie img src
//     3. append the img to the nav element

function createImages(movie) {
    const movieImg = document.createElement("img") // 1.

    movieImg.src=movie.image  // 2.
    movieImg.alt= movie.title

    movieList.append(movieImg)  //3.

    movieImg.addEventListener("click", () => movieDetail(movie))
}

const imgDetail=document.querySelector("#movie-info #detail-image")
const title=document.querySelector("#movie-info #title")
const year =document.querySelector("#movie-info #year-released")
const description=document.querySelector("#movie-info #description")
const watched=document.querySelector("#movie-info #watched")
const blood= document.querySelector("#movie-info #amount")

// 1. select the Elements
// 2. add the value using the data
const movieDetail = (movie) => {
    console.log(movie)
    imgDetail.src=movie.image
    title.textContent=movie.title
    year.textContent=movie.release_year
    description.textContent=movie.description
    watched.textContent=movie.watched? "Watched" : "Unwatched"
    blood.textContent=movie.blood_amount

    watched.addEventListener("click", () => {
         movie.watched = !movie.watched
         watched.textContent = movie.watched? "Watched" : "Unwatched" 
        console.log("clicked")})

}

//BLOOD
//1. select the element
// 2. grab the blood amt from the form
// 3. add the blood amount

const bloodForm=document.querySelector('#blood-form')
const bloodAmount=document.querySelector('#blood-amount')

function getBloodAmount() {
    bloodAmount.addEventListener("change", (e) => {
        submitForm(e.target.value)
    })    //input tag blood amount. 
}

function submitForm(bloodAmount) {
    bloodForm.addEventListener("submit", (e) => {
        e.preventDefault()
        currentMovie.blood_amount += Number (bloodAmount)
        blood.textContent = currentMovie.blood_amount
        e.target["blood-amount"].value=" "
    })
}


// //if you want to use a patch request, you'd add here
// // fetch(url, { 
//     method: 'PATCH',
//     headers: {
//             'content-type': 'application/json.',
//     }
//         body: JSON
// }
// }
//my work
// function fetchRequest (url) {
//     fetch(url) //endpoint
//         .then(resp => resp.json()) //from JSON to JS 
//         //.then((movieData)=>console.log(movieData))
//         .then (movies =>
//             movies.forEach(film => createImages(film.image, film.id)))
// } 
// fetchRequest("http://localhost:3000/movies")


// }





//     movies.forEach(movie)
// }



// challenge #1- create an image and add it to the movie list nav element (in dom)
//create dom elements

// const parentList = document.querySelector('#movie-info') 
 
// const movieCard=document.createElement('li')
//     const img= document.createElement('img')
//     const title=document.createElement('title')
//     const release_year=document.createElement('release_year')
//     const description= document.createElement('description')
//     const button=document.createElement('button')
//  //populate dom elements
// img.src=movies.imageURL
// title.textContent=movies.title
// release_year.textContent=movies.release_year
// description.textContent=movies.description

// // //append parentList and movieCard

// //     movieCard.append(img, title, release_year, description, button)
// //     parentList.append(movieCard)

// // function renderCard(movies) //callback funciton


// // // challenge 2-as soon as the page loads, see FIRST movie in the dataset


// // //challenge 3- when you click on movie image in top nav, should populate detail area with: 
// //     // movie card:
// //         // -image, 
// //         // -title, 
// //         // -release_year, 
// //         // -description, 
// //         // -watched 
// //             //(challenge 4: if value of watched =false, then button should say "unwatched")
// //         // -blood_amount

// // //btn.addEventListener("click", (added to console log(event))=> console.log ("clicked"))
// //     //console.log (event.target.parentNode)
// //     // to delete here: event.target.parentNode.remove()) ==this one is more performance heavy, derives info looking at event
// //         //or target LI as well
// //         //btn.addEventListener("click", () => li.remove()) ==


// // //challenge 5-On the right side, there is a form that allows user to enter blood drops to each movie. 
// //     //blood amount value should stay the same when you click between different movies

// //     //movies: [] movie list in array, 12 movies/ids

getMovies()
getBloodAmount()