$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput")
      .val()
      .toLowerCase()
      .replace(/[\.,-\/#!$%"\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
    console.log("userInput", userInput);
    let wordArray = userInput.split(/\s+/);
    console.log("wordArray", wordArray);
    let countedWords = {};
    wordArray.forEach(function(key) {
      if (countedWords.hasOwnProperty(key)) {
        countedWords[key]++;
      } else {
        countedWords[key] = 1;
      }
      return countedWords;
    })
    console.log("countedWords", countedWords);
    let result = JSON.stringify(countedWords, null, 4);
    console.log("result", result);
    $("#output").text(result);
  });
});
