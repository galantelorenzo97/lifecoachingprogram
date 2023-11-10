const { CoachingType } = require('../dbfiles/models/model_index');

const CoachingTypes = CoachingType.create();

async function getAllCoachingTypes(req, res) {
  try {
    const coachingTypes = await CoachingTypes.findAll();
    return res.json(coachingTypes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCoachingTypeById(req, res) {
  const { id } = req.params;
  try {
    const coachingType = await CoachingTypes.findByPk(id);
    if (!coachingType) {
      return res.status(404).json({ error: 'Coaching Type not found' });
    }
    return res.json(coachingType);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createCoachingType(req, res) {
  const { type_name } = req.body;
  try {
    const coachingType = await CoachingTypes.create({
      type_name
    });
    return res.json(coachingType);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateCoachingType(req, res) {
  const { id } = req.params;
  const { type_name } = req.body;
  try {
    const coachingType = await CoachingTypes.findByPk(id);
    if (!coachingType) {
      return res.status(404).json({ error: 'Coaching Type not found' });
    }
    await coachingType.update({
      type_name
    });
    return res.json(coachingType);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteCoachingType(req, res) {
  const { id } = req.params;
  try {
    const coachingType = await CoachingTypes.findByPk(id);
    if (!coachingType) {
      return res.status(404).json({ error: 'Coaching Type not found' });
    }
    await coachingType.destroy();
    return res.json({ message: 'Coaching Type deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllCoachingTypes,
  getCoachingTypeById,
  createCoachingType,
  updateCoachingType,
  deleteCoachingType
};
