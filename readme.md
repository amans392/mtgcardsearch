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

I set out to build a way to search cards from an API using a search field.

## Why was this project challenging and therefore a really good learning experience?

The challenges I faced in this project related to the API content itself and figuring out how to fetch and display specific data within it.  Took some time finding the method to fetch from the API, which gave me insight into the methods available for fetching data, as well as, what can be done with the data when it has been fetched, like finding specific properties of the API data that were releveant to what I'm working with.

## What were some unexpected obstacles?
As stated above methods for fetching required some digging for me to find the right method for fetching and specifically interacting with the API.

Noticed that the API has duplicate names of cards one with an image and one without that shows up in search results.  Will have to look into a different API for future mtg related project.

## What tools did you use to implement this project?

The Technologies used in this project are the React 18.2.0 framework, ReactJS and hosting using Firebase.

I used create-react-app boilerplate as it's setup is simple and I plan to branch out to other options as I work more with React and Javascript.