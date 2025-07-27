import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const ProductList = () => {

    //  hanndling for displaying the product list

    const [products, SetProduct] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/products', {
            headers: {
                'Accept': "application/json"
            }
        }).then((res) => {
            console.log(typeof res.data)

            SetProduct(res.data)
        })

    }, [])


    //  handle Delete Product

     async function HandleDelete(id) {
        
        await axios.delete(`http://127.0.0.1:3000/api/products/${id}`,function(){
            headers:{
                Accept: "application/json"
            }
        }).then((res)=>{
          console.log(res);
        })

     }


    return (
        <>
            <div className="card border-0">
                <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
                    <h5>Product List</h5>
                    <button className="btn btn-outline-primary">
                        Add Product
                    </button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ProductName</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item,index) => {

                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={()=> HandleDelete(item.id)} className="btn">
                                            Delete
                                        </button>
                                        <button className="btn">
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductList;