const path = require('path');
const express = require('express');
const app = express();
const index = require(`./routes/index`);

app.set('view engine', `ejs`)
// runs first

app.use(express.static(path.join(__dirname, './public')));

app.use('/', index);

app.use(function (request, response) {
  response.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`listen on port: ${PORT}`);

})