'use strict';

function countSameElements(collection) {
 	var count =new Array();
  	//存储元素
  	var objArray =new Array();
  	for(var i=0;i<collection.length;i++){
  		if(collection[i].indexOf('-')!=-1){
  			var str= collection[i].split('-');
  			collection[i]=str[0];
  			count[collection[i]]=str[1]-1;
  		}else if(collection[i].indexOf(':')!=-1){
  			var str= collection[i].split(':');
  			collection[i]=str[0];
  			count[collection[i]]=str[1]-1;
  		}else if(collection[i].indexOf('[')!=-1&&collection[i].indexOf(']')!=-1){
  			var str= collection[i].split('[');
  			collection[i]=str[0];
  			var str1= str[1].split(']');
  			if(count[collection[i]]!=0){
  				count[collection[i]]=count[collection[i]]+Number(str1[0])-1;
  			}else{
  				count[collection[i]]=Number(str1[0])-1;
  			}
  			
  		}else{
  			if(count[collection[i]]){
  				count[collection[i]]=count[collection[i]]+0;
  			}else{
  				count[collection[i]]=0;
  			}
  		}
  	} 
  	for(var i=0;i<collection.length;i++){
  		count[collection[i]]++;
  		if(objArray.indexOf(collection[i])==-1){
  			objArray.push(collection[i]);
  		}
  	} 
  	var collectionArray = new Array();
    for(var m=0;m<objArray.length;m++){
  	  var obj = new Object();
  	  obj.name=objArray[m];
  	  obj.summary=count[objArray[m]];
  	  collectionArray.push(obj);
    }

  	return collectionArray;
}