
let res = document.getElementById('result');
function fizzbuzz(){
    let input = document.getElementById('num').value
 for(let i=1;i<=input;i++){
     if(i%3==0 && i%5==0){
         res.innerHTML =("<br/> FizzBuzz");
     }
     else if(i%3==0){
         res.innerHTML =("Fizz");
     }
     else if(i%5 ==0){
         res.innerHTML = ("Buzz");
     }
     else{
         res.innerHTML =(i);
     }
 }
}