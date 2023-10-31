"use strict";

function getResponse(score, machineActive) {
  let response;

  const condition =
    typeof score !== 'number' ||
    isNaN(score) ||
    score < 0 || score > 100;

  switch (true) {
    case !machineActive:
      response = "The machine is off. Please switch it on"
      break;
    case condition:
      response = "This is not possible, an error has occurred.";
      break;
    case score <= 19:
      response = "That was a terrible score — total fail!";
      break;
    case score <= 39:
      response = "You know some things, but it\'s a pretty bad score. " +
        "Needs improvement.";
      break;
    case score <= 69:
      response = "You did a passable job, not bad!";
      break;
    case score <= 89:
      response = "That\'s a great score, you really know your stuff.";
      break;
    default:
      response = "What an amazing score! Did you cheat? Are you for real?";
      break;
  };

  return response;
};
