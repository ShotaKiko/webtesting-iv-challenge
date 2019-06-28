const server = require('./server.js')
const request = require('supertest')

describe('server.js', () => {
    it('should set the test environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})