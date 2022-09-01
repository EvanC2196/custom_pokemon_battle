const slot1 = document.querySelector("#slot1");
const slot2 = document.querySelector("#slot2");
const slot3 = document.querySelector("#slot3");
const slot4 = document.querySelector("#slot4");

let moveType = "";

const dark = "dark";
let fairy = "fairy";
let psychic = "psychic";
let grass = "grass";

let nightSlash = 300;
let roar = 20;
let quickAttack = 40;
let fairyWind = 100;

let marcyStats = {
  name: "Marcy",
  type1: dark,
  type2: fairy,
  health: 500,
  currentHealth: 500,
  attack: 110,
  defense: 80,
  percentWidth: 1,
  move1: "Night Slash",
  move2: "Roar",
  move3: "Quick Attack",
  move4: "Fairy Wind",
  move1Power: nightSlash,
  move2Power: roar,
  move3Power: quickAttack,
  move4Power: fairyWind,
};

let brisketStats = {
  name: "Brisket",
  type1: "steel",
  type2: grass,
  health: 500,
  attack: 20,
  defense: 400,
  currentHealth: 500,
  percentWidth: 1,
  move1: "Steel Sound",
  move2: "Extreme Speed",
  move3: "Metal Claw",
  move4: "Vine Whip",
};

let guinliStats = {
  name: "Guinli",
  type1: psychic,
  type2: grass,
  health: 200,
  currentHealth: 200,
  oldHealth: 200,
  attack: 100,
  defense: 40,
  percentWidth: 1,
  move1: "test1",
  move2: "test2",
  move3: "test2",
  move4: "test4",
  move1Power: nightSlash,
  move2Power: roar,
  move3Power: quickAttack,
  move4Power: fairyWind,
};

let astroStats = {
  name: "Astro",
  type1: "dragon",
  type2: dark,
  health: 500,
  attack: 134,
  defense: 95,
  currentHealth: 500,
  oldHealth: 500,
  percentWidth: 1,
  move1: "test1",
  move2: "test2",
  move3: "test2",
  move4: "test4",
  move1Power: nightSlash,
  move2Power: roar,
  move3Power: quickAttack,
  move4Power: fairyWind,
};

let userPokemon = [marcyStats, brisketStats, "test", "test2"];
let cpuPokemon = [guinliStats, astroStats];

slot1.addEventListener("click", function () {
  if (mainTree === 0) {
    slot1.textContent = userPokemon[currentUserPokemon].move1;
    slot2.textContent = userPokemon[currentUserPokemon].move2;
    slot3.textContent = userPokemon[currentUserPokemon].move3;
    slot4.textContent = userPokemon[currentUserPokemon].move4;
    mainTree = 1;
  } else if (mainTree === 1) {
    slot1.textContent = `${userPokemon[currentUserPokemon].name} used ${userPokemon[currentUserPokemon].move1}`;
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";
    calcDamage(userPokemon[currentUserPokemon].move1Power);
  } else if (mainTree === 2) {
    currentUserPokemon = 0;
    console.log(`send out ${userPokemon[currentUserPokemon].name}`);
    setTimeout(newUserPokemon, 1000);
    mainTree = 0;
  }
});

slot2.addEventListener("click", function () {
  if (mainTree === 0) {
    pickNewPokemon();
    mainTree = 2;
    console.log("test");
  } else if (mainTree === 1) {
    slot1.textContent = `${userPokemon[currentUserPokemon].name} used ${userPokemon[currentUserPokemon].move2}`;
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";
    calcDamage(userPokemon[currentUserPokemon].move2Power);
  } else if (mainTree === 2) {
    console.log("send out Brisket");
    currentUserPokemon = 1;
    setTimeout(newUserPokemon, 1000);
    console.log("CPU turn");
    mainTree = 0;
  }
});

