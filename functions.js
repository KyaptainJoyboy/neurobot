// --- Global Variables ---
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

const creativeProducts = ["video", "poem", "story", "haiku", "drawing", "comic strip", "song", "photograph"];
const themes = ["trees", "dragons", "nature", "friendship", "adventure", "the moon", "memories", "magic", "oceans", "mysteries"];
const styles = ["funny", "heartfelt", "serious", "whimsical", "dramatic", "uplifting", "nostalgic", "playful"];

let breathCount = 0;
let moodChart = null;

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
      return {...userData, ...parsedData };
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
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
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

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Function to generate a new daily challenge
  function wellnessQuest() {
    console.log("wellnessQuest function called");
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

    const randomIndex = Math.floor(Math.random() * challenges.length);
    const newChallenge = challenges[randomIndex];
    const challengeTextElement = document.getElementById('challenge-display');
    if (challengeTextElement) {
      console.log("challenge-text element found in the DOM");
      challengeTextElement.innerText = newChallenge;
    } else {
      console.error("challenge-text element not found in the DOM");
    }
  }

  // Event listener for the wellness quest button
  const wellnessQuestBtn = document.getElementById('wellness-quest-btn');
  if (wellnessQuestBtn) {
    console.log("wellness-quest-btn found in the DOM");
    wellnessQuestBtn.addEventListener('click', wellnessQuest);
  } else {
    console.error("wellness-quest-btn not found in the DOM");
  }

  // Event listener for the new challenge button
  const newChallengeBtn = document.getElementById('new-challenge-btn');
  if (newChallengeBtn) {
    console.log("new-challenge-btn found in the DOM");
    newChallengeBtn.addEventListener('click', wellnessQuest);
  } else {
    console.error("new-challenge-btn not found in the DOM");
  }

  userData = loadUserData();
  renderMoodGraph();
  console.log("Website initialized with User Data", userData);
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
let timerInterval;
let remainingTime = 25 * 60; // Default 25 minutes in seconds


// Function to start Self-care Scheduler Timer
function startSelfCareTimer() {
    const customTimeInput = document.getElementById('custom-time-input');
    if (customTimeInput.value) {
        remainingTime = parseInt(customTimeInput.value, 10) * 60; // Convert minutes to seconds
    }
    if (timerInterval) return; // Prevent multiple intervals
    document.getElementById('timer-display').innerText = formatTime(remainingTime);
    timerInterval = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            document.getElementById('timer-display').innerText = formatTime(remainingTime);
        } else {
            stopTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    remainingTime = 25 * 60; // Reset to 25 minutes
    document.getElementById('timer-display').innerText = formatTime(remainingTime);
    document.getElementById('custom-time-input').value = ''; // Clear the custom time input
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