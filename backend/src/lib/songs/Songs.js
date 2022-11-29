import SongRoutes from './controller/SongRoutes.js';
import SongEnums from './enums/SongEnums.js';
import setupCollection from './setupCollection';
import SongSchema from './schema/SongSchema.js';
import setupServices from './setupServices';

const Songs = {
  collectionName: SongEnums.COLLECTION_NAME,
  setupCollection,
  schema: SongSchema,
  setupServices,
  routes: SongRoutes,
};

export default Songs;