slot3.addEventListener("click", function () {
  if (mainTree === 0) {
    slot1.textContent = "You have no items, idiot";
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";
    setTimeout(resetMenu, 2000);
  } else if (mainTree === 1) {
    slot1.textContent = `${userPokemon[currentUserPokemon].name} used ${userPokemon[currentUserPokemon].move3}`;
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";
    calcDamage(userPokemon[currentUserPokemon].move3Power);
  } else if (mainTree === 2) {
    console.log("send out Brisket");
    currentUserPokemon = 1;
    setTimeout(newUserPokemon, 1000);
    console.log("CPU turn");
    mainTree = 0;
  }
});

slot4.addEventListener("click", function () {
  if (mainTree === 0) {
    slot1.textContent = "You Lose";
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";
    mainTree = 500;
  } else if (mainTree === 1) {
    slot1.textContent = `${userPokemon[currentUserPokemon].name} used ${userPokemon[currentUserPokemon].move4}`;
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";
    calcDamage(userPokemon[currentUserPokemon].move4Power);
  } else if (mainTree === 2) {
    console.log("send out Brisket");
    currentUserPokemon = 1;
    setTimeout(newUserPokemon, 1000);
    console.log("CPU turn");
    mainTree = 0;
  }
});

let calcDamage = function (power) {
  critCalc();
  stabCalc();
  document
    .querySelector("#user-pokemon img")
    .classList.add("userAttackAnimation");
  if (turnCounter === 0) {
    damage =
      ((((2 * 50 * critical) / 5 + 2) *
        power *
        userPokemon[currentUserPokemon].attack) /
        cpuPokemon[currentCpuPokemon].defense /
        50 +
        2) *
      stab *
      effectiveness1 *
      effectiveness2;
    console.log(damage);

    document
      .querySelector("#cpu-pokemon img")
      .classList.remove("receiveDamageAnimation");

    inflictDamage();
    console.log("me");
  } else if (turnCounter === 1) {
    damage =
      ((((2 * 50 * critical) / 5 + 2) *
        power *
        cpuPokemon[currentCpuPokemon].attack) /
        userPokemon[currentUserPokemon].defense /
        50 +
        2) *
      stab *
      effectiveness1 *
      effectiveness2;
    console.log(damage);

    document
      .querySelector("#cpu-pokemon img")
      .classList.remove("receiveDamageAnimation");

    inflictComputerDamage();
  }
};

let stabCalc = function () {
  if (
    userPokemon[currentUserPokemon].type1 === moveType ||
    userPokemon[currentUserPokemon].type1 === moveType
  ) {
    stab = 1.5;
    console.log("stab");
  } else {
    stab = 1;
  }
};

let changeHealth = function (i) {
  setTimeout(function () {
    cpuPokemon[currentCpuPokemon].percentWidth =
      i / cpuPokemon[currentCpuPokemon].health;
    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";
    console.log(i);
  }, (cpuPokemon[currentCpuPokemon].oldHealth - i) * 10);
};

let inflictDamage = function () {
  if (damage >= cpuPokemon[currentCpuPokemon].currentHealth) {
    cpuPokemon[currentCpuPokemon].oldHealth =
      cpuPokemon[currentCpuPokemon].currentHealth;
    cpuPokemon[currentCpuPokemon].currentHealth = 0;

    for (
      let i = cpuPokemon[currentCpuPokemon].oldHealth;
      i >= cpuPokemon[currentCpuPokemon].currentHealth;
      i--
    ) {
      changeHealth(i);

      console.log(i);
      console.log(cpuPokemon[currentCpuPokemon].currentHealth);
      console.log(cpuPokemon[currentCpuPokemon].health);
      console.log(cpuPokemon[currentCpuPokemon].oldHealth);
      console.log(cpuPokemon[currentCpuPokemon].percentWidth);
    }

    document
      .querySelector("#cpu-pokemon img")
      .classList.add("receiveDamageAnimation");
    setTimeout(faintedCPU, 5000);
    turnCounter = 1;
  } else {
    cpuPokemon[currentCpuPokemon].oldHealth =
      cpuPokemon[currentCpuPokemon].currentHealth;
    cpuPokemon[currentCpuPokemon].currentHealth =
      cpuPokemon[currentCpuPokemon].currentHealth - damage;

    for (
      let i = cpuPokemon[currentCpuPokemon].oldHealth;
      i >= cpuPokemon[currentCpuPokemon].currentHealth;
      i--
    ) {
      changeHealth(i);

      console.log(i);
      console.log(cpuPokemon[currentCpuPokemon].oldHealth);
      console.log(cpuPokemon[currentCpuPokemon].percentWidth);
    }

    document
      .querySelector("#cpu-pokemon img")
      .classList.add("receiveDamageAnimation");

    turnCounter = 1;
    console.log(cpuPokemon[currentCpuPokemon].oldHealth);
    console.log(cpuPokemon[currentCpuPokemon].currentHealth);
    setTimeout(cpuTurn, 2500);
  }
};

