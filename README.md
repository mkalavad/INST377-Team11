# Predicting Next Hits

There have been massive changes in popular music over time. From the jazz jubilees and disco decade to TikTok teens and actor-dancer-singer triple threats, we currently live in an epoch where singer-songwriters are around every corner and populating social media with their content. This change in popular music means that song structures have evolved as well. Genre, beats per minute (bpm), singer gender, age, etc. are all factors that play a role in making a particular song successful. Looking at these factors, we hope our project will be able to predict what types of songs will be the next big “hit.”

Our project will take metadata from Spotify (e.g. “artist”, “album”) and use crossline textualization with billboard data to see which songs are popular and analyze their structure using metadata from Spotify, to see what factors are most important in creating a “hit song”. We will be using the Spotify API because it has a lot of “endpoint data” (metadata) that we can explore. The API also comes with extensive documentation about how to use and import the data for us to customize our project. Using this data, we can find other songs on Spotify that meet the standards for a “hit” as “predictions”.

To distinguish our app from products such as *Billboard 100* and *Next Big Sound*, our app will offer these predictions without needing an account to view. We will also be including justifications for why we predict these songs will be the next hits.

Our application can be found at <https://boiling-anchorage-15365.herokuapp.com/>

This application was developed on screens with size around 1280x800, and our target environment is currently a Google Chrome browser tool.

## Developer Manual
### Installation
 - Click the green "Code" in the repository, and clone by either using GitHub Desktop, or using your Terminal to type <code>git clone URL</code>
 - You need to have [Node](https://nodejs.org/en/download/) installed with a version of at least 13.2.0
 - Once installed, check your version of node using <code>node --version</code> in Terminal
 - Navigate to this repository on your local machine using Terminal
 - Run <code>npm install</code> to install dependencies
 - Run <code>npm start</code> to start the server
 - In your browser, type in <code>localhost:3000</code> in the address bar.  The page should then look like the website as seen on Heroku

However, you likely will not be able to update this repository.  This repository will not be updated by the current team, so you are encouraged to copy the code from this to your own GitHub.

### Spotify Credentials
This application has been registered to Spotify's Developers platform, and has received the proper credentials to access Spotify API data.  In addition, our application follows the "Client Credentials" user flow, which requires a secret key to access information but does not allow us to access user data.

Access to Spotify API has been allowed through registering this application with Spotify's Developer application to allow access to information that does not use user information.
