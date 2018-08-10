"use strict";


const { google } = require('googleapis');
//const functions = require('firebase-functions');
//const { WebhookClient } = require('dialogflow-fulfillment');
//const { Card, Suggestion } = require('dialogflow-fulfillment');
//process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
let sdata = 'Beginning5';

//var jwt = getJwt();
//var apiKey = getApiKey();
var spreadsheetId = '1y2N9oaj5lYujcR6VaYh3nFI_wxRngRZeAdSnjT3p07o';
var range = 'Sheet1!A2:E98';

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
