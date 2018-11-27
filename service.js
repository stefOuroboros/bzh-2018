var talks = [];

exports.init = function (callback) {


    var request = require('request')
    console.log(request);
    

    request('http://2018.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }
    });

    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }
    });
    callback(talks.length);
};