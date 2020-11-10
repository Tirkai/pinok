#!/usr/bin/env node
const request = require("request");

const r = request("http://localhost:7000/hook");

r.write("");

console.log("pinok")