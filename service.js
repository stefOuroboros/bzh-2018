var talks = [];
var request = require('request');
exports.init = function compterSessions(callback) {


    request('http://2018.breizhcamp.org/json/talks.json', {
        json: true
    }, function (err, res, tabTalks1) {
        if (err) {
            return console.log('Erreur', err);
        }
        talks = talks.concat(tabTalks1);
        request('http://2018.breizhcamp.org/json/others.json', {
            json: true
        }, function (err, res, tabTalks2) {
            if (err) {
                return console.log('Erreur2', err);
            }
            talks = talks.concat(tabTalks2);
            callback(talks.length);
        });
    });
};

exports.listerSessions = function (callback) {
    request('http://2018.breizhcamp.org/json/talks.json', {
        json: true
    }, function (err, res, tabTalks1) {
        if (err) {
            return console.log('Erreur', err);
        }
        talks = talks.concat(tabTalks1);
        request('http://2018.breizhcamp.org/json/others.json', {
            json: true
        }, function (err, res, tabTalks2) {
            if (err) {
                return console.log('Erreur2', err);
            }
            talks = talks.concat(tabTalks2);
            talks.forEach(talk => console.log(`Conférence ${talk.venue_id} :  ${talk.name}`));
        });
    });
};