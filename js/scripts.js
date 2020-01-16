$(function() {
    $("#userForm").submit(function(event) {
        event.preventDefault();
        let userInput = $("#userInput").val();
        console.log(userInput);
    })
});
