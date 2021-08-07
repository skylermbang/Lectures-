const express = require('express');
const authRoutes = require('./routes/auth');
const passportSetup = require('./config/passport.setup')

const app = express();

// set view engine
app.set('view engine', 'ejs');


// create home route
app.get('/', (req, res) => {
    res.render('home');
});


// set up routes
app.use('/auth', authRoutes);


app.listen(8080, () => {
    console.log('app now listening for requests on port 8080');
});