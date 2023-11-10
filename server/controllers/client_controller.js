const { Client } = require('../dbfiles/models/model_index');

const Clients = Client.create();


async function getAllClients(req, res) {
  try {
    const clients = await Clients.findAll();
    return res.json(clients);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getClientById(req, res) {
  const { id } = req.params;
  try {
    const client = await Clients.findByPk(id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    return res.json(client);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createClient(req, res) {
  const { client_fname, client_lname, salary, email, coaching_needs, joined_date } = req.body;
  try {
    const client = await Clients.create({
      client_fname,
      client_lname,
      salary,
      email,
      coaching_needs,
      joined_date
    });
    return res.json(client);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateClient(req, res) {
  const { id } = req.params;
  const { client_fname, client_lname, salary, email, coaching_needs, joined_date } = req.body;
  try {
    const client = await Clients.findByPk(id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    await client.update({
      client_fname,
      client_lname,
      salary,
      email,
      coaching_needs,
      joined_date
    });
    return res.json(client);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteClient(req, res) {
  const { id } = req.params;
  try {
    const client = await Clients.findByPk(id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    await client.destroy();
    return res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
};