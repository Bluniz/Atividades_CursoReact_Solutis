function fazRequisição() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolvida");
      //reject('Promise Error)
      //throw new  Error('Deu erro');
    }, 5000);
  });
}

fazRequisição()
  .then(console.log)
  .catch(console.log)
  .finally(console.log("Finalizando"));
