const affirmations = [
  "You are capable of amazing things.",
  "Believe in yourself and all that you are.",
  "Your potential is limitless.",
  "The world is your stage.",
  "You can shine brighter.",
  "Every day is a new opportunity to grow and be better.",
  "You are stronger than you think."
];

let breathCount = 0; // Reset # of breaths

// --- Search Topics Function ---
function searchTopics() {
  const query = document.getElementById('search').value;

  fetch(`/api/articles/search?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
          const resultsDiv = document.getElementById('results');
          resultsDiv.innerHTML = ''; // Clear previous results

          if (data.length > 0) {
              data.forEach(article => {
                  const articleDiv = document.createElement('div');
                  articleDiv.className = 'article';
                  articleDiv.innerHTML = `<h3>${article[0]}</h3><p>${article[1]}</p>`;
                  resultsDiv.appendChild(articleDiv);
              });
          } else {
              resultsDiv.innerHTML = '<p>No articles found.</p>';
          }
      })
      .catch(error => {
          console.error('Error fetching articles:', error);
      });
}

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

// --- Affirmation Feature ---
function showNewAffirmation() {
  const affirmationDisplay = document.getElementById('affirmation-display');
  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  affirmationDisplay.textContent = randomAffirmation;
}

// --- Dropdown Button Function ---
function toggleContainer(button) {
  const container = button.nextElementSibling; // Get the container next to the button
  container.style.display = (container.style.display === 'block') ? 'none' : 'block'; // Toggle visibility
}

// --- Meditation Timer Function ---
function startTimer() {
  const timerDiv = document.getElementById("timer");
  timerDiv.innerHTML = `<div id="countdown">05:00</div>`;
  let timeLeft = 5 * 60;

  updateTimerDisplay(timeLeft);

  const timerInterval = setInterval(() => {
      timeLeft--;

      updateTimerDisplay(timeLeft);

      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          resetToButton();
      }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  document.getElementById("countdown").textContent =
      String(minutes).padStart(2, "0") + ":" + String(remainingSeconds).padStart(2, "0");
}

function resetToButton() {
  const timerDiv = document.getElementById("timer");
  timerDiv.innerHTML = `<button onclick="startTimer()" class="btn">Start Timer</button>`;
}

// Perpetually Logged In User Account System
// Initialize userData globally
let userData = loadUserData();

const defaultUserData = {
  username: "Guest",
  moodTracker: [],
  journal: [],
};

// Check if the user exists in LocalStorage, if not, initialize the user
if (!localStorage.getItem("userData")) {
  localStorage.setItem("userData", JSON.stringify(defaultUserData));
}

// Function to log user moods
function addMood(mood) {
  const today = new Date().toISOString().split("T")[0]; // Get only the date (YYYY-MM-DD)
  const moodTracker = userData.moodTracker;

  // Check if mood for today already exists
  if (moodTracker.some(entry => entry.date === today)) {
      alert("You've already logged a mood today!");
      return;
  }

  // Add the new mood
  moodTracker.push({ date: today, mood });

  // Limit to the last 5 days
  if (moodTracker.length > 5) {
      moodTracker.shift(); // Remove the oldest entry
  }

  // Save back to localStorage
  userData.moodTracker = moodTracker;
  localStorage.setItem("userData", JSON.stringify(userData));

  if (moodTracker.length === 5) {
      checkMoodPattern(moodTracker);
  } else {
      alert('Saved Mood Successfully!');
  }
}

// Journal Functions
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
      alert(
          userData.journal
              .map(entry => `${entry.date.split("T")[0]}: ${entry.entry}`)
              .join("\n")
      );
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

// Account System Extra Commands
function resetAccount() {
  if (confirm("Are you sure you want to reset your account? This will delete all data.")) {
      localStorage.setItem("userData", JSON.stringify(defaultUserData));
      alert("Account reset successfully!");
      location.reload(); // Reload to reflect changes
  }
}

// Function to load user data
function loadUserData() {
  const storedUserData = localStorage.getItem("userData");
  return storedUserData ? JSON.parse(storedUserData) : { moodTracker: [] };
}

document.getElementById("simulateButton").addEventListener("click", () => {
  const mood = document.getElementById("simulateMood").value; // Get the selected mood
  const days = parseInt(document.getElementById("simulateDays").value, 10); // Get the number of days

  if (days < 1 || days > 5) {
    alert("Please enter a valid number of days (1-5).");
    return;
  }

  simulateMoodPatternForPastDates(mood, days);

  // Reload user data to verify the simulation
  userData = loadUserData(); // Correctly reload userData
  console.log("Simulated mood tracker:", userData.moodTracker);
});

function simulateMoodPatternForPastDates(mood, days = 5) {
  const simulatedMoodTracker = userData.moodTracker || [];
  const today = new Date();

  // Simulate moods for the specified number of past days (including today)
  for (let i = 1; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i); // Subtract days, i=0 for today, i=1 for the previous day, etc.
    simulatedMoodTracker.unshift({ date: date.toISOString().split("T")[0], mood });
  }

  // Limit to the last 5 entries, keeping the most recent ones
  while (simulatedMoodTracker.length > 5) {
    simulatedMoodTracker.shift(); // Remove the oldest entry if more than 5 days
  }

  userData.moodTracker = simulatedMoodTracker;
  localStorage.setItem("userData", JSON.stringify(userData));
  alert(`Simulated ${days} days of '${mood}' moods (including today).`);

  // After simulation, check if the pattern for 5 days is met
  checkMoodPattern(userData.moodTracker);
}

function checkMoodPattern(moodTracker) {
  // Only check if there are 5 moods in the tracker
  if (moodTracker.length === 5) {
    const moodCounts = moodTracker.reduce((counts, entry) => {
      counts[entry.mood] = (counts[entry.mood] || 0) + 1;
      return counts;
    }, {});

    // Check specific patterns for the 5th day
    if (moodCounts["Very Sad"] === 5) {
      alert("You've been feeling 'Very Sad' for 5 days straight. Consider seeking support.");
    } else if (moodCounts["Sad"] === 5) {
      alert("You've been feeling 'Sad' for 5 days straight. Consider talking to someone.");
    } else if (moodCounts["Very Happy"] === 5) {
      alert("You've been feeling 'Very Happy' for 5 days straight! That's awesome!");
    } else if (moodCounts["Happy"] === 5) {
      alert("You've been feeling 'Happy' for 5 days straight! Keep it up!");
    } else if (moodCounts["Neutral"] === 5) {
      alert("You've been feeling 'Neutral' for 5 days straight. Take some time to reflect.");
    } else {
      alert("Mood saved successfully!");
    }

    // Reset moodTracker to empty array after the message
    userData.moodTracker = [];
    localStorage.setItem("userData", JSON.stringify(userData));
  }
}


