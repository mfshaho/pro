// Product Generation
let product = document.getElementById("product");

let generateProduct = () => {
  return (product.innerHTML = icedOutData
    .map((x) => {
      let { id, img, name, desc, size, color, colorimg } = x;
      return `
      <form id="Order" method="POST" action="https://formsubmit.co/abojaso23@gmail.com">
  <div id=product-id-${id} class="product-details">


      <div class="p-images">
        <img id="p-img" class="p-img" alt="" src=${img[0]} />
      </div>

      <div class="p-details">

        <div class="p-name">${name}</div>
        <input type="hidden" name="product" value=${name}>

        <div class="p-des">
          ${desc}
        </div>
        
        <div class="p-size">
          <span class="sc">Select a Size:</span>
          <ul class="size-boxes" id="sizes">

            <li class="sizenav-item">
              <label class="sizenav-link">
                <input type="radio" class="size" id="size0" onchange="updateTotal(); mySize();" name="size" value=${size[0]}>
                <div class="sizenav-swatch">${size[0]}</div>
            </label>
            </li>
            <li class="sizenav-item">
              <label class="sizenav-link">
                <input type="radio" class="size" id="size1" onchange="updateTotal(); mySize();" name="size" value=${size[1]}>
                <div class="sizenav-swatch">${size[1]}</div>
            </label>
            </li>
            <li class="sizenav-item">
              <label class="sizenav-link">
                <input type="radio" class="size" id="size2" onchange="updateTotal(); mySize();" name="size" value=${size[2]}>
                <div class="sizenav-swatch">${size[2]}</div>
            </label>
            </li>
        </ul>
        </div>

        <div class="p-colors" id="colors">
          <div class="sc">Select a Color:</div>
        <ul>
          <li class="colornav-item">
            <label class="colornav-link dimension-colornav-link">
                <input type="radio" class="colornav-value" id="color0" onchange="updateTotal(); myColor();" name="color" value=${color[0]}>
                <img alt="" src=${colorimg[0]} class="colornav-swatch">
            </label>
        </li>

        <li class="colornav-item">
            <label class="colornav-link dimension-colornav-link">
                <input type="radio" class="colornav-value" id="color1" onchange="updateTotal(); myColor();" name="color" value=${color[1]}>
                <img alt="" src=${colorimg[1]} class="colornav-swatch">
            </label>
          </li>
        </ul>
        </div>

        <div class="opacity">hey</div>

        <div class="p-size" id="ships">
          <span class="sc">Deliver to:</span>
          <ul class="size-boxes">

            <li class="sizenav-item">
              <label class="sizenav-link">
                <input type="radio" class="size" id="zakho" onchange="updateTotal()" name="shipping address" value="Zakho">
                <div class="sizenav-swatch">Zakho</div>
              </label>
            </li>
            <li class="sizenav-item">
              <label class="sizenav-link">
                <input type="radio" class="size" id="duhok" onchange="updateTotal()" name="shipping address" value="Duhok">
                <div class="sizenav-swatch">Duhok</div>
              </label>
            </li>
            <li class="sizenav-item">
              <label class="sizenav-link">
                <input type="radio" class="size" id="erbil" onchange="updateTotal()" name="shipping address" value="Duhok">
                <div class="sizenav-swatch">Erbil</div>
              </label>
            </li>
          </ul>
        </div>

        <div class="p-totalPrice">
          <div class="proceed" id="myBtn">Proceed to Checkout</div>
        </div>

        <!-- <div class="p-quantitiy">
          <input type="number" min="1" max="4" value="1">
        </div> -->

      </div>

  </div>

<div id="myCheckout" class="checkout">
  <div class="checkout-content">
    <span class="close">&times;</span>

    <br>

    <br>


    <table>
      <tr>
        <th>#</th>
        <th>option</th>
        <th>price</th>
      </tr>
      <tr>
        <th>Name</th>
        <td>Lorem ipsum</td>
        <td>$30.00</td>
      </tr>
      <tr>
        <th>Size</th>
        <td><span class="" id="size_value">Select a size!</span></td>
        <td><span class="" id="size">$0.00</span></td>
      </tr>
      <tr>
        <th>Color</th>
        <td><span class="" id="color_value">Select a color!</span></td>
        <td><span class="" id="color">$0.00</span></td>
      </tr>
      <tr>
        <th>Delivery</th>
        <td><span class="" id="delivery_value">Select a Delivery option!</span></td>
        <td><span class="" id="delivery">$0.00</span></td>
      </tr>
      <tr>
        <td class="opacity"></td>
        <th class="align-right">Total:</th>
        <td><span class="dollar" id="price">$30.00</span></td>
      </tr>
    </table>



    <br>

    <br>
    <div class="order-now" onclick="myOrder();">Order Now</div>

      <input type="hidden" name="_subject" value="New Store Order!">
      <input type="hidden" name="_next" value="https://mini.test">
      <input type="hidden" name="_captcha" value="false">
  </div>

</div>
</form>
    `;
    })
    .join(""));
};

generateProduct();