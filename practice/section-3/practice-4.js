'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionB = [];
  for(let i = 0; i < collectionA.length;) {
    let count = 0;
    for(let j = 0; j < collectionA.length; j++) {

      if(collectionA[i] == collectionA[j]) {
        if(collectionA[i].indexOf('-') > -1){
          count += parseInt(collectionA[i].split('-')[1]);
        }else{
          count++;
        }
        
      }
    }
    if(collectionA[i].indexOf('-') > -1){
      collectionA[i] = collectionA[i].split('-')[0];
    }
    let map = {};
    map['key'] = collectionA[i];
    map['count'] = count;
    collectionB.push(map);
    i += count;
  }
  for(let i = 0; i < collectionB.length; i++) {
    if(objectB['value'].indexOf(collectionB[i]['key']) > -1){
        collectionB[i]['count'] = collectionB[i]['count'] - parseInt(collectionB[i]['count']/3);
    }
  }
  return collectionB;
}
