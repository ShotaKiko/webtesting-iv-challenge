const server = require('./server.js')
const request = require('supertest')
const db = require('../data/dbConfig.js')

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

    describe('Get/inn', () => {
        beforeEach( async () => {
            await db('inn').truncate()
        })
        
        it('should get the list of the inn guests', async () => {
            const res = await request(server).get('/api/inn')
            expect(res.status).toBe(200)
            expect(res.body).toEqual([])
            expect(res.type).toBe('application/json')
        })
    })

    describe('post/inn', () => {
        afterEach( async () => {
            await db('inn').truncate()
        })
        
        it('should add thhe guest to inn list', async () => {
            const newGuest ={
                "name":"Sleepyhead",
            }
            const res = await request(server).post('/api/inn').send(newGuest)
            expect(res.status).toBe(201)
            expect(res.type).toBe('application/json')
        })
    })

    describe('delete/inn', () => {
        
        it('should remove the guest from inn list', async () => {
            await db('inn').insert({ name: "removee" })
            const guestList = await db('inn')
            expect(guestList).toHaveLength(1)
            
            
            const res = await request(server).del(`/api/inn/${1}`)
            expect(res.status).toBe(202)
            
        })
    })
})