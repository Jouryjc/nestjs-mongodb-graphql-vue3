export const SERVER_HOST = process.env.SERVER_HOST ?? 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ?? '3000';

export const SERVER_URL = `http://${SERVER_HOST}:${SERVER_PORT}/graphql`