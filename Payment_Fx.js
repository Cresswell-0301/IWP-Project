const nameInput = document.getElementById('name');
const cardInput = document.getElementById('card');
const expInput = document.getElementById('exp');
const cvvInput = document.getElementById('cvv');

//	makesure payment method have be select	//
const radioBtns = document.querySelectorAll('input[type="radio"]');
const inputText = document.querySelector('input[type="text"]');
const inputFile = document.querySelector('input[type="file"]');
const submitBtn = document.querySelector('button[type="submit"]');
//	const myForm = document.getElementById('myForm'); this for myForm.submit() in line 29

//	payment mmethod have be selected the form will be submit	//
myForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let isChecked = false;
	for (let i = 0; i < radioBtns.length; i++) {
		if (radioBtns[i].checked) {
			isChecked = true;
			break;
		}
	}
	if (!isChecked) {
	  	alert('Please select A Payment Method');
	} else if (inputText.value === '' && inputFile.files.length === 0) {
	  	alert('Pls provide the details');
	} else {
		alert('Payment Successful');
		redirect();
	}
});

function redirect() {
	setTimeout(function() {
		window.location.href = "index.html";
	}, 500); //	1000 = 1 second
}
//	end	//

var img = document.getElementsByName("images");
for (var i = 0; i< img.length; i++) {
  img[i].addEventListener("change", displayImage);
}

//	Payment Method //
function show1(){
	document.getElementById('div1').style.display = 'block';
	document.getElementById('div2').style.display ='none';
}
function show2(){
	document.getElementById('div1').style.display ='none';
	document.getElementById('div2').style.display ='block';
}

var imgSource = [
	{'alt': "",
		'src': "#"
	},
	{'alt': "",
		'src': "#"
	},
	{'alt': "E-Wallet Image Error",
		'src': "image/E-Wallet-QR.jpg"
	},
	{'alt': "Duit-Now Image Error",
		'src': "image/Bigpay-QR.jpg"
	}
];

function displayImage(){
	var output = document.getElementById('js-output');
  	for (var i=0; i< img.length; i++) {
    	if (img[i].checked === true) {
          	output.src = imgSource[i].src;
      		output.alt = imgSource[i].alt;
        }
  	}
}
