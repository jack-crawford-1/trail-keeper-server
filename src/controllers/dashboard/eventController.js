import Event from '../../models/tables/event.js';

export const getEvents = async (req, res) => {
  try {
    const data = await Event.select(
      'id, user_id, title, short_description, description, date, location'
    );
    res.status(200).json({ events: data.rows });
  } catch (err) {
    res.status(200).json({ events: err.stack });
  }
};

export const getEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Event.select(
      'user_id, title, short_description, description, date, location',
      'WHERE id = $1',
      [id]
    );
    res.status(200).json({ events: data.rows });
  } catch (err) {
    res.status(500).json({ events: err.stack });
  }
};

export const addEvent = async (req, res) => {
  const { user_id, title, short_description, description, date, location } =
    req.body;
  const columns =
    'user_id, title, short_description, description, date, location';
  const values = `'${user_id}', '${title}', '${short_description}', '${description}', '${date}', '${location}'`;

  try {
    const data = await Event.insertWithReturn(columns, values);
    res.status(200).json({ events: data.rows });
  } catch (err) {
    res.status(500).json({ events: err.stack });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, short_description, description, date, location } = req.body;
  const updatedValues = {
    title,
    short_description,
    description,
    date,
    location,
  };

  try {
    const data = await Event.update(updatedValues, id);
    res.status(200).json({ events: data.rows });
  } catch (err) {
    console.error('Error updating event', err);
    res.status(500).json({ events: `Error udating event' ${err.message}` });
  }
};
