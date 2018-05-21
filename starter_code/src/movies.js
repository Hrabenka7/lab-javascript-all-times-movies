
// ############################################## Get the average of all rates with 2 decimals  ######################################################## //

function ratesAverage(movies){
  var sumRates = movies.reduce(function(sum, movie){
    var temp = parseFloat(movie.rate); //switch String to float
    return sum + temp;
  }, 0);

  return Math.floor((sumRates/movies.length)*100)/100;
}

ratesAverage(movies);



// ############################################### Get the average of Drama Movies #################################################################### //

function makeDramaArray(movies) {
  var drama = [];
  movies.filter(function (movie) {
    if (movie.genre.includes("Drama")) {     
      drama.push(movie);
    }
  });
 return drama; 
}

var drama = makeDramaArray(movies);

function dramaMoviesRate(drama) {
  var dramaAverage = ratesAverage(drama);
  console.log("The average drama movies rate is " + dramaAverage);
}


// ############################################### How many movies did STEVEN SPIELBERG ######################################################### //

function howManyMovies(moviesGendreArray) {
  var dramaSteven = [];
  moviesGendreArray.filter(function(movieGendreElement) {
    if (movieGendreElement.director == "Steven Spielberg"){
      dramaSteven.push(movieGendreElement);
    }
  }); 
  return dramaSteven;
}

 howManyMovies(drama);


//  ############################################### Order by title and print the first 20 titles ######################################################### //


function compareTitles(object1, object2) {   // this sets the comparision rule
  if (object1.title < object2.title)
    return -1;
  if (object1.title > object2.title)   
   return 1;
  return 0;
}

function orderAlphabetically(movies,compareTitles) {   // this sorts the array alphabetically
   return movies.sort(compareTitles);
 }

 var orderedMovies = orderAlphabetically(movies,compareTitles);

function printFirstTwenty(orderedMovies){
   var movies20 = [];
   for(var i = 0; i < 20; i++){
     movies20.push(orderedMovies[i]);
   } return movies20
 }

printFirstTwenty(orderedMovies);