let faintedCPU = function () {
  document
    .querySelector("#cpu-pokemon img")
    .classList.remove("receiveDamageAnimation");
  delete cpuPokemon[currentCpuPokemon];
  if (cpuPokemon[0] === undefined && cpuPokemon[1] === undefined) {
    console.log("YOU WIN");
  } else {
    console.log(cpuPokemon);
    checkUndefined();
  }
};

let checkUndefined = function () {
  currentCpuPokemon = Math.floor(Math.random() * 4);
  if (cpuPokemon[currentCpuPokemon] === undefined) {
    checkUndefined();
  } else {
    newCpuPokemon();
  }
};

let newCpuPokemon = function () {
  switch (currentCpuPokemon) {
    case 0:
      cpuPokemonName.textContent = "Guinli";
      break;
    case 1:
      setTimeout(sendOutAstroText, 3000);
      setTimeout(sendOutAstro, 4000);
      break;
  }
};

let changeUserHealth = function (i) {
  setTimeout(function () {
    userPokemon[currentUserPokemon].percentWidth =
      i / userPokemon[currentUserPokemon].health;
    document.querySelector("#user-actual").style.width =
      200 * userPokemon[currentUserPokemon].percentWidth + "px";
    console.log(i);
  }, (userPokemon[currentUserPokemon].oldHealth - i) * 10);
};

let inflictComputerDamage = function () {
  if (damage >= userPokemon[currentUserPokemon].currentHealth) {
    userPokemon[currentUserPokemon].oldHealth =
      userPokemon[currentUserPokemon].currentHealth;
    userPokemon[currentUserPokemon].currentHealth = 0;

    for (
      let i = userPokemon[currentUserPokemon].oldHealth;
      i >= userPokemon[currentUserPokemon].currentHealth;
      i--
    ) {
      changeHealth(i);

      console.log(i);
      console.log(cpuPokemon[currentCpuPokemon].currentHealth);
      console.log(cpuPokemon[currentCpuPokemon].health);
      console.log(cpuPokemon[currentCpuPokemon].oldHealth);
      console.log(cpuPokemon[currentCpuPokemon].percentWidth);
    }

    document
      .querySelector("#cpu-pokemon img")
      .classList.add("receiveDamageAnimation");
    turnCounter = 0;
    faintedUser();
    console.log("test");
  } else {
    userPokemon[currentUserPokemon].oldHealth =
      userPokemon[currentUserPokemon].currentHealth;
    userPokemon[currentUserPokemon].currentHealth =
      userPokemon[currentUserPokemon].currentHealth - damage;

    for (
      let i = userPokemon[currentUserPokemon].oldHealth;
      i >= userPokemon[currentUserPokemon].currentHealth;
      i--
    ) {
      changeUserHealth(i);

      console.log(i);
      console.log(cpuPokemon[currentCpuPokemon].oldHealth);
      console.log(cpuPokemon[currentCpuPokemon].percentWidth);
    }
  }
  document
    .querySelector("#cpu-pokemon img")
    .classList.add("receiveDamageAnimation");
  turnCounter = 0;
  setTimeout(resetMenu, 3000);
  console.log("also a test");
};
let critical = 1;
let randomNum = 1;

let critCalc = function () {
  randomNum = Math.random() * 100;
  if (randomNum <= 6.25) {
    critical = 2;
  } else {
    critical = 1;
  }
};

