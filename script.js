/* 
Your task:

Read through the code below.
Add the following features to your game:
 - Fix the money counter, and prevent people from buying another animal if they don't have enough money.
 - Try including sheep, and choose a suitable replacement for 'milk'
 - Go to style.css and try the challenge
 */
'use strict';
// In JavaScript, the first time you use a variable, you need to declare it using the var keyword. From then on, you can use it as normal.
var cow_btn = document.getElementById('buycow')
var farm = document.getElementById('farm')
var numofcows = 0

// Many people use semi-colons at the end of lines of code in Javascript, but these are optional.

  numofcows ++
cow_btn.onclick = function() {
  farm.innerHTML = farm.innerHTML + `<div class="cow_box" id="cow`+numofcows+`">
  <img src="cow.gif" alt="A cow">
  <br>
  <button class="milk-cow" id="cow`+numofcows+`">Milk</button>
  <button class="kill-cow" id="cow`+numofcows+`">Kill</button></div>`
  // In the above code, a div (division) element is created. This is used for non-specific sections.
  
}