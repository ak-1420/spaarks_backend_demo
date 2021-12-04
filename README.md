# spaarks_backend_demo
restaurants crud using MongoDB and Node Js


## backend url
https://spaarks-restaurant.herokuapp.com/

## Restaurant API
Restaurant API is used to create , update , delete and retrieve restaurants.Also, you can retrieve restaurants based on the location
with rating

## Create a Restaurant
Use the following endpoint to create a restaurant

## POST https://spaarks-restaurant.herokuapp.com/api/v0/restaurant

## Required Body

### name(mandatory) : string

### description(mandatory) : string

### location:{
### lattitude(mandatory) : string
### longitude(mandatory) : string
### }

### ratings(mandatory) : Array


## Update a Restaurant
Use the following endpoint to update a restaurant

## PUT https://spaarks-restaurant.herokuapp.com/api/v0/restaurant/:id

## Required Body

### name(mandatory) : string

### description(mandatory) : string

### location:{
### lattitude(mandatory) : string
### longitude(mandatory) : string
### }

### ratings(mandatory) : Array

## Path Parameter

### id(mandtatory) : String

## Delete a Restaurant
Use the following endpoint to delete a restaurant

## DELETE https://spaarks-restaurant.herokuapp.com/api/v0/restaurant/:id

## Path Parameter

### id(mandtatory) : String


## Fetch a Restaurant With Id
Use the following endpoint to retrieve a restaurant 

## GET https://spaarks-restaurant.herokuapp.com/api/v0/restaurant/:id


## Path Parameter

### id(mandtatory) : String


## Fetch Restaurants

Use the following endpoint to fetch all the restaurants

## GET https://spaarks-restaurant.herokuapp.com/api/v0/restaurant


Use the above endpoint with the following query parameters to fetch restaurants based on location


## Query Parameters

### lat(mandatory) : Float

### lng(mandatory) : Float

### radius(mandatory) : Number 

## Example

### GET https://spaarks-restaurant.herokuapp.com/api/v0/restaurant?lat=40.674925&lng=-74.016162&radius=500