let grassKnot = function () {
  moveType = grass;
  calcDamage(grassKnotPower);
};

let effectiveness1 = 1;
let effectiveness2 = 1;

let nightSlashPower = 300;
let grassKnotPower = 200;
let roarPower = 20;

const userPokemonName = document.querySelector("#user-name");
const cpuPokemonName = document.querySelector("#cpu-name");

const cpuPokemonImage = document.querySelector("#cpu-pokemon img");

let currentCpuPokemon = 0;
let currentUserPokemon = 0;
let mainTree = 0;
let damage = 0;

let stab = 1.5;

let turnCounter = 0;

let effectivenessCalc = function () {
  if (moveType === dark && cpuPokemon[currentCpuPokemon].type1 === "fighting") {
    effectiveness1 = 0.5;
  } else {
    effectiveness1 = 1;
  }
};

let newUserPokemon = function () {
  switch (currentUserPokemon) {
    case 0:
      userPokemonName.textContent = "Marcy";
      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      break;
    case 1:
      userPokemonName.textContent = "Brisket";
      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      break;
  }
  turnCounter = 1;
  setTimeout(cpuTurn, 3000);
};

let faintedUser = function () {
  document
    .querySelector("#user-pokemon img")
    .classList.remove("receiveDamageAnimation");
  delete userPokemon[currentUserPokemon];
  if (userPokemon[0] === undefined && userPokemon[1] === undefined) {
    console.log("YOU LOSE");
  } else {
    pickNewPokemon();
    mainTree = 2;
  }
};

let pickNewPokemon = function () {
  slot1.textContent = "Marcy";
  slot2.textContent = userPokemon[1].name;
  slot3.textContent = userPokemon[2].name;
  slot4.textContent = userPokemon[3].name;
};

let sendOutAstroText = function () {
  slot1.textContent = "Chad sent out Astro";
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
};

let sendOutAstro = function () {
  cpuPokemonName.textContent = "Astro";
  document.querySelector("#cpu-pokemon img").src =
    "https://img.pokemondb.net/sprites/firered-leafgreen/normal/golem.png";

  document.querySelector("#cpu-actual").style.width =
    200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";
  setTimeout(resetMenu, 2000);
  turnCounter = 0;
};

let cpuTurn = function () {
  if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 0
  ) {
    document
      .querySelector("#cpu-pokemon img")
      .classList.remove("receiveDamageAnimation");
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Psychic`;
      slot2.textContent = "uh";
      calcDamage(nightSlash);
      console.log("me");
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Leech Seed`;
      slot2.textContent = "";
      calcDamage(nightSlash);
      console.log("me");
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Grass Knot`;
      slot2.textContent = "";
      calcDamage(nightSlash);
      console.log("me");
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Leer`;
      slot2.textContent = "";
      calcDamage(nightSlash);
      console.log("me");
    }
  } else if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 1
  ) {
    document
      .querySelector("#cpu-pokemon img")
      .classList.remove("receiveDamageAnimation");
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Draco Meteor`;
      slot2.textContent = "";
      setTimeout(calcDamage(nightSlash), 1000);
      console.log("test");
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Shadow Claw`;
      slot2.textContent = "";
      setTimeout(calcDamage(nightSlash), 1000);
      console.log("test");
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Crunch`;
      slot2.textContent = "";
      setTimeout(calcDamage(nightSlash), 1000);
      console.log("test");
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Dragon Claw`;
      slot2.textContent = "";
      setTimeout(calcDamage(nightSlash), 1000);
      console.log("test");
    }
  } else {
    console.log(
      "remove current pokemon from array and randomly select a new one"
    );
    faintedCPU();
  }
};

let resetMenu = function () {
  document
    .querySelector("#user-pokemon img")
    .classList.remove("receiveDamageAnimation");
  slot1.textContent = "Fight";
  slot2.textContent = "Pokemon";
  slot3.textContent = "Bag";
  slot4.textContent = "Run";
  mainTree = 0;
  turnCounter = 0;
};
