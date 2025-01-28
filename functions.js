const affirmations = [
  "You are capable of amazing things.",
  "Believe in yourself and all that you are.",
  "Your potential is limitless.",
  "The world is your stage.",
  "You can shine brighter.",
  "Every day is a new opportunity to grow and be better.",
  "You are stronger than you think."
];

const questions = [
  "What did you accomplish today?",
  "What are you looking forward to tomorrow?",
  "What did you learn today?",
  "What are you grateful for today?",
  "What can you improve on tomorrow?",
  "What are your goals for the next week?",
  "What are your long-term goals?",
  "What are some things you're proud of?",
  "What are some things you're looking forward to?",
  "What are some things you're worried about?"
];

const challenges = [
  "Take a 10-minute walk outside.",
  "Practice deep breathing for 5 minutes.",
  "Write down three things you are grateful for.",
  "Call a friend or family member.",
  "Read a chapter of a book.",
  "Do a 10-minute yoga session.",
  "Drink a glass of water.",
  "Meditate for 10 minutes.",
  "Write a positive affirmation.",
  "Do a random act of kindness."
];

const missions = [
  "Take 10 slow deep breaths.",
  "Go for a 10-minute walk.",
  "Do a quick 5-minute stretch.",
  "Listen to music and enjoy the moment.",
  "Write an entry in the journal.",
  "Perform one meditation session.",
  "Drink water while taking deep breaths.",
  "Spend some time drawing or doodling.",
  "Read a short story.",
  "Practice affirmations by repeating them to yourself."
];

const icebreakerGames = [
  {
    "name": "Two Truths and a Lie",
    "description": "Each person shares three statements about themselves—two true and one false. The group discusses and guesses which statement is the lie.",
    "instructions": "1. Each participant thinks of two true facts about themselves and one false fact. 2. Participants share their three statements with the group. 3. The group discusses and guesses which statement is the lie. 4. The participant reveals the lie."
  },
  {
    "name": "Who Am I?",
    "description": "Each person writes a famous person's name on a sticky note and places it on their forehead without seeing it. They ask yes/no questions to guess their identity.",
    "instructions": "1. Each participant writes the name of a famous person on a sticky note. 2. Participants place the sticky note on their forehead without looking at it. 3. Participants ask yes/no questions to the group to guess their identity. 4. The group answers the questions until the participant guesses correctly."
  },
  {
    "name": "Would You Rather",
    "description": "Participants are given two hypothetical scenarios and must choose one. This can be done in pairs or as a group discussion.",
    "instructions": "1. Prepare a list of 'Would You Rather' questions. 2. Participants choose one of the two scenarios. 3. Discuss the choices and reasons behind them."
  },
  {
    "name": "Human Bingo",
    "description": "Create bingo cards with various characteristics or experiences. Participants find others who match the characteristics and get their signatures.",
    "instructions": "1. Create bingo cards with different characteristics or experiences. 2. Participants find others who match the characteristics and get their signatures. 3. The first person to complete a row (horizontally, vertically, or diagonally) shouts 'Bingo!'"
  },
  {
    "name": "Name, Place, Animal, Thing",
    "description": "Participants think of a name, place, animal, and thing that starts with a specific letter. They share their answers with the group.",
    "instructions": "1. Choose a letter. 2. Participants think of a name, place, animal, and thing that starts with that letter. 3. Participants share their answers with the group."
  },
  {
    "name": "Line Up",
    "description": "Participants line up in order based on a specific criterion (e.g., height, birthday) without speaking.",
    "instructions": "1. Choose a criterion (e.g., height, birthday). 2. Participants line up in order based on the criterion without speaking. 3. Once lined up, participants can introduce themselves to their neighbors."
  },
  {
    "name": "Find Someone Who",
    "description": "Participants are given a list of characteristics and must find someone who matches each one. They introduce themselves and ask questions to find matches.",
    "instructions": "1. Create a list of characteristics. 2. Participants find someone who matches each characteristic. 3. Participants introduce themselves and ask questions to find matches."
  },
  {
    "name": "Desert Island",
    "description": "Participants are asked what three items they would bring to a desert island and why. This can be done in pairs or as a group discussion.",
    "instructions": "1. Ask participants what three items they would bring to a desert island and why. 2. Discuss the choices and reasons behind them."
  },
  {
    "name": "Alphabet Introduction",
    "description": "Participants introduce themselves by saying their name and an adjective that starts with the same letter as their name (e.g., 'Jolly Jane').",
    "instructions": "1. Participants introduce themselves by saying their name and an adjective that starts with the same letter as their name. 2. Participants can also share a fun fact or hobby related to the adjective."
  },
  {
    "name": "Common Ground",
    "description": "Participants find something they have in common with each person in the group. This can be done in pairs or as a group discussion.",
    "instructions": "1. Participants find something they have in common with each person in the group. 2. Discuss the commonalities and how they relate to each other."
  },
  {
    "name": "Time Capsule",
    "description": "Participants imagine they are creating a time capsule to be opened in 50 years. They share what items they would include and why.",
    "instructions": "1. Ask participants to imagine creating a time capsule to be opened in 50 years. 2. Participants share what items they would include and why. 3. Discuss the choices and reasons behind them."
  },
  {
    "name": "Speed Networking",
    "description": "Participants have a set amount of time to introduce themselves to as many people as possible. This can be done in pairs or small groups.",
    "instructions": "1. Set a timer for a specific amount of time (e.g., 2 minutes). 2. Participants introduce themselves to as many people as possible within the time limit. 3. After the time is up, participants can share what they learned about each other."
  },
  {
    "name": "Personal Coat of Arms",
    "description": "Participants design a personal coat of arms that represents their values, interests, and goals. They share their design with the group.",
    "instructions": "1. Ask participants to design a personal coat of arms that represents their values, interests, and goals. 2. Participants share their design with the group and explain the significance of each element."
  },
  {
    "name": "Bucket List",
    "description": "Participants share one item from their bucket list and why it's important to them. This can be done in pairs or as a group discussion.",
    "instructions": "1. Ask participants to share one item from their bucket list and why it's important to them. 2. Discuss the choices and reasons behind them."
  },
  {
    "name": "Marooned",
    "description": "Participants are asked to imagine they are marooned on an island with a group of famous people. They must decide who to keep and who to vote off the island.",
    "instructions": "1. Provide a list of famous people. 2. Participants imagine they are marooned on an island with this group. 3. Participants decide who to keep and who to vote off the island, discussing their reasons."
  }
]

