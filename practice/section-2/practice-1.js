'use strict';

function countSameElements(collection) {
  var result = [];
  for(let i = 0; i < collection.length;) {
    let count = 0;
    for(let j = 0; j < collection.length; j++) {
      if(collection[i] == collection[j]) {
        count++;
      }
    }
    let map = {};
    map['key'] = collection[i];
    map['count'] = count;
    result.push(map);
    i += count;
  }
  return result;
}
