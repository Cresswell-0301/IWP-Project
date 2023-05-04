//  Edit Item Photo
var itemBox = document.getElementById('editItemImgbox');
var loadImg = function(event){
    itemBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}
