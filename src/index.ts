import value from "./api/index.js"

const hey = 'Hello';

(window as any).hey = hey
console.log(value)
export default hey