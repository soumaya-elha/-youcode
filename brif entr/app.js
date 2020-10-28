const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
var path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "public/inscri.html"));
});



app.post('/', function (req, res) {
    var name = req.body.username;
    var mail = req.body.email;
    var password = req.body.password;


    fs.readFile('users.json', 'utf-8', function (err, data) { 
        // if (err) throw err 
 
        var arrayOfObjects = JSON.parse(data)
        arrayOfObjects.push({
            name: name,
            email: mail,
            password: password
        });

        console.log(arrayOfObjects);

        fs.writeFile('users.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) { 
            if (err) throw err
            console.log('Done!') 
            res.sendFile(path.join(__dirname, "public/TAHA.html"));


        })
    })

})

        
app.get('/signIn', function (req, res) {
    res.sendFile(path.join(__dirname, "public/login.html"));
});


app.post('/signIn', function (req, res) {
    var name = req.body.username;
    var password = req.body.password;


    fs.readFile('users.json', 'utf-8', function (err, data) {
        if (err) throw err

        var arrayOfObjects = JSON.parse(data);

        console.log(arrayOfObjects);

        arrayOfObjects.forEach(element => {
            if (name == element.name && password == element.password) {
                res.sendFile(path.join(__dirname, "public/TAHA.html"));
            } else {
                res.sendFile(path.join(__dirname, "public/error.html"));
            }
        });

    });

})



app.listen('1010', function () {
    console.log("Hello");

})  