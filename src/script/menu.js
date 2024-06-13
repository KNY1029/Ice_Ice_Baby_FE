var defaultPrice = 0, price = defaultPrice; totalPrice = 0;
var menu; var num = 0;
window.onload = () => {
  ["addBI", "addIIB", "addIWB", "addIAB", "addBIB", "addEI", "addET", "addC", "addW"].forEach(e => { document.getElementById(e).addEventListener('click', () => showAdd(e)); });
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    for (i = 1; i <= menu.num; i++) { menu.iceNum[document.getElementById("flavor" + i).options.selectedIndex - 1]++; menu.topNum[document.getElementById("topping" + i).options.selectedIndex - 1]++; };
    for (i = 0; i < 3; i++) { menu.iceAdd[i] = Number(document.getElementById("flavor1-" + (i + 1)).value)};
    for (i = 0; i < 7; i++) { menu.topAdd[i] = Number(document.getElementById("topping1-" + (i + 1)).value)};
    
    if(menu.type=="Ice Waffle Baby"){menu.waffleAdd = 1;} else{menu.waffleAdd = 0;}
    if(menu.type=="Ice Affogato Baby"){menu.coffeeAdd = [1,0];} else{for (i = 0; i < 2; i++) { menu.coffeeAdd[i] = Number(document.getElementById("coffee1-" + (i + 1)).value); };};
    menu.waterAdd = Number(document.getElementById("water1").value);
    if(menu.type=="Extra Ice Cream"){for (i = 0; i < 3; i++) { menu.iceAdd[i] = Number(document.getElementById("iceflavor1-" + (i + 1)).value)};}
    if(menu.type=="Extra Topping"){for (i = 0; i < 7; i++) { menu.topAdd[i] = Number(document.getElementById("toptopping1-" + (i + 1)).value)};}
    menu.price = price;
    addCart(menu);
    console.log(2)
  });
  ["iceflavor1-1", "iceflavor1-2", "iceflavor1-3", "toptopping1-1", "toptopping1-2", "toptopping1-3", "toptopping1-3", "toptopping1-5", "toptopping1-6", "toptopping1-7", "coffee1-1", "coffee1-2", "water1", "flavor1-1", "flavor1-2", "flavor1-3", "topping1-1", "topping1-2", "topping1-3", "topping1-4", "topping1-5", "topping1-6", "topping1-7"].forEach(e => { document.getElementById(e).addEventListener('change', () => setPrice(e)); });
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
      menu = new Order(label, 1, price);
      break;
    case "addIIB":
      label = "Ice Ice Baby"
      document.getElementById('Label').textContent = label;
      defaultPrice = 20; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "topping-1", "topping-2", "combala", "accordionice"].forEach(e => show(e));
      menu = new Order(label, 2, price);
      break;
    case "addIWB":
      label = "Ice Waffle Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 32; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "topping-1", "topping-2", "waffle", "combala", "accordionice"].forEach(e => show(e));
      menu = new Order(label, 2, price);
      break;
    case "addIAB":
      label = "Ice Affogato Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 18; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "topping-1", "topping-2", "coffee", "combala", "accordionice"].forEach(e => show(e));
      menu = new Order(label, 1, price);
      break;
    case "addBIB":
      label = "Big Ice Baby";
      document.getElementById('Label').textContent = label;
      defaultPrice = 30; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "icecream-3", "topping-1", "topping-2", "topping-3", "combala", "accordionice"].forEach(e => show(e));
      menu = new Order(label, 3, price);
      break;
    case "addEI":
      label = "Extra Ice Cream";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alaice", "combala"].forEach(e => show(e));
      ["accordionice"].forEach(e => hide(e));
      menu = new Order(label, 0, price);
      break;
    case "addET":
      label = "Extra Topping";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alatop"].forEach(e => show(e));
      menu = new Order(label, 0, price);
      break;
    case "addC":
      label = "Coffee";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alacoffee"].forEach(e => show(e));
      menu = new Order(label, 0, price);
      break;
    case "addW":
      label = "Water";
      document.getElementById('Label').textContent = label;
      defaultPrice = 0; price = defaultPrice; document.getElementById('Price').textContent = price;
      ["alawater"].forEach(e => show(e));
      menu = new Order(label, 0, price);
    default:
      break;
  }
  for (i = 1; i <= menu.num; i++) { document.getElementById("flavor" + i).setAttribute('required',true); document.getElementById("topping" + i).setAttribute('required',true);};
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
${menu.iceNum[0]+menu.iceNum[1]+menu.iceNum[2]+menu.iceAdd[0]+menu.iceAdd[1]+menu.iceAdd[2]+menu.topNum[0]+menu.topNum[1]+menu.topNum[2]+menu.topNum[3]+menu.topNum[4]+menu.topNum[5]+menu.topNum[6]+menu.topAdd[0]+menu.topAdd[1]+menu.topAdd[2]+menu.topAdd[3]+menu.topAdd[4]+menu.topAdd[5]+menu.topAdd[6]+menu.waffleAdd+menu.coffeeAdd[0]+menu.coffeeAdd[1]+menu.waterAdd!=0?`
<div class="card cartcard"><!--requirement: offcanvas의 addcart버튼 클릭시 형식(이름, 구성, 각 구성의 수량, 가격) 맞춰서 추가-->
  <div class="card-header">
    ${menu.type}
    <p class="card-total">¥<span id="cardTotal">${menu.price}<span></p><!--product price-->
    <button type="button" class="btn-close" data-bs-dismiss="card" aria-label="Close" id="productclose" onclick="javasript:this.parentNode.parentNode.remove();totalMenu(-1,-1*Number(this.parentNode.parentNode.querySelector('span').textContent));"></button>
  </div>
  <div class="card-body">
    ${menu.iceNum[0]+menu.iceNum[1]+menu.iceNum[2]+menu.iceAdd[0]+menu.iceAdd[1]+menu.iceAdd[2]!=0?`
    <div class="card" id="producticecream">
      <div class="card-body">
        <h5 class="card-title">Ice Cream</h5>
        <div class="row">
    `:''}
          ${menu.iceNum[0]+menu.iceAdd[0]!=0?`<div class="col-6"><p class="card-text" id="productflavor1">Vanilla: <span id="productFlavor1">${menu.iceNum[0]+menu.iceAdd[0]}</span></p></div>`:''}
          ${menu.iceNum[1]+menu.iceAdd[1]!=0?`<div class="col-6"><p class="card-text" id="productflavor2">Chocolate: <span id="productFlavor2">${menu.iceNum[1]+menu.iceAdd[1]}</span></p></div>`:''}
          ${menu.iceNum[2]+menu.iceAdd[2]!=0?`<div class="col-6"><p class="card-text" id="productflavor3">Strawberry: <span id="productFlavor3">${menu.iceNum[2]+menu.iceAdd[2]}</span></p></div>`:''}
    ${menu.iceNum[0]+menu.iceNum[1]+menu.iceNum[2]+menu.iceAdd[0]+menu.iceAdd[1]+menu.iceAdd[2]!=0?`
        </div>
      </div>
    </div>
    `:''}
    ${menu.topNum[0]+menu.topNum[1]+menu.topNum[2]+menu.topNum[3]+menu.topNum[4]+menu.topNum[5]+menu.topNum[6]+menu.topAdd[0]+menu.topAdd[1]+menu.topAdd[2]+menu.topAdd[3]+menu.topAdd[4]+menu.topAdd[5]+menu.topAdd[6]!=0?`
    <div class="card" id="producttoppings">
      <div class="card-body">
        <h5 class="card-title">Toppings</h5>
        <div class="row">
    `:''}
          ${menu.topNum[0]+menu.topAdd[0]!=0?`<div class="col-6"><p class="card-text" id="producttop1">Oreos: <span id="productTop1">${menu.topNum[0]+menu.topAdd[0]}</span></p></div>`:''}
          ${menu.topNum[1]+menu.topAdd[1]!=0?`<div class="col-6"><p class="card-text" id="producttop2">Sprinkle: <span id="productTop2">${menu.topNum[1]+menu.topAdd[1]}</span></p></div>`:''}
          ${menu.topNum[2]+menu.topAdd[2]!=0?`<div class="col-6"><p class="card-text" id="producttop3">Fudge Syrup: <span id="productTop3">${menu.topNum[2]+menu.topAdd[2]}</span></p></div>`:''}
          ${menu.topNum[3]+menu.topAdd[3]!=0?`<div class="col-6"><p class="card-text" id="producttop4">Caramel Syrup: <span id="productTop4">${menu.topNum[3]+menu.topAdd[3]}</span></p></div>`:''}
          ${menu.topNum[4]+menu.topAdd[4]!=0?`<div class="col-6"><p class="card-text" id="producttop5">Waffle Bit: <span id="productTop5">${menu.topNum[4]+menu.topAdd[4]}</span></p></div>`:''}
          ${menu.topNum[5]+menu.topAdd[5]!=0?`<div class="col-6"><p class="card-text" id="producttop6">Waffle Cone: <span id="productTop6">${menu.topNum[5]+menu.topAdd[5]}</span></p></div>`:''}
          ${menu.topNum[6]+menu.topAdd[6]!=0?`<div class="col-12"><p class="card-text" id="producttop7">Whipped Topping: <span id="productTop7">${menu.topNum[6]+menu.topAdd[6]}</span></p></div>`:''}
    ${menu.topNum[0]+menu.topNum[1]+menu.topNum[2]+menu.topNum[3]+menu.topNum[4]+menu.topNum[5]+menu.topNum[6]+menu.topAdd[0]+menu.topAdd[1]+menu.topAdd[2]+menu.topAdd[3]+menu.topAdd[4]+menu.topAdd[5]+menu.topAdd[6]!=0?`
        </div>
      </div>
    </div>
    `:''}
    ${menu.waffleAdd!=0?`
    <div class="card" id="productwaffle">
      <div class="card-body">
        <h5 class="card-title" id="productwaffle1">Waffle: <span id="productWaffle1">${menu.waffleAdd}</span></h5>
      </div>
    </div>
    `:''}
    ${menu.coffeeAdd[0]+menu.coffeeAdd[1]!=0?`
    <div class="card" id="productcoffee">
      <div class="card-body">
        <h5 class="card-title">Coffee</h5>
        <div class="row row-cols-2">
    `:''}
          ${menu.coffeeAdd[0]!=0?`<div class="col"><p class="card-text" id="productcoffee1">Hot Coffee: <span id="productCoffee1">${menu.coffeeAdd[0]}</span></p></div>`:''}
          ${menu.coffeeAdd[1]!=0?`<div class="col"><p class="card-text" id="productcoffee2">Iced Coffee: <span id="productCoffee2">${menu.coffeeAdd[1]}</span></p></div>`:''}
    ${menu.coffeeAdd[0]+menu.coffeeAdd[1]!=0?`
        </div>
      </div>
    </div>
    `:''}
    ${menu.waterAdd!=0?`
    <div class="card" id="productwater">
      <div class="card-body">
        <h5 class="card-title" id="productwater1">Water: <span id="productWater1">${menu.waterAdd}</span></h5>
      </div>
    </div>
    `:''}
  </div>
</div>
`:''}
`;
  if(menu.iceNum[0]+menu.iceNum[1]+menu.iceNum[2]+menu.iceAdd[0]+menu.iceAdd[1]+menu.iceAdd[2]+menu.topNum[0]+menu.topNum[1]+menu.topNum[2]+menu.topNum[3]+menu.topNum[4]+menu.topNum[5]+menu.topNum[6]+menu.topAdd[0]+menu.topAdd[1]+menu.topAdd[2]+menu.topAdd[3]+menu.topAdd[4]+menu.topAdd[5]+menu.topAdd[6]+menu.waffleAdd+menu.coffeeAdd[0]+menu.coffeeAdd[1]+menu.waterAdd!=0){
    document.getElementById('cartcards').append(div);
    document.querySelector('form').reset();
    totalMenu(1, menu.price);
  }
}
function totalMenu(i, p) {
  num += i; document.getElementById('numAdded').textContent = num;
  totalPrice += p; document.getElementById('totalPrice').textContent = totalPrice; document.getElementById('finalPrice').textContent = totalPrice;
}