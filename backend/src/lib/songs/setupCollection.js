import SongSchema from './schema/SongSchema.js';
import SongEnums  from './enums/SongEnums.js';

const setupCollection = async (mongoDb, createCollection) => {
  await createCollection(mongoDb, SongEnums.COLLECTION_NAME, SongSchema);
  const collection = mongoDb.collection(SongEnums.COLLECTION_NAME);
  await collection.createIndex({
    _id: 1,
  });
};

export default setupCollection;
