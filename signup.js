document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const messageBox = document.getElementById('signup-message-box');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Clear previous messages
        messageBox.innerHTML = '';
        
        // Get the values from the form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const email = document.getElementById('email').value;

        // Validate the inputs
        const usernameValid = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/.test(username);
        const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{}|;:'",.<>?/`~]).{8,}$/.test(password);
        const confirmPasswordValid = password === confirmPassword;
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        let messages = [];
        if (!usernameValid) {
            messages.push('Username is invalid. It must be 3-20 characters and start with a letter.');
        }
        if (!passwordValid) {
            messages.push('Password is invalid. It must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        }
        if (!confirmPasswordValid) {
            messages.push('Passwords do not match.');
        }
        if (!emailValid) {
            messages.push('Email is invalid.');
        }

        if (messages.length === 0) {
            messages.push('Signup successful!');
        }
        
        // Display the messages
        messages.forEach(function(msg) {
            const p = document.createElement('p');
            p.textContent = msg;
            messageBox.appendChild(p);
        });
        
        messageBox.style.display = 'block'; // Show the message box
    });
});
