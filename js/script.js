const container = document.querySelector(".container-ol")
console.log(container);
for(let i = 1; i <= 100; i++){
  if((i % 3 === 0) && (i % 5 === 0)){
    container.innerHTML +=`
    <div class="box fizzbuzz">
      ${"FizzBuzz"}
    </div>
    `;
  }else if(i % 5 === 0){
    container.innerHTML +=`
    <div class="box buzz">
    ${"Buzz"}
    </div>
    `
    console.log("Buzz");
  }else if (i % 3 === 0){
    container.innerHTML +=`
    <div class="box fizz">
      ${"Fizz"}
    </div>
    `;
    console.log("Fizz");
  }else{
    container.innerHTML +=`
    <div class="box numeri">
      ${i}
    </div>
    `;
  
  }
 
}