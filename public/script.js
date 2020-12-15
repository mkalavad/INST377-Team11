import { response } from "express";
// const express = require('express');

let ratingArray = [];
let songsArray = [];
let artistsArray = [];

/*
function getAsText(fileToRead) {
  let reader = new FileReader();
  reader.readAsText(fileToRead);
  reader.onload = loadHandler;
}

function handleFiles(files) {
  if (window.FileReader) {
    getAsText(files[0]);
  }
}

function loadHandler(event) {
  let csv = event.target.result;
  processData(csv);
}

function processData(csv) {
  let allTextLines = csv.split("/\r\n|\n");

  for (let i = 0; i < allTextLines.length; i++) {
    let row = allTextLines[i].split(",");
    let col1 = [];
    let col = [];
    let col2 = [];

    for (let j = 0; j < row.length; j++) {
      col1.push(row[0]);
      col.push(row[1]);
      col2.push(row[2]);
    }
    ratingArray.push(col1);
    songsArray.push(col);
    artistsArray.push(col2);
  }
}




let templateSource = document.getElementById("results-template").innerHTML,
  template = Handlebars.compile(templateSource),
  resultsPlaceholder = document.getElementById("results");

function getHits() {
  for (let j = 0; j < artistsArray.length; j++) {
    tempsearch(artistsArray[j]);
  }
}*/

function tempsearch(query2) {
  for (let i = 0; i < songsArray.length; i++) {
    $.ajax({
      url: "https://api.spotify.com/v1/search",
      data: {
        q: songsArray[i],
        type: "song",
      },
      success: function (response) {
        resultsPlaceholder.innerHTML = template(response);
      },
    });
  };
};



for (let k = 0; k < songsArray.length; k++){
let song_name = songsArray[k];
let artist = artistsArray[k];
response.json({"rating": rating, "song_title": song_name, "artist": artist});
}


//read billboard_data.csv
d3.csv("billboard_data.csv", function(data) {
  for (let i = 0; i < 100; i++) {
    const jsonString = JSON.stringify(data);
    console.log(jsonString); // turned stuff into JSON
  }
});
