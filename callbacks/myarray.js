export function forEach(array, callback) {
  for (let i = 0;i < array.length;i++) {
    callback(array[i])
  }
}

export function map(array, callback) {
  const newArry = []
  for (let i = 0;i < array.length;i++) {
    newArry.push(callback(array[i]))
  }
  return newArry
}

export function mapWith(array, callback) {
  const newArry = []
  forEach(array, item => newArry.push(callback(item)))
  return newArry;
}

export function filter(array, callback) {
  const newArray = []
  for (let i = 0;i < array.length;i++) {
    if (callback(array[i])) {
      newArray.push(array[i])
    }
  }
  return newArray
}

export function reduce(array, fn, initialValue) {
  let accum
  if (arguments.length > 2) {
    accum = initialValue
  } else {
    accum = array[0]
    array.shift()
  }

  forEach(array, item => {
    accum = fn(accum, item)
  })

  return accum
}

export function intersect(...arrays) {
  return arrays.reduce((acc, array) => array.filter(item => acc.includes(item)))
}

export function union(...arrays) {
  return arrays.reduce((acc, array) => {
    const newItems = array.filter(item => !acc.includes(item))
    return acc.concat(newItems)
  })
}


