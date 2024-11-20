import { useApiRequest } from "./api/index.js"

const hey = 'Hello'

function x(data: any) {
    console.log(data)
}

const variable = useApiRequest(x)

export default variable