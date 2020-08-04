// Number-1. (Convert Feet To Mile)

function feetToMile(feet) {
  if (feet <= 0) {
    return "Warning! Give a positive value for feet.";
  } else {
    const mile = (feet * 0.000189394).toFixed(5);
    return mile;
  }
}

let result = feetToMile(10000);

console.log(result);

// Number-2. (Wood Calculator)

function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    return "Warning! Give Positive Values.";
  } else {
    totalWoodRequire = chair * 6 + table * 3 + bed * 3;
    return totalWoodRequire;
  }
}

let totalWood = woodCalculator(3, 2, 2);

console.log(totalWood);

// Number-3. (Bricks Calculator)

function brickCalculator(floor) {
  var bricksNeed = 1000;

  if (floor < 0) {
    return "warning! Give Positive Value";
  } else if (floor <= 10) {
    var bricksNeed = floor * (15 * bricksNeed);
    return bricksNeed;
  } else if (floor > 10 && floor <= 20) {
    var firstTenFloor = 10;

    var afterTenFloor = floor - firstTenFloor;

    var bricksWithinTwenty =
      firstTenFloor * (15 * bricksNeed) + afterTenFloor * (12 * bricksNeed);

    return bricksWithinTwenty;
  } else {
    flAfterTwenty = floor - 20;
    twentyFlBricks = 10 * (15 * bricksNeed) + 10 * (12 * bricksNeed);
    totalBricks = flAfterTwenty * (10 * bricksNeed) + twentyFlBricks;
    return totalBricks;
  }
}

var brickAmount = brickCalculator(26);

console.log(brickAmount);

// Number-4 (Find Tiny Friend)

function tinyFriend(friends) {
  var smallName = friends[0];
  if (friends.length == 0) {
    return "Please add your friends name!";
  } else {
    for (var i = 0; i < friends.length; i++) {
      var names = friends[i];
      if (friends[i] == "") {
        return "Warning!  empty string is not allowed";
      } else {
        names.length <= smallName.length;
        smallName = names;
      }
    }
  }
  return smallName;
}

const tinyName = tinyFriend([
  "Meem",
  "Mahi",
  "Rashik",
  "Dhoru",
  "Tajbi",
  "Medha",
]);

console.log(tinyName);
