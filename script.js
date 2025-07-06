const trivia = [
  { question: "What is the capital of France?", answers: ["Paris", "London", "Berlin", "Rome"], correct: "Paris" },
  { question: "What’s 5 + 7?", answers: ["10", "12", "14", "11"], correct: "12" }
];

const gachaPool = [
  // Each character has 3 rarities with different images
  { name: "Bang Chan", rarity: "Common", weight: 10, image: "https://via.placeholder.com/200x200.png?text=Bang+Chan+Common" },
  { name: "Bang Chan", rarity: "Rare", weight: 7, image: "https://via.placeholder.com/200x200.png?text=Bang+Chan+Rare" },
  { name: "Bang Chan", rarity: "Ultra Rare", weight: 3, image: "https://via.placeholder.com/200x200.png?text=Bang+Chan+Ultra+Rare" },

  { name: "Lee Know", rarity: "Common", weight: 10, image: "https://via.placeholder.com/200x200.png?text=Lee+Know+Common" },
  { name: "Lee Know", rarity: "Rare", weight: 7, image: "https://via.placeholder.com/200x200.png?text=Lee+Know+Rare" },
  { name: "Lee Know", rarity: "Ultra Rare", weight: 3, image: "https://via.placeholder.com/200x200.png?text=Lee+Know+Ultra+Rare" },

  { name: "Changbin", rarity: "Common", weight: 10, image: "https://via.placeholder.com/200x200.png?text=Changbin+Common" },
  { name: "Changbin", rarity: "Rare", weight: 7, image: "https://via.placeholder.com/200x200.png?text=Changbin+Rare" },
  { name: "Changbin", rarity: "Ultra Rare", weight: 3, image: "https://via.placeholder.com/200x200.png?text=Changbin+Ultra+Rare" },

  { name: "Hyunjin", rarity: "Common", weight: 10, image: "https://via.placeholder.com/200x200.png?text=Hyunjin+Common" },
  { name: "Hyunjin", rarity: "Rare", weight: 7, image: "https://via.placeholder.com/200x200.png?text=Hyunjin+Rare" },
  { name: "Hyunjin", rarity: "Ultra Rare", weight: 3, image: "https://via.placeholder.com/200x200.png?text=Hyunjin+Ultra+Rare" },

  { name: "Han", rarity: "Common", weight: 10, image: "https://via.placeholder.com/200x200.png?text=Han+Common" },
  { name: "Han", rarity: "Rare", weight: 7, image: "https://via.placeholder.com/200x200.png?text=Han+Rare" },
  { name: "Han", rarity: "Ultra Rare", weight: 3, image: "https://via.placeholder.com/200x200.png?text=Han+Ultra+Rare" },

  { name: "Felix", rarity: "Common", weight: 10, image: "https://via.placeholder.com/200x200.png?text=Felix+Common" },
  { name: "Felix", rarity: "Rare", weight: 7, image: "https://via.placeholder.com/200x200.png?text=Felix+Rare" },
  { name: "Felix", rarity: "Ultra Rare", weight: 3, image: "https://via.placeholder.com/200x200.png?text=Felix+Ultra+Rare" },

  { name: "Seungmin", rarity: "Common", weight: 10, image: "https://via.placeholder.com/200x200.png?text=Seungmin+Common" },
  { name: "Seungmin", rarity: "Rare", weight: 7, image: "https://via.placeholder.com/200x200.png?text=Seungmin+Rare" },
  { name: "Seungmin", rarity: "Ultra Rare", weight: 3, image: "https://via.placeholder.com/200x200.png?text=Seungmin+Ultra+Rare" },

  { name: "I.N", rarity: "Common", weight: 10, image: "https://via.placeholder.com/200x200.png?text=I.N+Common" },
  { name: "I.N", rarity: "Rare", weight: 7, image: "https://via.placeholder.com/200x200.png?text=I.N+Rare" },
  { name: "I.N", rarity: "Ultra Rare", weight: 3, image: "https://via.placeholder.com/200x200.png?text=I.N+Ultra+Rare" }
];

let currentQuestion = 0;
let points = 0;
const collection = [];

const pointsDisplay = document.getElementById("points");
const questionDiv = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const gachaResultDiv = document.getElementById("gacha-result");
const collectionDiv = document.getElementById("collection");
const pullSound = document.getElementById("pull-sound");

const rarityFilter = document.getElementById("rarity-filter");
const characterFilter = document.getElementById("character-filter");

function showQuestion() {
  const q = trivia[currentQuestion];
  questionDiv.textContent = q.question;
  answersDiv.innerHTML = "";
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => {
      if (answer === q.correct) points += 3;
      else points = Math.max(0, points - 1);
      pointsDisplay.textContent = points;
      saveGame();
      currentQuestion = (currentQuestion + 1) % trivia.length;
      showQuestion();
    };
    answersDiv.appendChild(btn);
  });
}

