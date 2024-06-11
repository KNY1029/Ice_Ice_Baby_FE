var defaultPrice = 0, price = 0;
window.onload = () => {
  ["addBI", "addIIB", "addIWB", "addIAB", "addBIB", "addEI", "addET", "addC", "addW"].forEach(e => { document.getElementById(e).addEventListener('click', () => showAdd(e)); });
  ["iceflavor1-1","iceflavor1-2","iceflavor1-3","toptopping1-1","toptopping1-2","toptopping1-3","toptopping1-3","toptopping1-5","toptopping1-6","toptopping1-7","coffee1-1","coffee1-2","water1","flavor1-1","flavor1-2","flavor1-3","topping1-1","topping1-2","topping1-3","topping1-4","topping1-5","topping1-6","topping1-7"].forEach(e => { document.getElementById(e).addEventListener('change', () => setPrice(e)); });
}
function showAdd(btn) {
  document.querySelector('form').reset();
  ["combomain", "flavor", "topping", "waffle", "coffee", "icecream-1", "icecream-2", "icecream-3", "topping-1", "topping-2", "topping-3", "alaice", "alatop", "alacoffee", "alawater", "combala"].forEach(e => hide(e));
  switch (btn) {
    case "addBI":
      document.getElementById('Label').textContent = "Baby Ice";
      defaultPrice = 10; document.getElementById('Price').textContent = defaultPrice;
      ["combomain", "flavor", "topping", "icecream-1", "topping-1", "combala", "accordionice"].forEach(e => show(e));
      break;
    case "addIIB":
      document.getElementById('Label').textContent = "Ice Ice Baby";
      defaultPrice = 20; document.getElementById('Price').textContent = defaultPrice;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "topping-1", "topping-2", "combala", "accordionice"].forEach(e => show(e));
      break;
    case "addIWB":
      document.getElementById('Label').textContent = "Ice Waffle Baby";
      defaultPrice = 32; document.getElementById('Price').textContent = defaultPrice;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "topping-1", "topping-2", "waffle", "combala", "accordionice"].forEach(e => show(e));
      break;
    case "addIAB":
      document.getElementById('Label').textContent = "Ice Affogato Baby";
      defaultPrice = 18; document.getElementById('Price').textContent = defaultPrice;
      ["combomain", "flavor", "topping", "icecream-1", "topping-1", "topping-2", "coffee", "combala", "accordionice"].forEach(e => show(e));
      break;
    case "addBIB":
      document.getElementById('Label').textContent = "Big Ice Baby";
      defaultPrice = 30; document.getElementById('Price').textContent = defaultPrice;
      ["combomain", "flavor", "topping", "icecream-1", "icecream-2", "icecream-3", "topping-1", "topping-2", "topping-3", "combala", "accordionice"].forEach(e => show(e));
      break;
    case "addEI":
      document.getElementById('Label').textContent = "Extra Ice Cream";
      defaultPrice = 0; document.getElementById('Price').textContent = 0;
      ["alaice", "combala"].forEach(e => show(e));
      ["accordionice"].forEach(e => hide(e));
      break;
    case "addET":
      document.getElementById('Label').textContent = "Extra Topping";
      defaultPrice = 0; document.getElementById('Price').textContent = 0;
      ["alatop"].forEach(e => show(e));
      break;
    case "addC":
      document.getElementById('Label').textContent = "Coffee";
      defaultPrice = 0; document.getElementById('Price').textContent = 0;
      ["alacoffee"].forEach(e => show(e));
      break;
    case "addW":
      document.getElementById('Label').textContent = "Water";
      defaultPrice = 0; document.getElementById('Price').textContent = 0;
      ["alawater"].forEach(e => show(e));
      break;
    default:
      break;
  }
}
function setPrice() { price = defaultPrice
  + (Number(document.getElementById("flavor1-1").value)+Number(document.getElementById("flavor1-2").value)+Number(document.getElementById("flavor1-3").value) + Number(document.getElementById("iceflavor1-1").value)+Number(document.getElementById("iceflavor1-2").value)+Number(document.getElementById("iceflavor1-3").value))*9
  + (Number(document.getElementById("topping1-1").value)+Number(document.getElementById("topping1-2").value)+Number(document.getElementById("topping1-3").value)+Number(document.getElementById("topping1-4").value)+Number(document.getElementById("topping1-5").value)+Number(document.getElementById("topping1-6").value)+Number(document.getElementById("topping1-7").value) + Number(document.getElementById("toptopping1-1").value)+Number(document.getElementById("toptopping1-2").value)+Number(document.getElementById("toptopping1-3").value)+Number(document.getElementById("toptopping1-4").value)+Number(document.getElementById("toptopping1-5").value)+Number(document.getElementById("toptopping1-6").value)+Number(document.getElementById("toptopping1-7").value))*3
  + (Number(document.getElementById("coffee1-1").value)+Number(document.getElementById("coffee1-2").value))*8
  + (Number(document.getElementById("water1").value))*2
  ; document.getElementById("Price").textContent = price; }
function show(id) { document.getElementById(id).style.display = ""; }
function hide(id) { document.getElementById(id).style.display = "none"; }

function Order(type,iceNum,topNum,iceAdd,topAdd,price) {
  this.type = type;
  this.iceNum = iceNum;
  this.topNum = topNum;
  this.iceAdd = iceAdd;
  this.topAdd = topAdd;
  this.price = price;
}

function addCart(order){
  const div = document.createElement('div');
  div.innerHTML = `

  `;
  document.getElementById('').append(div);
}