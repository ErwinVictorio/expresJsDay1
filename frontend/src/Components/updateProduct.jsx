import axios from "axios";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";

const ProductUpdateForm = ({ product }) => {
    const [formData, setFormData] = useState({
        product_name: '',
        price: '',
        des: ''
    });

    // Pre-fill the form when product is passed in (e.g. from parent component)
    useEffect(() => {
        if (product && Array.isArray(product) && product.length > 0) {
            setFormData(product[0]);
        }
    }, [product]);


    function HandleSaveProduct() {
        // create exios request for updating product
        axios.put(`http://localhost:3000/api/products/${formData.id}`,

            {
                product_name: formData.product_name ?? null,
                price: formData.price ?? null,
                des: formData.des ?? null
            },
            {
                headers: {
                    "Content-Type": 'application/json'
                }
            }
        ).then((res) => {
            console.log(res);
            
            Swal.fire({
                title: "Good job!",
                text: res.data.message,
                icon: "success"
            });
        })


    }

    return (
        <>
            <div className="modal fade" id="updateFormProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Update</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">

                                {/* Product Name */}
                                <div className="mb-2">
                                    <div className="form-floating mb-3">
                                        <input
                                            value={formData.product_name}
                                            onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="floatingProductName"
                                        />
                                        <label htmlFor="floatingProductName">Product Name</label>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mb-2">
                                    <div className="form-floating mb-3">
                                        <input
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="floatingPrice"
                                        />
                                        <label htmlFor="floatingPrice">Price</label>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-2">
                                    <div className="form-floating">
                                        <textarea
                                            value={formData.des}
                                            onChange={(e) => setFormData({ ...formData, des: e.target.value })}
                                            className="form-control"
                                            style={{ height: "100px" }}
                                            id="floatingDescription"
                                        ></textarea>
                                        <label htmlFor="floatingDescription">Description</label>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                                <button onClick={HandleSaveProduct} type="button" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductUpdateForm;
