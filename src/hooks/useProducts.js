import { useEffect, useState } from "react"

// Custom Hook to Load data

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./fakedata.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return [products];
}

export default useProducts;