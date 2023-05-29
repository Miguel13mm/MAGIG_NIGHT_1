document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating server-side validation
    if (username === 'migig-night' && password === '12345') {
        // Store session information in local storage
        localStorage.setItem('isLoggedIn', true);
        // Redirect to secured page
        window.location.href = 'buscaTusFotos.html';
    } else {
        alert('Invalid username or password');
    }
});




