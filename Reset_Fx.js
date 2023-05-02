// show default form
document.getElementById("defaultOpen").click();

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

//  Verify Email
document.getElementsByName('femails')[0].addEventListener('submit', function(e){
    e.preventDefault(); // prevent form submission

    var FEmailInput = document.getElementsByName('femail')[0];

    const forgotPwdElement = document.getElementById('Forgotpwd');
    const resetPwdElement = document.getElementById('reset-pwd');

    if (FEmailInput.value){
        alert('Email Verified');
        
        forgotPwdElement.style.display = 'none';
        resetPwdElement.style.display = 'block';
    }
})

// Reset Password
document.getElementsByName('fpwdds')[0].addEventListener('submit', function(e){
    e.preventDefault(); // prevent form submission

    const fPassword = document.getElementById("fPassword").value;
    const rfPassword = document.getElementById("rfPassword").value;

    if (fPassword === rfPassword) {
        alert('Reset Successful');
        window.location.href = "Login & SignUp.html";
    }
    else {
        alert('Password Not Match');
    }
})