"use strict";

function uts() {
  /** Shows the test number */
  let testCounter = 1;

  /** Counts how many test have been failed */
  let failCounter = 0;

  console.log(
    "testNum | Pass/Fail | score | " +
    "machineActive [| expectedResponse | response]",
  );
  console.log("---");

  /** Stores the possible messages to improve access */
  const messages = [
    "The machine is off. Please switch it on",
    "This is not possible, an error has occurred.",
    "That was a terrible score — total fail!",
    "You know some things, but it\'s a pretty bad score. Needs improvement.",
    "You did a passable job, not bad!",
    "That\'s a great score, you really know your stuff.",
    "What an amazing score! Did you cheat? Are you for real?"
  ];

  /* Stores the tests that I want to do.
    It isn't declared because I wont use it later.
    `.forEach` iterates all the tests and performs the UT.
  */
  [
    { score: 75, machineActive: false, expectedResponse: messages[0] },
    { score: 75, machineActive: true, expectedResponse: messages[5] },
    { score: 150, machineActive: false, expectedResponse: messages[0] },
  ]
  .forEach(test => {
    /* Use object destructuring to get all the properties 
      without `test.<property>`
    */
    const { score, machineActive, expectedResponse } = test;

    /** The response that generates the test `score` and `machineActive` */
    const response = getResponse(score, machineActive);

    /** Compares if the response matches what it's been expected */
    const areEquals = expectedResponse === response;

    /** If the responses are equal,
     * the value will be `Pass` and `Fail` if not
    */
    const testStatus = areEquals ? 'Pass' : 'Fail';

    /** If the responses aren't equal,
     * it will print the expected and current response
    */
    const optionalMsg = areEquals ? '' : `| ${expectedResponse} | ${response}`;

    /** Prints `""` wrapping the value if `score` is a string */
    const logScore = typeof score === "string" ? `"${score}"` : score;

    // `testStatus` will be `green` if the test pass and `red` if not
    console.log(
      `${testCounter++} | %c${testStatus}%c | ${logScore} | ` +
      `${machineActive} | ${optionalMsg}`,
      `color: ${areEquals ? 'green' : 'red'};`
    );

    // Increase the counter if the test fails
    if (!areEquals) failCounter++;
  });

  console.log("---");
  console.log("Fails: " + failCounter);
};
