const DATABASE_KEY = 'userDatabase';

// Initialize the database if it doesn't exist
function initializeDatabase() {
    // Check if the database exists in localStorage
    const existingDatabase = JSON.parse(localStorage.getItem(DATABASE_KEY));

    if (!existingDatabase) {
        // Create a test user database if none exists
        const users = [
            {
                name: 'Test User',
                email: 'testuser@example.com',
                password: 'password123',
                role: 'student'
            }
        ];
        localStorage.setItem(DATABASE_KEY, JSON.stringify(users)); // Save to localStorage
    }
}

// Register a new user in the "database"
function registerUser(name, email, password, role) {
    const users = JSON.parse(localStorage.getItem(DATABASE_KEY)) || [];

    // Check if the user already exists
    if (users.some(user => user.email === email)) {
        console.log('User already exists');
        return false; // User already exists
    }

    // Add the new user
    const newUser = { name, email, password, role };
    users.push(newUser);

    // Save the updated user list to localStorage
    localStorage.setItem(DATABASE_KEY, JSON.stringify(users));

    console.log('User registered successfully');
    return true;
}

// Validate login credentials against the "database"
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem(DATABASE_KEY)) || [];

    // Find the user by email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        console.log('Login successful');
        return user; // Return the user object
    } else {
        console.log('Invalid email or password');
        return null; // Login failed
    }
}

// FOR TESTING : Reset the database
function resetDatabase() {
    localStorage.removeItem(DATABASE_KEY);
    console.log('Database reset');
}

// Initialize the database when the script is loaded
initializeDatabase();

// Expose the functions for use in other files
export { registerUser, loginUser, resetDatabase };