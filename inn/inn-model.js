const db = require('../data/dbConfig.js')

module.exports = {
    fetchAll,
    addGuest,
    removeGuest,
}

async function fetchAll(){
    return db('inn')
}

async function addGuest(guest){
    return null
}

async function removeGuest(guestName){
    return null
}