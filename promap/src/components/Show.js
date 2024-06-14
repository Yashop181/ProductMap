import axios from "axios"
import { useState,useEffect } from "react"

const Show = () => {
    const [productsss , setProducts] = useState([]);

    useEffect(()=>{
        const okish = async ()=>{
            const response  = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data)
        }
        okish()
    },[])
  return (
    <div>
        <h1>Display</h1>
        <div>
            {productsss.map((product)=>(
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <img src={product.image} width="50px" alt="cdknck" />
                    <p>{product.description}</p>
                    

                </div>
            ))}
        </div>

    </div>
  )
}

export default Show
