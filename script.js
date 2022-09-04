const slot1 = document.querySelector("#slot1");
const slot2 = document.querySelector("#slot2");
const slot3 = document.querySelector("#slot3");
const slot4 = document.querySelector("#slot4");

let currentCpuPokemon = 0;
let currentUserPokemon = 0;
let mainTree = 0;
let damage = 0;

let moveType = "";

const dark = "dark";
let fairy = "fairy";

let grass = "grass";

let nightSlash = 70;
let roar = 20;
let quickAttack = 40;
let fairyWind = 40;
let steelSound = 20;
let harden = 20;
let metalClaw = 50;
let woodHammer = 120;
let closeCombat = 120;
let bugBite = 60;
let stringShot = 20;
let taunt = 20;
let flamethrower = 90;
let shadowBall = 80;
let nastyPlot = 20;
let recover = 20;
let dragonClaw = 80;
let dragonTail = 60;
let meteorStrike = 150;
let wingAttack = 60;
let earthquake = 100;
let iceRush = 80;
let blizzard = 110;
let surf = 90;
let aquaVeil = 20;
let psychic = 90;
let leechSeed = 20;
let grassKnot = 20;
let glare = 20;

let marcyStats = {
  name: "Marcy",
  type1: dark,
  type2: fairy,
  health: 225,
  currentHealth: 225,
  oldHealth: 225,
  percentWidth: 1,
  attack: 125,
  defense: 50,
  speed: 150,
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
  health: 375,
  currentHealth: 375,
  oldHealth: 375,
  percentWidth: 1,
  attack: 50,
  defense: 200,
  speed: 24,
  move1: "Steel Sound",
  move2: "Harden",
  move3: "Metal Claw",
  move4: "Wood Hammer",
  move1Power: steelSound,
  move2Power: harden,
  move3Power: metalClaw,
  move4Power: woodHammer,
};

let fredStats = {
  name: "Fred",
  type1: "dragon",
  type2: dark,
  health: 225,
  currentHealth: 225,
  oldHealth: 225,
  percentWidth: 1,
  attack: 125,
  defense: 75,
  speed: 125,
  move1: "Close Combat",
  move2: "Bug Bite",
  move3: "String Shot",
  move4: "Taunt",
  move1Power: closeCombat,
  move2Power: bugBite,
  move3Power: stringShot,
  move4Power: taunt,
};

let wormStats = {
  name: "Worm",
  type1: "dragon",
  type2: dark,
  health: 525,
  currentHealth: 525,
  oldHealth: 525,
  percentWidth: 1,
  attack: 75,
  defense: 50,
  speed: 100,
  move1: "Flamethrower",
  move2: "Shadow Ball",
  move3: "Nasty Plot",
  move4: "Recover",
  move1Power: flamethrower,
  move2Power: shadowBall,
  move3Power: nastyPlot,
  move4Power: recover,
};

let guinliStats = {
  name: "Guinli",
  type1: psychic,
  type2: grass,
  health: 150,
  currentHealth: 150,
  oldHealth: 150,
  percentWidth: 1,
  attack: 176,
  defense: 50,
  speed: 124,
  move1Power: nightSlash,
  move2Power: roar,
  move3Power: quickAttack,
  move4Power: fairyWind,
};

let astroStats = {
  name: "Astro",
  type1: "dragon",
  type2: dark,
  health: 300,
  currentHealth: 300,
  oldHealth: 300,
  percentWidth: 1,
  attack: 135,
  defense: 135,
  speed: 30,
  move1Power: dragonClaw,
  move2Power: roar,
  move3Power: nightSlash,
  move4Power: dragonTail,
};

let birdStats = {
  name: "Bird",
  type1: "dragon",
  type2: dark,
  health: 375,
  currentHealth: 375,
  oldHealth: 375,
  percentWidth: 1,
  attack: 125,
  defense: 125,
  speed: 25,
  move1Power: meteorStrike,
  move2Power: wingAttack,
  move3Power: earthquake,
  move4Power: harden,
};

let bongoStats = {
  name: "Bongo",
  type1: "dragon",
  type2: dark,
  health: 150,
  currentHealth: 150,
  oldHealth: 150,
  percentWidth: 1,
  attack: 50,
  defense: 125,
  speed: 175,
  move1Power: iceRush,
  move2Power: blizzard,
  move3Power: surf,
  move4Power: aquaVeil,
};

