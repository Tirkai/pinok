#!/usr/bin/env node
const request = require("request");

const r = request("http://tirkai.ru:8080/hook");

r.write("");

console.log("pinok");
