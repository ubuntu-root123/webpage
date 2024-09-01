document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    const errorMessageDiv = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Define valid usernames and passwords
        const validCredentials = {
            'joel': 'joel6001',
            'admin': 'admin',
            'ashley': 'ashleyqt123',
            'stella': 'stella321',
            'john': 'john1234',
            'dave': 'davepass',
            'david': 'david2024'
        };

        // Check if the username and password are valid
        if (validCredentials[username] === password) {
            // Redirect to main page if credentials are correct
            window.location.href = 'main.html';
        } else {
            // Display error message if credentials are invalid
            errorMessageDiv.textContent = 'Invalid credentials. Please try again.';
            // Clear the input fields
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });

    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePassword.textContent = '🙈'; // Eye with a line
        } else {
            passwordField.type = 'password';
            togglePassword.textContent = '👁️'; // Eye
        }
    });
});

// Handle sign-up form submission
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const signupUsername = document.getElementById('signup-username').value;
        const signupPassword = document.getElementById('signup-password').value;
        const email = document.getElementById('signup-email').value;
        const signupErrorMessage = document.getElementById('signup-error-message');

        // Simple client-side validation (for demonstration)
        if (signupUsername && signupPassword && email) {
            // Normally, you'd send this data to your server to be saved
            // For now, just display a success message and clear fields
            alert('Sign Up Successful');
            document.getElementById('signup-username').value = '';
            document.getElementById('signup-password').value = '';
            document.getElementById('signup-email').value = '';
        } else {
            // Show error message if validation fails
            signupErrorMessage.textContent = 'Please fill in all fields';
        }
    });
}
