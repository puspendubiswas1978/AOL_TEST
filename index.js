"use strict";



const express = require("express");
const bodyParser = require("body-parser");

const restService = express();


restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);


restService.use(bodyParser.json());

restService.post("/happy", function(req, res)
{
  var speech = "Next week in Delhi";
  // FindSchedule(jwt, apiKey, spreadsheetId, range);
  //speech = sdata;
  return res.json(
  {
    fulfillmentText: speech,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