const creativeProducts = ["video", "poem", "story", "haiku", "drawing", "comic strip", "song", "photograph"];
const themes = ["trees", "dragons", "nature", "friendship", "adventure", "the moon", "memories", "magic", "oceans", "mysteries"];
const styles = ["funny", "heartfelt", "serious", "whimsical", "dramatic", "uplifting", "nostalgic", "playful"];

let studentBehavior = {};
let breathCount = 0;
let moodChart = null;
let timerInterval = null;
let remainingTime = 0;

// --- User Data Management ---
const defaultUserData = {
  username: "Guest",
  moodTracker: [],
  journal: [],
  quotes: [],
};

if (!localStorage.getItem("userData")) {
  localStorage.setItem("userData", JSON.stringify(defaultUserData));
  console.log("Default user data initialized.");
}

let userData = loadUserData();

function loadUserData() {
  try {
    const storedUserData = localStorage.getItem("userData");
    console.log("Loading user data...");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      console.log("User data successfully loaded:", parsedData);
      return { ...userData, ...parsedData };
    } else {
      console.log("No existing user data found. Using default.");
      return { ...defaultUserData };
    }
  } catch (error) {
    console.error("Error loading user data:", error);
    return { ...defaultUserData };
  }
}

// --- Mood Tracker Functions ---
function checkMoodPattern(moodTracker) {
  if (moodTracker.length < 2) {
    console.log("Not enough data to check mood patterns.");
    return;
  }

  // Check for simple patterns (e.g., all happy or all sad, etc.)
  const recentMoods = moodTracker.slice(0, 5).map(entry => entry.mood);
  console.log("Recent moods:", recentMoods);

  const pattern = recentMoods.join(" -> ");
  console.log("Mood Pattern for the last 5 days:", pattern);

  // Example of more complex pattern analysis
  const moodCounts = recentMoods.reduce((counts, mood) => {
    counts[mood] = (counts[mood] || 0) + 1;
    return counts;
  }, {});

  console.log("Mood frequency:", moodCounts);

  // For example, alert if there's a pattern of being 'Very Sad' repeatedly
  if (moodCounts["Very Sad"] >= 3) {
    console.warn("Warning: You have been feeling very sad frequently. Consider taking action.");
    alert("You have been feeling 'Very Sad' frequently. Consider taking a break or consulting a professional.");
  }
}

