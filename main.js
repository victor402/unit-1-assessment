
 let btnAdd = document.querySelector('#add');
 let btnSub = document.querySelector('#substract');
 let input = document.querySelector('#input');
 let result = parseInt(document.querySelector('#result').innerText);
 

 btnAdd.addEventListener('click',() =>{
    let b = parseInt(document.querySelector("input").value);
    let calculate = 0;
    calculate = b+result;
    console.log(b);
    console.log(result);
  result = calculate;

 document.getElementById('result').innerHTML = calculate;
 });
 btnSub.addEventListener('click',() =>{
    let b = parseInt(document.querySelector("input").value);
    let calculate;
    calculate = b-result;

 document.getElementById('result').innerHTML = calculate;
});