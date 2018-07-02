const update = require("./answer") // <- this is the file you make;

const state = { name: "Alice", todos: [] }
const nextState = update(state, {
  name: { $set: "Bob" }
})

console.log(nextState.name === "Bob") // true
console.log(state.todos === nextState.todos) // true
