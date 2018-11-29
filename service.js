const request = require('request-promise-native');

class Service {

    constructor() {
        this.talks = []
        //request renvoie grâce au module des promesses. Donc req1 et req2 sont des promesses
        this.$req1 = request('http://2018.breizhcamp.org/json/talks.json', {json: true});
        this.$req2 = request('http://2018.breizhcamp.org/json/others.json', {json: true});
    }
    
    init() {
        return Promise.all([this.$req1, this.$req2])
            .then(
                result=>{
                    result.forEach(r => this.talks = this.talks.concat(r))
                    return this.talks.length
                }
            )
    }

    listerSessions() {

        if (this.talks.length === 0) {
            return this.init().then(nb=>this.talks)
        } else {
            return Promise.resolve(this.talks)
        }
    }

    listerPresentateurs() {
        
    }

}

module.exports = new Service()