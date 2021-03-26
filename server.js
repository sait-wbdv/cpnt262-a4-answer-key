const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', `ejs`)
// runs first

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function (request, response) {

  response.send('<h1>Hello World!!</h1>');

});



app.use(function (request, response) {
  response.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`listen on port: ${PORT}`);

})