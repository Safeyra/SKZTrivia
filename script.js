const trivia = [
  {
    question: "What is the name of Stray Kids' debut album?",
    answers: ["I Am NOT", "Clé 1: MIROH", "Go Live", "IN LIFE"],
    correct: "I Am NOT"
  },
  {
    question: "Who is the leader of Stray Kids?",
    answers: ["Bang Chan", "Lee Know", "Changbin", "Hyunjin"],
    correct: "Bang Chan"
  },
  {
    question: "Which member is known for his unique deep voice and dancing skills?",
    answers: ["Felix", "Han", "Seungmin", "I.N"],
    correct: "Felix"
  },
  {
    question: "What does the name 'Stray Kids' signify?",
    answers: [
      "Lost children finding their way",
      "Kids who stray from school",
      "A stray dog mascot",
      "A fantasy story"
    ],
    correct: "Lost children finding their way"
  },
  {
    question: "Which Stray Kids member is the main producer and composer?",
    answers: ["Bang Chan", "Changbin", "Han", "Hyunjin"],
    correct: "Bang Chan"
  },
  {
    question: "What year did Stray Kids officially debut?",
    answers: ["2017", "2018", "2016", "2019"],
    correct: "2018"
  },
  {
    question: "Which of these songs is NOT a Stray Kids title track?",
    answers: ["God's Menu", "Back Door", "Miroh", "Ddu-Du Ddu-Du"],
    correct: "Ddu-Du Ddu-Du"
  },
  {
    question: "Which member’s stage name is 'Lee Know'?",
    answers: ["Minho", "Seungmin", "I.N", "Changbin"],
    correct: "Minho"
  }
];


