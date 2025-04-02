const errorHandler = (err, req, res, next) => {
    console.error('❌ Error:', err.message);
    res.status(500).json({ status: "ERROR", message: err.message });
  };
  
  module.exports = errorHandler;
  