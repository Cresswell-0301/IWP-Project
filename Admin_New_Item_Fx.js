// function to open form based on formName
function openForm(evt, formName) {
    var i, switchcontent, switchlinks;

    switchcontent = document.getElementsByClassName("contain");
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

//  Edit Profile Photo
var imgBox = document.getElementById('editItemImgbox');
var loadImg = function(event){
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}
  