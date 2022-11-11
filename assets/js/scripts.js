// div
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }/* else {
            entry.target.classList.remove('show');

        }*/
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// elements smooth
const elementObserverSmooth = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('sm');
        }/* else {
            entry.target.classList.remove('show-el-right');
        }*/
    });
});
const hiddenDivElementsSmooth = document.querySelectorAll('.nsm');
hiddenDivElementsSmooth.forEach((el) => elementObserverSmooth.observe(el));


// size values
function myProduct() {
    var product = document.getElementById("product").value;
    document.getElementById("product_value").innerHTML = product;
}
myProduct();

function mySize() {
    var radioBtn = document.getElementsByName("size");
    var c;
    for(i=0; i<radioBtn.length; i++){
        if(radioBtn[i].checked){
            c = radioBtn[i].value;
        }
    }

    document.getElementById("size_value").innerHTML = c;
}
mySize();
// color values
function myColor() {
    var radioBtn = document.getElementsByName("color");
    var c;
    for(i=0; i<radioBtn.length; i++){
        if(radioBtn[i].checked){
            c = radioBtn[i].value;
        }
    }

    document.getElementById("color_value").innerHTML = c;
};
myColor();
// delivery values
function myDelivery() {
    var radioBtn = document.getElementsByName("delivery");
    var c;
    for(i=0; i<radioBtn.length; i++){
        if(radioBtn[i].checked){
            c = radioBtn[i].value;
        }
    }

    document.getElementById("delivery_value").innerHTML = c;
};

// IMG Generation
var x = document.getElementById("p-img").src;    
        
          
function genProImg() {
    var img = document.createElement('img');
    img.src = x;
    img.setAttribute('alt', 'na');
    img.setAttribute('id', 'ProductImg');
    img.setAttribute('class', 'checkoutIMG');
    document.getElementById('ProductImg').appendChild(img);
};


// Delete the Old generatred IMG
var OldImg = document.getElementById("ProductImg");
  function delOldImg() {
    OldImg.remove();
  }

// checkout
var modal = document.getElementById("myCheckout");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// Form Submit
function myOrder() {
    document.getElementById("Order").submit();
}