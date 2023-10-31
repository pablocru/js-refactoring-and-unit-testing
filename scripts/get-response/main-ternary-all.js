"use strict";

function getResponse(score, machineActive) {
  return !machineActive ? "The machine is off. Please switch it on" :
    typeof score !== 'number' ||
    isNaN(score) ||
    score < 0 || score > 100
    ?
    "This is not possible, an error has occurred." :
    score <= 19 ? "That was a terrible score — total fail!" :
    score <= 39 ? 
    "You know some things, but it\'s a pretty bad score. " +
    "Needs improvement." :
    score <= 69 ? "You did a passable job, not bad!" :
    score <= 89 ? "That\'s a great score, you really know your stuff." :
    "What an amazing score! Did you cheat? Are you for real?";
};
