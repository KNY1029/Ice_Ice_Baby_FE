var id=document.getElementById("id");
var pw=document.getElementById("pw");
var pw2=document.getElementById("pw2");
var submit = document.getElementById("submit");


id.addEventListener("onchange",()=>{
  if(checkID(id.value)){
    pw.disabled=false;
    document.getElementById("id-bulb").style.color="green";
  }else{
    pw.disabled=true;
    pw2pw.disabled=true;
    document.getElementById("id-bulb").style.color="red";
    
  }
});
pw.addEventListener("onchange",()=>{
  if(validPW(pw.value)){
    pw2.display=false;
    document.getElementById("pw-bulb").style.color="green";
    
  }else{
    pw2.disabled=true;
    document.getElementById("pw-bulb").style.color="red";
  }
});
pw2.addEventListener("onchange",()=>{
  if(checkPW(pw.value)){
    document.getElementById("pw2-bulb").style.color="green";
  }else{
    document.getElementById("pw2-bulb").style.color="red";
  }
});



submit.addEventListener('click',()=>{
  createAccount(id.value,);
})


function checkPW(){
  if(pw.value==pw2.value&&checkID(id.value)){
    submit.disabled=false;
  }else{
    submit.disabled=true;
  }
}