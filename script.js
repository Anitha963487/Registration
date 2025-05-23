document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const message = document.getElementById('message');

    // Basic validation
    if (!name || !email || !number || !password || !confirmpassword) {
        message.style.color = 'red';
        message.textContent = 'All fields are required!';
        return;
    }

    // Email validation
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        message.style.color = 'red';
        message.textContent = 'Invalid email address!';
        return;
    }

    // Number validation (10 digits)
    if (!/^\d{10}$/.test(number)) {
        message.style.color = 'red';
        message.textContent = 'Number must be 10 digits!';
        return;
    }

    // Password length
    if (password.length < 6) {
        message.style.color = 'red';
        message.textContent = 'Password should be at least 6 characters!';
        return;
    }

    // Confirm password
    if (password !== confirmpassword) {
        message.style.color = 'red';
        message.textContent = 'Passwords do not match!';
        return;
    }

    message.style.color = 'green';
    message.textContent = 'Registration successful!';
    // Here you can send the data to server or further process it
    // For demo, we reset the form after success
    document.getElementById('registerForm').reset();
});