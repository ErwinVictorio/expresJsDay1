
const CreaateProduct = () => {

    return (
        <>
            <div className="modal fade" id="createProductModal" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Create Products</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Hello
                        </div>
                        <div className="modal-footer border-0 d-flex justify-content-end align-items-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CreaateProduct;