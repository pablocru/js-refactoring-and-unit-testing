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

  /** Unit Testings
   * - [ score, machineActive, expectedResponse ]
  */
  const utBattery = [
    [ 75, false, machineOff ],
    [ 75, true, greatScore ],
    [ 150, false, machineOff ],
    [ -5, true, error ],
    [ 105, true, error ],
    [ 0, true, terribleScore ],
    [ 4, true, terribleScore ],
    [ 19, true, terribleScore ],
    [ 20, true, badScore ],
    [ 39, true, badScore ],
    [ 40, true, passableJob ],
    [ 69, true, passableJob ],
    [ 70, true, greatScore ],
    [ 89, true, greatScore ],
    [ 90, true, amazingScore ],
    [ 100, true, amazingScore ],
    [ "5", true, error ],
    [ "", true, error ],
    [ " ", true, error ],
    [ NaN, true, error ],
    [ 10n, true, error ],
    [ null, true, error ],
    [ undefined, true, error ],
    [ true, true, error ],
    [ false, true, error ],
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
      `${i + 1} | %c${testStatus}%c | ${logScore} | ` +
      `${machineActive} ${optionalMsg}`,
      color
    );
  };

  console.log("---");
  console.log("Fails: " + failCounter);
};

function ut(test) {
  const score = test[0],
    machineActive = test[1],
    expectedResponse = test[2];

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
