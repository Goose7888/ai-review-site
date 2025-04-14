// Skeleton Backend for ai review site
// Trevor Clark
// Created: Apr 12, 2025

const express = require('express');
const cors = require('cors');

const HTTP_PORT = 8080;

var app = express();
app.use(cors());
app.use(express.json());

/////////////////////////////////
//       GET Requests          //
/////////////////////////////////

// app.get('/', (req, res, next) => {
//     res.status(200).json({message: "Hello World!"});
// });

// Reqs look like 'http(s)://{ip_addr}:{port}/getaccount?{account_id}&{account_passwd}
app.get('/account', (req, res, next) => {
    res.status(200).json({message: "Get Account Request Received"});
});

// Send Course ID as query string
app.get('/course', (req, res, next) => {
    res.status(200).json({message: "Get Course Request Received"});
});

app.get('/team', (req, res, next) => {
    res.status(200).json({message: "Get Team Request Received"});
});

app.get('/review', (req, res, next) => {
    res.status(200).json({message: "Get Review Request Received"});
});

/////////////////////////////////
//       POST Requests         //
/////////////////////////////////

app.post('/account', (req, res, next) => {
    // uuid
    // Name
    // Password (plain text for now)

    res.status(201).json({message: "Account Creation Request Received"});
    // return account id
});

app.post('/course', (req, res, next) => {
    res.status(201).json({message: "Course Creation Request Received"});
    // return course id
});

app.post('/team', (req, res, next) => {
    res.status(201).json({message: "Team Creation Request Received"});
    // return team id
});

app.post('/review', (req, res, next) => {
    res.status(201).json({message: "Review Creation Request Received"});
    // return review id
});

/////////////////////////////////
//       PUT requests          //
/////////////////////////////////

app.put('/password', (req, res, next) => {
    res.status(201).json({message: "Password Update Request Received"});
});

// yeah the other updates go here... I'm not worried about those quite yet


/////////////////////////////////
//       DELETE requests       //
/////////////////////////////////

app.delete('/account', (req, res, next) => {
    res.status(200).json({message: "Account Deletion Request Received"});
});

app.delete('/course', (req, res, next) => {
    res.status(200).json({message: "Course Deletion Request Received"});
});

app.delete('/team', (req, res, next) => {
    res.status(200).json({message: "Team Deletion Request Received"});
});

app.delete('/review', (req, res, next) => {
    res.status(200).json({message: "Review Deletion Request Received"});
});

/////////////////////////////////
//        Time to              //
//          LISTEN!!           //
/////////////////////////////////
app.listen(HTTP_PORT, () => {
    console.log("Listening on port:", HTTP_PORT);
});
