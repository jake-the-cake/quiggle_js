import { useApiRequest } from "./api/index.js"

const hey = 'Hello'

function x(data: any) {
    console.log(data)
}

const variable = 'Test variable'
useApiRequest(x)

export default variable