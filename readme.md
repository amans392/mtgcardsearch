Project 
# Magic the gathering Card Search App

A web application used to search card names from the magic the gathering API below: https://api.magicthegathering.io/v1/cards
using inputs into the search bar field.

# Search Bar Screenshot

![Alt text](/mtgcardviewer/src/Images/mtg%20card%20search.png "MTG Card Search Bar")

# Search Results screenshot

![Alt text](/mtgcardviewer/src/Images/mtg%20card%20search%20results.png "MTG Card Search Bar")




## Installation and Setup Instructions
Clone down this repository. You will need node 20.10.0 and npm 10.2.5 installed globally on your machine.

## Installation:
```
npm install

To Run Test Suite:

npm test

To Start Server:

npm start

To Visit App:

localhost:3000/ideas
```

## Reflection
This project was created to test working with an API and getting specific data about the objects listed within that API then displaying them through an app.

## What did you set out to build?

I set out to build an application that queries an API to fetch large amounts of external data.
 The user can then filter through this data to find specific results.  The API contained a sample set of magic the gathering cards and their various individual qualities.

## Why was this project challenging and therefore a really good learning experience?

The challenges I faced in this project related to the API content itself and finding the right method to work with the fetched API data I needed.

It took a bit of research the find the methods suitable for me to work with the API Data, which gave me insight into the methods available for fetching and working with specifc parts of API data through filtering and mapping.

## What were some unexpected obstacles?
As stated above methods for fetching required some digging for me to find the right method for  finding the right method for working with the fetched API data I needed.


I noticed that the API has duplicate names of cards one with an image and one without that shows up in search results.  Will have to look into a different API for future mtg related project.

## What tools did you use to implement this project?

The Technologies used in this project are the React 18.2.0 framework, ReactJS and hosting using Firebase.

I used create-react-app boilerplate as it's setup is simple and I plan to branch out to other options as I work more with React and Javascript.