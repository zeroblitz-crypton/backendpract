/* hola mundo */

const express=require('express')
const app=express();


app.use(express.json())
app.get('/user',(req,res)=>{
    res.json([
        {
          username: 'Cameroon',
          lastname: 'Rivera',
          correo: 'davidzbuss@gmail.com'
        },
        {
          username: 'david',
          lastname: 'de la curz',
          correo: 'davidzbuss@gmail.com'
        }
      ]
      )
})

app.post('/user',(req,res)=>{
   console.log(req.body);
    res.send('peticion post recibida')
})

app.put('/contact',(req,res)=>{
    res.send('peticiion put recibida')
    console.log(req);
})

app.delete('/test',(req,res)=>{
    res.send('peticiion delete recibida')
    console.log(req);
})

app.listen(5000,()=>{
    console.log('Server online');
})
