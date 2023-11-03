"use strict";

function uts() {
  /** Counts how many test have been failed */
  let failCounter = 0;

  console.log(
    "testNum | Pass/Fail | score | " +
    "machineActive [| expectedResponse | response]",
  );
  console.log("---");

  // Possible messages
  const machineOff = "The machine is off. Please switch it on";
  const error = "This is not possible, an error has occurred.";
  const terribleScore = "That was a terrible score — total fail!";
  const badScore =
    "You know some things, but it\'s a pretty bad score. Needs improvement.";
  const passableJob = "You did a passable job, not bad!";
  const greatScore = "That\'s a great score, you really know your stuff.";
  const amazingScore =
    "What an amazing score! Did you cheat? Are you for real?";

  // Unit Testings
  const utBattery = [
    { score: 75, machineActive: false, expectedResponse: machineOff },
    { score: 75, machineActive: true, expectedResponse: greatScore },
    { score: 150, machineActive: false, expectedResponse: machineOff },
    { score: -5, machineActive: true, expectedResponse: error },
    { score: 105, machineActive: true, expectedResponse: error },
    { score: 0, machineActive: true, expectedResponse: terribleScore },
    { score: 4, machineActive: true, expectedResponse: terribleScore },
    { score: 19, machineActive: true, expectedResponse: terribleScore },
    { score: 20, machineActive: true, expectedResponse: badScore },
    { score: 39, machineActive: true, expectedResponse: badScore },
    { score: 40, machineActive: true, expectedResponse: passableJob },
    { score: 69, machineActive: true, expectedResponse: passableJob },
    { score: 70, machineActive: true, expectedResponse: greatScore },
    { score: 89, machineActive: true, expectedResponse: greatScore },
    { score: 90, machineActive: true, expectedResponse: amazingScore },
    { score: 100, machineActive: true, expectedResponse: amazingScore },
    { score: "5", machineActive: true, expectedResponse: error },
    { score: "", machineActive: true, expectedResponse: error },
    { score: " ", machineActive: true, expectedResponse: error },
    { score: NaN, machineActive: true, expectedResponse: error },
    { score: 10n, machineActive: true, expectedResponse: error },
    { score: null, machineActive: true, expectedResponse: error },
    { score: undefined, machineActive: true, expectedResponse: error },
    { score: true, machineActive: true, expectedResponse: error },
    { score: false, machineActive: true, expectedResponse: error },
  ];

  const length = utBattery.length;
  for (let i = 0; i < length; i++) {
    const {
      areEquals, testStatus, logScore, machineActive, optionalMsg
    } = ut(utBattery[i]);

    /** `testStatus` will be `green` if the test pass and `red` if not*/
    const color = `color: ${areEquals ? 'green' : 'red'};`;

    if (!areEquals) failCounter++;

    console.log(
      `${i} | %c${testStatus}%c | ${logScore} | ` +
      `${machineActive} ${optionalMsg}`,
      color
    );
  };

  console.log("---");
  console.log("Fails: " + failCounter);
};

function ut(test, testCounter) {
  // Counter starts in 1
  testCounter + 1;

  /* Use object destructuring to get all the properties 
  without `test.<property>` */
  const { score, machineActive, expectedResponse } = test;

  /** The response that generates the test `score` and `machineActive` */
  const response = getResponse(score, machineActive);

  /** Compares if the response matches what it's been expected */
  const areEquals = expectedResponse === response;

  /** If the responses are equal,
   * the value will be `Pass` and `Fail` if not
  */
  const testStatus = areEquals ? 'Pass' : 'Fail';

  /** Adds format to the score depending on its type:
   * - Wrapping the value with `""` if `score` is a string
   * - Adds a `n` suffix it `score` is a Bigint
  */
  const logScore = typeof score === "string" ? `"${score}"` :
    typeof score === "bigint" ? `${score}n` : score;

  /** If the responses aren't equal,
   * it will print the expected and current response
  */
  const optionalMsg = areEquals ? '' : `| ${expectedResponse} | ${response}`;

  return {areEquals, testStatus, logScore, machineActive, optionalMsg};
}
