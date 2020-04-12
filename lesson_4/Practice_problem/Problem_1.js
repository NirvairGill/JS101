console.log([1, 2, 3].filter(_num => 'hi'));

// It will return the new array containng all the elements of original array
//since the callback will always return 'hi' which means it's truthy and .filter
// return new array with all the values it finds truthiness.
