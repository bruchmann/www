"use strict";
const http = require("http");
const path = require("path");

const express = require("express");

const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
server.listen(port, host);
