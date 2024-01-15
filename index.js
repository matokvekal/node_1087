import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { join } from "path";
let app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //for html files Forms
////////////////////PART 1////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //for html files Forms

//GET1
// app.get("/", (req, res) => {
//   res.send("Hello World.");
// });

//POST 1
app.post("/", (req, res) => {
  console.log("POST request");
  let data = req.body;
  console.log(data);
  res.send(JSON.stringify("Hello World from post."));
});

///////////part 2/////////////////

//GET2 Form
app.get("/", (req, res) => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const formPath = join(currentFilePath, "..", "./public/form.html");
  res.sendFile(formPath);
});

//post2 Form
// app.post("/", async (req, res) => {
//   let data = req.body;
//   console.log(data);
// if(data?.name){
//   res.send(JSON.stringify(`${data?.name} Thanks for sending Form`));
// }else{

//   res.redirect("/");
// }

// });

const server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log("listening on port 3000");
});
