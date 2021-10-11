const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

// Parse incoming data before sending through to routes
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// statically point express to the public folder 
app.use(express.static('public'));

// direct app to use the following files for api and html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Forward all unknown routes to landing page route '/'
app.all('*', function(req, res) {
    res.redirect("/");
});

// start app on necessary PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});