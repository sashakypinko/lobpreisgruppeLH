import setupDatabase from '#modules/db/setupDatabase';

const dbData = {
  dbName: null,
  setupDatabase: null,
  client: null,
  getDbUtils: async () => {
    const mongo = await dbData.client;
    const mongoDb = mongo?.db(dbData.dbName);
    if (!mongoDb) return {};
    const db = setupDatabase(mongoDb, dbData);

    return {
      db,
      mongo,
      mongoDb,
    };
  },
  releaseContext: async context => {
    context.mongoDb = null;
    context.db = null;
  },
};

export default dbData;
