
 let btnAdd = document.querySelector('#add');
 let btnSub = document.querySelector('#substract');
 let input = document.querySelector('#input');
 //let result = parseInt(document.querySelector('#result').innerText);
 

 btnAdd.addEventListener('click',() =>{
    let b = parseInt(document.querySelector("input").value);
    let result = parseInt(document.querySelector('#result').innerText);
    //let calculate = 0;
    result += b;
    //calculate = b+result;
    console.log(b);
    //console.log(result);
  

 document.getElementById('result').innerHTML = result;
 });
  btnSub.addEventListener('click',() =>{
   let b = parseInt(document.querySelector("input").value);
   let result = parseInt(document.querySelector('#result').innerText);
//     let calculate;
//     calculate = b-result;
    result -= b;

 document.getElementById('result').innerHTML = result;
});