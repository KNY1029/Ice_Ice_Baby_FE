const express = require('express');
const app = express();
const port = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('test', {title: "메인페이지", code: "success"});
});

app.listen(port, () => {
  console.log("port: " + port);
});