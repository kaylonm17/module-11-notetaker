// Define an array to hold the notes
let notes = [];

// Get the DOM elements we will need
const notesList = document.getElementById("notesList");
const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const saveButton = document.getElementById("saveButton");

// Add an event listener to the save button
saveButton.addEventListener("click", function() {
  // Create a new note object
  const newNote = {
    title: noteTitle.value,
    text: noteText.value
  };
  // Add the new note to the notes array
  notes.push(newNote);
  // Clear the input fields
  noteTitle.value = "";
  noteText.value = "";
  // Update the notes list
  updateNotesList();
});

// Function to update the notes list
function updateNotesList() {
  // Clear the existing notes from the list
  notesList.innerHTML = "";
  // Loop through the notes array and add each note to the list
  notes.forEach(function(note) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = note.title;
    a.href = "#";
    a.addEventListener("click", function() {
      // Display the selected note in the text area
      noteTitle.value = note.title;
      noteText.value = note.text;
    });
    li.appendChild(a);
    notesList.appendChild(li);
  });
}

// Call the updateNotesList function to initialize the notes list
updateNotesList();
