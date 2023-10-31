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
    { score: -5, machineActive: true, expectedResponse: messages[1] },
    { score: 105, machineActive: true, expectedResponse: messages[1] },
    { score: 0, machineActive: true, expectedResponse: messages[2] },
    { score: 4, machineActive: true, expectedResponse: messages[2] },
    { score: 19, machineActive: true, expectedResponse: messages[2] },
    { score: 20, machineActive: true, expectedResponse: messages[3] },
    { score: 39, machineActive: true, expectedResponse: messages[3] },
    { score: 40, machineActive: true, expectedResponse: messages[4] },
    { score: 69, machineActive: true, expectedResponse: messages[4] },
    { score: 70, machineActive: true, expectedResponse: messages[5] },
    { score: 89, machineActive: true, expectedResponse: messages[5] },
    { score: 90, machineActive: true, expectedResponse: messages[6] },
    { score: 100, machineActive: true, expectedResponse: messages[6] },
    { score: "5", machineActive: true, expectedResponse: messages[1] },
    { score: "", machineActive: true, expectedResponse: messages[1] },
    { score: " ", machineActive: true, expectedResponse: messages[1] },
    { score: NaN, machineActive: true, expectedResponse: messages[1] },
    { score: 10n, machineActive: true, expectedResponse: messages[1] },
    { score: null, machineActive: true, expectedResponse: messages[1] },
    { score: undefined, machineActive: true, expectedResponse: messages[1] },
    { score: true, machineActive: true, expectedResponse: messages[1] },
    { score: false, machineActive: true, expectedResponse: messages[1] },
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

    /** Adds format to the score depending on its type:
     * - Wrapping the value with `""` if `score` is a string
     * - Adds a `n` suffix it `score` is a Bigint
    */
    const logScore = typeof score === "string" ? `"${score}"` :
      typeof score === "bigint" ? `${score}n` : score;

    // `testStatus` will be `green` if the test pass and `red` if not
    console.log(
      `${testCounter++} | %c${testStatus}%c | ${logScore} | ` +
      `${machineActive} ${optionalMsg}`,
      `color: ${areEquals ? 'green' : 'red'};`
    );

    // Increase the counter if the test fails
    if (!areEquals) failCounter++;
  });

  console.log("---");
  console.log("Fails: " + failCounter);
};