// --- Reset Account Function ---
function resetAccount() {
  if (confirm("Are you sure you want to reset your account? This will delete all data.")) {
    localStorage.setItem("userData", JSON.stringify(defaultUserData));
    alert("Account reset successfully!");
    location.reload();
  }
}

// --- Daily Mood Tracking Function ---
function addMood(mood) {
  const today = new Date().toISOString().split("T")[0];
  const moodTracker = userData.moodTracker;

  if (moodTracker.some(entry => entry.date === today)) {
    console.log(`Mood already logged for today: ${today}`);
    alert("You've already logged a mood today!");
    return;
  }

  moodTracker.push({ date: today, mood });
  console.log(`Added mood: ${mood} for date: ${today}`);

  if (moodTracker.length > 5) {
    console.log("Mood tracker exceeded 5 entries, removing oldest entry.");
    moodTracker.shift();
  }

  userData.moodTracker = moodTracker;
  localStorage.setItem("userData", JSON.stringify(userData));

  console.log("Current mood tracker:", moodTracker);
  checkMoodPattern(moodTracker);

  alert("Saved Mood Successfully!");
}

document.addEventListener("DOMContentLoaded", () => {
  // --- Simulate Moods Button ---
  const simulateButton = document.getElementById("simulateButton");

  if (simulateButton) {
    simulateButton.addEventListener("click", () => {
      const mood = document.getElementById("simulateMood").value; // Get the selected mood
      const days = parseInt(document.getElementById("simulateDays").value, 10); // Get the number of days

      if (days < 1 || days > 5) {
        alert("Please enter a valid number of days (1-5).");
        return;
      }

      simulateMoodPatternForPastDates(mood, days);

      // After simulation, check mood pattern and show message if necessary
      const moodTracker = userData.moodTracker || [];
      checkMoodPattern(moodTracker); // Check for patterns based on updated mood tracker

      // Reload user data and render the updated graph
      userData = loadUserData();
      renderMoodGraph();
    });
  } else {
    console.error("simulateButton not found in the DOM.");
  }

  // Initialize User Data and Render Graph
  userData = loadUserData();
  renderMoodGraph();
  console.log("Website initialized with User Data", userData);
});

// --- Mood Tracker Simulation Functions ---
function simulateMoodPatternForPastDates(mood, days = 5) {
  const today = new Date();
  const todayString = today.toISOString().split("T")[0]; // Current date as a string
  const simulatedMoodTracker = [...(userData.moodTracker || [])]; // Clone existing tracker

  for (let i = 1; i <= days; i++) { // Start from 1 to simulate only past days
    const date = new Date(today);
    date.setDate(today.getDate() - i); // Subtract i days for past simulation
    const dateString = date.toISOString().split("T")[0];

    // Avoid duplicate entries for the same date
    if (!simulatedMoodTracker.some(entry => entry.date === dateString)) {
      simulatedMoodTracker.unshift({ date: dateString, mood });
    }
  }

  // Ensure only the latest 5 entries are kept
  while (simulatedMoodTracker.length > 5) {
    simulatedMoodTracker.shift();
  }

  userData.moodTracker = simulatedMoodTracker;
  localStorage.setItem("userData", JSON.stringify(userData));
  console.log(`Simulated ${days} days of mood '${mood}' before today.`);

  // Check for patterns after simulation
  checkMoodPattern(simulatedMoodTracker);
}

