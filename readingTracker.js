// Weekly reading log that represents daily reading entries in the array. 
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];
// Every object stores the following in order: Day of the Week, Title of book, Time spent on reading.

// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) { //If the book is a new entry start at 1
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++; //Increase by one if not a new entry. 
    }
  }
//Calculations needed for the calculation of the post popular read book 
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }

  // This updates the most frequently read book ^
  return maxBook; //This outputs teh most frequently read book 
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage with an example output, which helps us debug if needed. 
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog)); //This plays to the user the total minutes read
console.log("Most read book:", mostReadBook(readingLog)); //This plays to the user the most popular read book 
