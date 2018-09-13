//----------------//
//-- Functions  --//
//----------------//

function addGematriaToRosterPlayers(sport, seasonFilter) {
  var jsonPath = "results/" + sport + '/' + 'roster_players' + '-' + sport + '-' + seasonFilter + ".json";
  $.getJSON(jsonPath, function(json) {
    console.log(json);
  });
}

function insertZero(number) {
  if( number < 10 ) {
    return '0' + number;
  } else {
    return number;
  }
}

function addGematria(jsonObj) {
  // TODO: insert gematria values to the json object
  // TODO: First try to do it in player roster to add gematria to the player names

}

//------------------------------//
//-- Main Computing Function  --//
//------------------------------//
function computeWinner() {

  // TODO: Compare date numerology with the active roster
  // TODO: Push numerology values to the json object file.
  var num =  Math.floor(Math.random() * 2);
  if(num === 0) {
    return 0;
  } else if(num === 1) {
    return 1;
  }
}
