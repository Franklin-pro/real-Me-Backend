const errorMessage = (res, status, message) => {
    res.status(status).json({
        message: message
    });
};

export default errorMessage;