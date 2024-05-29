document.getElementById('loginToggle').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('signupToggle').classList.remove('active');
});

document.getElementById('signupToggle').addEventListener('click', function() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('loginToggle').classList.remove('active');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    const password = event.target.querySelector('input[type="password"]').value;
    const confirmPassword = event.target.querySelector('input[type="password"]:nth-child(4)').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Passwords do not match');
    }
});
