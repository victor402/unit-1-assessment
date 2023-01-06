
 let btnAdd = document.querySelector('#add');
 let btnSub = document.querySelector('#substract');
 let input = document.querySelector('#input');
 
 btnAdd.addEventListener('click',() =>{
    let b = parseInt(document.querySelector("input").value);
    let result = parseInt(document.querySelector('#result').innerText);
    
    result += b;
    document.getElementById('result').innerHTML = result;
 });
  btnSub.addEventListener('click',() =>{
   let b = parseInt(document.querySelector("input").value);
   let result = parseInt(document.querySelector('#result').innerText);

    result -= b;

 document.getElementById('result').innerHTML = result;
});