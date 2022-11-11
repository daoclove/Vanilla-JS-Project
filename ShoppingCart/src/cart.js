let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.querySelector(".cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        //! 카트랑  데이터비교해서 id 같으면 이미지 보여줘
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
        <div class="cart-item">
        <img src =${search.img} alt =""/>
        <div class="details">
          <div class="title-price-x">
            <h4>
              <p>${search.name}</p>
              <p>${search.price}</p>
            </h4>
          </div>
          <div class="cart-buttons">
            <span onclick="incremnet(${id})" class="bi-plus">➕</span>
            <span id=${id} class="quantity">${item}
            </span>
            <span  onclick="decrement(${id})" class="bi-dash">➖</span>
          </div>
          <h3>${item * search.price}원</h3>
          <button onclick="removeItem(${id})" class="removeAll">지우기</button>


        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>장바구니가 비웠습니다.</h2>
    <a href="index.html">
      <button class="HomeBtn">쇼핑하려 가기</button>
    </a>
    `;
  }
};
generateCartItems();

let incremnet = (id) => {
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
  generateCartItems();
  TotalAmount();
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
  generateCartItems();
  TotalAmount();
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
  TotalAmount();
  calculation();
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2>총액 : ${amount}</h2>
    <button class="checkout">결제</button>
    <button onclick="clearCart()" class="removeAll">지우기</button>
    `;
  } else return;
};
TotalAmount();
