// node_js server 
const express =require('express');

const morgan=require('morgan');
const app = express();
app.use(morgan('dev'));
app.set('views','./views');
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render ('index',{message:'hello from node.js'});
});
app.get('/contact',(req ,res)=>{
  res.render('index',{message:'the contact page'});  
});
app.get('/about',(req,res)=>{
    res.render('index',{message:'the about page'});
});


app.get ('*',(req,res) =>{
    res.status(404).render('index',{message:'not found'});

});


const PORT =3000;
app.listen(PORT,() => {
    console.log('server running on port ${PORT}');
});