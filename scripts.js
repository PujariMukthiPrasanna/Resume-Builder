function loginUser(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const form = document.getElementById('loginForm');
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || 'Login failed');
            });
        }
        return response.json();
    })
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = '/Homepage/homepage.html';
        }
    })
    .catch(error => {
        alert(error.message || 'Login failed');
        console.error('Error:', error);
    });
}

function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const form = document.getElementById('signupForm');
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;
    const confirm_password = form.querySelector('input[name="confirm_password"]').value;

    if (!email || !password || !confirm_password) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirm_password) {
        alert('Passwords do not match');
        return;
    }

    fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            email, 
            password, 
            confirm_password 
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || 'Registration failed');
            });
        }
        return response.json();
    })
    .then(data => {
        alert('Registration successful! Please log in.');
        window.location.href = '/Login/login.html';
    })
    .catch(error => {
        alert(error.message || 'Registration failed');
        console.error('Error:', error);
    });
}


function logoutUser() {
    // Clear the JWT token from localStorage
    localStorage.removeItem('token');
    
    // Clear any other user-related data from localStorage if present
    localStorage.clear();
    
    // Redirect to login page
    window.location.href = '/Login/login.html';
}