$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput")
      .val()
      .toLowerCase()
      .replace(/[\.,-\/#!$%"\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
    console.log("userInput", userInput);
    let wordArray = [];
    wordArray.push(userInput.split(" "));
    console.log("wordArray", wordArray);
  });
});
