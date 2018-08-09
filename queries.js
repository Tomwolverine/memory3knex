const database = require("./database-connection");

module.exports = {
    list(){
        return database('game').select().orderBy('id', 'asc');
    },
    read(id){
        return database('game').where('id', id).returning('*')
            .then(record => record[0]);
    },
    create(game){
        return database('game').insert(game).returning('*')
            .then(returnedArray => returnedArray[0]);
    },
    update(id, game){
        return database('game').update(game).where('id', id)
            .returning('*').then(returnedArray => returnedArray[0])
    },
    delete(id){
        return database('game').del().where('id', id)
    }
};
