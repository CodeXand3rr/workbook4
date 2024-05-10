"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

function init() {
  const footballTeamsList = document.getElementById("footballTeamsList");
  const displayTeamsButton = document.getElementById("displayTeamsButton");


  // 
  for (const team of teams) {
    const option = document.createElement("option");
    option.value = team.code;
    option.innerText = team.name;
    footballTeamsList.appendChild(option);
  }

  displayTeamsButton.addEventListener("click", displayTeams);

  function displayTeams() {
    console.log(footballTeamsList.value);
    const messageParagraph = document.getElementById("messageParagraph");
    messageParagraph.innerText = footballTeamsList.value;
  }
}

window.onload = init;