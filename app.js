var express = require('express')

var app = express()

const vaccineList = [
    {
        "benid": 1111,
        "name": "John Doe",
        "date": "12 Sep 21",
        "vaccine": "SK"
    },
    {
        "benid": 2222,
        "name": "Bob",
        "date": "12 Aug 21",
        "vaccine": "CS"
    },
    {
        "benid": 3222,
        "name": "Deva",
        "date": "12 Sep 21",
        "vaccine": "CV"
    },
    {
        "benid": 43123,
        "name": "Lynda",
        "date": "14 Sep 21",
        "vaccine": "SK"
    }
]

const vaccineAdditionalDetails = {
    1111: {
        center: "Primary Health Center - 1",
        vaccineOfficer: "Dr. Angelina",
        time: "4.30 PM IST"
    },
    2222: {
        center: "Primary Health Center - 4",
        vaccineOfficer: "Dr. Hemanika",
        time: "2.30 PM IST"
    },
    3222: {
        center: "Primary Health Center - 3",
        vaccineOfficer: "Dr. Alok",
        time: "1.30 PM IST"
    },
    43123: {
        center: "Primary Health Center - 9",
        vaccineOfficer: "Dr. Ashok",
        time: "2.30 PM IST"
    },
}


app.options('/vaccinelist', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization");
    res.sendStatus(204);

});

app.get('/vaccinelist', function (req, res, next) {

    setTimeout(() => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(vaccineList);
        //res.sendStatus(400);
    }, 3000)
});

app.get('/vaccinelist/:benid', function (req, res, next) {

    setTimeout(() => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(vaccineAdditionalDetails[req.params.benid]);
        // res.sendStatus(400);
    }, 3000)
});

app.listen(8080, function () {
    console.log('Mock API listening on port 8080')
})