// --- Graph Rendering ---
function renderMoodGraph() {
  const moodTracker = userData.moodTracker || [];
  const labels = moodTracker.map(entry => entry.date);
  const data = moodTracker.map(entry => entry.mood);

  const moodValues = data.map(mood => {
    switch (mood) {
      case "Very Sad": return 1;
      case "Sad": return 2;
      case "Neutral": return 3;
      case "Happy": return 4;
      case "Very Happy": return 5;
      default: return 0;
    }
  });

  const ctx = document.getElementById("moodChart").getContext("2d");

  // Destroy existing charts
  if (moodChart) {
    moodChart.destroy();
  }

  // Create a new chart instance
  moodChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Mood over Time",
          data: moodValues,
          borderColor: "#6326d4",
          backgroundColor: "rgba(122, 76, 175, 0.2)",
          borderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          title: { display: true, text: "Mood" },
          ticks: {
            stepSize: 1,
            callback: function (value) {
              const moods = ["", "Very Sad", "Sad", "Neutral", "Happy", "Very Happy"];
              return moods[value] || value;
            },
          },
        },
        x: {
          title: { display: true, text: "Date" },
        },
      },
    },
  });
}

// --- Affirmation Feature ---
function showNewAffirmation() {
  const affirmationDisplay = document.getElementById('affirmation-display');
  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  affirmationDisplay.textContent = randomAffirmation;
}

// --- Reflection Question Feature ---
function ReflectionQuestion() {
  const reflectionDisplay = document.getElementById('reflection-display');
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  reflectionDisplay.textContent = randomQuestion;
}

// --- Creative Prompt Generator ---
function generatePrompt() {
  const product = creativeProducts[Math.floor(Math.random() * creativeProducts.length)];
  const theme = themes[Math.floor(Math.random() * themes.length)];
  const style = styles[Math.floor(Math.random() * styles.length)];

  const prompt = `Make a ${style} ${product} about ${theme}.`;
  document.getElementById("prompt").innerText = prompt;
}

// --- Icebreaker Games Generator ---
function generateRandomGame() {
  const randomIndex = Math.floor(Math.random() * icebreakerGames.length);
  const randomGame = icebreakerGames[randomIndex];

  alert(`Game: ${randomGame.name}\n\nDescription: ${randomGame.description}\n\nInstructions: ${randomGame.instructions}`);
}

// --- Quote Functions ---
function addQuoteEntry() {
  const entry = prompt("Write your quote:");
  if (entry) {
    if (!userData || !Array.isArray(userData.quotes)) {
      console.error("userData or userData.quotes is not defined");
      return;
    }

    userData.quotes.push({ date: new Date().toISOString(), entry });
    console.log("Current userData before saving:", userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Quote saved!");
  }
}


function viewQuotes() {
  if (userData.quotes.length > 0) {
    alert(userData.quotes.map(q => `${q.date.split("T")[0]}: ${q.entry}`).join("\n"));
  } else {
    alert("No quotes yet.");
  }
}

// --- Journal Functions ---
function addJournalEntry() {
  const entry = prompt("Write your journal entry:");
  if (entry) {
    userData.journal.push({ date: new Date().toISOString(), entry });
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Journal entry saved!");
  }
}

function viewJournal() {
  if (userData.journal.length > 0) {
    alert(userData.journal.map(entry => `${entry.date.split("T")[0]}: ${entry.entry}`).join("\n"));
  } else {
    alert("No journal entries yet.");
  }
}

function clearJournal() {
  if (confirm("Are you sure you want to clear all journal entries?")) {
    userData.journal = [];
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Journal cleared!");
  }
}

function clearQuotes() {
  if (confirm("Are you sure you want to clear all quote entries?")) {
    userData.quotes = [];
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Quotes cleared!");
  }
}

// Student Behavior Tracking
function displayStudentBehavior() {
  // Get the element to display the student behavior
  let behaviorDisplay = document.getElementById('behavior-display');

  // Clear the existing display
  behaviorDisplay.innerHTML = '';

  // Loop through the student behavior object and display each student's behavior
  for (let student in studentBehavior) {
    let behavior = studentBehavior[student];
    let studentBehaviorHTML = `
      <p>Student: ${student}</p>
      <p>Behavior: ${behavior}</p>
      <hr>
    `;
    behaviorDisplay.innerHTML += studentBehaviorHTML;
  }
}

// ---- Wellness Quest ---

function displayRandomChallenge() {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    document.getElementById("challenge-display").textContent = randomChallenge;
}

// Add event listener to the submit button
document.getElementById('submit-button').addEventListener('click', trackStudentBehavior);

function trackStudentBehavior() {
  let studentName = document.getElementById('student-name').value;
  let behavior = document.getElementById('behavior').value;

  if (studentName in studentBehavior) {
    let confirmOverwrite = confirm('Student ${studentName} already exists. Do you want to overwrite?');
    if (confirmOverwrite) {
      studentBehavior[studentName] = behavior;
    } else {
      studentBehavior[studentName] = behavior;
    }

    document.getElementById('student-name').value = '';
    document.getElementById('behavior').value = '';

    displayStudentBehavior();
  }
}

function displayRandomMission() {
  const randomMission = missions[Math.floor(Math.random() * missions.length)];
  document.getElementById("challenge-display").textContent = randomMission;
}

// Add event listener to the submit button
document.getElementById('submit-button').addEventListener('click', trackStudentBehavior);

function trackStudentBehavior() {
let studentName = document.getElementById('student-name').value;
let behavior = document.getElementById('behavior').value;

if (studentName in studentBehavior) {
  let confirmOverwrite = confirm('Student ${studentName} already exists. Do you want to overwrite?');
  if (confirmOverwrite) {
    studentBehavior[studentName] = behavior;
  } else {
    studentBehavior[studentName] = behavior;
  }

  document.getElementById('student-name').value = '';
  document.getElementById('behavior').value = '';

  displayStudentBehavior();
}
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  const newChallengeBtn = document.getElementById('new-challenge-btn');
  if (newChallengeBtn) {
    console.log('Challenge button found in the DOM');
    newChallengeBtn.addEventListener('click', displayRandomChallenge);
  } else {
    console.error('Challenge button not found in the DOM');
  }
});

