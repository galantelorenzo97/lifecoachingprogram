const { ServiceCost } = require('../dbfiles/models/model_index');

const ServiceCosts = ServiceCost.create();

async function getAllServiceCosts(req, res) {
  try {
    const serviceCosts = await ServiceCosts.findAll();
    return res.json(serviceCosts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getServiceCostById(req, res) {
  const { id } = req.params;
  try {
    const serviceCost = await ServiceCosts.findByPk(id);
    if (!serviceCost) {
      return res.status(404).json({ error: 'Service Cost not found' });
    }
    return res.json(serviceCost);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createServiceCost(req, res) {
  const { cost, description } = req.body;
  try {
    const serviceCost = await ServiceCosts.create({ cost, description });
    return res.json(serviceCost);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateServiceCost(req, res) {
  const { id } = req.params;
  const { cost, description } = req.body;
  try {
    const serviceCost = await ServiceCosts.findByPk(id);
    if (!serviceCost) {
      return res.status(404).json({ error: 'Service Cost not found' });
    }
    await serviceCost.update({ cost, description });
    return res.json(serviceCost);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteServiceCost(req, res) {
  const { id } = req.params;
  try {
    const serviceCost = await ServiceCosts.findByPk(id);
    if (!serviceCost) {
      return res.status(404).json({ error: 'Service Cost not found' });
    }
    await serviceCost.destroy();
    return res.json({ message: 'Service Cost deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllServiceCosts,
  getServiceCostById,
  createServiceCost,
  updateServiceCost,
  deleteServiceCost
};
