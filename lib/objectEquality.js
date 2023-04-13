const isObjectEqual = function(object1, object2) {
  if (object1 === object2) {
    return true
  }

  if (Object.keys(object1).length !== Object.keys(object2).lenth) {
    return false;
  }

  for (let key1 in object1) {
    for (let key2 in object2) {
      if (object1.)
    }
  }
  return true;
}

exports.isObjectEqual = isObjectEqual;