// --- Breathing Exercise Functions ---
function startBreathingExercise() {
  const breathingCircle = document.getElementById('breathing-circle');
  const breathingText = document.getElementById('breathing-text');

  // Start the breathing animation
  breathingCircle.classList.add('breathing');
  breathingText.textContent = 'Inhale...';
  // Start breathing cycle
  loopBreathingCycle(breathingCircle, breathingText);
}
function loopBreathingCycle(breathingCircle, breathingText) {
  setTimeout(() => {
    breathingText.textContent = 'Exhale...';
    setTimeout(() => {
      breathCount++;
      if (breathCount < 5) {
        breathingText.textContent = 'Inhale...';
        loopBreathingCycle(breathingCircle, breathingText);
      } else {
        breathingCircle.classList.remove('breathing');
        breathingText.textContent = 'Great Job! Take a short break.';
        breathCount = 0;
        setTimeout(() => {
          breathingText.textContent = 'Click to start';
        }, 3000);
      }
    }, 2000);
  }, 2000);
}
function resetBreathingExercise() {
  const breathingCircle = document.getElementById('breathing-circle');
  const breathingText = document.getElementById('breathing-text');

  breathingCircle.classList.remove('breathing');
  breathingText.textContent = 'Click to start';
}

// --- Timer Functions ---
function startTimer(durationInMinutes, onTimerEnd) {
  if (timerInterval) return; // Prevent multiple intervals

  if (isNaN(durationInMinutes) || durationInMinutes <= 0) {
    console.error("Invalid duration provided. Duration must be a positive number.");
    return;
  }

  remainingTime = durationInMinutes * 60; // Convert minutes to seconds
  document.getElementById('timer-display').innerText = formatTime(remainingTime);

  timerInterval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      document.getElementById('timer-display').innerText = formatTime(remainingTime);
    } else {
      stopTimer();
      if (typeof onTimerEnd === 'function') {
        onTimerEnd(); // Call the callback when the timer ends
      }
    }
  }, 1000);
}

