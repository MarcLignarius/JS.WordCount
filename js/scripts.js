$(function() {
    $("#userForm").submit(function(event) {
        event.preventDefault();
        let userInput = $("#userInput").val().toLowerCase().replace(/[\.,-\/#!$%"\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");;
        console.log("userInput", userInput);
        let splitInput = userInput.split(" ");
        console.log("splitInput", splitInput);
    })
});
