export default async function getTracksByRegion(req, res) {
  const docApiKey = process.env.DOC_API_KEY
  const regionId = req.params.regionId
  const url = `https://api.doc.govt.nz/v1/tracks/region/${regionId}`

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'x-api-key': docApiKey,
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({
      message: 'Error fetching tracks by region',
      error: error.message,
    })
  }
}
