async function useApiRequest(callback: (data: any) => void) {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    callback(await data)
    return data
}

export {
    useApiRequest
}