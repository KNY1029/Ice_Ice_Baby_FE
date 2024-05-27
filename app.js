const url = "http://localhost:8080";

/**
 * create an account with give id and password.
 * @param {String} id required,unique,trim
 * @param {String} pw required,trim
 * @param {String} username required
 */
function createAccount(id,pw,username){
  fetch(url+"/createAccount",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id:id,pw:pw,username:username})
  })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}

/**
 * Return account information of given ID, if pw is correct.
 * @param {String} id 
 * @param {String} pw 
 */
function searchAccount(id,pw){
  fetch(url+"/searchAccount",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id:id,pw:pw})
  })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}