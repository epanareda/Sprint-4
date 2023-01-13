// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(movie => movie.director);
  
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(movie => movie.director === director);
  
  // console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
// First of all, a function to calculate the average of any movies array is declared, as it's said in the excercice. And so it can be used in exercise 6 too.
function moviesAverage(array) {
  const result = array.reduce((average, movie, index, arr) => {return average + (movie.score / arr.length);}, 0);
  
  // console.log(Math.round(result*100)/100);
  return Math.round(result*100)/100;
}

function moviesAverageOfDirector(array, director) {
  const result = moviesAverage(getMoviesFromDirector(array, director));
  
  // console.log(result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const result = array.map(movie => movie.title).sort().filter((title, index) => index < 20);
  
  // console.log(result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = [...array].sort((movie1, movie2) => {
    if(movie1.year === movie2.year) {
      if([movie1.title, movie2.title].sort()[0] === movie1.title) {
        return -1;
      }
      return 1;
    }
    return movie1.year - movie2.year;
  });

  // console.log(result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const result = moviesAverage(array.filter(movie => movie.genre.includes(category) && typeof(movie.score) == "number"));
  
  // console.log(result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map(movie => ({...movie, 
    duration: movie.duration.replace(/(min)|( )/g, "").split("h").reduce((total, hours_mins, index) => {
      if(index === 0) {
        return total + Number(hours_mins)*60;
      }
      return total + Number(hours_mins);
    }, 0)
  }));

  // console.log(result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const result = array.filter(movie => movie.year === year).reduce((best, movie) => {
    if(best === undefined) {
      return movie;
    }
    if(best.score < movie.score) {
      return movie;
    }
    return best;
  }, undefined);

  // console.log([result]);
  return [result];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
