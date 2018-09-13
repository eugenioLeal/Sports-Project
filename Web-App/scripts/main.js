//----------------------------//
//-- If Document is Ready   --//
//----------------------------//
$(function(){
    //----------------//
    //-- Variables  --//
    //----------------//
    var date, day, month, year, currentDate; // dates
    var nflCheckbox, nbaCheckbox; // html checkboxes
    var feedName, sport, season, seasonFilter; // api url builder

    //--------------------//
    //-- Handling Dates --//
    //--------------------//
    // Get the Current Date ( please comment/uncomment if necessary)
    // date = new Date();
    // month = date.getUTCMonth() + 1;

    // Testing with a custom date ( please comment/uncomment if necessary)
    date = new Date(2017, 9, 24);

    // Filling date variables
    day = date.getUTCDate();
    month = date.getUTCMonth();
    year = date.getFullYear();
    // Inserting a zero if values ar less than 10
    day = insertZero(day);
    month = insertZero(month);
    // Creating the current date
    currentDate = year + '-' + month + '-' + day;
    document.getElementById("currentDate").innerHTML = "Date: " + year + '-' + month + '-' + day;

    //----------------//
    //-- Checkboxes --//
    //----------------//
    nflCheckbox = document.getElementById('nfl-checkbox');
    nflCheckbox.addEventListener('change', function(eventVariable) {
      if( eventVariable.target.checked ) {
        console.log("get NFL data");
      } else {
        console.log("ignore NFL data");
      }
    });

    nbaCheckbox = document.getElementById('nba-checkbox');
    nbaCheckbox.addEventListener('change', function(eventVariable) {
      if( eventVariable.target.checked ) {
        console.log("get the NBA data");
      } else {
        console.log("ignore NBA data");
      }
    });

    nhlCheckbox = document.getElementById('nhl-checkbox');
    nhlCheckbox.addEventListener('change', function(eventVariable) {
      if( eventVariable.target.checked ) {
        console.log("get NHL data");
      } else {
        console.log("ignore NHL data");
      }
    });

    mlbCheckbox = document.getElementById('mlb-checkbox');
    mlbCheckbox.addEventListener('change', function(eventVariable) {
      if( eventVariable.target.checked ) {
        console.log("get mlb data");
      } else {
        console.log("ignore mlb data");
      }
    });

    // Creating path to json file
    feedName = "full_game_schedule";
    sport = "nfl";
    season = "regular"; // or season = "playoffs";
    seasonFilter = year + '-' + season;
    jsonPath = "results/" + sport + '/' + feedName + '-' + sport + '-' + seasonFilter + ".json";

    //------------------------------------------------------//
    //-- Reading JSON file and handling it as JSON object --//
    //------------------------------------------------------//
    $.getJSON(jsonPath, function(json) {
        // Now that we have the json object we will make a list of the matchups of a certain date.
        console.log(json);
        // Storing important array data that we'll use from the json
        var gameEntryArray = json.fullgameschedule.gameentry;
        // Empty array that we will push elements to
        var matchupArray = [];

        // Creating the list
        text = "<ul>";
        for(i in gameEntryArray) {
          if(gameEntryArray[i].date === currentDate) {
            var result = computeWinner();
            if(!result)
            { // The home team is going to win!
              matchupArray[i] = "<span style=\"background-color: #88ff4d\">" + gameEntryArray[i].homeTeam.City + " " +
                                gameEntryArray[i].homeTeam.Name + "</span> vs. <span style=\"background-color: #ff6666\">" +
                                gameEntryArray[i].awayTeam.City + " " + gameEntryArray[i].awayTeam.Name +
                                "</span>";
            } else if(result)
            { // The away team is going to win!
              matchupArray[i] = "<span style=\"background-color: #ff6666\">" + gameEntryArray[i].homeTeam.City + " " +
                                gameEntryArray[i].homeTeam.Name + "</span> vs. <span style=\"background-color: #88ff4d\">" +
                                gameEntryArray[i].awayTeam.City + " " + gameEntryArray[i].awayTeam.Name +
                                "</span>";
            }

            text += "<li>" + matchupArray[i] + "</li>";
          }
        }
        text += "</ul>";
        // Inserting the list into the html file
        document.getElementById("matchups").innerHTML = text;
    });

    // TODO: Srape headlines from www.nfl.com/news

});
