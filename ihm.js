var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
exports.start = function () {

    var texte = `*************************
    1. Rafraichir les données
    2. Lister les sessions
    99. Quitter\n`;

    var menu = function (saisie) {
        var service = require('./service');
        switch (saisie) {
            case '1':
                service.init(function (nb) {
                    console.log(`... Données mises à jour. \n[init] : ${nb} sessions trouvées.\n`);
                    rl.question(texte, menu);
                });
                break;
            case '2':
                service.listerSessions(function (nb) {
                    console.log(`Yo ${nb}`);
                    rl.question(texte, menu);
                });
                break;
            case '99':
                rl.close();
                break;
            default:
                rl.question(texte, menu);
        }
    }
    rl.question(texte, menu);
};