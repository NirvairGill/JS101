let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {};
flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});
console.log(flintstonesObj);