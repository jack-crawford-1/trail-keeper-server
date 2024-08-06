import express from 'express';
import getDocTrack from '../controllers/docTracks/getDocTrack.js';
import getAllTracks from '../controllers/DocTracks/getAllTracks.js';
import getTracksByRegion from '../controllers/docTracks/getTracksByRegion.js';
import getTopo from '../controllers/map/getTopo.js';
import getGeoJson from '../controllers/map/getGeoJson.js';

const mapRouter = express.Router();

mapRouter.get('/all-doc-tracks', getAllTracks);
mapRouter.get('/tracks-by-region/:regionId', getTracksByRegion);
mapRouter.get('/doc-track/:id', getDocTrack);
mapRouter.get('/getTopo/:zoom/:x/:y', getTopo);
mapRouter.get('/geojson', getGeoJson);

export default mapRouter;
