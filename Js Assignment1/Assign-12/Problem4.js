// Create an array of movies and actors
let moviesAndActors = [
    { movie: "Inception", actors: ["Leonardo DiCaprio", "Ellen Page"] },
    { movie: "Animal", actors: ["Ranbir kapoor", "Rashmika mandanana"] },
    { movie: "12th fail", actors: ["Vikrant Messey",] }
];

// Print all the movie names with actors
moviesAndActors.forEach(movie => {
    console.log("Movie: " + movie.movie);
    console.log("Actors: " + movie.actors.join(", "));
    console.log(""); // Empty line for separation
});
