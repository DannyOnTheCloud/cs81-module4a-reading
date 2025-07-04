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
/* The purpose of this function is to add reading entries to the reading log. The inputs it uses are day, book, and minutes. The outputs it produces is updates to the global reading Log array
with the new entry.*/
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
/* This function calculates the total numbers read from the reading log. The input it uses are objects that have a 'minutes' field. The output it returns are the total of all
minutes across the entries to calculate the total amount of reading done in the week*/
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
/* The function mostReadBook (log) identifies the book with the most entries in the reading log. The input it receives is the total entries of each book. The output is it 
return the name of the most read book.*/
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
  return maxBook; //This outputs the most frequently read book 
}

// Prints a summary of minutes read per day
/* This function prints out the minutes and amounts of entry of each daily reading log. The input is the day, minutes, and book. The output is reading activity
for each day*/
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`); // An improvement could be done here by entering the following
    console.log (""); //What this does is ads space between each entry to enhance readability. 
  }
}

// Example usage with an example output, which helps us debug if needed. 
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
printDailySummary([{ day: "Sunday", minutes:30, book:"The Old Testament"}]); //This will display a new entry for Sunday, which is a day in the week that is not listed. 
console.log("Total minutes read:", totalReadingMinutes(readingLog)); //This plays to the user the total minutes read
console.log("Most read book:", mostReadBook(readingLog)); //This plays to the user the most popular read book 
