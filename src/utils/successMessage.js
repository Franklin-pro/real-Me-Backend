const successMessage = (res,status,message,data)=>{
    res.status(status).json({
        message:message,
        data:data
    })
}
export default successMessage;