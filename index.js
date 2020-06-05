'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const student = require('./models/student')

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/api/student',(req,res)=>{
    res.send(200,{students:[]})
})
app.get('/api/student/:id',(req,res)=>{

})
app.post('/api/student',(req,res)=>{
   console.log('POST ')
   console.log(req.body)
   let student = new Student()
    student.name = req.body.name
    student.age = req.body.age
    student.school = req.body.school

    student.save((err,stu)=>{
        if(err) 
            res.status(500).send({message:"Error al guardar"})
        
        res.status(200).send({student:stu})
    })
})
app.post('/api/student/:id',(req,res)=>{

})
app.delete('/api/student/:id',(req,res)=>{

})
mongoose.connect('mongodb://localhost:27017/practica1',(err,res) =>{
    if(err) {
        
    }
    console.log("Conexion establecida con la db")
})
app.listen(port,()=>{
    console.log('Puerto '+port)
})