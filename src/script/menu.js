/*
babyIcePrice ¥
10
+(babyiceflavor1-1 + babyiceflavor1-2 + babyiceflavor1-3)*9
+(babyicetopping1-1 + babyicetopping1-2 + babyicetopping1-3 + babyicetopping1-4
    + babyicetopping1-5 + babyicetopping1-6 + babyicetopping1-7)*3
*/
/*

iceIceBabyPrice ¥
20
+(iceicebabyflavor1-1 + iceicebabyflavor1-2 + iceicebabyflavor1-3)*9
+(iceicebabytopping1-1 + iceicebabytopping1-2 + iceicebabytopping1-3 + iceicebabytopping1-4
    + iceicebabytopping1-5 + iceicebabytopping1-6 + iceicebabytopping1-7)*3

bigIceBabyPrice ¥
30
+(bigicebabyflavor1-1 + bigicebabyflavor1-2 + bigicebabyflavor1-3)*9
+(bigicebabytopping1-1 + bigicebabytopping1-2 + bigicebabytopping1-3 + bigicebabytopping1-4
    + bigicebabytopping1-5 + bigicebabytopping1-6 + bigicebabytopping1-7)*3

iceWaffleBabyPrice ¥
32
+(icewafflebabyflavor1-1 + icewafflebabyflavor1-2 + icewafflebabyflavor1-3)*9
+(icewafflebabytopping1-1 + icewafflebabytopping1-2 + icewafflebabytopping1-3 + icewafflebabytopping1-4
    + icewafflebabytopping1-5 + icewafflebabytopping1-6 + icewafflebabytopping1-7)*3

iceAffogatoBabyPrice ¥
18
+(iceaffogatobabyflavor1-1 + iceaffogatobabyflavor1-2 + iceaffogatobabyflavor1-3)*9
+(iceaffogatobabytopping1-1 + iceaffogatobabytopping1-2 + iceaffogatobabytopping1-3 + iceaffogatobabytopping1-4
    + iceaffogatobabytopping1-5 + iceaffogatobabytopping1-6 + iceaffogatobabytopping1-7)*3

bigIceBabyPrice ¥
30
+(bigicebabyflavor1-1 + bigicebabyflavor1-2 + bigicebabyflavor1-3)*9
+(bigicebabytopping-1 + bigicebabytopping-2 + bigicebabytopping-3 + bigicebabytopping-4
    + bigicebabytopping-5 + bigicebabytopping-6 + bigicebabytopping-7)*3

icePrice ¥
(iceflavor1-1 + iceflavor1-2 + iceflavor1-3)*9
+(icetopping1-1 + icetopping1-2 + icetopping1-3 + icetopping1-4
    + icetopping1-5 + icetopping1-6 + icetopping1-7)*3

topPrice ¥
(toptopping1-1 + toptopping1-2 + toptopping1-3 + toptopping1-4
    + toptopping1-5 + toptopping1-6 + toptopping1-7)*3

coffeePrice ¥
(coffee1-1 + coffee1-2)*8

waterPrice ¥
water1*2
*/

