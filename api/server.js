const express = require('express')
const Inn = require('../inn/inn-model.js')

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ message:"Server is live" })
})

server.get('/api/inn', async (req, res) => {
    try{
    const innList = await Inn.fetchAll()
    res.status(200).json(innList)
    } catch(err) {
        res.status(500).json({ message: "The guest list could not be retrieved." })
    }
})

server.post('/api/inn', async (req, res) => {
    try{
    const newGuest = req.body
    const addedGuest = await Inn.addGuest(newGuest)
    res.status(201).json(addedGuest)
    } catch(err) {
        res.status(500).json({ message:"The guest could not be added." })
    }
})

server.delete('/api/inn/:id', async (req, res) => {
    try{
        const removedGuest = await Inn.removeGuest(req.params.id)
        if(removedGuest > 0){
        res.status(202).json({
            message:"Guest has checked out"
        })
    } else {
        res.status(404).json({
            message:"The guest with the specified id does not exist"
        })
    }
    } catch (error) {
        res.status(500).json({
            message:"Unable to remove"
        })
    }
})

module.exports = server