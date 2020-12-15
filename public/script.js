import { response } from "express";
import request from "request";
import d3 from "d3";

let ratingArray = [];
let songsArray = [];
let artistsArray = [];

let templateSource = document.getElementById("results-template").innerHTML,
  template = Handlebars.compile(templateSource),
  resultsPlaceholder = document.getElementById("results");

function getHits() {
  for (let j = 0; j < artistsArray.length; j++) {
    tempsearch(artistsArray[j]);
  }
}

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


//
// for (let k = 0; k < songsArray.length; k++){
// let song_name = songsArray[k];
// let artist = artistsArray[k];
// response.json({"rating": rating, "song_title": song_name, "artist": artist});
// }


//read billboard_data.csv
d3.csv("billboard_data.csv", function(data) {
  for (let i = 0; i < 100; i++) {
    const jsonString = JSON.stringify(data);
    console.log(jsonString); // turned stuff into JSON
  }
});
