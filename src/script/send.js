function send(){
  var html = `
    
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