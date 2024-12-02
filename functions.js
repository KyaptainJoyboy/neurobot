// Constants & Global Variables
const affirmations = [
    "You are capable of amazing things.",
    "Believe in yourself and all that you are.",
    "Your potential is limitless.",
    "The world is your stage.",
    "You can shine brighter.",
    "Every day is a new opportunity to grow and be better.",
    "You are stronger than you think."
];

let breathCount = 0; // Track the number of breaths

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

// --- Form Validation Functions ---
function validateForm(formId, fields) {
    let isValid = true;
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorElement = document.getElementById(`${field.id}-error`);
        if (!input.value.match(field.regex)) {
            errorElement.textContent = field.errorMessage;
            isValid = false;
        } else {
            errorElement.textContent = '';
        }
    });
    return isValid;
}

// Login Validation
function validateLoginForm() {
    const fields = [
        { id: 'login-email', regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, errorMessage: 'Please enter a valid email address' },
        { id: 'login-password', regex: /.{6,}/, errorMessage: 'Password must be at least 6 characters long' }
    ];

    if (validateForm('login-form', fields)) {
        const user = JSON.parse(localStorage.getItem('user'));
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (user && user.email === email && user.password === password) {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'index.html';
            return true;
        } else {
            document.getElementById('login-email-error').textContent = 'Invalid email or password';
        }
    }
    return false;
}

// Validate and Handle Registration
function validateRegisterForm() {
    let isValid = true;

    // Grab form field values
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const role = document.getElementById('register-role').value;

    // Basic validation checks for each input field
    if (name.length < 2) {
        document.getElementById('register-name-error').textContent = 'Name must be at least 2 characters long';
        isValid = false;
    } else {
        document.getElementById('register-name-error').textContent = ''; // Clear error
    }

    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        document.getElementById('register-email-error').textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('register-email-error').textContent = ''; // Clear error
    }

    if (password.length < 6) {
        document.getElementById('register-password-error').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    } else {
        document.getElementById('register-password-error').textContent = ''; // Clear error
    }

    if (!role) {
        document.getElementById('register-role-error').textContent = 'Please select a role';
        isValid = false;
    } else {
        document.getElementById('register-role-error').textContent = ''; // Clear error
    }

    // If all form fields are valid, save the new user to localStorage
    if (isValid) {
        const newUser = {
            name: name,
            email: email,
            password: password,
            role: role
        };

        localStorage.setItem('user', JSON.stringify(newUser)); // Save the user object
        window.location.href = 'index.html'; // Redirect to the home page after successful registration
    }

    return isValid; // Return whether the form is valid or not
}


// Breathing Exercise Functions
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

// Account Management Functions

// Check if a user is logged in
window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('logout').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
    } else {
        document.getElementById('logout').style.display = 'none';
    }
};

// Logout function
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'account.html';
}

// Affirmation Feature
function showNewAffirmation() {
    const affirmationDisplay = document.getElementById('affirmation-display');
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationDisplay.textContent = randomAffirmation;
}

// Topic Search Functions
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

// Fetch and display all articles on page load
window.onload = function() {
    fetch('/api/articles')
        .then(response => response.json())
        .then(data => {
            const articleResultsDiv = document.getElementById('article-results');
            articleResultsDiv.innerHTML = ''; // Clear previous articles
            if (data.length > 0) {
                data.forEach(article => {
                    const articleDiv = document.createElement('div');
                    articleDiv.className = 'article';
                    articleDiv.innerHTML = `<h3>${article[0]}</h3><p>${article[1]}</p>`;
                    articleResultsDiv.appendChild(articleDiv);
                });
            } else {
                articleResultsDiv.innerHTML = '<p>No articles available.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching articles:', error);
        });
};
