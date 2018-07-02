const update = (state, command) => {
  let nextState = null
  const commandKeys = Object.keys(command)

  if (commandKeys[0].includes("$")) {
    switch (commandKeys[0]) {
      case "$set":
        return command.$set
      case "$push":
        return state.concat(command.$push)
      case "$unshift":
        const newArr = state.slice()
        newArr.unshift(...command.$unshift)
        return newArr
      case "$merge":
        return Object.assign({}, state, command.$merge)
      case "$apply":
        return command.$apply(state)
      case "$splice":
        const newArr2 = state.slice()
        newArr2.splice(...command.$splice[0])
        return newArr2
    }
  } else {
    nextState = Object.assign({}, state)
    Object.keys(command).forEach(key => {
      if (Object.keys(command[key]).length > 0) {
        nextState[key] = update(state[key], command[key])
      } else {
        console.log("nextState does not have command")
      }
    })
  }
  return nextState
}

module.exports = update
