import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2';

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

        await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(`http://127.0.0.1:3000/api/products/${id}`, function () {
                        headers: {
                            Accept: "application/json"
                        }
                    }).then((res) => {
                        // Update local state by filtering out deleted product
                        SetProduct(prevProducts => prevProducts.filter(product => product.id !== id));
                        Swal.fire({
                            title: "Good job!",
                            text: res.data.message,
                            icon: "success"
                        });
                    })
                } catch (e) {
                    Swal.fire({
                        title: "Opps!",
                        text: `Error ${e}}`,
                        icon: "error"
                    });
                }
            }
        });
    }


    return (
        <>
            <div className="card border-0">
                <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
                    <h5>Product List</h5>
                    <button data-bs-toggle="modal" data-bs-target="#createProductModal" className="btn btn-outline-primary">
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

                        {products.map((item, index) => {

                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => HandleDelete(item.id)} className="btn">
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