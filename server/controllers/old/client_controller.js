const express = require('express');
const router = express.Router();

const client = require('../models/old/client.js');
const { objLength } = require('../../utils.js');

router
    .get('/', (req,res) => {
        res.send("Client home");
    })
    .get('/getAll', async (req,res) => {
        res.send(await client.getAll());
    })
    .post('/newclient', async (req,res) => {
        let paramtable = req.body.parameters;
        res.send(await client.insertClient(paramtable));
    })
    .delete('/deleteclient', async(req,res) => {
        let clientID = req.body.clientID;
        if (!clientID) {
            res.send({"error": "invalid clientID"});
        }

        res.send(await client.deleteClient(clientID));
    })
    .put('/updateclient', async(req,res) => {
        let clientID = req.body.clientID;
        let paramtable = req.body.paramtable;
        if (!clientID || clientID <= 0) {
            res.send({"error": "invalid clientID"});
        }
        if (!paramtable || objLength(paramtable) <= 0) {
            res.send({"error": "invalid paramtable"});
        }

        res.send(await client.updateClient(clientID, paramtable));
    })

module.exports = router;