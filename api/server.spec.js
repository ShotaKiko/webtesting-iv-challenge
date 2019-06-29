const server = require('./server.js')
const request = require('supertest')

describe('server.js', () => {
    it('should set the test environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /', () => {
        it('should return 200', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
            expect(res.type).toBe('application/json')
            expect(res.body).toEqual({ message:"Server is live" })
        })
    })
})