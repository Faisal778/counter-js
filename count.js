// console.log("count.js connected");
let sum = 0;

function getId(id) {
  const elId = document.getElementById(id);
  return elId;
}

// negative counter using onclick()
function negativeCounter() {
  sum -= 1;
  //const negCount = document.getElementById("neg-btn");
  const negCount = getId("count");
  negCount.innerText = sum;
}

// upositive counter sing onclick()
// function positiveCounter() {
// //   const posCount = document.getElementById("count");
//   const posCount = getId("count");
//   sum += 1;
//   posCount.innerText = sum;
// }

// positive counter using EventListener
const posCount = getId("pos-btn");
posCount.addEventListener("click", function () {
  sum += 1;
  const count = getId("count");
  count.innerText = sum;
});

// negative counter using EventListener
// const negCount = getId('neg-btn');
// negCount.addEventListener('click', function(){
//     sum-=1;
//     const count = getId('count');
//     count.innerText = sum;
// })
