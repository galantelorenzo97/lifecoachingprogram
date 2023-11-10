const { CoachingSession } = require('../dbfiles/models/model_index');

const CoachingSessions = CoachingSession.create();

async function getAllCoachingSessions(req, res) {
  try {
    const coachingSessions = await CoachingSessions.findAll();
    return res.json(coachingSessions);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCoachingSessionById(req, res) {
  const { id } = req.params;
  try {
    const coachingSession = await CoachingSessions.findByPk(id);
    if (!coachingSession) {
      return res.status(404).json({ error: 'Coaching Session not found' });
    }
    return res.json(coachingSession);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createCoachingSession(req, res) {
  const { cose_id, coach_id, session_date, duration, location } = req.body;
  try {
    const coachingSession = await CoachingSessions.create({
      cose_id,
      coach_id,
      session_date,
      duration,
      location
    });
    return res.json(coachingSession);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateCoachingSession(req, res) {
  const { id } = req.params;
  const { cose_id, coach_id, session_date, duration, location } = req.body;
  try {
    const coachingSession = await CoachingSessions.findByPk(id);
    if (!coachingSession) {
      return res.status(404).json({ error: 'Coaching Session not found' });
    }
    await coachingSession.update({
      cose_id,
      coach_id,
      session_date,
      duration,
      location
    });
    return res.json(coachingSession);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteCoachingSession(req, res) {
  const { id } = req.params;
  try {
    const coachingSession = await CoachingSessions.findByPk(id);
    if (!coachingSession) {
      return res.status(404).json({ error: 'Coaching Session not found' });
    }
    await coachingSession.destroy();
    return res.json({ message: 'Coaching Session deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllCoachingSessions,
  getCoachingSessionById,
  createCoachingSession,
  updateCoachingSession,
  deleteCoachingSession
};
