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
    const [id] = await db('inn').insert(guest)
    return db('inn').where({ id }).first()
    
}

async function removeGuest(id){
    return await db('inn').where({ id }).delete()
  
}