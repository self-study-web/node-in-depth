const cluster = require("cluster");

// Is the file executed in master mode ?
if (cluster.isMaster) {
  // Cause index.js to be executed again, but in child mode
  cluster.fork();
  //   cluster.fork();
  //   cluster.fork();
  //   cluster.fork();
} else {
  //I am a child, I am going to act as a normal web server
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    doWork(5000);
    res.send("Hi there!");
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast!");
  });

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.listen(3000);
}
