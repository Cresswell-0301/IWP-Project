// show default form
document.getElementById("defaultOpen").click();

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

let category_options = {
    series: [31, 24, 23, 22],
    labels: ['Girl Shirts', 'Boy Shirts', 'Girl Dress', 'Boy Pants'],
    chart: {
        type: 'donut',
    },
    colors: ['#6ab04c', '#2980b9', '#f39c12', '#d35400']
}

let category_chart = new ApexCharts(document.querySelector("#category-chart"), category_options)
category_chart.render()


let customer_options = {
    series: [{
        name: "Store Customers",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },{
        name: "Online Customers",
        data: [20, 30, 10, 20, 16, 40, 20, 51, 10]
    }],
    colors: ['#6ab04c', '#2980b9'],
    chart: {
        height: 350,
        type: 'line',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    legend: {
        position: 'top'
    }
}

//  Edit Profile Photo
var imgBox = document.getElementById('imgBox');
var loadFile = function(event){
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}

// Scroll Top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//  Hide Staff
function hideStaff(staffID) {
    var staffElement = document.getElementById(staffID);
    var staffAns = confirm('Confirm Delete ?');

    if(staffAns == true){
        staffElement.style.display = "none";
        alert('Successfully Deleted');
    }
}

// Hide Item
function hideItem(itemID) {
    var itemElement = document.getElementById(itemID);
    var itemAns = confirm('Confirm Delete ?');

    if(itemAns == true){
        itemElement.style.display = "none";
        alert('Successfully Deleted');
    }
}