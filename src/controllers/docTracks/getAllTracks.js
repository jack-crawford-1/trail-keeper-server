import dotenv from 'dotenv';
dotenv.config();

let cachedTracks = null;

const docApiKey = process.env.DOC_API_KEY;
const url = `https://api.doc.govt.nz/v1/tracks`;

export default async function getAllTracks(req, res) {
  if (cachedTracks) {
    return res.status(200).json(cachedTracks);
  }

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'x-api-key': docApiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    cachedTracks = data;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      message: 'Error fetching all tracks',
      error: error.message,
    });
  }
}
