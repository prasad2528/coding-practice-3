const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  const dateTime = new Date();
  let res = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );
  response.send(`${res.getDate()}/${res.getMonth() + 1}/${res.getFullYear()}`);
});
module.exports = app;
