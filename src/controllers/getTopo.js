import fetch from 'node-fetch'

let cachedTiles = {}

const linzApiKey = process.env.VITE_LINZ_API_KEY

export default async function getTopo(req, res) {
  const { zoom, x, y } = req.params
  const cacheKey = `tile_${zoom}_${x}_${y}`

  if (cachedTiles[cacheKey]) {
    return res.set('Content-Type', 'image/png').send(cachedTiles[cacheKey])
  }

  const url = `https://data.linz.govt.nz/services;key=${linzApiKey}/tiles/v4/layer=50767/EPSG:3857/${zoom}/${x}/${y}.png`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch tile data')
    }
    const tileData = await response.buffer()
    cachedTiles[cacheKey] = tileData

    res.set('Content-Type', 'image/png')
    res.send(tileData)
  } catch (error) {
    console.error('Error fetching tile data:', error)
    res.status(500).json({ message: error.message })
  }
}
