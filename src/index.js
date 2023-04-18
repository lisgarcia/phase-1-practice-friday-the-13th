// 1 target elements using query selector
//2 identify them
//3 populate them with content

fetch("http://localhost:3000/movies") //endpoint
    .then(resp => resp.json()) //from JSON to JS 
    .then((data)=>console.log(data))
asdf
// // challenge #1- create an image and add it to the movie list nav element (in dom)
// //create dom elements
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

// //append parentList and movieCard

//     movieCard.append(img, title, release_year, description, button)
//     parentList.append(movieCard)

// function renderCard(movies) //callback funciton


// // challenge 2-as soon as the page loads, see FIRST movie in the dataset


// //challenge 3- when you click on movie image in top nav, should populate detail area with: 
//     // movie card:
//         // -image, 
//         // -title, 
//         // -release_year, 
//         // -description, 
//         // -watched 
//             //(challenge 4: if value of watched =false, then button should say "unwatched")
//         // -blood_amount

// //btn.addEventListener("click", (added to console log(event))=> console.log ("clicked"))
//     //console.log (event.target.parentNode)
//     // to delete here: event.target.parentNode.remove()) ==this one is more performance heavy, derives info looking at event
//         //or target LI as well
//         //btn.addEventListener("click", () => li.remove()) ==


// //challenge 5-On the right side, there is a form that allows user to enter blood drops to each movie. 
//     //blood amount value should stay the same when you click between different movies

//     //movies: [] movie list in array, 12 movies/ids