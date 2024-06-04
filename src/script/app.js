const url = "http://localhost:8080";

/**
 * create an account with give id and password.
 * @param {String} id required,unique,trim
 * @param {String} pw required,trim
 */
function createAccount(id,pw){
  fetch(url+"/createAccount",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id:id,pw:pw})
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

/**
 * Update account, if pw is correct.
 * @param {String} id 
 * @param {Object} query query to update
 */
function updateAccount(id,pw,query){
  fetch(url+"/updateAccount",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id:id,pw:pw,query:JSON.stringify(query)})
  })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}

/**
 * Delete account, if pw is correct.
 * @param {String} id 
 * @param {String} pw
 */
function deleteAccount(id,pw) {
  fetch(url+"/deleteAccount",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id:id,pw:pw})
  })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}