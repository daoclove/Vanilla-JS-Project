console.log(shopItemsData);
let shop = document.querySelector(".shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="item">
      <img src=${img} />
      <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
          <h3>${price}</h3>
          <div class="buttons">
            <span onclick="incremnet(${id})" class="bi-plus">➕</span>
            <span id=${id} class="quantity">
            ${search.item === undefined ? 0 : search.item}
            </span>
            <span  onclick="decrement(${id})" class="bi-dash">➖</span>
          </div>
          </div>
          </div>
          </div>
          `;
    })
    .join(""));
};
generateShop();

let incremnet = (id) => {
  console.log(id);
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.querySelector(".cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();
