export async function getCurrentWeather(req, res) {
  const url =
    'https://api.open-meteo.com/v1/forecast/?latitude=-41.289047&longitude=174.772270&current=is_day,weathercode,temperature_2m,apparent_temperature,relative_humidity_2m,dewpoint_2m,wind_speed_10m,windgusts_10m,winddirection_10m,precipitation,rain,showers,snowfall,cloudcover,pressure_msl,surface_pressure,shortwave_radiation,direct_radiation,&timezone=NZ';
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
