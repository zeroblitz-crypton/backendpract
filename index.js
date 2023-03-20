/* hola mundo */

const express=require('express')
const morgan =require('morgan')

const app=express();

//Settings
app.set('appName','David express')
app.set('appPort','5000')
app.set('view engine','ejs')


function logger(req,res,next){
    console.log("Request received "+req.originalUrl);
    next();
}

//para que express me de un json
app.use(express.json())
app.use(morgan('dev'))

app.all('/user',(req,res,next)=>{
    console.log("Por aqui paso");
    
    next();
})

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
app.get('/',(req,res)=>{
    const data =[{name:'Jhon'},{name:'joe'},{name:'david'},{name:'matilda'}]
    res.render('index.ejs',{people:data})
})

app.post('/user/:id',(req,res)=>{
   console.log(req.body);
   console.log("id: "+req.params.id);
    res.send('peticion post recibida')
})

app.put('/user/:id',(req,res)=>{
    res.send('usuario : '+req.params.id+ " modificado")
   
})

app.delete('/user/:id',(req,res)=>{
    res.send('usuario : '+req.params.id+ " eliminado")

})

app.use(express.static('public'))

app.listen(app.get('appPort'),()=>{
    console.log("En Puerto : "+app.get('appPort'));
    console.log('Server online');
})
