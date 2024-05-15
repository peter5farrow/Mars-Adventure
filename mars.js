alert("Welcome to the Mars Adventure.");
alert("Booting the system...");
alert("Systems online. Let's begin.");

let username = prompt("What is your name?");

if (!username) {
  username = "recruit";
}

let firstNameLetter = username[0];
firstNameLetter = firstNameLetter.toUpperCase();
let otherNameLetters = username.slice(1);
otherNameLetters = otherNameLetters.toLowerCase();

username = firstNameLetter + otherNameLetters;

alert(`Glad to have you on the team, ${username}.`);

alert(
  "Now, we have a very important mission. We've been tasked with travelling to Mars to collect some samples for the very serious Big Lab HQ."
);
let excited = prompt(
  "What do you say, are you ready and excited for the challenge? (Type Y or N)"
);

excited = excited.toUpperCase(); //makes input non-case sensitive

if (excited === "Y") {
  alert("I knew you'd say that. It's so cool that you're going to Mars!");
} else {
  alert("Well, it's too late to back out now.");
}

alert("Alright, it's time to pack for your trip.");

let numSuitcases = prompt("How many suitcases do you plan to bring?");
numSuitcases = Number(numSuitcases); //converts string to number

if (numSuitcases > 2) {
  alert("That's way too many. You'll have to pack more lightly.");
} else {
  alert("Perfect. You'll certainly fit in the spaceship!");
}

alert("Next, you are allowed to bring one companion animal with you.");

let companionType = prompt("What kind of animal would you like to bring?");
let companionName = prompt("And what is your companion's name?");

//keeps it running if there's no input
if (!companionType) {
  companionType = "gnat";
}
if (!companionName) {
  companionName = "Nat";
}

//capitalizes the animals name and decapitalizes other letters
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

alert(`Great, so you're bringing ${companionName} the ${companionType}.`);

alert(
  "Our design team has agreed to outfit your spaceship. You have a few options for the interior decor."
);
let decorChoice = prompt(`Your options are:
A   Sleek, modern minimalism
B   Retro/vintage space age
C   African safari

Which would you like? (Type A, B, or C)`);

decorChoice = decorChoice.toUpperCase(); //makes input non-case sensitive

let decor;
if (decorChoice === "A") {
  decor = "modern minimalist";
} else if (decorChoice === "B") {
  decor = "retro";
} else if (decorChoice === "C") {
  decor = "cheetah print";
} else {
  decor = "bland";
}
alert("Great choice.");
alert(
  `${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`
);
alert(
  "Alright, it's time to get this show on the road. Preparing for launch..."
);

let timer = 5;
while (timer > 0) {
  alert(`${timer}...`);
  timer--;
}
alert("*** LIFTOFF! ***");
