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
let breathCount = 0;
let moodChart = null;

// --- User Data Management ---
const defaultUserData = {
  username: "Guest",
  moodTracker: [],
  journal: [],
};

let userData = loadUserData();

if (!localStorage.getItem("userData")) {
  localStorage.setItem("userData", JSON.stringify(defaultUserData));
  console.log("Default user data initialized.");
}

function loadUserData() {
  try {
    const storedUserData = localStorage.getItem("userData");
    console.log("Loading user data...");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      console.log("User data successfully loaded:", parsedData);
      return parsedData;
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

// --- Mood Tracker Functions ---
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

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
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

// --- Dropdown Button Function ---
function toggleContainer(button) {
  const container = button.nextElementSibling; // Get the container next to the button
  container.style.display = (container.style.display === 'block') ? 'none' : 'block'; // Toggle visibility
}

// AI Input
document.getElementById('queryForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const query = document.getElementById('userQuery').value;
  const responseDiv = document.getElementById('response');

  try {
      const response = await fetch('/ask-query', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
      });

      const data = await response.json();
      responseDiv.innerText = `Assistant: ${data.reply}`; // Adjust based on the response structure
  } catch (error) {
      console.error('Error:', error);
      responseDiv.innerText = 'Error interacting with the model';
  }
});
``