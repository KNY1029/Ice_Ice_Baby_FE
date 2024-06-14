function send(){
  var html = `
    <div class="card cartcard" style="width: 100%;"><!--requirement: offcanvas의 addcart버튼 클릭시 형식(이름, 구성, 각 구성의 수량, 가격) 맞춰서 추가-->
    <div class="card-header">
      ${temp.type}
      <p class="card-total" style="position:absolute;   top:8px;  right:40px;   text-align:right;">¥<span id="cardTotal">${temp.price}<span></p><!--product price-->
      <button type="button" class="btn-close" data-bs-dismiss="card" aria-label="Close" id="productclose" onclick="javasript:this.parentNode.parentNode.remove();totalMenu(-1*Number(this.parentNode.parentNode.querySelector('span').textContent));orders=orders.filter(e=>{return e.index!=${temp.index}});totalMenu();"></button>
    </div>
    <div class="card-body">
      ${temp.iceNum[0] + temp.iceNum[1] + temp.iceNum[2] +temp.iceAdd[0] + temp.iceAdd[1] + temp.iceAdd[2] != 0 ? `
      <div class="card" id="producticecream">
        <div class="card-body">
          <h5 class="card-title" style="font-size=14px;">Ice Cream</h5>
          <div class="row">
      `: ''}
            ${temp.iceNum[0]+temp.iceAdd[0] != 0 ? `<div class="col"><p class="card-text" id="productflavor1">Vanilla: <span id="productFlavor1">${temp.iceNum[0]+temp.iceAdd[0]}</span></p></div>` : ''}
            ${temp.iceNum[1]+temp.iceAdd[1] != 0 ? `<div class="col"><p class="card-text" id="productflavor2">Chocolate: <span id="productFlavor2">${temp.iceNum[1]+temp.iceAdd[1]}</span></p></div>` : ''}
            ${temp.iceNum[2]+temp.iceAdd[2] != 0 ? `<div class="col"><p class="card-text" id="productflavor3">Strawberry: <span id="productFlavor3">${temp.iceNum[2]+temp.iceAdd[2]}</span></p></div>` : ''}
      ${temp.iceNum[0] + temp.iceNum[1] + temp.iceNum[2] +temp.iceAdd[0] + temp.iceAdd[1] + temp.iceAdd[2] != 0 ? `
          </div>
        </div>
      </div>
      `: ''}
      ${temp.topNum[0] + temp.topNum[1] + temp.topNum[2] + temp.topNum[3] + temp.topNum[4] + temp.topNum[5] + temp.topNum[6] + temp.topAdd[0] + temp.topAdd[1] + temp.topAdd[2] + temp.topAdd[3] + temp.topAdd[4] + temp.topAdd[5] + temp.topAdd[6] != 0 ? `
      <div class="card" id="producttoppings">
        <div class="card-body">
          <h5 class="card-title" style="font-size=14px;">Toppings</h5>
          <div class="row">
      `: ''}
            ${temp.topNum[0] + temp.topAdd[0] != 0 ? `<div class="col-6"><p class="card-text" id="producttop1">Oreos: <span id="productTop1">${temp.topNum[0] + temp.topAdd[0]}</span></p></div>` : ''}
            ${temp.topNum[1] + temp.topAdd[1] != 0 ? `<div class="col-6"><p class="card-text" id="producttop2">Sprinkle: <span id="productTop2">${temp.topNum[1] + temp.topAdd[1]}</span></p></div>` : ''}
            ${temp.topNum[2] + temp.topAdd[2] != 0 ? `<div class="col-6"><p class="card-text" id="producttop3">Fudge Syrup: <span id="productTop3">${temp.topNum[2] + temp.topAdd[2]}</span></p></div>` : ''}
            ${temp.topNum[3] + temp.topAdd[3] != 0 ? `<div class="col-6"><p class="card-text" id="producttop4">Caramel Syrup: <span id="productTop4">${temp.topNum[3] + temp.topAdd[3]}</span></p></div>` : ''}
            ${temp.topNum[4] + temp.topAdd[4] != 0 ? `<div class="col-6"><p class="card-text" id="producttop5">Waffle Bit: <span id="productTop5">${temp.topNum[4] + temp.topAdd[4]}</span></p></div>` : ''}
            ${temp.topNum[5] + temp.topAdd[5] != 0 ? `<div class="col-6"><p class="card-text" id="producttop6">Waffle Cone: <span id="productTop6">${temp.topNum[5] + temp.topAdd[5]}</span></p></div>` : ''}
            ${temp.topNum[6] + temp.topAdd[6] != 0 ? `<div class="col-12"><p class="card-text" id="producttop7">Whipped Topping: <span id="productTop7">${temp.topNum[6] + temp.topAdd[6]}</span></p></div>` : ''}
      ${temp.topNum[0] + temp.topNum[1] + temp.topNum[2] + temp.topNum[3] + temp.topNum[4] + temp.topNum[5] + temp.topNum[6] + temp.topAdd[0] + temp.topAdd[1] + temp.topAdd[2] + temp.topAdd[3] + temp.topAdd[4] + temp.topAdd[5] + temp.topAdd[6] != 0 ? `
          </div>
        </div>
      </div>
      `: ''}
      ${temp.waffleAdd != 0 ? `
      <div class="card" id="productwaffle">
        <div class="card-body">
          <h5 class="card-title" style="font-size=14px;" id="productwaffle1">Waffle: <span id="productWaffle1">${temp.waffleAdd}</span></h5>
        </div>
      </div>
      `: ''}
      ${temp.coffeeAdd[0] + temp.coffeeAdd[1] != 0 ? `
      <div class="card" id="productcoffee">
        <div class="card-body">
          <h5 class="card-title" style="font-size=14px;">Coffee</h5>
          <div class="row row-cols-2">
      `: ''}
            ${temp.coffeeAdd[0] != 0 ? `<div class="col"><p class="card-text" id="productcoffee1">Hot Coffee: <span id="productCoffee1">${temp.coffeeAdd[0]}</span></p></div>` : ''}
            ${temp.coffeeAdd[1] != 0 ? `<div class="col"><p class="card-text" id="productcoffee2">Iced Coffee: <span id="productCoffee2">${temp.coffeeAdd[1]}</span></p></div>` : ''}
      ${temp.coffeeAdd[0] + temp.coffeeAdd[1] != 0 ? `
          </div>
        </div>
      </div>
      `: ''}
      ${temp.waterAdd != 0 ? `
      <div class="card" id="productwater">
        <div class="card-body">
          <h5 class="card-title" style="font-size=14px;" id="productwater1">Water: <span id="productWater1">${temp.waterAdd}</span></h5>
        </div>
      </div>
      `: ''}
    </div>
  </div>
  `

  fetch(url+"/order",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({order:orders,html:html})
  })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      document.getElementById('modal_id').textContent=data.index;
    })
    .catch(err=>console.log(err));
}