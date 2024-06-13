var defaultPrice = 0, price = defaultPrice; totalPrice = 0;
var orders = []; orderIndex = 0;
window.onload = () => {
  ["addBI", "addIIB", "addIWB", "addIAB", "addBIB", "addEI", "addET", "addC", "addW"].forEach(e => { document.getElementById(e).addEventListener('click', () => showAdd(e)); });
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    for (i = 1; i <= orders[orders.length - 1].num; i++) { orders[orders.length - 1].iceNum[document.getElementById("flavor" + i).options.selectedIndex - 1]++; orders[orders.length - 1].topNum[document.getElementById("topping" + i).options.selectedIndex - 1]++; };
    for (i = 0; i < 3; i++) { orders[orders.length - 1].iceAdd[i] = Number(document.getElementById("flavor1-" + (i + 1)).value) };
    for (i = 0; i < 7; i++) { orders[orders.length - 1].topAdd[i] = Number(document.getElementById("topping1-" + (i + 1)).value) };

    if (orders[orders.length - 1].type == "Ice Waffle Baby") { orders[orders.length - 1].waffleAdd = 1; } else { orders[orders.length - 1].waffleAdd = 0; }
    if (orders[orders.length - 1].type == "Ice Affogato Baby") { orders[orders.length - 1].coffeeAdd = [1, 0]; } else { for (i = 0; i < 2; i++) { orders[orders.length - 1].coffeeAdd[i] = Number(document.getElementById("coffee1-" + (i + 1)).value); }; };
    orders[orders.length - 1].waterAdd = Number(document.getElementById("water1").value);
    if (orders[orders.length - 1].type == "Extra Ice Cream") { for (i = 0; i < 3; i++) { orders[orders.length - 1].iceAdd[i] = Number(document.getElementById("iceflavor1-" + (i + 1)).value) }; }
    if (orders[orders.length - 1].type == "Extra Topping") { for (i = 0; i < 7; i++) { orders[orders.length - 1].topAdd[i] = Number(document.getElementById("toptopping1-" + (i + 1)).value) }; }
    orders[orders.length - 1].price = price;
    addCart(menu);
  });
  ["iceflavor1-1", "iceflavor1-2", "iceflavor1-3", "toptopping1-1", "toptopping1-2", "toptopping1-3", "toptopping1-3", "toptopping1-5", "toptopping1-6", "toptopping1-7", "coffee1-1", "coffee1-2", "water1", "flavor1-1", "flavor1-2", "flavor1-3", "topping1-1", "topping1-2", "topping1-3", "topping1-4", "topping1-5", "topping1-6", "topping1-7"].forEach(e => { document.getElementById(e).addEventListener('change', () => setPrice(e)); });
}
function addOrder(label, num, price) {
  orders.push(new Order(label, num, price));
}
function showAdd(btn) {
  document.querySelector('form').reset();
  for (i = 1; i <= 3; i++) { document.getElementById("flavor" + i).removeAttribute('required'); };
  for (i = 1; i <= 3; i++) { document.getElementById("topping" + i).removeAttribute('required'); };
  ["combomain", "flavor", "topping", "waffle", "coffee", "icecream-1", "icecream-2", "icecream-3", "topping-1", "topping-2", "topping-3", "alaice", "alatop", "alacoffee", "alawater", "combala"].forEach(e => hide(e));
  switch (btn) {
    case "addBI":
      label = "Baby Ice";
      document.getElementById('Label').textContent = label;
      defaultPrice = 10; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "topping-1", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 1, price);
      break;
    case "addIIB":
      label = "Ice Ice Baby"
      document.getElementById('Label').textContent = label;
      defaultPrice = 20; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "topping-1", "topping-2", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 2, price);
      break;
    case "addIWB":
      label = "Ice Waffle Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 32; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "topping-1", "topping-2", "waffle", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 2, price);
      break;
    case "addIAB":
      label = "Ice Affogato Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 18; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "topping-1", "topping-2", "coffee", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 1, price);
      break;
    case "addBIB":
      label = "Big Ice Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 30; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "icecream-3", "topping-1", "topping-2", "topping-3", "combala", "accordionice"].forEach(e => show(e));
      addOrder(label, 3, price);
      break;
    case "addEI":
      label = "Extra Ice Cream";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alaice", "combala"].forEach(e => show(e));
      ["accordionice"].forEach(e => hide(e));
      addOrder(label, 0, price);
      break;
    case "addET":
      label = "Extra Topping";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alatop"].forEach(e => show(e));
      addOrder(label, 0, price);
      break;
    case "addC":
      label = "Coffee";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alacoffee"].forEach(e => show(e));
      addOrder(label, 0, price);
      break;
    case "addW":
      label = "Water";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alawater"].forEach(e => show(e));
      addOrder(label, 0, price);
    default:
      break;
  }
  for (i = 1; i <= orders[orders.length - 1].num; i++) { document.getElementById("flavor" + i).setAttribute('required', true); document.getElementById("topping" + i).setAttribute('required', true); };
}
function setPrice() {
  price = defaultPrice
    + (Number(document.getElementById("flavor1-1").value) + Number(document.getElementById("flavor1-2").value) + Number(document.getElementById("flavor1-3").value) + Number(document.getElementById("iceflavor1-1").value) + Number(document.getElementById("iceflavor1-2").value) + Number(document.getElementById("iceflavor1-3").value)) * 9
    + (Number(document.getElementById("topping1-1").value) + Number(document.getElementById("topping1-2").value) + Number(document.getElementById("topping1-3").value) + Number(document.getElementById("topping1-4").value) + Number(document.getElementById("topping1-5").value) + Number(document.getElementById("topping1-6").value) + Number(document.getElementById("topping1-7").value) + Number(document.getElementById("toptopping1-1").value) + Number(document.getElementById("toptopping1-2").value) + Number(document.getElementById("toptopping1-3").value) + Number(document.getElementById("toptopping1-4").value) + Number(document.getElementById("toptopping1-5").value) + Number(document.getElementById("toptopping1-6").value) + Number(document.getElementById("toptopping1-7").value)) * 3
    + (Number(document.getElementById("coffee1-1").value) + Number(document.getElementById("coffee1-2").value)) * 8
    + (Number(document.getElementById("water1").value)) * 2;
  document.getElementById("Price").textContent = price;
}
function show(id) { document.getElementById(id).style.display = ""; }
function hide(id) { document.getElementById(id).style.display = "none"; }
function zeros(i) { return Array.from({ length: i }, () => 0) }
function Order(type, num, price, iceNum = zeros(3), topNum = zeros(7), iceAdd = zeros(3), topAdd = zeros(7), waffleAdd = 0, coffeeAdd = zeros(2), waterAdd = 0) {
  this.index = orderIndex++;
  this.type = type;
  this.num = num;
  this.price = price;
  this.iceNum = iceNum;
  this.topNum = topNum;
  this.iceAdd = iceAdd;
  this.topAdd = topAdd;
  this.waffleAdd = waffleAdd;
  this.coffeeAdd = coffeeAdd;
  this.waterAdd = waterAdd;
}
/**
 * @param {Order} order 
 */
