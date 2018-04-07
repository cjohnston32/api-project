
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

<<<<<<< HEAD
=======
  console.log(childSnapshot.val());

>>>>>>> 00d9b9157a29baf0b95e974a8b4704ad2ca1530e
  // Variable Storage

  var userSubject = childSnapshot.val().subject;
  var userNote = childSnapshot.val().note;

  // Add notes
<<<<<<< HEAD
    $("#notes-table > tbody").append("<tr id='comment'><td>" + userSubject + "</td><td>" + userNote + "</td></tr>" );


});
=======
  $("#notes-table > tbody").append("<tr><td>" + userSubject + "</td><td>" + userNote + "</td></tr>");

});

>>>>>>> 00d9b9157a29baf0b95e974a8b4704ad2ca1530e
