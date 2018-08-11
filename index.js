"use strict";

//const {google} = require('googleapis');
//const functions = require('firebase-functions');
//const { WebhookClient } = require('dialogflow-fulfillment');
//const { Card, Suggestion } = require('dialogflow-fulfillment');
//process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
let sdata = 'Beginning5';

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

//const agent = new WebhookClient({ request, response });
//var jwt = getJwt();
var apiKey = getApiKey();
var spreadsheetId = '1y2N9oaj5lYujcR6VaYh3nFI_wxRngRZeAdSnjT3p07o';
var range = 'Sheet1!A2:E98';

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/*function getJwt()
{
    var credentials = require("./credentials.json");
    return new google.auth.JWT(
        credentials.client_email, null, credentials.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
}*/

function getApiKey()
{
    var apiKeyFile = require("./api_key.json");
    return apiKeyFile.key;
} 

/*function FindSchedule(jwt, apiKey, ssid, rangev)
{
    sdata= 'Function called5';
    const sheets = google.sheets({ version: 'v4' });
    sheets.spreadsheets.values.get({
        //sdata : 'Function called3',
        spreadsheetId: ssid,
        range: rangev,
        auth: jwt,
        key: apiKey
        //valueInputOption: 'RAW',
        //resource: { values: [row] }
    },
        function (err, result) {
            //sdata = 'inner function called';
            if (err) {
                //throw err;
                sdata = 'Error2';
            }
            else {
                sdata = 'else part';
                const rows = result.data.values;
                //console.log('Updated sheet: ' + result.data.updates.updatedRange);
                if (rows.length) {
                    //console.log('Name, Major:');
                    // Print columns A and C, which correspond to indices 0 and 4.
                    rows.map((row) => {
                        //console.log(`${row[0]}, ${row[1]}, ${row[2]}`);

                        if (row[0] == 'Happiness program') {
                            var currdate = new Date();
                            sdata = new Date(row[3]).toString(); //currdate.toString();
                            //if (currdate.getDate() <= row[2])
                            //if (currdate.compareTo(new Date(row[2])) == -1)
                            //{
                            //   sdata = row[4];
                            return;
                            //}                                
                        }
                    });
                }
                else {
                    //console.log('No data found.');
                    sdata = 'No data found';
                }
            }
            //return celldata;
        });
} */

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
