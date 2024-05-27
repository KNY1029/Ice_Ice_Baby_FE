const express = require('express');
const app = express();
const port = 8000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('templete', {나연이:"메롱",너구리:"바보"});
});

app.listen(port, () => {
  console.log("port: " + port);
});