function addCart(order) {
  const div = document.createElement('div');
  div.innerHTML = `
${orders[orders.length - 1].iceNum[0] + orders[orders.length - 1].iceNum[1] + orders[orders.length - 1].iceNum[2] + orders[orders.length - 1].iceAdd[0] + orders[orders.length - 1].iceAdd[1] + orders[orders.length - 1].iceAdd[2] + orders[orders.length - 1].topNum[0] + orders[orders.length - 1].topNum[1] + orders[orders.length - 1].topNum[2] + orders[orders.length - 1].topNum[3] + orders[orders.length - 1].topNum[4] + orders[orders.length - 1].topNum[5] + orders[orders.length - 1].topNum[6] + orders[orders.length - 1].topAdd[0] + orders[orders.length - 1].topAdd[1] + orders[orders.length - 1].topAdd[2] + orders[orders.length - 1].topAdd[3] + orders[orders.length - 1].topAdd[4] + orders[orders.length - 1].topAdd[5] + orders[orders.length - 1].topAdd[6] + orders[orders.length - 1].waffleAdd + orders[orders.length - 1].coffeeAdd[0] + orders[orders.length - 1].coffeeAdd[1] + orders[orders.length - 1].waterAdd != 0 ? `
<div class="card cartcard"><!--requirement: offcanvas의 addcart버튼 클릭시 형식(이름, 구성, 각 구성의 수량, 가격) 맞춰서 추가-->
  <div class="card-header">
    ${orders[orders.length - 1].type}
    <p class="card-total">¥<span id="cardTotal">${orders[orders.length - 1].price}<span></p><!--product price-->
    <button type="button" class="btn-close" data-bs-dismiss="card" aria-label="Close" id="productclose" onclick="javasript:this.parentNode.parentNode.remove();totalMenu(-1*Number(this.parentNode.parentNode.querySelector('span').textContent));"></button>
  </div>
  <div class="card-body">
    ${orders[orders.length - 1].iceNum[0] + orders[orders.length - 1].iceNum[1] + orders[orders.length - 1].iceNum[2] != 0 ? `
    <div class="card" id="producticecream">
      <div class="card-body">
        <h5 class="card-title">Ice Cream</h5>
        <div class="row">
    `: ''}
          ${orders[orders.length - 1].iceNum[0] != 0 ? `<div class="col"><p class="card-text" id="productflavor1">Vanilla: <span id="productFlavor1">${orders[orders.length - 1].iceNum[0]}</span></p></div>` : ''}
          ${orders[orders.length - 1].iceNum[1] != 0 ? `<div class="col"><p class="card-text" id="productflavor2">Chocolate: <span id="productFlavor2">${orders[orders.length - 1].iceNum[1]}</span></p></div>` : ''}
          ${orders[orders.length - 1].iceNum[2] != 0 ? `<div class="col"><p class="card-text" id="productflavor3">Strawberry: <span id="productFlavor3">${orders[orders.length - 1].iceNum[2]}</span></p></div>` : ''}
    ${orders[orders.length - 1].iceNum[0] + orders[orders.length - 1].iceNum[1] + orders[orders.length - 1].iceNum[2] != 0 ? `
        </div>
      </div>
    </div>
    `: ''}
    ${orders[orders.length - 1].topNum[0] + orders[orders.length - 1].topNum[1] + orders[orders.length - 1].topNum[2] + orders[orders.length - 1].topNum[3] + orders[orders.length - 1].topNum[4] + orders[orders.length - 1].topNum[5] + orders[orders.length - 1].topNum[6] != 0 ? `
    <div class="card" id="producttoppings">
      <div class="card-body">
        <h5 class="card-title">Toppings</h5>
        <div class="row">
    `: ''}
          ${orders[orders.length - 1].topNum[0] != 0 ? `<div class="col-6"><p class="card-text" id="producttop1">Oreos: <span id="productTop1">${orders[orders.length - 1].topNum[0]}</span></p></div>` : ''}
          ${orders[orders.length - 1].topNum[1] != 0 ? `<div class="col-6"><p class="card-text" id="producttop2">Sprinkle: <span id="productTop2">${orders[orders.length - 1].topNum[1]}</span></p></div>` : ''}
          ${orders[orders.length - 1].topNum[2] != 0 ? `<div class="col-6"><p class="card-text" id="producttop3">Fudge Syrup: <span id="productTop3">${orders[orders.length - 1].topNum[2]}</span></p></div>` : ''}
          ${orders[orders.length - 1].topNum[3] != 0 ? `<div class="col-6"><p class="card-text" id="producttop4">Caramel Syrup: <span id="productTop4">${orders[orders.length - 1].topNum[3]}</span></p></div>` : ''}
          ${orders[orders.length - 1].topNum[4] != 0 ? `<div class="col-6"><p class="card-text" id="producttop5">Waffle Bit: <span id="productTop5">${orders[orders.length - 1].topNum[4]}</span></p></div>` : ''}
          ${orders[orders.length - 1].topNum[5] != 0 ? `<div class="col-6"><p class="card-text" id="producttop6">Waffle Cone: <span id="productTop6">${orders[orders.length - 1].topNum[5]}</span></p></div>` : ''}
          ${orders[orders.length - 1].topNum[6] != 0 ? `<div class="col-12"><p class="card-text" id="producttop7">Whipped Topping: <span id="productTop7">${orders[orders.length - 1].topNum[6]}</span></p></div>` : ''}
    ${orders[orders.length - 1].topNum[0] + orders[orders.length - 1].topNum[1] + orders[orders.length - 1].topNum[2] + orders[orders.length - 1].topNum[3] + orders[orders.length - 1].topNum[4] + orders[orders.length - 1].topNum[5] + orders[orders.length - 1].topNum[6] != 0 ? `
        </div>
      </div>
    </div>
    `: ''}
    ${orders[orders.length - 1].waffleAdd != 0 ? `
    <div class="card" id="productwaffle">
      <div class="card-body">
        <h5 class="card-title" id="productwaffle1">Waffle: <span id="productWaffle1">${orders[orders.length - 1].waffleAdd}</span></h5>
      </div>
    </div>
    `: ''}
    ${orders[orders.length - 1].coffeeAdd[0] + orders[orders.length - 1].coffeeAdd[1] != 0 ? `
    <div class="card" id="productcoffee">
      <div class="card-body">
        <h5 class="card-title">Coffee</h5>
        <div class="row row-cols-2">
    `: ''}
          ${orders[orders.length - 1].coffeeAdd[0] != 0 ? `<div class="col"><p class="card-text" id="productcoffee1">Hot Coffee: <span id="productCoffee1">${orders[orders.length - 1].coffeeAdd[0]}</span></p></div>` : ''}
          ${orders[orders.length - 1].coffeeAdd[1] != 0 ? `<div class="col"><p class="card-text" id="productcoffee2">Iced Coffee: <span id="productCoffee2">${orders[orders.length - 1].coffeeAdd[1]}</span></p></div>` : ''}
    ${orders[orders.length - 1].coffeeAdd[0] + orders[orders.length - 1].coffeeAdd[1] != 0 ? `
        </div>
      </div>
    </div>
    `: ''}
    ${orders[orders.length - 1].waterAdd != 0 ? `
    <div class="card" id="productwater">
      <div class="card-body">
        <h5 class="card-title" id="productwater1">Water: <span id="productWater1">${orders[orders.length - 1].waterAdd}</span></h5>
      </div>
    </div>
    `: ''}
  </div>
</div>
`: ''}
`;
  document.getElementById('cartcards').append(div);
  document.querySelector('form').reset();
  totalMenu(orders[orders.length - 1].price);
  document.getElementById('canvas_close').click();
}
function totalMenu(p) {
  document.getElementById('numAdded').textContent = orders.length;
  totalPrice += p; document.getElementById('totalPrice').textContent = totalPrice;
}