var defaultPrice = 0, price = 0;
window.onload = () => {
  ["addBI", "addIIB", "addIWB", "addIAB", "addBIB", "addEI", "addET", "addC", "addW"].forEach(e => { document.getElementById(e).addEventListener('click', () => showAdd(e)); });
  [/*value가 바뀔때  setPrice function 실행*/"iceflavor1-1","iceflavor1-2","iceflavor1-3","toptopping1-1","toptopping1-2","toptopping1-3","toptopping1-3","toptopping1-5","toptopping1-6","toptopping1-7","coffee1-1","coffee1-2","water1","flavor1-1","flavor1-2","flavor1-3","topping1-1","topping1-2","topping1-3","topping1-4","topping1-5","topping1-6","topping1-7"].forEach(e => { document.getElementById(e).addEventListener('change', () => setPrice(e)); });
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
      defaultPrice = 9; document.getElementById('Price').textContent = defaultPrice;
      ["alaice", "combala"].forEach(e => show(e));
      ["accordionice"].forEach(e => hide(e));
      break;
    case "addET":
      document.getElementById('Label').textContent = "Extra Topping";
      defaultPrice = 3; document.getElementById('Price').textContent = defaultPrice;
      ["alatop"].forEach(e => show(e));
      break;
    case "addC":
      document.getElementById('Label').textContent = "Coffee";
      defaultPrice = 8; document.getElementById('Price').textContent = defaultPrice;
      ["alacoffee"].forEach(e => show(e));
      break;
    case "addW":
      document.getElementById('Label').textContent = "Water";
      defaultPrice = 2; document.getElementById('Price').textContent = defaultPrice;
      ["alawater"].forEach(e => show(e));
      break;
    default:
      break;
  }
}
function setPrice() { price = ""; document.getElementById("Price").textContent = price; }
function show(id) { document.getElementById(id).style.display = ""; }
function hide(id) { document.getElementById(id).style.display = "none"; }
/*

babyicebutton, iceicebabybutton, icewafflebabybutton, iceaffogatobabybutton, bigicebabybutton, icebutton, topbutton, coffeebutton, waterbutton 클릭 시

해당 id가 없으면 0
값이 0이면 숨기기
메뉴이름 babyice, iceicebaby, icewafflebaby, iceaffogatobaby, bigicebaby, ice, top, coffee, water

*/
// var list = new 
// document.getElementById('cartcards').appendChild()
/*product title

productflavor1
 Vanilla: ([메뉴이름]flavor1-1) ([메뉴이름]flavor1가 1일 때 +1) ([메뉴이름]flavor2가 1일 때 +1) ([소문자메뉴이름]flavor3가 1일 때 +1)
productflavor2
 Chocolate: ([메뉴이름]flavor1-2) ([메뉴이름]flavor1가 2일 때 +1) ([메뉴이름]flavor2가 2일 때 +1) ([소문자메뉴이름]flavor3가 2일 때 +1)
productflavor3
 Strawberry: ([메뉴이름]flavor1-3) ([메뉴이름]flavor1가 3일 때 +1) ([메뉴이름]flavor2가 3일 때 +1) ([소문자메뉴이름]flavor3가 3일 때 +1)

producttop1
 Oreos: ([메뉴이름]topping1-1) ([메뉴이름]topping1가 1일 때 +1) ([메뉴이름]topping2가 1일 때 +1) ([소문자메뉴이름]topping3가 1일 때 +1)
producttop2
 Sprinkle: ([메뉴이름]topping1-2) ([메뉴이름]topping1가 2일 때 +1) ([메뉴이름]topping2가 2일 때 +1) ([소문자메뉴이름]topping3가 2일 때 +1)
producttop3
 Fudge Syrup: ([메뉴이름]topping1-3) ([메뉴이름]topping1가 3일 때 +1) ([메뉴이름]topping2가 3일 때 +1) ([소문자메뉴이름]topping3가 3일 때 +1)
producttop4
 Caramel Syrup: ([메뉴이름]topping1-4) ([메뉴이름]topping1가 4일 때 +1) ([메뉴이름]topping2가 4일 때 +1) ([소문자메뉴이름]topping3가 4일 때 +1)
producttop5
 Waffle Bit: ([메뉴이름]topping1-5) ([메뉴이름]topping1가 5일 때 +1) ([메뉴이름]topping2가 5일 때 +1) ([소문자메뉴이름]topping3가 5일 때 +1)
producttop6
 Waffle Cone: ([메뉴이름]topping1-6) ([메뉴이름]topping1가 6일 때 +1) ([메뉴이름]topping2가 6일 때 +1) ([소문자메뉴이름]topping3가 6일 때 +1)
producttop7
 Whipped Topping: ([메뉴이름]topping1-7) ([메뉴이름]topping1가 7일 때 +1) ([메뉴이름]topping2가 7일 때 +1) ([소문자메뉴이름]topping3가 7일 때 +1)

productwaffle1
 Waffle: (ice waffle baby 선택 시 +1)

productcoffee1
 Hot Coffee: (coffee1-1) (ice affogato baby 선택 시 +1)
productcoffee2
 Iced Coffee: (coffee1-2)

productwater1
 Water: water1

card-price
 ¥([메뉴이름]Price*quantity)

card-header
 [메뉴이름]Label

로 cartcards에 cartcard 추가
*/

/*
modal-totalPrice
 ¥(card-price 합)

productclose 클릭 시 해당 cartcard 삭제 (주문 취소)
*/

/*
modal-finalPrice
 modal-totalPrice
*/