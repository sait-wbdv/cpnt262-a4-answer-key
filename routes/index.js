const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.render('pages/index',{pageTitle: "Home Page"})
})

router.get('/login', (request, response) => {
  response.render('pages/login',{pageTitle: "Login"})
})

router.get('/register', (request, response) => {
  response.render('pages/register',{pageTitle: "Register"})
})

module.exports = router;