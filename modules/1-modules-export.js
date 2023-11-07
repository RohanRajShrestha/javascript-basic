// exports only work with HTTP

// named exports
export const name = "Harry"
export const age = 40

// exporting at once
const nameA = "Potter"
const ageA = 30

export { nameA as nameTwo, ageA as ageTwo}