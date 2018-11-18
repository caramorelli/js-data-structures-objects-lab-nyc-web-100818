// Write your solution in this file!

const driver = { };

function updateDriverWithKeyAndValue(driver, key, value) {
  for var keys in driver {
    
  }
  
  var object = {}
  object[key] = value
  return object
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
 
}

function deleteFromDriverByKey(driver, key) {
   var new_obj = {};
  for (var keys in object) {
    var val = object[keys];
    if (keys !== key) {
      new_obj[keys] = val;
    }
  }
  return new_obj;
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
}
