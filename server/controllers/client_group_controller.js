const { ClientGroup } = require('../dbfiles/models/model_index');

const ClientGroups = ClientGroup.create();

async function getAllClientGroups(req, res) {
  try {
    const clientGroups = await ClientGroups.findAll();
    return res.json(clientGroups);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getClientGroupById(req, res) {
  const { id } = req.params;
  try {
    const clientGroup = await ClientGroups.findByPk(id);
    if (!clientGroup) {
      return res.status(404).json({ error: 'Client Group not found' });
    }
    return res.json(clientGroup);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createClientGroup(req, res) {
  const { cose_id, client_id } = req.body;
  try {
    const clientGroup = await ClientGroups.create({
      cose_id,
      client_id
    });
    return res.json(clientGroup);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateClientGroup(req, res) {
  const { id } = req.params;
  const { cose_id, client_id } = req.body;
  try {
    const clientGroup = await ClientGroups.findByPk(id);
    if (!clientGroup) {
      return res.status(404).json({ error: 'Client Group not found' });
    }
    await clientGroup.update({
      cose_id,
      client_id
    });
    return res.json(clientGroup);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteClientGroup(req, res) {
  const { id } = req.params;
  try {
    const clientGroup = await ClientGroups.findByPk(id);
    if (!clientGroup) {
      return res.status(404).json({ error: 'Client Group not found' });
    }
    await clientGroup.destroy();
    return res.json({ message: 'Client Group deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllClientGroups,
  getClientGroupById,
  createClientGroup,
  updateClientGroup,
  deleteClientGroup
};