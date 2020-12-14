let songsArray = [];
let artistsArray = [];

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
    let col = [];
    let col2 = [];

    for (let j = 0; j < row.length; j++) {
      col.push(row[1]);
      col2.push(row[2]);
    }

    songsArray.push(col);
    artistsArray.push(col2);
  }
}

var templateSource = document.getElementById("results-template").innerHTML,
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


document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});

