import express from "express";
import fs from "fs";


const app = express();


app.get("/home", (req, res) => {
  const html= fs.readFileSync("./index.html","utf8");
  console.log(html);
  res.send(html);
});

app.listen(8000, () => {
  console.log("Server is Running....");
});