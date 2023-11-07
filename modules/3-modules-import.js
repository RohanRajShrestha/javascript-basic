// import from named exports
import {name, age} from './1-modules-export.js'
console.log(name, age);

import {nameTwo, ageTwo} from './1-modules-export.js'
console.log(nameTwo, ageTwo);

// from default exports
import message from './2-modules-default-export.js'

console.log(message());