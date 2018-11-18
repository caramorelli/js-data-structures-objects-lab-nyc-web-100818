// Write your solution in this file!

const driver = { };

function updateDriverWithKeyAndValue(driver, key, value) {
 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
 
}

function deleteFromDriverByKey(driver, key) {
   var new_obj = {};
  for (var keys in driver) {
    var val = driver[keys];
    if (keys !== key) {
      new_obj[keys] = val;
    }
  }
  return new_obj;
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
}
