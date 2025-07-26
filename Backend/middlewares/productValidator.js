 function validate(schema){

    return(req,res,next) =>{
        try {
            // parse & validate
            req.body = schema.parse(req.body)
            next() // if validated then proceed to the controller
        } catch (error) {
            return res.status(400).json({
                message: 'validation faild',
                error: error.error
            })
        }
    }
 }


module.exports = validate;