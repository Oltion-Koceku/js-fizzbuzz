const container = document.querySelector(".container-ol")
console.log(container);
for(let i = 1; i <= 100; i++){
  if(i % 3 === 0){
    container.innerHTML +=`
    <div class="box">
      ${"fizz"}
    </div>
    `; 
    console.log("fizz");
  }else if(i % 5 === 0){
    container.innerHTML +=`
    <div class="box">
      ${"buzz"}
    </div>
    `
    console.log("buzz");
  }else{
    container.innerHTML +=`
    <div class="box">
      ${i}
    </div>
    `
  console.log("fizzbuzz");
  }
  // container.innerHTML +=`
  // <div class="box">
  //     ${i}
  //   </div>
  // `
  // console.log(i);
}