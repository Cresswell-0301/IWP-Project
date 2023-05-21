// show default form
document.getElementById("defaultOpen").click();

//  Print Fx
function printPage() {
      window.print();
}

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

//  Edit Profile Photo
var imgBox = document.getElementById('imgBox');
var loadFile = function(event){
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}


//order history //samye part
var customers = [
    {
      id: 1,
      name: 'John Doe',
      orders: [
        {
          id: 1,
          date: '2023-02-15',
          products: [
            { name: 'Formal Slim Long Pants #Grey ', price: 19.98, image: 'image/bp2.jpg' },
            { name: 'Thrasher Skateboard Magazine T-Shirt ', price: 29.99, image: 'image/bs5.jpg' }
          ]
        },
        {
          id: 2,
          date: '2023-03-10',
          products: [
            { name: 'Oversized Hoodie Men #White', price: 34.99, image: 'image/bs19.jpg' },
            { name: 'Japanese Long Sleeve Shirt Men Loose #Grey', price: 22.99, image: 'image/bs19.jpg' }
          ]
        }
        ,
        {
            id: 3,
            date: '2023-04-14',
            products: [
              { name: 'Multi Pocket Cargo Long Pants #Black', price: 28.91, image:'image/bp9.jpg'}
            ]
        }
      ]
    },
    {
      id: 2,
      name: 'Chin Sam Ye',
      orders: [
        {
          id: 1,
          date: '2023-05-14',
          products: [
            { name: 'Korea Style Flora Dress', price: 29.99, image: 'image/gs4.jpg' },
            { name: 'Oversized Women Short Sleeve', price: 35.90, image: 'image/gs18.jpg' }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Christina Chin',
      orders: [
        {
          id: 1,
          date: '2023-05-14',
          products: [
            { name: 'Oversized Women Short Sleeve', price: 35.90, image: 'image/gs18.jpg' },
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'}
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Lew Kien Yew',
      orders: [
        {
          id: 1,
          date: '2023-01-15',
          products: [
            { name: 'Formal Slim Long Pants #Grey ', price: 19.98, image: 'image/bp2.jpg' },
            { name: 'Loose Wine Red Thickened Coat Hooded Trendy Sweater ', price: 84, image: 'image/bs8.jpg' }
          ]
        },
      {
          id: 2,
          date: '2023-01-20',
          products: [
            { name: 'Pure Polo Shirt Men', price: 52, image: 'image/bs3.jpg' }
    
          ]
        }
        ,
        {
            id: 3,
            date: '2023-03-14',
            products: [
              { name: 'Multi Pocket Cargo Long Pants #Black', price: 28.91, image:'image/bp9.jpg'}
            ]
        }
      ]
    },
    {
      id: 5,
      name: 'Siti Zulaikha',
      orders: [
        {
          id: 1,
          date: '2023-05-14',
          products: [
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'},
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'},
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'},
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'},
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'}
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'Sim Boon Xun',
      orders: [
        {
          id: 1,
          date: '2023-05-14',
          products: [
            { name: 'Pure Polo Shirt Men', price: 52, image: 'image/bs3.jpg' }
          ]
        }
      ]
    },
    {
      id: 7,
      name: 'Koko Milo',
      orders: [
        {
          id: 1,
          date: '2023-05-20',
          products: [
           { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'},
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'},
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'},
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'},
            { name: 'Back Tie Bow Cropped Belly Button Shirt', price: 18.99, image: 'image/gs3.jpg'}
          ]
        }
      ]
    },
    {
      id: 7,
      name: 'Mike Tyson',
      orders: [
        {
          id: 1,
          date: '2023-05-20',
          products: [
           { name: 'NIKE Summer Oversize Cotton T-Shirt', price: 43, image: 'image/gs11.jpg'},
           { name: 'NIKE Summer Oversize Cotton T-Shirt', price: 43, image: 'image/gs11.jpg'},
           { name: 'NIKE Summer Oversize Cotton T-Shirt', price: 43, image: 'image/gs11.jpg'},
           { name: 'NIKE Summer Oversize Cotton T-Shirt', price: 43, image: 'image/gs11.jpg'},
           { name: 'NIKE Summer Oversize Cotton T-Shirt', price: 43, image: 'image/gs11.jpg'}
          ]
        }
      ]
    }
  ];
  
  // Display customer list
  var customerList = document.getElementById('customer-list');
  var orderList = document.getElementById('order-list');
  
  customers.forEach(function(customer) {
    var customerItem = document.createElement('div');
    customerItem.classList.add('customer-item');
    customerItem.innerText = customer.name;
    customerItem.addEventListener('click', function() {
      showOrderHistory(customer);
    });
    
    customerList.appendChild(customerItem);
  });
  
  // Show order history for a selected customer
  function showOrderHistory(customer) {
    // Clear existing order list
    orderList.innerHTML = '';
  
    // Hide the customer list
    customerList.classList.add('hidden');
  
    customer.orders.forEach(function(order) {
      var orderItem = document.createElement('div');
      orderItem.classList.add('order-item');
  
      var orderInfo = document.createElement('div');
      orderInfo.classList.add('order-info');
      orderInfo.innerText = 'Order #' + order.id;
  
      var orderDate = document.createElement('div');
      orderDate.classList.add('order-date');
      orderDate.innerText = 'Date: ' + order.date;
  
      var orderProducts = document.createElement('div');
      orderProducts.classList.add('order-products');
  
      order.products.forEach(function(product) {
        var productContainer = document.createElement('div');
        productContainer.classList.add('product');
  
        var productImage = document.createElement('img');
        productImage.src = product.image;
  
        var productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.innerText = product.name;
  
        var productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.innerText = 'Price: RM' + product.price;
  
        productContainer.appendChild(productImage);
        productContainer.appendChild(productName);
        productContainer.appendChild(productPrice);
  
        orderProducts.appendChild(productContainer);
      });
  
      orderItem.appendChild(orderInfo);
      orderItem.appendChild(orderDate);
      orderItem.appendChild(orderProducts);
  
      orderList.appendChild(orderItem);
    });
  }
  