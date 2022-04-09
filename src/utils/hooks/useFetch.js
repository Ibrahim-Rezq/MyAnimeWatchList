import { useState, useEffect, useCallback } from 'react'

export const useFetch = (Url) => {
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState(Url)
    const [products, setProducts] = useState([])

    const getProducts = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const products = await response.json()
            setProducts(products)
        } catch (e) {
            setProducts([])
        }
        setLoading(false)
    }, [url])
    useEffect(() => {
        getProducts()
    }, [url, getProducts])
    return [loading, products, setUrl]
}
