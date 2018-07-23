process.env.UV_THREADPOOL_SIZE = 1; // EVERY CHILD IN OUR CLUSTER HAS ONLY ONE THREAD AVAILABLE
const cluster = require("cluster");

// Is the file executed in master mode ?
if (cluster.isMaster) {
  // Cause index.js to be executed again, but in child mode
  cluster.fork();
} else {
  //I am a child, I am going to act as a normal web server
  const crypto = require("crypto");
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi there!");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast!");
  });

  app.listen(3000);
}
