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



// Price Checkout
function updateTotal() {
    let basePrice = 30, sizePrice = 0, colorPrice = 0, shippingPrice = 0;
    function checkSize() {
            if (document.getElementById('size0').checked) {
                sizePrice += 0;
            }
            if (document.getElementById('size1').checked) {
                sizePrice += 5;
            }
            if (document.getElementById('size2').checked) {
                sizePrice += 10;
            }
        } // size end
    checkSize()
        function checkColor() {
            if (document.getElementById('color0').checked) {
                document.getElementById('p-img').src = '/assets/images/products/diamond.jpg';
                colorPrice += 0;
            }
            if (document.getElementById('color1').checked) {
                document.getElementById('p-img').src = '/assets/images/products/gold.jpg';
                colorPrice += 5;
            }
        } // size end
    checkColor()
    function checkShipping() {
        if (document.getElementById('zakho').checked) {
            shippingPrice += 2;
        }
        if (document.getElementById('duhok').checked) {
            shippingPrice += 3;
        }
        if (document.getElementById('erbil').checked) {
            shippingPrice += 6;
        }
    }
    checkShipping()

    const totalPrice = basePrice + sizePrice + colorPrice + shippingPrice;
    document.getElementById('size').innerHTML = "+ $" + sizePrice + ".00";
    document.getElementById('color').innerHTML = "+ $" + colorPrice + ".00";
    document.getElementById('delivery').innerHTML = "+ $" + shippingPrice + ".00";
    document.getElementById('price').innerHTML = "$" + totalPrice + ".00";
} // total end

// size values
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

function myOrder() {
    document.getElementById("Order").submit();
}