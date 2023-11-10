const express = require('express')
const app = express()
const port = 8081

const sequelize = require('./sqlconn'); // Import the database connection
const { Client, ClientGroup, Coach, CoachingSession, CoachingType, ServiceCost } = require('./dbfiles/models/model_index');

//Client controller methods

const clientController = require('./controllers/client_controller.js')

app.use(express.json());

app.get('/', (req, res) => {
    res.send({'message':'Hello World!'});
})

//Client Routes
app
    .get('/client', clientController.getAllClients)
    .get('/client/:id', clientController.getClientById)
    .post('/client', clientController.createClient)
    .put('/client/:id', clientController.updateClient)
    .delete('/client/:id', clientController.deleteClient);

app.listen(port, () => {
    console.log(`Program listening on port ${port}`)
});