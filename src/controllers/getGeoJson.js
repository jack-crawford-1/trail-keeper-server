import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getGeoJson = (req, res) => {
  const geoJsonPath = path.join(
    __dirname,
    '../data/DOC_Walking_Experiences_537020759107984799.geojson'
  )
  res.setHeader('Content-Type', 'application/json')
  res.sendFile(geoJsonPath, (err) => {
    if (err) {
      console.error('Error sending GeoJSON file:', err)
      res.status(500).send('Internal Server Error')
    }
  })
}

export default getGeoJson
