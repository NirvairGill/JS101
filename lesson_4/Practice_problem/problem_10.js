let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function findSmallest (obj) {
 let objArr = Object.values(obj);
 let smallNum = objArr[0];
 for (let i = 0; i < objArr.length; i += 1) {
   if (objArr[i] < smallNum) {
      smallNum = objArr[i];
   } else {
     continue;
   }
  }
  return Object.keys(obj).find(key => obj[key] === smallNum);
}

console.log(findSmallest(ages));