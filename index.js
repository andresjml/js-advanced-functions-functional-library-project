const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFunc) {      
      let arr = (collection instanceof Array)? collection.slice():Object.values(collection)

      for (let i = 0; i < arr.length; i++){
        callbackFunc(arr[i])
      }

      return collection
    },

    map: function(collection, callbackFunc) {
      let arr = (collection instanceof Array)? collection.slice():Object.values(collection)
      let newArr=[]
      for(let i=0; i<arr.length;i++){
        
        newArr.push(callbackFunc(arr[i]))
      }
      return newArr
      
    },
 
    reduce: function(collection, callback, acc) {
			let arr = (collection instanceof Array)? collection.slice():Object.values(collection)

			if (!acc) {
				acc = arr[0]
				arr = arr.slice(1)
      }

			
			for (let i = 0; i < arr.length; i++) {
				acc = callback(acc, arr[i], collection)
			}
			return acc
      
    },

    find: function(collection, predicate) {
      let num;
      let arr = (collection instanceof Array)? collection.slice():Object.values(collection)

      for (let i = 0; i < arr.length; i++) {

				if(predicate(arr[i])){
         num=arr[i]
         return num
        } 

			}
    },

    filter: function(collection, predicate) {
      let arr = (collection instanceof Array)? collection.slice():Object.values(collection)
      let newArr=[]

      for (let i = 0; i < arr.length; i++) {

				if(predicate(arr[i])){
         newArr.push(arr[i])         
        } 
      }
      return newArr
    },

    size: function(collection) {
      let arr = (collection instanceof Array)? collection.slice():Object.values(collection)

      return arr.length
    },

    first: function(array, n) {
      if(!n){
        return array[0]
      }
      else{
        return array.slice(0,n)
      }
    },

    last: function(array, n) {
      if(!n){
        return array[array.length-1]
      }
      else{
        return array.slice(array.length-n)
      }
    },

    compact: function(array) {
      let newArr=array.slice()
      let arrComp=[]

      for (let i = 0; i < newArr.length; i++) {

				if(newArr[i]){
         arrComp.push(newArr[i])         
        }
      }
      return arrComp
    },

    sortBy: function(array, callback) {
      let newArr=array.slice()
      
      newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
      return newArr
    },


    
    /* flatten: function() {
      
    }, */

    uniq: function(array, isSorted, callback){
      let newArr=[]
      
      
      if (!isSorted){
        for (let i = 0; i < array.length; i++){
          if(newArr.indexOf(array[i]) === -1){
            
              newArr.push(array[i])
            }                
          }
        
         newArr.sort(function(a, b) {
          return a - b
        })
        
        return newArr
      }
  
      else{
        for (let i = 0; i < array.length; i++){
          if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i])                   
          }
        }
        
        return newArr
      }
    
    },

    keys: function(object) {
      let arr=[]
      for (let key in object){
        arr.push(key)
      }
        return arr
      
    },

    values: function(object) {
      let arr=[]
      for (let key in object){
        arr.push(object[key])
      }
        return arr
    },

    functions: function(object) {
      const arr = []

      for (let key in object) {
        if (typeof object[key] === "function"){
          arr.push(key)
        }
      }

      return arr
    },










  }
})()

fi.libraryMethod()
