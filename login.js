document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    if (userEmail == 'sontan@baap.com' && password == 'secret') {
        window.location.href = 'banking.html';
    }
})