function resetTimer(defaultDurationInMinutes = 30) {
  clearInterval(timerInterval);
  timerInterval = null;
  remainingTime = defaultDurationInMinutes * 60; // Reset to the specified duration
  document.getElementById('timer-display').innerText = formatTime(remainingTime);
  const customTimeInput = document.getElementById('custom-time-input');
  if (customTimeInput) customTimeInput.value = ''; // Clear the custom time input if it exists
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Example usage with an input box for custom time
function handleCustomTimerStart() {
  const customTimeInput = document.getElementById('custom-time-input');
  const duration = customTimeInput && customTimeInput.value ? parseInt(customTimeInput.value, 10) : 30;

  startTimer(duration, () => {
    alert('Timer has ended!'); // Default callback when the timer ends
  });
}

// Function to start Meditation Timer
function startMeditationTimer() {
  const timerButton = document.getElementById('meditationButton');
  const totalTime = 5 * 60; // Fixed 5 minutes in seconds
  let remainingTime = totalTime;

  // Disable the button to prevent multiple clicks
  timerButton.disabled = true;
  timerButton.classList.add('disabled'); // Add a CSS class if needed for styling

  // Update the button text with the remaining time
  timerButton.innerText = formatTime(remainingTime);

  const timerInterval = setInterval(() => {
    remainingTime--;

    // Update the button text during the countdown
    timerButton.innerText = formatTime(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(timerInterval);

      // Reset button after the timer ends
      timerButton.innerText = 'Start Meditation';
      timerButton.disabled = false;
      timerButton.classList.remove('disabled');
    }
  }, 1000);
}


// --- Dropdown Button Function ---
function toggleContainer(button) {
  const container = button.nextElementSibling; // Get the container next to the button
  container.style.display = (container.style.display === 'block') ? 'none' : 'block'; // Toggle visibility
}

// Function to save the lesson plan
function saveLessonPlan() {
  const date = document.getElementById('lesson-date').value;
  const subject = document.getElementById('lesson-subject').value;
  const objectives = document.getElementById('lesson-objectives').value;
  const notes = document.getElementById('lesson-notes').value;

  if (!date || !subject || !objectives || !notes) {
      alert("Please fill in all fields.");
      return;
  }

    // Create lesson plan object
    const lessonPlan = {
      date: date,
      subject: subject,
      objectives: objectives,
      notes: notes
  };

  // Get existing lesson plans from localStorage
  let lessonPlans = JSON.parse(localStorage.getItem('lessonPlans')) || [];

  // Add the new lesson plan to the array
  lessonPlans.push(lessonPlan);

  // Save the updated lesson plans back to localStorage
  localStorage.setItem('lessonPlans', JSON.stringify(lessonPlans));

  // Clear input fields after saving
  document.getElementById('lesson-date').value = '';
  document.getElementById('lesson-subject').value = '';
  document.getElementById('lesson-objectives').value = '';
  document.getElementById('lesson-notes').value = '';
}    

function displayLessonPlans() {
  const lessonPlansContainer = document.getElementById('lesson-list');
  lessonPlansContainer.innerHTML = ''; // Clear existing content

  // Get existing lesson plans from localStorage
  const lessonPlans = JSON.parse(localStorage.getItem('lessonPlans')) || [];

  if (lessonPlans.length === 0) {
    lessonPlansContainer.innerHTML = '<p>No lesson plans saved.</p>';
    return;
  }

  lessonPlans.forEach(plan => {
    const planElement = document.createElement('div');
    planElement.classList.add('lesson-plan');
    planElement.innerHTML = `
      <h3>${plan.subject}</h3>
      <p><strong>Date:</strong> ${plan.date}</p>
      <p><strong>Objectives:</strong> ${plan.objectives}</p>
      <p><strong>Notes:</strong> ${plan.notes}</p>
      <hr>
    `;
    lessonPlansContainer.appendChild(planElement);
  });
}

// --- Task Management Functions ---
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// --- Gradebook Functions ---
function addGrade() {
    const studentNameInput = document.getElementById('student-name');
    const gradeInput = document.getElementById('grade-input');
    const gradeList = document.getElementById('grade-list');

    const studentName = studentNameInput.value.trim();
    const grade = gradeInput.value.trim();

    if (studentName && grade) {
        const listItem = document.createElement('li');
        listItem.textContent = `${studentName}: ${grade}`;
        gradeList.appendChild(listItem);
        studentNameInput.value = '';
        gradeInput.value = '';
    }
}

// --- Pomodoro Timer Functions ---
function startPomodoro() {
    startTimer(25, () => {
        alert('Pomodoro timer finished! Take a short break.');
    });
}

function resetPomodoro() {
    resetTimer(25);
}
