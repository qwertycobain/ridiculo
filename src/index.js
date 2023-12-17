const express = require('express')

const app = express()

const port = 6666
app.use(express.json())


app.get(`/test/`, (req, res)=>{


    query = req.query


    console.log(query)

    res.send("ok")
})

app.post('/', (req, res)=>{

    const {cpf} = req.body

    const params =  req.params

    console.log(params)

    console.log(cpf)
    return res.json({message: "hoshigaki kisamirs"})
})


app.put("/test/:id",(req, res) =>  {
    params = req.params


    console.log(params)
    return res.json("hoshigaki kisame")

})
 
app.listen(port, ()=>{
    console.log("hoshigaki kisame")
})