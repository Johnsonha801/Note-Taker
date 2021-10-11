const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

// Create new note
function createNote(note, notes) {
    // add a unique id to the new note
    note.id = uniqid();

    // add new note to notes array
    notes.push(note);

    // update db.json with new notes array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notes}, null, 2)
    );

    // return the newly created note
    return note;
}

// Delete note by ID
function deleteNoteById(note, notesArray) {
    // Filter our note with the corresponding noteId
    const result = notesArray.filter(n => n.id !== note);
    
    // update the db.json file with new filtered notes array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: result}, null, 2)
    );

    // return filtered notes array
    return result;
}

module.exports = {
    createNote,
    deleteNoteById
}