
//  Edit Profile Photo
var imgBox = document.getElementById('imgBox');
var loadFile = function(event){
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}