let userPokemon = [marcyStats, brisketStats, fredStats, wormStats];
let cpuPokemon = [guinliStats, astroStats, birdStats, bongoStats];

currentHealthNum = document.querySelector("#currentHealthNum");

currentHealthNum.textContent = `${userPokemon[currentUserPokemon].currentHealth}/${userPokemon[currentUserPokemon].health}`;

slot1.addEventListener("click", function () {
  if (mainTree === 0) {
    slot1.textContent = userPokemon[currentUserPokemon].move1;
    slot2.textContent = userPokemon[currentUserPokemon].move2;
    slot3.textContent = userPokemon[currentUserPokemon].move3;
    slot4.textContent = userPokemon[currentUserPokemon].move4;
    title.textContent = `What will ${userPokemon[currentUserPokemon].name} do?`;
    description.textContent = "";
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
    currentUserPokemon = 2;
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
    currentUserPokemon = 3;
    setTimeout(newUserPokemon, 1000);
    console.log("CPU turn");
    mainTree = 0;
  }
});

let soundHolder = "";

let sound = function (power) {
  switch (power) {
    case nightSlash:
      console.log("audio test");
      soundHolder = new Audio("Night Slash.mp3");

      soundHolder.play();
      break;

    case quickAttack:
      soundHolder = new Audio("Quick Attack.mp3");
      soundHolder.play();
      break;
  }
};

let calcDamage = function (power) {
  document.querySelector("#action-box div").style.flexBasis = `100%`;
  document.querySelector("#action-box div").style.marginTop = `25px`;
  critCalc();
  stabCalc();
  sound(power);
  console.log("another fucking test");
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
      .querySelector("#user-pokemon img")
      .classList.add("userAttackAnimation");
    setTimeout(inflictDamage, 750);
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

    if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
      document.querySelector("#cpu-actual").style.backgroundColor = "red";
    }

    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";
  }, (cpuPokemon[currentCpuPokemon].oldHealth - i) * 10);
};

let inflictDamage = function () {
  title.textContent = "nicely done!";
  description.textContent = "";
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
    }
    document.querySelector("#cpu-pokemon img").classList.add("damageFlicker");
    setTimeout(faintedCPU, 2000);
    turnCounter = 1;
  } else {
    title.textContent = "oof, would not have been my first choice";
    description.textContent = "";

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
    }
    document.querySelector("#cpu-pokemon img").classList.add("damageFlicker");
    turnCounter = 1;
    console.log(cpuPokemon[currentCpuPokemon].oldHealth);
    console.log(cpuPokemon[currentCpuPokemon].currentHealth);
    setTimeout(cpuTurn, 1500);
  }
};

let faintedCPU = function () {
  document.querySelector("#cpu-pokemon img").classList.add("cpuFaintAnimation");

  console.log(currentCpuPokemon);
  delete cpuPokemon[currentCpuPokemon];
  if (
    cpuPokemon[0] === undefined &&
    cpuPokemon[1] === undefined &&
    cpuPokemon[2] === undefined &&
    cpuPokemon[3] === undefined
  ) {
    console.log("YOU WIN");
  } else {
    console.log(cpuPokemon);
    checkUndefined();
  }
};

let checkUndefined = function () {
  currentCpuPokemon = Math.floor(Math.random() * 4);
  console.log(currentCpuPokemon);
  if (cpuPokemon[currentCpuPokemon] === undefined) {
    checkUndefined();
    console.log("run again");
  } else {
    newCpuPokemon();
    console.log("me");
  }
};