function weightedRandom(pool) {
  const total = pool.reduce((sum, item) => sum + item.weight, 0);
  let rnd = Math.random() * total;
  for (const item of pool) {
    if (rnd < item.weight) return item;
    rnd -= item.weight;
  }
}

function showPlusOne(elem) {
  if (!elem) return;
  const plusOne = document.createElement("div");
  plusOne.className = "plus-one";
  plusOne.textContent = "+1";
  elem.appendChild(plusOne);
  setTimeout(() => plusOne.remove(), 1000);
}

function addToCollection(pull) {
  const found = collection.find(c => c.name === pull.name && c.rarity === pull.rarity);
  if (found) {
    found.duplicates = (found.duplicates || 0) + 1;
    if (found.duplicates <= 3) found.glow = found.duplicates;
    else {
      points += 5;
      pointsDisplay.textContent = points;
    }
    const card = [...collectionDiv.children].find(
      el => el.querySelector('.name')?.textContent === `${found.rarity}: ${found.name}`
    );
    showPlusOne(card);
  } else {
    const baseStars = pull.rarity === "Common" ? 3 : pull.rarity === "Rare" ? 4 : 5;
    collection.push({ ...pull, stars: baseStars, glow: 0, duplicates: 0 });
  }
  updateCollectionDisplay();
  saveGame();
}

function updateCollectionDisplay() {
  const rarity = rarityFilter.value;
  const character = characterFilter.value;
  collectionDiv.innerHTML = "";
  collection
    .filter(item => {
      const rarityMatch = rarity === "all" || item.rarity === rarity;
      const characterMatch = character === "all" || item.name === character;
      return rarityMatch && characterMatch;
    })
    .forEach(item => {
      const card = document.createElement("div");
      card.className = `gacha-card glow-${item.glow || 0}`;
      if (item.rarity === "Ultra Rare") {
        const sparkles = document.createElement("div");
        sparkles.className = "sparkles";
        card.appendChild(sparkles);
      }
      const img = document.createElement("img");
      img.src = item.image;
      const name = document.createElement("div");
      name.className = item.rarity.toLowerCase().replace(/ /g, "-");
      name.textContent = `${item.rarity}: ${item.name}`;
      name.classList.add("name");
      if (item.rarity === "Common") name.classList.add("common");
      else if (item.rarity === "Rare") name.classList.add("rare");
      else if (item.rarity === "Ultra Rare") name.classList.add("ultra-rare");
      const stars = document.createElement("div");
      stars.className = "stars";
      stars.textContent = "★".repeat(item.stars);
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(stars);
      collectionDiv.appendChild(card);
    });
}

function displayPull(pull) {
  const card = document.createElement("div");
  card.className = "gacha-card";
  const img = document.createElement("img");
  img.src = pull.image;
  const name = document.createElement("div");
  name.className = pull.rarity.toLowerCase().replace(/ /g, "-");
  name.textContent = `${pull.rarity}: ${pull.name}`;
  name.classList.add("name");
  const plusOne = document.createElement("div");
  plusOne.className = "plus-one";
  plusOne.textContent = "+1";
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(plusOne);
  gachaResultDiv.appendChild(card);
  addToCollection(pull);
}

function performPulls(count) {
  pullSound.currentTime = 0;
  pullSound.play();
  gachaResultDiv.innerHTML = "";
  for (let i = 0; i < count; i++) displayPull(weightedRandom(gachaPool));
}

document.getElementById("pull-btn").onclick = () => {
  if (points >= 5) {
    points -= 5;
    pointsDisplay.textContent = points;
    performPulls(1);
    saveGame();
  } else gachaResultDiv.innerHTML = "<p>Not enough points!</p>";
};

document.getElementById("multi-pull-btn").onclick = () => {
  if (points >= 50) {
    points -= 50;
    pointsDisplay.textContent = points;
    performPulls(10);
    saveGame();
  } else gachaResultDiv.innerHTML = "<p>Not enough points for a multi-pull!</p>";
};

document.getElementById("to-trivia").onclick = () => switchScreen("trivia-screen");
document.getElementById("to-gacha").onclick = () => switchScreen("gacha-screen");
document.getElementById("to-collection").onclick = () => switchScreen("collection-screen");

function switchScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

rarityFilter.onchange = updateCollectionDisplay;
characterFilter.onchange = updateCollectionDisplay;

function loadGame() {
  const savedPoints = localStorage.getItem("triviaGachaPoints");
  if (savedPoints !== null) {
    points = parseInt(savedPoints, 10);
    pointsDisplay.textContent = points;
  }

  const savedCollection = localStorage.getItem("triviaGachaCollection");
  if (savedCollection) {
    try {
      const loaded = JSON.parse(savedCollection);
      if (Array.isArray(loaded)) {
        collection.splice(0, collection.length, ...loaded);
      }
    } catch (e) {
      console.warn("Failed to parse saved collection:", e);
    }
  }
  updateCollectionDisplay();
}

loadGame();
showQuestion();
