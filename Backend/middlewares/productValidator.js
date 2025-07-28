function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      // ✅ Log the error details to the console for debugging
      console.log('🔴 Validation Errors:', result.error.Errors);

      return res.status(400).json({
        message: 'Validation failed',
        errors: result.error.errors, // array of { message, path, etc. }
      });
    }

    // ✅ Assign the parsed & validated data
    req.body = result.data;
    next();
  };
}

module.exports = validate;
