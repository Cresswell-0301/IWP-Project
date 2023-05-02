const protectedButton = document.getElementById('login-access');
const shopbtn = document.getElementById('loginn-access');

protectedButton.addEventListener('click', () => {
    const confirmed = confirm('Please login to access this page.');
    if (confirmed) {
        window.location.href = 'Login & SignUp.html';   }
    else {
        window.location.href = 'index.html';
    }
});

shopbtn.addEventListener('click', () => {
    const confirmed = confirm('Please login to access this page.');
    if (confirmed) {
      window.location.href = 'Login & SignUp.html'; }
    else {
        window.location.href = 'index.html';
    }
});