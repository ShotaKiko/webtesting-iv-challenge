const Inn = require('./inn-model.js')
const db = require('../data/dbConfig.js')

describe('the inn model', () => {

    describe('fetch all()', () => {
        it('should return a list of the inn guests', async () => {
            const list = await Inn.fetchAll()

            const innGuests = await db('inn')

            expect(innGuests).toEqual(list)
        })
    })

    describe('addGuest()', () => {
        afterEach( async () => {
            await db('inn').truncate()
        })
        
        it('should insert a guest into the db', async () => {
            const newGuest = { name: 'Tomato' }
            await Inn.addGuest(newGuest)
           
            const guestList = await db('inn')
            
            expect(guestList[0].name).toBe(newGuest.name)
            expect(guestList).toHaveLength(1)
        })
    })

    describe('removeGuest', () => {
        afterEach( async () => {
            await db('inn').truncate()
        })

        it(' should remove a guest from the db', async () => {
            await db('inn').insert({ name: "Tom" })
            await db('inn').insert({ name: "removeMe" })

            await Inn.removeGuest(2)

            const guestList = await db('inn')
            expect(guestList).toHaveLength(1)
        })
    })

})