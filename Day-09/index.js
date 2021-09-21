const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "public/data.txt"),"text.txt");
  // res.download(path.join(__dirname,'public/data.txt'),'hello.txt');
  res.render("index", { title: "Express" });
});

app.listen(5001);