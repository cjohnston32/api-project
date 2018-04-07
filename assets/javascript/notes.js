
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBSfhdHajYVtDwsb1krQ8q4-Jk-UTi0XOU",
  authDomain: "project1-b466b.firebaseapp.com",
  databaseURL: "https://project1-b466b.firebaseio.com",
  projectId: "project1-b466b",
  storageBucket: "project1-b466b.appspot.com",
  messagingSenderId: "488252617686"
};
firebase.initializeApp(config);

// Variable to Reference Database
var database = firebase.database();

// Add Note Button Click
$("#add-note").on("click", function(event){
  event.preventDefault();

  //Grabs inputs:

  var userSubject = $("#subject-input").val().trim();
  var userNote = $("#notes-input").val().trim();

  // Temporary file for holding
  
  var newNote = {
    subject: userSubject,
    note: userNote
  };
 
  // Upload to Database
  database.ref().push(newNote);

  // Logs everything to console
  console.log(newNote.subject);
  console.log(newNote.note);

  // Clear all of the text-boxes
  $("#subject-input").val("");
  $("#notes-input").val("");

});

// Child Add to Firebase 
database.ref().on("child_added", function(childSnapshot, prevChildKey){

  console.log(childSnapshot.val());

  // Variable Storage

  var userSubject = childSnapshot.val().subject;
  var userNote = childSnapshot.val().note;
  // var $input = $('<input type="button" value="delete" />');
 
  // Add notes
  
  $("#notes-table > tbody").append("<tr id='comment'><td>" + userSubject + "</td><td>" + userNote + "</td><td>" + "<input type='button' value='Delete' />" + "</td></tr>" );

  
  $(document).on("click", "#comment", function() {

    console.log("click");
  
    // Grabs text from li choice
    var clickChoice = $(this).text();
    console.log(clickChoice);
  
    // // Sets the choice in the current player object in firebase
    // playerRef.child("choice").set(clickChoice);
  
    // onclick = function () {
    //   document.getElementById('comment').remove(clickChoice);
      
           
    // };
    // // User has chosen, so removes choices and displays what they chose
    // $(clickChoice).empty();
    // $("#player" + playerNum + "chosen").text(clickChoice);
  
    // // Increments turn. Turn goes from:
    // // 1 - player 1
    // // 2 - player 2
    // // 3 - determine winner
    // currentTurnRef.transaction(function(turn) {
    //   return turn + 1;
    // });
  });

        // need to create a unqiue id b/c currently deleting in order
});