const gachaPool = [
  // Bang Chan
  { name: "Bang Chan", rarity: "Common", albumEra: "I Am NOT", weight: 10, image: "https://via.placeholder.com/200?text=Chan+Common+I+Am+NOT" },
  { name: "Bang Chan", rarity: "Rare", albumEra: "I Am NOT", weight: 5, image: "https://via.placeholder.com/200?text=Chan+Rare+I+Am+NOT" },
  { name: "Bang Chan", rarity: "Ultra Rare", albumEra: "I Am NOT", weight: 2, image: "https://via.placeholder.com/200?text=Chan+UltraRare+I+Am+NOT" },

  { name: "Bang Chan", rarity: "Common", albumEra: "Clé 1: MIROH", weight: 10, image: "https://via.placeholder.com/200?text=Chan+Common+MIROH" },
  { name: "Bang Chan", rarity: "Rare", albumEra: "Clé 1: MIROH", weight: 5, image: "https://via.placeholder.com/200?text=Chan+Rare+MIROH" },
  { name: "Bang Chan", rarity: "Ultra Rare", albumEra: "Clé 1: MIROH", weight: 2, image: "https://via.placeholder.com/200?text=Chan+UltraRare+MIROH" },

  { name: "Bang Chan", rarity: "Common", albumEra: "GO LIVE", weight: 10, image: "https://via.placeholder.com/200?text=Chan+Common+GO+LIVE" },
  { name: "Bang Chan", rarity: "Rare", albumEra: "GO LIVE", weight: 5, image: "https://via.placeholder.com/200?text=Chan+Rare+GO+LIVE" },
  { name: "Bang Chan", rarity: "Ultra Rare", albumEra: "GO LIVE", weight: 2, image: "https://via.placeholder.com/200?text=Chan+UltraRare+GO+LIVE" },

  { name: "Bang Chan", rarity: "Common", albumEra: "IN LIFE", weight: 10, image: "https://via.placeholder.com/200?text=Chan+Common+IN+LIFE" },
  { name: "Bang Chan", rarity: "Rare", albumEra: "IN LIFE", weight: 5, image: "https://via.placeholder.com/200?text=Chan+Rare+IN+LIFE" },
  { name: "Bang Chan", rarity: "Ultra Rare", albumEra: "IN LIFE", weight: 2, image: "https://via.placeholder.com/200?text=Chan+UltraRare+IN+LIFE" },

  { name: "Bang Chan", rarity: "Common", albumEra: "THE SOUND", weight: 10, image: "https://via.placeholder.com/200?text=Chan+Common+THE+SOUND" },
  { name: "Bang Chan", rarity: "Rare", albumEra: "THE SOUND", weight: 5, image: "https://via.placeholder.com/200?text=Chan+Rare+THE+SOUND" },
  { name: "Bang Chan", rarity: "Ultra Rare", albumEra: "THE SOUND", weight: 2, image: "https://via.placeholder.com/200?text=Chan+UltraRare+THE+SOUND" },

  // Lee Know
  { name: "Lee Know", rarity: "Common", albumEra: "I Am NOT", weight: 10, image: "https://via.placeholder.com/200?text=LeeKnow+Common+I+Am+NOT" },
  { name: "Lee Know", rarity: "Rare", albumEra: "I Am NOT", weight: 5, image: "https://via.placeholder.com/200?text=LeeKnow+Rare+I+Am+NOT" },
  { name: "Lee Know", rarity: "Ultra Rare", albumEra: "I Am NOT", weight: 2, image: "https://via.placeholder.com/200?text=LeeKnow+UltraRare+I+Am+NOT" },

  { name: "Lee Know", rarity: "Common", albumEra: "Clé 1: MIROH", weight: 10, image: "https://via.placeholder.com/200?text=LeeKnow+Common+MIROH" },
  { name: "Lee Know", rarity: "Rare", albumEra: "Clé 1: MIROH", weight: 5, image: "https://via.placeholder.com/200?text=LeeKnow+Rare+MIROH" },
  { name: "Lee Know", rarity: "Ultra Rare", albumEra: "Clé 1: MIROH", weight: 2, image: "https://via.placeholder.com/200?text=LeeKnow+UltraRare+MIROH" },

  { name: "Lee Know", rarity: "Common", albumEra: "GO LIVE", weight: 10, image: "https://via.placeholder.com/200?text=LeeKnow+Common+GO+LIVE" },
  { name: "Lee Know", rarity: "Rare", albumEra: "GO LIVE", weight: 5, image: "https://via.placeholder.com/200?text=LeeKnow+Rare+GO+LIVE" },
  { name: "Lee Know", rarity: "Ultra Rare", albumEra: "GO LIVE", weight: 2, image: "https://via.placeholder.com/200?text=LeeKnow+UltraRare+GO+LIVE" },

  { name: "Lee Know", rarity: "Common", albumEra: "IN LIFE", weight: 10, image: "https://via.placeholder.com/200?text=LeeKnow+Common+IN+LIFE" },
  { name: "Lee Know", rarity: "Rare", albumEra: "IN LIFE", weight: 5, image: "https://via.placeholder.com/200?text=LeeKnow+Rare+IN+LIFE" },
  { name: "Lee Know", rarity: "Ultra Rare", albumEra: "IN LIFE", weight: 2, image: "https://via.placeholder.com/200?text=LeeKnow+UltraRare+IN+LIFE" },

  { name: "Lee Know", rarity: "Common", albumEra: "THE SOUND", weight: 10, image: "https://via.placeholder.com/200?text=LeeKnow+Common+THE+SOUND" },
  { name: "Lee Know", rarity: "Rare", albumEra: "THE SOUND", weight: 5, image: "https://via.placeholder.com/200?text=LeeKnow+Rare+THE+SOUND" },
  { name: "Lee Know", rarity: "Ultra Rare", albumEra: "THE SOUND", weight: 2, image: "https://via.placeholder.com/200?text=LeeKnow+UltraRare+THE+SOUND" },

  // Changbin
  { name: "Changbin", rarity: "Common", albumEra: "I Am NOT", weight: 10, image: "https://via.placeholder.com/200?text=Changbin+Common+I+Am+NOT" },
  { name: "Changbin", rarity: "Rare", albumEra: "I Am NOT", weight: 5, image: "https://via.placeholder.com/200?text=Changbin+Rare+I+Am+NOT" },
  { name: "Changbin", rarity: "Ultra Rare", albumEra: "I Am NOT", weight: 2, image: "https://via.placeholder.com/200?text=Changbin+UltraRare+I+Am+NOT" },

  { name: "Changbin", rarity: "Common", albumEra: "Clé 1: MIROH", weight: 10, image: "https://via.placeholder.com/200?text=Changbin+Common+MIROH" },
  { name: "Changbin", rarity: "Rare", albumEra: "Clé 1: MIROH", weight: 5, image: "https://via.placeholder.com/200?text=Changbin+Rare+MIROH" },
  { name: "Changbin", rarity: "Ultra Rare", albumEra: "Clé 1: MIROH", weight: 2, image: "https://via.placeholder.com/200?text=Changbin+UltraRare+MIROH" },

  { name: "Changbin", rarity: "Common", albumEra: "GO LIVE", weight: 10, image: "https://via.placeholder.com/200?text=Changbin+Common+GO+LIVE" },
  { name: "Changbin", rarity: "Rare", albumEra: "GO LIVE", weight: 5, image: "https://via.placeholder.com/200?text=Changbin+Rare+GO+LIVE" },
  { name: "Changbin", rarity: "Ultra Rare", albumEra: "GO LIVE", weight: 2, image: "https://via.placeholder.com/200?text=Changbin+UltraRare+GO+LIVE" },

  { name: "Changbin", rarity: "Common", albumEra: "IN LIFE", weight: 10, image: "https://via.placeholder.com/200?text=Changbin+Common+IN+LIFE" },
  { name: "Changbin", rarity: "Rare", albumEra: "IN LIFE", weight: 5, image: "https://via.placeholder.com/200?text=Changbin+Rare+IN+LIFE" },
  { name: "Changbin", rarity: "Ultra Rare", albumEra: "IN LIFE", weight: 2, image: "https://via.placeholder.com/200?text=Changbin+UltraRare+IN+LIFE" },

  { name: "Changbin", rarity: "Common", albumEra: "THE SOUND", weight: 10, image: "https://via.placeholder.com/200?text=Changbin+Common+THE+SOUND" },
  { name: "Changbin", rarity: "Rare", albumEra: "THE SOUND", weight: 5, image: "https://via.placeholder.com/200?text=Changbin+Rare+THE+SOUND" },
  { name: "Changbin", rarity: "Ultra Rare", albumEra: "THE SOUND", weight: 2, image: "https://via.placeholder.com/200?text=Changbin+UltraRare+THE+SOUND" },

  // Hyunjin
  { name: "Hyunjin", rarity: "Common", albumEra: "I Am NOT", weight: 10, image: "https://via.placeholder.com/200?text=Hyunjin+Common+I+Am+NOT" },
  { name: "Hyunjin", rarity: "Rare", albumEra: "I Am NOT", weight: 5, image: "https://via.placeholder.com/200?text=Hyunjin+Rare+I+Am+NOT" },
  { name: "Hyunjin", rarity: "Ultra Rare", albumEra: "I Am NOT", weight: 2, image: "https://via.placeholder.com/200?text=Hyunjin+UltraRare+I+Am+NOT" },

  { name: "Hyunjin", rarity: "Common", albumEra: "Clé 1: MIROH", weight: 10, image: "https://via.placeholder.com/200?text=Hyunjin+Common+MIROH" },
  { name: "Hyunjin", rarity: "Rare", albumEra: "Clé 1: MIROH", weight: 5, image: "https://via.placeholder.com/200?text=Hyunjin+Rare+MIROH" },
  { name: "Hyunjin", rarity: "Ultra Rare", albumEra: "Clé 1: MIROH", weight: 2, image: "https://via.placeholder.com/200?text=Hyunjin+UltraRare+MIROH" },

  { name: "Hyunjin", rarity: "Common", albumEra: "GO LIVE", weight: 10, image: "https://via.placeholder.com/200?text=Hyunjin+Common+GO+LIVE" },
  { name: "Hyunjin", rarity: "Rare", albumEra: "GO LIVE", weight: 5, image: "https://via.placeholder.com/200?text=Hyunjin+Rare+GO+LIVE" },
  { name: "Hyunjin", rarity: "Ultra Rare", albumEra: "GO LIVE", weight: 2, image: "https://via.placeholder.com/200?text=Hyunjin+UltraRare+GO+LIVE" },

  { name: "Hyunjin", rarity: "Common", albumEra: "IN LIFE", weight: 10, image: "https://via.placeholder.com/200?text=Hyunjin+Common+IN+LIFE" },
  { name: "Hyunjin", rarity: "Rare", albumEra: "IN LIFE", weight: 5, image: "https://via.placeholder.com/200?text=Hyunjin+Rare+IN+LIFE" },
  { name: "Hyunjin", rarity: "Ultra Rare", albumEra: "IN LIFE", weight: 2, image: "https://via.placeholder.com/200?text=Hyunjin+UltraRare+IN+LIFE" },

  { name: "Hyunjin", rarity: "Common", albumEra: "THE SOUND", weight: 10, image: "https://via.placeholder.com/200?text=Hyunjin+Common+THE+SOUND" },
  { name: "Hyunjin", rarity: "Rare", albumEra: "THE SOUND", weight: 5, image: "https://via.placeholder.com/200?text=Hyunjin+Rare+THE+SOUND" },
  { name: "Hyunjin", rarity: "Ultra Rare", albumEra: "THE SOUND", weight: 2, image: "https://via.placeholder.com/200?text=Hyunjin+UltraRare+THE+SOUND" },

  // Han
  { name: "Han", rarity: "Common", albumEra: "I Am NOT", weight: 10, image: "https://via.placeholder.com/200?text=Han+Common+I+Am+NOT" },
  { name: "Han", rarity: "Rare", albumEra: "I Am NOT", weight: 5, image: "https://via.placeholder.com/200?text=Han+Rare+I+Am+NOT" },
  { name: "Han", rarity: "Ultra Rare", albumEra: "I Am NOT", weight: 2, image: "https://via.placeholder.com/200?text=Han+UltraRare+I+Am+NOT" },

  { name: "Han", rarity: "Common", albumEra: "Clé 1: MIROH", weight: 10, image: "https://via.placeholder.com/200?text=Han+Common+MIROH" },
  { name: "Han", rarity: "Rare", albumEra: "Clé 1: MIROH", weight: 5, image: "https://via.placeholder.com/200?text=Han+Rare+MIROH" },
  { name: "Han", rarity: "Ultra Rare", albumEra: "Clé 1: MIROH", weight: 2, image: "https://via.placeholder.com/200?text=Han+UltraRare+MIROH" },

  { name: "Han", rarity: "Common", albumEra: "GO LIVE", weight: 10, image: "https://via.placeholder.com/200?text=Han+Common+GO+LIVE" },
  { name: "Han", rarity: "Rare", albumEra: "GO LIVE", weight: 5, image: "https://via.placeholder.com/200?text=Han+Rare+GO+LIVE" },
  { name: "Han", rarity: "Ultra Rare", albumEra: "GO LIVE", weight: 2, image: "https://via.placeholder.com/200?text=Han+UltraRare+GO+LIVE" },

  { name: "Han", rarity: "Common", albumEra: "IN LIFE", weight: 10, image: "https://via.placeholder.com/200?text=Han+Common+IN+LIFE" },
  { name: "Han", rarity: "Rare", albumEra: "IN LIFE", weight: 5, image: "https://via.placeholder.com/200?text=Han+Rare+IN+LIFE" },
  { name: "Han", rarity: "Ultra Rare", albumEra: "IN LIFE", weight: 2, image: "https://via.placeholder.com/200?text=Han+UltraRare+IN+LIFE" },

  { name: "Han", rarity: "Common", albumEra: "THE SOUND", weight: 10, image: "https://via.placeholder.com/200?text=Han+Common+THE+SOUND" },
  { name: "Han", rarity: "Rare", albumEra: "THE SOUND", weight: 5, image: "https://via.placeholder.com/200?text=Han+Rare+THE+SOUND" },
  { name: "Han", rarity: "Ultra Rare", albumEra: "THE SOUND", weight: 2, image: "https://via.placeholder.com/200?text=Han+UltraRare+THE+SOUND" },

  // Felix
  { name: "Felix", rarity: "Common", albumEra: "I Am NOT", weight: 10, image: "https://via.placeholder.com/200?text=Felix+Common+I+Am+NOT" },
  { name: "Felix", rarity: "Rare", albumEra: "I Am NOT", weight: 5, image: "https://via.placeholder.com/200?text=Felix+Rare+I+Am+NOT" },
  { name: "Felix", rarity: "Ultra Rare", albumEra: "I Am NOT", weight: 2, image: "https://via.placeholder.com/200?text=Felix+UltraRare+I+Am+NOT" },

  { name: "Felix", rarity: "Common", albumEra: "Clé 1: MIROH", weight: 10, image: "https://via.placeholder.com/200?text=Felix+Common+MIROH" },
  { name: "Felix", rarity: "Rare", albumEra: "Clé 1: MIROH", weight: 5, image: "https://via.placeholder.com/200?text=Felix+Rare+MIROH" },
  { name: "Felix", rarity: "Ultra Rare", albumEra: "Clé 1: MIROH", weight: 2, image: "https://via.placeholder.com/200?text=Felix+UltraRare+MIROH" },

  { name: "Felix", rarity: "Common", albumEra: "GO LIVE", weight: 10, image: "https://via.placeholder.com/200?text=Felix+Common+GO+LIVE" },
  { name: "Felix", rarity: "Rare", albumEra: "GO LIVE", weight: 5, image: "https://via.placeholder.com/200?text=Felix+Rare+GO+LIVE" },
  { name: "Felix", rarity: "Ultra Rare", albumEra: "GO LIVE", weight: 2, image: "https://via.placeholder.com/200?text=Felix+UltraRare+GO+LIVE" },

  { name: "Felix", rarity: "Common", albumEra: "IN LIFE", weight: 10, image: "https://via.placeholder.com/200?text=Felix+Common+IN+LIFE" },
  { name: "Felix", rarity: "Rare", albumEra: "IN LIFE", weight: 5, image: "https://via.placeholder.com/200?text=Felix+Rare+IN+LIFE" },
  { name: "Felix", rarity: "Ultra Rare", albumEra: "IN LIFE", weight: 2, image: "https://via.placeholder.com/200?text=Felix+UltraRare+IN+LIFE" },

  { name: "Felix", rarity: "Common", albumEra: "THE SOUND", weight: 10, image: "https://via.placeholder.com/200?text=Felix+Common+THE+SOUND" },
  { name: "Felix", rarity: "Rare", albumEra: "THE SOUND", weight: 5, image: "https://via.placeholder.com/200?text=Felix+Rare+THE+SOUND" },
  { name: "Felix", rarity: "Ultra Rare", albumEra: "THE SOUND", weight: 2, image: "https://via.placeholder.com/200?text=Felix+UltraRare+THE+SOUND" },

  // Seungmin
  { name: "Seungmin", rarity: "Common", albumEra: "I Am NOT", weight: 10, image: "https://via.placeholder.com/200?text=Seungmin+Common+I+Am+NOT" },
  { name: "Seungmin", rarity: "Rare", albumEra: "I Am NOT", weight: 5, image: "https://via.placeholder.com/200?text=Seungmin+Rare+I+Am+NOT" },
  { name: "Seungmin", rarity: "Ultra Rare", albumEra: "I Am NOT", weight: 2, image: "https://via.placeholder.com/200?text=Seungmin+UltraRare+I+Am+NOT" },

  { name: "Seungmin", rarity: "Common", albumEra: "Clé 1: MIROH", weight: 10, image: "https://via.placeholder.com/200?text=Seungmin+Common+MIROH" },
  { name: "Seungmin", rarity: "Rare", albumEra: "Clé 1: MIROH", weight: 5, image: "https://via.placeholder.com/200?text=Seungmin+Rare+MIROH" },
  { name: "Seungmin", rarity: "Ultra Rare", albumEra: "Clé 1: MIROH", weight: 2, image: "https://via.placeholder.com/200?text=Seungmin+UltraRare+MIROH" },

  { name: "Seungmin", rarity: "Common", albumEra: "GO LIVE", weight: 10, image: "https://via.placeholder.com/200?text=Seungmin+Common+GO+LIVE" },
  { name: "Seungmin", rarity: "Rare", albumEra: "GO LIVE", weight: 5, image: "https://via.placeholder.com/200?text=Seungmin+Rare+GO+LIVE" },
  { name: "Seungmin", rarity: "Ultra Rare", albumEra: "GO LIVE", weight: 2, image: "https://via.placeholder.com/200?text=Seungmin+UltraRare+GO+LIVE" },

  { name: "Seungmin", rarity: "Common", albumEra: "IN LIFE", weight: 10, image: "https://via.placeholder.com/200?text=Seungmin+Common+IN+LIFE" },
  { name: "Seungmin", rarity: "Rare", albumEra: "IN LIFE", weight: 5, image: "https://via.placeholder.com/200?text=Seungmin+Rare+IN+LIFE" },
  { name: "Seungmin", rarity: "Ultra Rare", albumEra: "IN LIFE", weight: 2, image: "https://via.placeholder.com/200?text=Seungmin+UltraRare+IN+LIFE" },

  { name: "Seungmin", rarity: "Common", albumEra: "THE SOUND", weight: 10, image: "https://via.placeholder.com/200?text=Seungmin+Common+THE+SOUND" },
  { name: "Seungmin", rarity: "Rare", albumEra: "THE SOUND", weight: 5, image: "https://via.placeholder.com/200?text=Seungmin+Rare+THE+SOUND" },
  { name: "Seungmin", rarity: "Ultra Rare", albumEra: "THE SOUND", weight: 2, image: "https://via.placeholder.com/200?text=Seungmin+UltraRare+THE+SOUND" },

  // I.N
  { name: "I.N", rarity: "Common", albumEra: "I Am NOT", weight: 10, image: "https://via.placeholder.com/200?text=IN+Common+I+Am+NOT" },
  { name: "I.N", rarity: "Rare", albumEra: "I Am NOT", weight: 5, image: "https://via.placeholder.com/200?text=IN+Rare+I+Am+NOT" },
  { name: "I.N", rarity: "Ultra Rare", albumEra: "I Am NOT", weight: 2, image: "https://via.placeholder.com/200?text=IN+UltraRare+I+Am+NOT" },

  { name: "I.N", rarity: "Common", albumEra: "Clé 1: MIROH", weight: 10, image: "https://via.placeholder.com/200?text=IN+Common+MIROH" },
  { name: "I.N", rarity: "Rare", albumEra: "Clé 1: MIROH", weight: 5, image: "https://via.placeholder.com/200?text=IN+Rare+MIROH" },
  { name: "I.N", rarity: "Ultra Rare", albumEra: "Clé 1: MIROH", weight: 2, image: "https://via.placeholder.com/200?text=IN+UltraRare+MIROH" },

  { name: "I.N", rarity: "Common", albumEra: "GO LIVE", weight: 10, image: "https://via.placeholder.com/200?text=IN+Common+GO+LIVE" },
  { name: "I.N", rarity: "Rare", albumEra: "GO LIVE", weight: 5, image: "https://via.placeholder.com/200?text=IN+Rare+GO+LIVE" },
  { name: "I.N", rarity: "Ultra Rare", albumEra: "GO LIVE", weight: 2, image: "https://via.placeholder.com/200?text=IN+UltraRare+GO+LIVE" },

  { name: "I.N", rarity: "Common", albumEra: "IN LIFE", weight: 10, image: "https://via.placeholder.com/200?text=IN+Common+IN+LIFE" },
  { name: "I.N", rarity: "Rare", albumEra: "IN LIFE", weight: 5, image: "https://via.placeholder.com/200?text=IN+Rare+IN+LIFE" },
  { name: "I.N", rarity: "Ultra Rare", albumEra: "IN LIFE", weight: 2, image: "https://via.placeholder.com/200?text=IN+UltraRare+IN+LIFE" },

  { name: "I.N", rarity: "Common", albumEra: "THE SOUND", weight: 10, image: "https://via.placeholder.com/200?text=IN+Common+THE+SOUND" },
  { name: "I.N", rarity: "Rare", albumEra: "THE SOUND", weight: 5, image: "https://via.placeholder.com/200?text=IN+Rare+THE+SOUND" },
  { name: "I.N", rarity: "Ultra Rare", albumEra: "THE SOUND", weight: 2, image: "https://via.placeholder.com/200?text=IN+UltraRare+THE+SOUND" },
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
const albumFilter = document.getElementById("album-filter");

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
  const albumEra = albumFilter.value;
  collectionDiv.innerHTML = "";
  collection
    .filter(item => {
      const rarityMatch = rarity === "all" || item.rarity === rarity;
      const characterMatch = character === "all" || item.name === character;
      const albumMatch = albumEra === "all" || item.albumEra === albumEra;
      return rarityMatch && characterMatch && albumMatch;
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
      name.textContent = `${item.rarity}: ${item.name} (${item.albumEra})`;
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

function saveGame() {
  localStorage.setItem("triviaGachaPoints", points);
  localStorage.setItem("triviaGachaCollection", JSON.stringify(collection));
}

rarityFilter.onchange = updateCollectionDisplay;
characterFilter.onchange = updateCollectionDisplay;
albumFilter.onchange = updateCollectionDisplay;

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
