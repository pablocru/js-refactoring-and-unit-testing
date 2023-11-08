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
   * - [0] score
   * - [1] expectedResponse
   * - [2] [machineActive] `optional`
  */
  const utBattery = [
    [ 75, machineOff, false ],
    [ 75, greatScore ],
    [ 150, machineOff, false ],
    [ -5, error ],
    [ 105, error ],
    [ 0, terribleScore ],
    [ 4, terribleScore ],
    [ 19, terribleScore ],
    [ 20, badScore ],
    [ 39, badScore ],
    [ 40, passableJob ],
    [ 69, passableJob ],
    [ 70, greatScore ],
    [ 89, greatScore ],
    [ 90, amazingScore ],
    [ 100, amazingScore ],
    [ "5", error ],
    [ "", error ],
    [ " ", error ],
    [ NaN, error ],
    [ 10n, error ],
    [ null, error ],
    [ undefined, error ],
    [ true, error ],
    [ false, error ],
    [ 19.5, badScore ],
    [ "19,5", error ],
  ];

  const length = utBattery.length;
  for (let i = 0; i < length; i++) {
    const {
      areEquals, testStatus, logScore, machineActive, optionalMsg
    } = ut(utBattery[i][0], utBattery[i][1], utBattery[i][2]);

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
  console.log(
    `Fails: %c${failCounter}%c`,
    `color: ${failCounter ? 'red' : 'green'};`
  );
};

function ut(score, expectedResponse, machineActive = true) {
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
