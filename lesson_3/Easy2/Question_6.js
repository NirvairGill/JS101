let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);


// Using concat
let flintstonesUnnested = [].concat(...flintstones);
console.log(flintstonesUnnested);
console.log(flintstones);

//Using reduce method
let flintstonesFlatten = flintstones.reduce((acc, val) => {
   return acc.concat(val);
}, []);

console.log(flintstonesFlatten);
