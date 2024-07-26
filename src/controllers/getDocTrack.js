export default async function getDocTrack(req, res) {
  const docApiKey = process.env.DOC_API_KEY
  const { id: trackId } = req.params
  const url = `https://api.doc.govt.nz/v1/tracks/${trackId}/detail`

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'x-api-key': docApiKey,
      },
    })
    const data = await response.json()
    console.log('Data:', data)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: error.message })
  }
}
