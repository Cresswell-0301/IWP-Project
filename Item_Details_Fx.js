//  Selected Size
function selectSize(size) {
    var sizes = document.querySelectorAll(".show-size h3");
    for (var i = 0; i < sizes.length; i++) {
      if (sizes[i].id === "selected-" + size) {
        sizes[i].style.borderColor = "red";
      } else {
        sizes[i].style.borderColor = "";
      }
    }
}

//  Add Cart
function addCart(){
  alert('An item has been added to your cart !');
  
}