let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

/* Algorithm
1. Create an empty array.
2. iterate through obj using for loop
3. if type === fruit, push the value of colors value in an array
4.  Else push size value
*/
let fruitAndVegetable = [];
for (let plant in obj) {
  if (obj[plant]['type'] === 'fruit') {
    fruitAndVegetable.push(obj[plant]['colors'].map(color => color[0].toUpperCase() + color.slice(1)));
  } else {
    fruitAndVegetable.push(obj[plant]['size'].toUpperCase());
  }
}
console.log(fruitAndVegetable);

