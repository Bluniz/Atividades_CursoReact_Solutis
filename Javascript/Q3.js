const A = new Array(10)
  .fill(null)
  .map((item) => Math.floor(Math.random() * 10));

const B = new Array(10)
  .fill(null)
  .map((item) => Math.floor(Math.random() * 10));

const C = new Array(A.length + B.length);

// Index para controlar a posição do itens
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

console.log(A);
console.log(B);
console.log(C);
