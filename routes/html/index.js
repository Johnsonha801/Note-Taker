const router = require('express').Router();
const path = require('path');

// Serve index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

// Serve notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


module.exports = router;