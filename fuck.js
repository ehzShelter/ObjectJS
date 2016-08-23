Function.prototype.asyncRandom = function() {
  const fn = this;
  const args = arguments;
  setTimeout(function() {
    fn.apply(null, args);
  }, Math.random() * 5000);
};


for (let i = 0; i < 10; i++) {
  console.log.asyncRandom("hello random eventloop in queue completed %d", i);
}

Function.prototype.asyncNotRandom = function() {
  const fn = this;
  const args = arguments;
  setTimeout(function() {
    fn.apply(null, args);
  }, 5000);
};


for (let i = 0; i < 10; i++) {
  console.log("\n");
  console.log.asyncNotRandom("hello random eventloop in queue completed %d", i);
}
