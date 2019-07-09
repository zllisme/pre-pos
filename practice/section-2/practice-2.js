'use strict';

function countSameElements(collection) {
	var result = [];
  for(let i = 0; i < collection.length;) {
    let count = 0;
    for(let j = 0; j < collection.length; j++) {

      if(collection[i] == collection[j]) {
        if(collection[i].indexOf('-') > -1){
          count += parseInt(collection[i].split('-')[1]);
        }else{
          count++;
        }
        
      }
    }
    if(collection[i].indexOf('-') > -1){
      collection[i] = collection[i].split('-')[0];
    }
    let map = {};
    map['key'] = collection[i];
    map['count'] = count;
    result.push(map);
    i += count;
  }
  return result;
}
