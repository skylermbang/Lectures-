const router = require('express').Router()
const passport = require('passport')



//auth login

router.get('/login', (req, res) => {
    res.render('login')
})

// auth with google 
router.get('/logout', (req, res) => {
    //handle with passport
    res.send('logging out')
})


router.get('/google', passport.authenticate('google', {
    scope: ["profile"]
}))


//callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
    res.send('you fucking reached here bitch ')
})
module.exports = router
