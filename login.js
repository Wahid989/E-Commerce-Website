document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const messageBox = document.getElementById("message-box");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

                const user = data.find(user => user.username === username && user.email === password);

                if (user) {
                    showMessage("success", "Login successful!");
                } else {
                    showMessage("error", "Invalid username or password. Please try again!");
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                showMessage("error", "Failed to fetch user data");
            });
    });

    function showMessage(type, message) {
        messageBox.style.display = 'block'; 
        messageBox.innerHTML = "";
        const messageElement = document.createElement("p");
        messageElement.textContent = message;
        messageBox.appendChild(messageElement);
    }
});
