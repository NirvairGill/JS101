let advice = "Few things in life are as important as house training your important pet dinosaur.";
console.log(advice.replace('important', 'urgent'));

//Bonus question:

let newAd = advice.split(' ').map(word => word.replace('important', 'urgent')).join(' ');
console.log(newAd);