

export const MONGO_HOST = process.env.MONGO_HOST ?? 'localhost'
export const MONGO_PORT = process.env.MONGO_PORT ?? '27017';
export const MONGO_DB = process.env.MONGO_DB ?? 'test';
export const MONGO_SERVER = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

export const SERVER_PORT = process.env.SERVER_PORT ?? '3000';