var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'Shlok123',
        server: '198.168.0.124', 
        options: {
            database: 'SampleDB',
            instancename: 'SQL2012'
          } 
    };

    // connect to your database
    if(sql.connect(config)){
        console.log(config);
    }else{
        console.log("ERROR")
    }

    // sql.connect(config, function (err) {
    
    //     if (err) console.log(err);

    //     // create Request object
    //     var request = new sql.Request();
           
    //     // query to the database and get the records
    //     request.query('select * from UserDetails', function (err, recordset) {
            
    //         if (err) console.log(err)

    //         // send records as a response
    //         res.send(recordset);
            
    //     });
    // });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});