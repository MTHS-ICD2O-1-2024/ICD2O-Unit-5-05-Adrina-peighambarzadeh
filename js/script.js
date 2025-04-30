// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh

// Created on: Apr 2025
// This file contains the JS functions for index.html
/**
* This function will tell you if you can watch the movie you want
*/
// eslint-disable-next-line no-unused-vars

function check() {
  // input
const userAge =  parseInt(document.getElementById("user-age").value)

  // process
if (userAge >= 17) {
  // output
  document.getElementById("result").innerHTML =
    "You can see an R rated movie alone!"
} else if (userAge >= 13) {
  //output
  document.getElementById("result"). innerHTML =
    "You can see a PG-13 rated movie alone!"
} else if (userAge >= 5) {
  //output
  document.getElementById("result"). innerHTML =
    "You can see a G or PG rated movie alone!"
} else {
  document.getElementById("result"). innerHTML =
    "Uh. You're too young for most things.!"
}
}