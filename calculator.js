exports.add = (input1, input2) => {
  return addPromise(input1, input2).then((resultPromise) => {
    return resultPromise
  })
}

addPromise = (input1, input2) => {
  return new Promise((resolve, reject) => {
    let result = input1 + input2
    return resolve(result)
  })
}
