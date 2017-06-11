var lovers = require ("../data/lovers.js");
module.exports = function(app) {

app.get("/api/lovers", function(req, res) {
  res.json(lovers);
});

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
      
      for (var j = 0; j < lovers[i].scores[j]; j++) {
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
   
});
};




