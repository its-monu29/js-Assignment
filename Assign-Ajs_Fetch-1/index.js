//api_key: 7b890416
//url: https://www.omdbapi.com/?s=karan&apikey=7b890416


async function searchMovie(title){
    let res = await fetch("https://www.omdbapi.com/?s="+title+"&apikey=7b890416")
    let data = await res.json()
    return data.Search
}

let movieContainer = document.getElementById("searchResult")

function showMovies(movies){
  movieContainer.innerHTML = ""
  if(movies){
       movieContainer.style.display = "block"
       console.log(movies)
       movies.forEach(function(ele, index){
          let movieCard = document.createElement("div")

          movieCard.onclick = function(){
              showParticularMovie(ele)
          }
          
          let moviePhoto = document.createElement("img")
          moviePhoto.src = ele.Poster

          let movieTitle = document.createElement("p")
          movieTitle.innerText = ele.Title.slice(0,10)

          movieCard.append(moviePhoto, movieTitle)

          movieContainer.append(movieCard)

       })
  }
  else{
      movieContainer.style.display = "none"
  }

}


async function searchFun(){

  let value = document.getElementById("search").value 

  let data = await searchMovie(value)
  showMovies(data)
}

let movieDetailsContainer = document.getElementById("movieDetails")

function showMovie(data){
   console.log(data)
   movieDetailsContainer.innerHTML = null
   let movieCard = document.createElement("div")

  let movieImage  = document.createElement("img")

  movieImage.src = data.Poster

  let movieTitle  = document.createElement("p")

  movieTitle.innerText = data.Title

  let movieActors  = document.createElement("p")

  movieActors.innerText = data.Actors

  movieCard.append(movieImage, movieTitle, movieActors)

  movieDetailsContainer.append(movieCard)

}

async function showParticularMovie(movie){
  movieContainer.style.display = "none"
     //console.log(movie)
     //imdbID
    
     let response = await fetch("https://www.omdbapi.com/?i="+movie.imdbID+"&apikey=7b890416")
     let data = await response.json()
     showMovie(data)
     
}