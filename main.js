const express=require('express')




const app=express()

const d = new Date();
    let day = d.getDay();
    let h = d.getHours();
    const logger=(req,res,next)=>{
        if(day<6 && day>0 && h>13 && h<17){next()}
        else{res.send("Please visit us again from monday to friday,from 9am to 5pm")}
    }
    app.use(logger)


const middlware=(req,res,next)=> {
    console.log(req.method)
    next ()
}
app.use(middlware)
app.use(express.static("public"))




// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/public/Home Page.html')
    
// } )
// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+'/public/Contact us.html')
// } )

// app.get('/services',(req,res)=>{
//     res.sendFile(__dirname+'/public/Our Services.html')
// } )




const port=7000




app.listen(port,()=>console.log(`server is running on port ${port}`))