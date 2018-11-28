var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
exports.start = function () {
    rl.question(`*************************
1. Rafraichir les données
2. Lister les sessions
99. Quitter`,
        function (saisie) {
            var service = require('./service');
            switch (saisie) {
                case '1':
                    service.init(function (nb) {
                        console.log(`... Données mises à jour. \n[init] : ${nb} sessions trouvées.`);
                    });

                    break;
                case '2':
                    service.listerSessions(function (nb) {
                        console.log(`Yo ${nb}`);
                        
                    });

                    break;
                case '99':
                    rl.close();
                    break;
                default :
                    break;
            }
        }
    );
};