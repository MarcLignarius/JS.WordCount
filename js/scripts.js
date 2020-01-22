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
    for (i=0; i < wordArray.length; i++) {
      let word = wordArray[i];
      if (!countedWords[word]) {
        countedWords[word] = 1;
      } else {
        countedWords[word]++;
      }
    }
    console.log("countedWords", countedWords);
    let result = JSON.stringify(countedWords, null, 4);
    console.log("result", result);
    $("#output").text(result);
  });
});
