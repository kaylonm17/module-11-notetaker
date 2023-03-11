const saveIcon = document.querySelector("#save");
saveIcon.addEventListener("click", function() {
  // Get the values of the note title and text fields
  const noteTitle = document.querySelector("#note-title").value;
  const noteText = document.querySelector("#note-text").value;

  // Create a new note object
  const newNote = {
    title: noteTitle,
    text: noteText
  };

  // Add the new note to the list of notes
  notes.push(newNote);

  // Save the notes to local storage
  saveNotes();

  // Update the list of notes in the left-hand column
  updateNotesList();

  // Clear the note title and text fields
  document.querySelector("#note-title").value = "";
  document.querySelector("#note-text").value = "";
});