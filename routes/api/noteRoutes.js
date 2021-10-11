const router = require('express').Router();
let notesArray = require('../../db/db.json');
const { createNote, deleteNoteById } = require('../../lib/notes');

// Return Notes
router.get('/notes', (req, res) => {
    res.send(notesArray.notes);
});

// Post a new note
router.post('/notes', (req, res) => {
    // Create a new note using the request body
    const newNote = createNote(req.body, notesArray.notes);
    // send the new note back
    res.send(newNote);
});

// Delete Note
router.delete('/notes/:id', (req, res) => {
    // Get the note ID from the request params
    let noteId = req.params.id;

    // Delete the note from the notesArray
    const result = deleteNoteById(noteId, notesArray.notes);

    // Delete the required json notes reference and require again for updated data
    delete require.cache[require.resolve('../../db/db.json')];
    notesArray = require('../../db/db.json');
    
    // Check if the result contains any data
    if (result) {
        // send the new notesArray
        res.send(notesArray);
    } else {
        // Send back a bad 404 error
        res.send(404);
    }
});

module.exports = router;