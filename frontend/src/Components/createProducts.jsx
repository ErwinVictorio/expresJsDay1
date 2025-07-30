
import { useState } from "react";
import axios from 'axios'
 import Swal  from 'sweetalert2';

const CreaateProduct = () => {

    const [Data, SetData] = useState({
         productName: "",
            price: "",
            des: ""
    });
    const [ProductNameErrors, SetProductNameErrors] = useState();
    //  handle the submibmit data
    async function HandleSubmitForm(e) {
        e.preventDefault()
        try{
        const res = await axios.post('http://localhost:3000/api/products',
            {
                product_name: Data.productName ?? "" ,
                price: Data.price ? parseFloat(Data.price) : null,
                des: Data.des ?? ""
            },
             
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        
        console.log(res);
         } catch (error){
            // console.error(error.response.data.errors.message[0])
            // console.error(error);
            // SetProductNameErrors(error?.response?.data?.errors[0].message )
        console.error(error.response.data.errors.message);

         }

        //  next handle the axios request for sending data on database
        
    }

    return (
        <>
            <div className="modal fade" id="createProductModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Create Products</h1>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form >
                            <div className="modal-body">
                                {/* inputs */}
                                <div className="mb-2">
                                    <div className="form-floating mb-3">
                                        <input onChange={(e) => SetData({ ...Data, productName: e.target.value })} type="text" className="form-control" id="floatingInput" />
                                        <label for="floatingInput">Product Name</label>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={(e) => SetData({ ...Data, price: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Price</label>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="form-floating">
                                        <textarea onChange={(e) => SetData({ ...Data, des: e.target.value })} className="form-control" placeholder="Leave a comment here" style={{ height: "100px" }} id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Description</label>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer border-0 d-flex justify-content-end align-items-center">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={(e) => HandleSubmitForm(e)} type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CreaateProduct;