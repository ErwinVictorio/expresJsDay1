import axios from "axios";
import { useEffect, useState } from "react";

const viewProductModal = ({ product }) => {

    const [Item, SetItem] = useState({})



    useEffect(() => {
        if (product && product.data && product.data.length > 0 && product.data[0]) {
            SetItem(product.data[0]); // assuming that's the actual object you want
        }
    }, [product]);


    return (
        <>
            <div className="modal fade" id="viewProductInfo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Product Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="text-start mb-2">
                                <h5>Product Name:</h5>
                                <p>{Item.product_name}</p>
                            </div>
                            <div className="text-start mb-3">
                                <h5>Price:</h5>
                                <p>{Item.price}</p>
                            </div>
                            <div className="text-start mb-3">
                                <h5>Product Description:</h5>
                                <p>{Item.des}</p>
                            </div>
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default viewProductModal;