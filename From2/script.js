const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Basic validation (add more checks as needed)
    if (!name.value || !email.value || !password.value || !confirmPassword.value || !gender.value || !phone.value || !district.value) {
        alert('Please fill in all required fields.');
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match.');
        return;
    }
    else{
        alert("Welcome");
    }

    // Additional validation (e.g., email format, password strength) can be added here

    // Submit the form (e.g., send data to server)
    // ...
});