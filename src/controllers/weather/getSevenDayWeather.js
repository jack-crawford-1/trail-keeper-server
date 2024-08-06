export async function getSevenDayWeather(req, res) {
  const url =
    'https://api.open-meteo.com/v1/forecast/?latitude=-41.289047&longitude=174.772270&daily=temperature_2m_max,weathercode&timezone=NZ';
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
