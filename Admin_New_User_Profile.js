//  New Profile Photo
var imgBox = document.getElementById('NewImgBox');
var loadNew = function(event){
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}
