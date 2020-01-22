$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput")
      .val()
      .toLowerCase()
      .replace(/[\.,-\/#!$%"\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
    console.log("userInput", userInput);
    let wordArray = userInput.split(" ");
    console.log("wordArray", wordArray);
  });
});
