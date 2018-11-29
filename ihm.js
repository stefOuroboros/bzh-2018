const readline = require('readline')
const service = require('./service')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
exports.start = () => {

    const texte = `*************************
    1. Rafraichir les données
    2. Lister les sessions
    3. Lister les présentateurs
    99. Quitter\n`;

    const menu = (saisie) => {
        switch (saisie) {
            case '1':
                service.init().then(taille => {console.log(taille);
                rl.question(texte, menu)})
                break
            case '2':
                service.listerSessions().then(talks=>{
                    talks.forEach(talk=>console.log(talk.name));
                    rl.question(texte, menu)
                })
                break
            case '3':
                
                break
            case '99':
                rl.close()
                break
            default:
                rl.question(texte, menu)
        }
    }
    rl.question(texte, menu)
}