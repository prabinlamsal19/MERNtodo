const express = require('express');
const mongoose= require('mongoose');
const cors=require('cors')

const Todo = require('./models/todo');


const app = express();

//10 41 pm

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-to",{ 
    useNewUrlParser: true,
    useUnifiedTopology:true 
})  .then(()=> console.log("Connected to DB")).
    catch(console.error);

app.get('/todos',async(req,res ) =>{ 
    const todos = await Todo.find();    //Todo is mongoose db and in todos all the data is stored after finding 

    res.json(todos);                    // THis todos is the response that is to be ganerated
})

app.listen(3001,()=> console.log("Server started on port 3001") );