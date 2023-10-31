"use strict";

const messages = [
  "The machine is off. Please switch it on",
  "This is not possible, an error has occurred.",
  "That was a terrible score — total fail!",
  "You know some things, but it\'s a pretty bad score. Needs improvement.",
  "You did a passable job, not bad!",
  "That\'s a great score, you really know your stuff.",
  "What an amazing score! Did you cheat? Are you for real?"
];

function getResponse(score, machineActive) {
  let response;

  if (machineActive) {
    if (score < 0 || score > 100) response = messages[1];
    else if (score <= 19) response = messages[2];
    else if (score <= 39) response = messages[3];
    else if (score <= 69) response = messages[4];
    else if (score <= 89) response = messages[5];
    else response = messages[6];
  }
  else response = messages[0];

  return response;
};
