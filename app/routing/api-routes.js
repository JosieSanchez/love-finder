// ===============================================================================
// LOAD DATA // We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var lovers = require("../data/lovers.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

// API GET Requests // Below code handles when users "visit" a page. // In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
           
  app.get("/api/lovers", function(req, res) {
    res.json(lovers);
  });

// app.get("/api/waitlist", function(req, res) {
//   res.json(waitListData);
// });

//-------------------------------------------------------------------------------------------------------------
// API POST Requests  // Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// -------------------------------------------------------------------------------------------------------------

  app.post("/api/lovers", function(req, res) {

      var bestLover = {
        name: "",
        photo: "",
        loverDifference: 1000
      };

      console.log(req.body);

      var userData = req.body;
      var userScores = userData.scores;

      console.log(userScores);

      var totalDifference = 0; //calulates the difference for each 

      for (var i = 0; i < lovers.length; i++) {

        console.log(lovers[i]);
        totalDifference = 0;

      for (var j = 0; j < lovers[i].scores[j]; j++)
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(lovers[i].scores[j]));

      if (totalDifference <= bestLover.loverDifference) {

        bestLover.name = lovers[i].name;
        bestLover.photo = lovers[i].photo;
        bestLover.loverDifference = totalDifference;
        }
      }
    }

    lovers.push(userData);
    res.json(bestLover);
   

    
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    loversData = [];
    //Data
    // waitListData = [];

    console.log(lovers);
  });




