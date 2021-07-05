const url = 'https://api.mercadolibre.com/'

export const getData = async (categorias) => {
    const response = await fetch(`${url}sites/MLA/search?q=${categorias}`)
    const data = await response.json()
    return data.results

}

export const getItem = async (idItem) => {
    const response = await fetch(`${url}items/${idItem}`)
    const data = await response.json()
    return data
}