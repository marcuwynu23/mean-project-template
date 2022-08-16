const express = require('express')
const cors = require('cors')



const app = express()

app.use(cors({}))

app.get('/',(req,res)=>{
	res.json({name: "Mark Wayne"})
})


app.post('/contact',(req,res)=>{
	console.log(req.body)
	
})
app.listen(9000)