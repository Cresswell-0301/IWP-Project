// function to open form based on formName
function openForm(evt, formName) {
    var i, switchcontent, switchlinks;

    switchcontent = document.getElementsByClassName("switchcontent");
    for (i = 0; i < switchcontent.length; i++) {
        switchcontent[i].style.display = "none";
    }

    switchlinks = document.getElementsByClassName("switchlink");
    for (i = 0; i < switchlinks.length; i++) {
        switchlinks[i].className = switchlinks[i].className.replace(" active", "");
    }

    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

// show default form
document.getElementById("defaultOpen").click();

// event listener for login form submission
document.getElementsByName('login')[0].addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission

    const pwdInput = document.getElementById('signInPswd').value;
    const adPassword = "123456789";

    if (adPassword === pwdInput) {
        alert('Hi Admin');
        setTimeout(function() {
            window.location.href = "#"; //  admin page
        }, 500);
    }
    else {
        alert('Login Successful');
        setTimeout(function() {
            window.location.href = "After_login.html";
        }, 500);
    }
});