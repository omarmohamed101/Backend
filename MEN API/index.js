const express = require('express');
const colors = require('colors')
const path = require('path')
const logger = require('./middleware/logger')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

connectDB()
  

const app = express();


// init middleware 
app.use(logger)


// Body parser middleward - to parse the request body 
app.use(express.json())
// to handle form submissions
app.use(express.urlencoded({ extended: false}))



//-------------------------------------------------------------------------------------------------------------------------------
//                                                  Routes 

// // will return the json array when we get request to http://localhost:5000/api/members 
// app.get('/api/members', (req, res) => {
//     // to return json
//     res.json(members)
// })


// // get single member from the json array by its id
// app.get('/api/members/:id', (req, res) => {
//     const found = members.some(member => member.id === parseInt(req.params.id))


//     // req.params.id acess whatever sent in the :id
//     // the id returned as a string so we have to parse it to int
//     if (found)
//         res.json(members.filter(member => member.id === parseInt(req.params.id)))
//     else
//         res.status(404).json({msg: `No user with the id ${req.params.id}`})
// })


// keep doing this will get messy so insterd we will use the router
app.use('/api/members', require('./routes/api/members'))
//-------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------
//                                                           Render html
// render an html file on the /
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html')) 
// })


//set static folder
// static folder means that index will be rendered with the / and about will be rendered with the /about.html and so on 
app.use(express.static(path.join(__dirname, 'public')))

//-----------------------------------------------------------------------------------------------------------------------


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on ${PORT}`));