let newCpuPokemon = function () {
  switch (currentCpuPokemon) {
    case 0:
      setTimeout(sendOutCpuText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }
      break;
    case 1:
      setTimeout(sendOutCpuText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
    case 2:
      setTimeout(sendOutCpuText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
    case 3:
      setTimeout(sendOutCpuText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
  }
};

let sendOutCpuText = function () {
  slot1.textContent = `Chad sent out ${cpuPokemon[currentCpuPokemon].name}`;
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
  console.log(`current cpu is ${currentCpuPokemon}`);
};

let animationBugFix = function () {
  document
    .querySelector("#cpu-pokemon img")
    .classList.remove("cpuFaintAnimation");
};

let sendOutCpu = function () {
  if (currentCpuPokemon === 0) {
    cpuPokemonName.textContent = cpuPokemon[currentCpuPokemon].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/firered-leafgreen/normal/charizard.png";

    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";
    setTimeout(animationBugFix, 100);
    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCpuPokemon === 1) {
    cpuPokemonName.textContent = cpuPokemon[currentCpuPokemon].name;
    console.log("tis me");
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/firered-leafgreen/normal/golem.png";
    console.log(`current cpu is ${currentCpuPokemon}`);
    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";
    setTimeout(animationBugFix, 100);
    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCpuPokemon === 2) {
    cpuPokemonName.textContent = cpuPokemon[currentCpuPokemon].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/emerald/normal/pelipper.png";

    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";
    setTimeout(animationBugFix, 100);
    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCpuPokemon === 3) {
    cpuPokemonName.textContent = cpuPokemon[currentCpuPokemon].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/black-white/anim/normal/lumineon.gif";
    setTimeout(animationBugFix, 100);

    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  }
};

let changeUserHealth = function (i) {
  setTimeout(function () {
    userPokemon[currentUserPokemon].percentWidth =
      i / userPokemon[currentUserPokemon].health;

    if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
      document.querySelector("#user-actual").style.backgroundColor = "red";
    }

    document.querySelector("#user-actual").style.width =
      200 * userPokemon[currentUserPokemon].percentWidth + "px";

    currentHealthNum.textContent = `${Math.floor(i)}/${
      userPokemon[currentUserPokemon].health
    }`;

    setTimeout(timeFill, 1500);
  }, (userPokemon[currentUserPokemon].oldHealth - i) * 10);
};

let timeFill = function () {
  document.querySelector("#action-box div").style.marginTop = `25px`;
  document.querySelector("#action-box div").style.flexBasis = `100%`;
  slot1.textContent = "game is thinking...";
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
};

let inflictComputerDamage = function () {
  if (damage >= userPokemon[currentUserPokemon].currentHealth) {
    userPokemon[currentUserPokemon].oldHealth =
      userPokemon[currentUserPokemon].currentHealth;
    userPokemon[currentUserPokemon].currentHealth = 0;
    console.log(userPokemon[currentUserPokemon]);

    for (
      let i = userPokemon[currentUserPokemon].oldHealth;
      i >= userPokemon[currentUserPokemon].currentHealth;
      i--
    ) {
      changeUserHealth(i);
      currentHealthNum.textContent = `${userPokemon[currentUserPokemon].currentHealth}/${userPokemon[currentUserPokemon].health}`;
    }

    document.querySelector("#user-pokemon img").classList.add("damageFlicker");

    turnCounter = 0;
    setTimeout(faintedUser, 4000);
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
    }
    document.querySelector("#user-pokemon img").classList.add("damageFlicker");
    turnCounter = 0;
    setTimeout(resetMenu, 3000);
  }
};

let faintedUser = function () {
  delete userPokemon[currentUserPokemon];

  if (userPokemon[0] === undefined && userPokemon[1] === undefined) {
    console.log("YOU LOSE");
  } else {
    setTimeout(pickNewPokemon, 500);
    mainTree = 2;
  }
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

let effectiveness1 = 1;
let effectiveness2 = 1;

const userPokemonName = document.querySelector("#user-name");
const cpuPokemonName = document.querySelector("#cpu-name");

const cpuPokemonImage = document.querySelector("#cpu-pokemon img");

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
      document.querySelector("#user-pokemon img").src =
        "https://img.pokemondb.net/sprites/firered-leafgreen/back-normal/bulbasaur.png";
      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        userPokemon[currentUserPokemon].currentHealth
      )}/${userPokemon[currentUserPokemon].health}`;
      break;
    case 1:
      userPokemonName.textContent = "Brisket";
      document.querySelector("#user-pokemon img").src =
        "https://img.pokemondb.net/sprites/emerald/back-normal/aggron.png";
      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        userPokemon[currentUserPokemon].currentHealth
      )}/${userPokemon[currentUserPokemon].health}`;
      break;
    case 2:
      userPokemonName.textContent = "Fred";
      document.querySelector("#user-pokemon img").src =
        "https://img.pokemondb.net/sprites/emerald/back-normal/ariados.png";
      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        userPokemon[currentUserPokemon].currentHealth
      )}/${userPokemon[currentUserPokemon].health}`;
      break;
    case 3:
      userPokemonName.textContent = "Worm";
      document.querySelector("#user-pokemon img").src =
        "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/giratina-origin.png";
      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        userPokemon[currentUserPokemon].currentHealth
      )}/${userPokemon[currentUserPokemon].health}`;
      break;
  }
  turnCounter = 1;
  setTimeout(cpuTurn, 3000);
};

