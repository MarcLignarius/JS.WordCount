$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput")
      .val()
      .toLowerCase()
      .replace(/[\.,-\/#!$%"\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
    var inputArray = inputToArray(userInput);
    var wordCount = countWords(inputArray);
    var sortedCount = sortByCount(wordCount);
    var result = displayResults(sortedCount);
  });

  function inputToArray(userInput) {
    var inputArray = userInput.split(/\s+/);
    return inputArray;
  }

  function countWords(inputArray) {
    var wordCount = {};
    inputArray.forEach(function(key) {
      if (wordCount.hasOwnProperty(key)) {
        wordCount[key]++;
      } else {
        wordCount[key] = 1;
      }
    });
    return wordCount;
  }

  function sortByCount(wordCount) {
    var sortedCount = [];
    sortedCount = Object.keys(wordCount).map(function(key) {
      return {
        name: key,
        total: wordCount[key]
      };
    });
    sortedCount.sort(function(a, b) {
      return b.total - a.total;
    });
    return sortedCount;
  }

  function displayResults(sortedCount) {
    var output = "<ul>";
    sortedCount.forEach(function(word) {
      output += "<li>" + word.name + ": " + word.total + "</li>";
    });
  output += "</ul>";
  document.getElementById("output").innerHTML = output;
  return output;
  }
});
