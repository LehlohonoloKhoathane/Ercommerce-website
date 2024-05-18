const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    const nodeEnv = import.meta.env.VITE_NODE_ENV;

    res.json({
        message: err.message,
        stack: nodeEnv === "development" ? err.stack : null
    });
};

module.exports = errorHandler;
