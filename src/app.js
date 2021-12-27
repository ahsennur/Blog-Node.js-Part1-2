const express = require('express')
const path = require('path')
const ejs = require('ejs');

const app = express()
const port = process.env.PORT || 3000

//middleware
app.use(express.static('public'));

//Template Engine
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
  });

// app.get("/",(req,res) =>{
//     const blog = { id: 1, title: "Blog title", description: "Blog description" }
//     res.send(blog)
// })

app.get("/about", (req, res) => {
  res.render('about');
});

app.get("/add_post", (req, res) => {
  res.render('add_post');
});

app.get("/post", (req, res) => {
  res.render('post');
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})