const express = require('express')
const app = express()
const port = 8081

const sequelize = require('./sqlconn'); // Import the database connection
const { Client, ClientGroup, Coach, CoachingSession, CoachingType, ServiceCost } = require('./dbfiles/models/model_index');

//Controllers
const clientController = require('./controllers/client_controller.js');
const coachController = require('./controllers/coach_controller.js');
const coachingTypeController = require('./controllers/coaching_type_controller.js');
const clientGroupController = require('./controllers/client_group_controller.js');
const coachingSessionController = require('./controllers/coaching_session_controller.js');
const serviceCostController = require('./controllers/service_cost_controller.js');


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

//Coach Routes
app
    .get('/coach', coachController.getAllCoaches)
    .get('/coach/:id', coachController.getCoachById)
    .post('/coach', coachController.createCoach)
    .put('/coach/:id', coachController.updateCoach)
    .delete('/coach/:id', coachController.deleteCoach);

//Coaching Type Routes
app
    .get('/coachingtype', coachingTypeController.getAllCoachingTypes)
    .get('/coachingtype/:id', coachingTypeController.getCoachingTypeById)
    .post('/coachingtype', coachingTypeController.createCoachingType)
    .put('/coachingtype/:id', coachingTypeController.updateCoachingType)
    .delete('/coachingtype/:id', coachingTypeController.deleteCoachingType);

//Client Group Routes
app
    .get('/clientgroup', clientGroupController.getAllClientGroups)
    .get('/clientgroup/:id', clientGroupController.getClientGroupById)
    .post('/clientgroup', clientGroupController.createClientGroup)
    .put('/clientgroup/:id', clientGroupController.updateClientGroup)
    .delete('/clientgroup/:id', clientGroupController.deleteClientGroup);

//Coaching Session Routes
app
    .get('/coachingsession', coachingSessionController.getAllCoachingSessions)
    .get('/coachingsession/:id', coachingSessionController.getCoachingSessionById)
    .post('/coachingsession', coachingSessionController.createCoachingSession)
    .put('/coachingsession/:id', coachingSessionController.updateCoachingSession)
    .delete('/coachingsession/:id', coachingSessionController.deleteCoachingSession);

//Service Cost Routes
app
    .get('/servicecost', serviceCostController.getAllServiceCosts)
    .get('/servicecost/:id', serviceCostController.getServiceCostById)
    .post('/servicecost/', serviceCostController.createServiceCost)
    .put('/servicecost/:id', serviceCostController.updateServiceCost)
    .delete('/servicecost/:id', serviceCostController.deleteServiceCost);


app.listen(port, () => {
    console.log(`Program listening on port ${port}`)
});