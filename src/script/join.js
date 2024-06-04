window.onload=()=>{
  var id=document.getElementById("id");
  var pw=document.getElementById("pw");
  var pw2=document.getElementById("pw2");
  var submit = document.getElementById("submit");

  id.addEventListener("change",()=>{checkID(id.value);});
  pw.addEventListener("change",()=>{
    pw2.value="";
    if(validPW(pw.value)){
      pw2.disabled=false;
    }else{
      disable(2);
    }
  });
  pw2.addEventListener("change",()=>{
    checkPW()
  });

  submit.addEventListener('click',()=>{
    createAccount(id.value,pw.value);
  })
}
function checkID(i){
  document.getElementById("id-msg").textContent="pending..."
  if(/^[A-Za-z][A-Za-z0-9_]{3,9}$/.test(i)){
    fetch(url+"/checkID",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({id:i})
    })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          pw.disabled=false;
          document.getElementById("id-msg").textContent=""
        }else{
          disable(1);
          document.getElementById("id-msg").innerHTML="user already exists."
        }
      })
      .catch(err=>{console.log(err);disable(0);document.getElementById("id-msg").innerHTML=" unknown error please contact front desk."});
  }else{
    disable(1);
    document.getElementById("id-msg").innerHTML="invalid id.";
  }
}

function validPW(i){
  if(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/.test(i) && i.length>=8){
    document.getElementById("pw-msg").innerHTML=""
    return true;
  }else{
    document.getElementById("pw-msg").innerHTML="invalid password.";
    return false;
  }
}
function checkPW(){
  if(pw.value==pw2.value){
    submit.disabled=false;
  }else{
    disable(3)
    document.getElementById("pw2-msg").innerHTML="incorrect password."
  }
}
function disable(i,q=true){
  if(i<1)id.disabled=q;//0
  if(i<2)pw.disabled=q;//1
  if(i<3)pw2.disabled=q;//2
  if(i<4)submit.disabled=q;//3
}