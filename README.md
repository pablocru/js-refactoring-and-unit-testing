# JS Refactoring and Unit Testing

In this project I'm refactoring the [MDN Conditionals
2 task](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math#math_2)
and creating Unit Testing in order to check if the changes are working
properly.

## MDN Conditionals 2 task

I have solved that task by adding a nested `if-else` statement in
[conditionals2-download.html](conditionals2-download.html):

```js
/* conditionals2-download.html */

let response;
let score = 75;
let machineActive = true;

// Add your code here

if (machineActive) {
if (score < 0 || score > 100) 
  response = "This is not possible, an error has occurred.";
else if (score <= 19) 
  response = "That was a terrible score — total fail!";
else if (score <= 39) 
  response = "You know some things, but it\'s a pretty bad score. " +
    "Needs improvement.";
else if (score <= 69) 
  response = "You did a passable job, not bad!";
else if (score <= 89) 
  response = "That\'s a great score, you really know your stuff.";
else 
  response = "What an amazing score! Did you cheat? Are you for real?";
}
else response = "The machine is off. Please switch it on";

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
```

However, in order to do refactoring It was moved to
[main.js](scripts/get-response/main.js) inside `getResponse(score,
machineActive)`:

```js
/* scripts/get-response/main.js */

"use strict";

function getResponse(score, machineActive) {
  let response;

  if (machineActive) {
    if (score < 0 || score > 100) 
      response = "This is not possible, an error has occurred.";
    else if (score <= 19) 
      response = "That was a terrible score — total fail!";
    else if (score <= 39) 
      response = "You know some things, but it\'s a pretty bad score. " +
        "Needs improvement.";
    else if (score <= 69) 
      response = "You did a passable job, not bad!";
    else if (score <= 89) 
      response = "That\'s a great score, you really know your stuff.";
    else 
      response = "What an amazing score! Did you cheat? Are you for real?";
  }
  else response = "The machine is off. Please switch it on";

  return response;
};
```

```js
/* conditionals2-download.html */

// Add your code here

response = getResponse(score, machineActive);

// Don't edit the code below here!
```

## Unit Testing

It will perform a series of UT's and show info on the console regarding the
obtained result for each one. The output will follow this structure:

```js
// Test input
[
  {
    score: 75,
    machineActive: false,
    expectedResponse: "The machine is off. Please switch it on"
  },
  {
    score: 75,
    machineActive: true,
    expectedResponse: "That\'s a great score, you really know your stuff."
  },
  {
    score: 150,
    machineActive: false,
    expectedResponse: "The machine is off. Please switch it on"
  },
]
```

```text
// Test output

## UT: getResponse()

testNum | Pass/Fail | score | machineActive [| expectedResponse | response]
---
1 | Pass | 75 | false
2 | Pass | 75 | true
3 | Pass | 150 | false
---
Fails: 0
```
