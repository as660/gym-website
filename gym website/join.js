// join.js

// Example: Form validation
document.getElementById('membershipForm').addEventListener('submit', function(e) {
    let valid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const membership = document.getElementById('membership').value;

    if (name.trim() === "") {
        alert("Name is required");
        valid = false;
    }

    if (!email.includes('@')) {
        alert("Enter a valid email");
        valid = false;
    }

    if (phone.trim() === "" || phone.length < 10) {
        alert("Enter a valid phone number");
        valid = false;
    }

    if (membership === "") {
        alert("Please select a membership plan");
        valid = false;
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});
