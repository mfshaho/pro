let store = document.getElementById("store");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateStore = () => {
  return (store.innerHTML = icedOutData
    .map((x) => {
      let { id, img, name, category, price  } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="product-card">
      <img class="product-img" src=${img[0]} alt="" />

      <div class="product-name">${name}
          <div class="product-category">${category}</div>
      </div>
      
      <div class="flex">
      <div class="product-price">$${price}.99</div>
      <div class="buy-button">Buy</div>
      </div>
      </div>
    `;
    })
    .join(""));
};

generateStore();


