import mongodb from 'mongodb';

import LogServices from '#modules/logging/LogServices';
import dbData from '#modules/db/dbData';

import setupCollections from './setupCollections';

const { MongoClient } = mongodb;

let databasesEnsured = false;

const mongoPool = connOptions => {
  const { uri: mongoUrl, dbName } = connOptions;

  dbData.dbName = dbName;

  try {
    dbData.client = new MongoClient(mongoUrl, {
      maxPoolSize: 500,
      minPoolSize: 1,
    });

    if (!databasesEnsured) {
      databasesEnsured = true;
      LogServices.warn('Ensuring databases and collections (indexes, validations)...');
      const mDb = dbData.client.db(dbName);

      setupCollections(mDb, dbData).then(() => {
        LogServices.success('Ensuring done');
      });
    }
  } catch (e) {
    console.error(e);
    return null;
  }

  process.on('SIGINT', function () {
    dbData.client.close();
    process.exit();
  });

  return async ctx => {
    const {
      db, mongo, mongoDb,
    } = await dbData.getDbUtils();

    ctx.mongo = mongo;
    ctx.mongoDb = mongoDb;
    ctx.db = db;

    ctx.modS.responses.createValidateError(
      ctx.mongo,
      ctx,
      ctx.modS.responses.CustomErrors.SERVER_TIMEOUT,
    );

    ctx.privateState = {
      user: null,
    };
  };
};

export { dbData };
export default mongoPool;
