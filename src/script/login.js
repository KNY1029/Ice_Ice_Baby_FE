function login(id,pw){
  searchAccount(id,pw)
    .then(res=>res.json())
    .then(data=>{
      //then
      console.log(data);
    })
    .catch(err=>{
      //err
      console.log(err)
    })
}

window.onload=()=>{
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    login(document.getElementById('id').value,document.getElementById('pw').value);
  });
}