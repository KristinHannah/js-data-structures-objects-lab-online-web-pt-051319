// Write your solution in this file!

function updateDriverWithKeyAndValue(driver, key, value){
  Object.assign({}, driver, key, value)
  return driver
}