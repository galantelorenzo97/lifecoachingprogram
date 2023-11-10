const { Coach } = require('../dbfiles/models/model_index');

const Coaches = Coach.create();

async function getAllCoaches(req, res) {
  try {
    const coaches = await Coaches.findAll();
    return res.json(coaches);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCoachById(req, res) {
  const { id } = req.params;
  try {
    const coach = await Coaches.findByPk(id);
    if (!coach) {
      return res.status(404).json({ error: 'Coach not found' });
    }
    return res.json(coach);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createCoach(req, res) {
  const { coach_fname, coach_lname, hire_date, dism_date } = req.body;
  try {
    const coach = await Coaches.create({
      coach_fname,
      coach_lname,
      hire_date,
      dism_date
    });
    return res.json(coach);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateCoach(req, res) {
  const { id } = req.params;
  const { coach_fname, coach_lname, hire_date, dism_date } = req.body;
  try {
    const coach = await Coaches.findByPk(id);
    if (!coach) {
      return res.status(404).json({ error: 'Coach not found' });
    }
    await coach.update({
      coach_fname,
      coach_lname,
      hire_date,
      dism_date
    });
    return res.json(coach);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteCoach(req, res) {
  const { id } = req.params;
  try {
    const coach = await Coaches.findByPk(id);
    if (!coach) {
      return res.status(404).json({ error: 'Coach not found' });
    }
    await coach.destroy();
    return res.json({ message: 'Coach deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllCoaches,
  getCoachById,
  createCoach,
  updateCoach,
  deleteCoach
};
