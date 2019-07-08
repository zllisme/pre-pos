'use strict';

function collectSameElements(collectionA, objectB) {
    var result = [];
    for(var i = 0; i < collectionA.length; i++) {
      if(objectB['value'].indexOf(collectionA[i]) > -1) {
        result.push(collectionA[i]);
      }
    }
    return result;
}
