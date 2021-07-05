// using http core module
const http = require("http");

const express = require("express");
const { response, request } = require("express");
const app = express();

users = ["sky", " tom", "hi"];

app.get("/", (request, response) => {
  response.end("<h1> skyler home  </h1>");
});

app.get("/user", (req, res) => {
  res.end(`<h1> here are the people ${user} </h1>`);
});

app.get("/user/:id", (req, res) => {
  const userName = users[req.params.id - 1];
  res.end(`<h1> ${userName} </h1>`);
});

app.get("*", (req, res) => {
  res.end(`<h1>Page Not Available 404 </h1>`);
});

// let server = http.createServer((request, response) => {
//   //console.log(request.url);
//   //response.end(`<h1> Hello world</h1>`);

//   if (request.url === "/") {
//     response.end("<h1> hi </h1>");
//   } else if (request.url === "/users") {
//     response.end("<h1>" + users + "</h1>");
//   } else if (request.url.split("/")[1] === "users") {
//     let userIdx = request.url.split("/")[2];
//     let userName = users[userIdx - 1];
//     response.end("<h1>" + userName + "</h1>");
//   } else {
//     response.end("<h1> Page Not Avaialbe 404 <h1>");
//   }
// });

app.listen(3000);
