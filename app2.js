var express = require('express');
var app = express();
var fetch = require('node-fetch');

//setting templating/view engine

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup static files
app.use(express.static('public'));

app.get('/',(request, response)=>{
    // response.render('acity.ejs',{
    //     "dog":new Date()
    // });
    response.render('index.ejs',{})
});

app.get('/about', (request, response)=>{
    response.render('about.ejs',{})
});
app.get('/team', (request, response)=>{
    response.render('team.ejs')
});
app.get('/gallery', (request, response)=>{
    response.render('gallery.ejs')
});
app.get('/review', (request, response)=>{
    response.render('review.ejs')
});
app.get('/contact', (request, response)=>{
    response.render('contact.ejs')
});

app.get('/users', (request, response)=>{

    //JS promise
    fetch('https://randomuser.me/api/?results=50')
    .then(val=>val.json())
    .then(val=> {
        response.render('users.ejs', {
            "users": val.results
        });
    })
})

// create a page
// app.get('/', (request, response)=>{
//     response.send('Hello There!')
// });
 
app.get('/login', (request, response)=>{
    response.send('Hello, this is the login page')
});

app.listen(8080, ()=>{console.log('Server started!')});

// var d = {
//     "name": "Ted",
//     "age": 10,
//     "hobbies": ["eating", "sleeping"]
// }