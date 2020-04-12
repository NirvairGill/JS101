['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// It will return [undefined, 'bear']. The callback will return undefined for
// first element and it will return the original element on second element.
// The .map() transforms the array according to the return values of callback.