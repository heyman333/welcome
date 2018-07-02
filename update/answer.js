const update = (state, command) => {
  let nextState = null
  const commandKeys = Object.keys(command)
  console.log("state", state)
  console.log("commandKeys", commandKeys)

  if (commandKeys[0].includes("$")) {
    switch (commandKeys[0]) {
      case "$set":
        return command.$set
    }
  } else {
    nextState = Object.assign({}, state)
    console.log("nextState", nextState)

    Object.keys(command).forEach(key => {
      console.log("each key", key)
      console.log("command key", command[key])
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
