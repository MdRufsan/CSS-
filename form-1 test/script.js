function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const textarea = document.getElementById("textarea").value;

    // Check for required fields
    if (!name || !email || !password || !confirmPassword || !gender) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Validate email format (you can use a more robust email validation regex)
    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/.test(email)) {
        alert("Invalid email address.");
        return false;
    }
    else{
        alert("Welcome");
    }

    // Additional validation as needed (e.g., password strength, textarea length)

    return true;
}