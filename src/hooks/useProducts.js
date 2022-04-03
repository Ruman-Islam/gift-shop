import { useEffect, useState } from "react";

const useProducts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([]);
    useEffect(() => {  // data loading //
        setIsLoading(true)
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false)
            })
    }, []);

    return [products, setProducts, isLoading];
}

export default useProducts;