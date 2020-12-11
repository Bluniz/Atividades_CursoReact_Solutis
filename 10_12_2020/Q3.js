const A = new Array(10)
  .fill(null)
  .map((item) => Math.floor(Math.random() * 10));

const B = new Array(10)
  .fill(null)
  .map((item) => Math.floor(Math.random() * 10));

//! Index para controlar a posição do

/* 

const C = new Array(A.length + B.length);

let index = 0;

for (let i = 0; i < C.length; i++) {
  // Quando for par adiciona os dados
  if (i % 2 === 0) {
    C[i] = A[index];
  } else {
    C[i] = B[index];
    index++;
  }
}
 */

//! Outra forma

const C = [];

for (let i = 0; i < 10; i++) {
  C.push(A[i]);
  C.push(B[i]);
}
console.log(A);
console.log(B);
console.log(C);
