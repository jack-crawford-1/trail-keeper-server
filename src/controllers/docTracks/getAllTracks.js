let cachedTracks = null;

const docApiKey = process.env.DOC_API_KEY;
const url = `https://api.doc.govt.nz/v1/tracks`;
console.log(docApiKey);

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
    const data = await response.json();

    cachedTracks = data;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message });
  }
}

getAllTracks({}, { status: () => ({ json: () => {} }) });
