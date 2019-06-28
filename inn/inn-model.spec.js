const Inn = require('./inn-model.js')
const db = require('../data/dbConfig.js')

describe('the inn model', () => {

    describe('fetch all()', () => {
        it('should return a list of the inn guests', async () => {
            await Inn.fetchAll()

            const innGuests = await db('inn')

            expect(innGuests).anything()
        })
    })

})