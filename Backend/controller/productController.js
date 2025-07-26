
const productModel  =  require('../models/product');

// for getting the product list 
async function getProduct(req,res){ 
    try{
        const [rows] = await productModel.index(req,res);

        // get the response and convert to json format
        return res.status(200).json(rows)
    }catch(error){
      return res.status(500).json({message: `error ${error}`});
    }
}


async function createProduct(req,res) {

    try {
        //  apply the query for creating product
        const {product_name, price, des} = req.body; // apply desctructuring for res.body


        // to save the data on database
        try {
            await productModel.store(product_name,price,des)
            return res.status(200).json({message: "successfully created new product"})
        } catch (error) {
            return res.status(500).json({message: `sending data to database is faild ${error}`})
        }
         

    } catch (error) {
        return res.status(500).json({message: `error ${error}`})
    }
}


async  function showById(req,res){

    const { id } = req.params; // pag kukuha tau ng id galing url is params dapat hindi body

    try {
     const [rows] = await productModel.show(id)
    
     console.log(rows)
      return res.json({
         success: id,
         data: rows
      })
    } catch (error) {
        return res.status(500).json({message: `error ${error}`})
    }
}


async function updateProduct(req,res){

    const { product_name, price, des} = req.body;

    try {
        await productModel.update(product_name,price,des)
        return res.status(200).json({
            message: "Successfully updated",
            success: true
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: `error ${e.error}`
        })
    }
}


module.exports = {
    getProduct,
    createProduct,
    showById
}