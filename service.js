var talks = [];

exports.init = function (callback) {
    var request = require('request');

    request('http://2018.breizhcamp.org/json/talks.json', {json: true}, function (err, res, tabTalks1) {
        if (err) {
            return console.log('Erreur', err);
        }
        talks = talks.concat(tabTalks1);
        request('http://2018.breizhcamp.org/json/others.json', {json: true}, function (err, res, tabTalks2) {
            if (err) {
                return console.log('Erreur2', err);
            }
            talks = talks.concat(tabTalks2)
            callback(talks.length)
        })
    })
}