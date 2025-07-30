const { $ZodCheckLengthEquals } = require("zod/v4/core");

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    console.log(result);
    
    if (!result.success) {
      // ✅ Log the error details to the console for debugging
      // console.log('🔴 Validation Errors:', result.error.Errors);
      // console.log(result.error[0].message);
      return res.status(400).json({
        // message: 'Validation failed1',
        errors: result.error, // array of { message, path, etc. }
      });
    }

    // ✅ Assign the parsed & validated data
    req.body = result.data;
    next();
  };
}

module.exports = validate;
