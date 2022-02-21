module.exports = (app)=>{
    app.get("/Macaco",(req,res)=>{
        res.render('Macaco.ejs')
    })
}