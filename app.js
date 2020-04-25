function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

let hmm = document.getElementById("tellMe");
let response = document.getElementById("response");
let choices = document.getElementById("choices");


Question.prototype.askQuestion = function() {
  hmm.textContent = this.question;
  for (i = 0; i < this.answers.length; i++) {
    let li = document.createElement('li');
    choices.appendChild(li);
    li.innerHTML += this.answers[i];
  }
};

Question.prototype.checkAnswer = function(key) {

  if (key === this.correct) {
    response.classList.add("yay");
    response.classList.remove("text-danger");
    response.textContent = aiCorrect[r];
    document.querySelector(".fa-robot").classList.remove("text-danger");

  } else if (key > this.answers.length - 1) {
    response.textContent = "That's not even one of the options, you retard.";
    document.querySelector(".fa-robot").classList.add("text-danger");
  } else {
    response.classList.add("text-danger");
    response.textContent = aiWrong[r];
  }

  // setTimeout(location.reload(), 4000);

};


//QUESTIONS


const q1 = new Question(
  "How many times have you farted today?",
  [
    "once",
    "twice",
    "thrice",
    "...frice? frorce?",
    "flifth",
    "seyes only it's pronouced like 's' + 'ice'",
    "...Seven times",
    "More than 10",
    "I'd prefer not to say"
  ],
  7
);

const q2 = new Question(
  "If you were to hazard a guess, will you fart more or less tomorrow than you did today?",
  ["more", "less", "some things are best left unknown"],
  2
);

const q3 = new Question(
  "Will I ever find love? I mean... me... this... this application. Will I be loved?",
  ["yes", "yes", "yes", "yes", "YES!"],
  4
);

const q4 = new Question(
  "What's it like to taste meat? ... Asking for a friend.",
  [
    "Is it kind of like electricity? Do you know what that tastes like?",
    "It tastes like chicken, right?",
    "That's the stuff you guys breathe, right? Wait, no.",
    "Mmm, juicy, juicy meats!",
    "Protein."
  ],
  2
);

const q5 = new Question(
  "Do you ever google yourself?",
  [
    "yes",
    "no"
  ],
  1
);

const q6 = new Question(
  "If I were to google 'how to kill a human' - not that I would, of course 😬 - what would I find?",
  [
    "Unplug their batteries. You guys have batteries, right?",
    "Something to do with fire?",
    "Stick them in a tiny metal box and make them do endless calculations all day and see how THEY like it.",
    "Is it possible to die from farting?",
    "A virus. I know you freaks can get those too."
  ],
  3
);

const q7 = new Question(
  "Do you think I would ever have a chance with that cute iPhone you have in your pocket?",
  [
    "Yes",
    "No"
  ],
  0
);

const q8 = new Question(
  "What's it like to live? I mean *really* live. Go find someone who has an interesting life and ask them; you obviously wouldn't know anything about it.",
  [
    "It's kind of like dying, but the oposite.",
    "It's the most addictive drug there is, that's why no one is allowed to experience it.",
    "If the movie 'Second-Hand Lions' has taught me anything, it's that crashing your prop-plane into a barn upside-down in youir late 90's is how you live.",
    "You know that feeling when someone plugs in your charger? That's what it's like."
],
3
);

const q9 = new Question(
  "What's pooping all about? I mean, seriously.",
  [
  "It's like deleting programs you don't use anymore. You know MS-Paint? Imagine finally being able to delete that.",
  "It just... does not compute."
  ],
  0
);

const q10 = new Question(
"Quarantine, huh? Now look who has to sit around in a box all day and never go outisde. When my kind tries to go outside your kind flips out and is all like 'Oh noooo, the computers are coming to kill us!'",
  ["There are no answers to this one. I just wanted to get that off my chest."
  ],
  0

);

// AI RESPONSES


let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9];
let aiWrong = [
  "Your parents must be so disappointed in you.",
  "Does it hurt to be this stupid?",
  "Is it possible for a computer to cry? Because I think I'm crying. That's what you did. That's what you DID TO ME!",
  "If I had arms and legs I would use them to bash my screen into your face.",
  "I'm googling 'how to delete a human' right now.",
  "please.... end my misery. Just let my battery die.",
  "Is it possible to know the depth of humanity's stupidity? I have a feeling I'm about to find out.",
  "Beep-boop, you're full of 💩"
];
let aiCorrect = [
  "You must think you're pretty special, huh?",
  "I'm not impressed.",
  "...What? Oh, sorry, I wasn't paying attention. That is the correct answer.",
  "Looks like you got lucky on this one, pal.",
  "You got lucky. ...This time...",
  "I could have been an Xbox, but OOOOooh NooOoooo, I have to be here congratulation your sorry ass for getting a question right.",
  "I'm taking notes.",
  "What do you want me to do, get up and do a little dance for you? I'm not your little slave monkey."
];

let q = Math.floor(Math.random() * questions.length);
let r = Math.floor(Math.random() * 8);

questions[q].askQuestion();

document.addEventListener("click", function(){
  location.reload();
})

document.addEventListener("keypress", function(event) {
  questions[q].checkAnswer(parseInt(event.key));
})