let pickNewPokemon = function () {
  document.querySelector("#action-box div").style.marginTop = `0px`;
  document.querySelector("#action-box div").style.flexBasis = `50%`;
  if (userPokemon[0] === undefined) {
    slot1.textContent = "Fainted";
  } else {
    slot1.textContent = userPokemon[0].name;
  }
  if (userPokemon[1] === undefined) {
    slot2.textContent = "Fainted";
  } else {
    slot2.textContent = userPokemon[1].name;
  }
  if (userPokemon[2] === undefined) {
    slot3.textContent = "Fainted";
  } else {
    slot3.textContent = userPokemon[2].name;
  }
  if (userPokemon[3] === undefined) {
    slot4.textContent = "Fainted";
  } else {
    slot4.textContent = userPokemon[3].name;
  }
};

let cpuTurn = function () {
  if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 0
  ) {
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Psychic`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(psychic);
      console.log("me");
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Leech Seed`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(leechSeed);
      console.log("me");
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Grass Knot`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(grassKnot);
      console.log("me");
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Glare`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(glare);
    }
  } else if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 1
  ) {
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Dragon Claw`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      setTimeout(calcDamage(dragonClaw), 1000);
      console.log("test");
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Roar`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      setTimeout(calcDamage(roar), 1000);
      console.log("test");
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Night Slash`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      setTimeout(calcDamage(nightSlash), 1000);
      console.log("test");
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Dragon Tail`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      setTimeout(calcDamage(dragonTail), 1000);
      console.log("test");
    }
  } else if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 2
  ) {
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Meteor Strike`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(meteorStrike);
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Wing Attack`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(wingAttack);
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Earthquake`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(earthquake);
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Harden`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(harden);
    }
  } else if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 3
  ) {
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Ice Rush`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(iceRush);
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Blizzard`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(blizzard);
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Surf`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(surf);
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Aqua Veil`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(aquaVeil);
    }
  } else {
    console.log(
      "remove current pokemon from array and randomly select a new one"
    );
    faintedCPU();
  }
};

let resetMenu = function () {
  document.querySelector("#action-box div").style.flexBasis = `50%`;
  document.querySelector("#action-box div").style.marginTop = `0px`;
  slot1.textContent = "Fight";
  slot2.textContent = "Pokemon";
  slot3.textContent = "Bag";
  slot4.textContent = "Run";
  mainTree = 0;
  turnCounter = 0;
  console.log("test");
  document
    .querySelector("#user-pokemon img")
    .classList.remove("userAttackAnimation");
  document.querySelector("#user-pokemon img").classList.remove("damageFlicker");
  document.querySelector("#cpu-pokemon img").classList.remove("damageFlicker");
};

let title = document.querySelector("#title");
let description = document.querySelector("#description");

let mouseOver = function () {
  if (slot1.textContent === "Night Slash") {
    title.textContent = "Night Slash";
    description.textContent =
      "The user slashes the foe the instant an opportunity arises. It has a high critical-hit ratio.";
    console.log("test");
  }
};

let mouseOver2 = function () {
  if (slot2.textContent === "Roar") {
    title.textContent = "Roar";
    description.textContent =
      "The target is scared off and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.";
  }
};

let mouseOver3 = function () {
  if (slot3.textContent === "Quick Attack") {
    title.textContent = "Quick Attack";
    description.textContent = "uwu";
  }
};

let mouseOver4 = function () {
  if (slot4.textContent === "Fairy Wind") {
    title.textContent = "Fairy Wind";
    description.textContent = "asdfsef";
  }
};

let mouseLeave = function () {
  title.textContent = `What will ${userPokemon[currentUserPokemon].name} do?`;
  description.textContent = "";
};
