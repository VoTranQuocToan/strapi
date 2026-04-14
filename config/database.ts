import path from 'path';

export default ({ env }) => {
  const isPostgres = !!env('DATABASE_URL');

  return {
    connection: isPostgres
      ? {
          client: 'postgres',
          connection: {
            connectionString: env('DATABASE_URL'),
            ssl: {
              rejectUnauthorized: false,
            },
          },
          pool: { min: 2, max: 10 },
        }
      : {
          client: 'sqlite',
          connection: {
            filename: path.join(__dirname, '..', '..', '.tmp/data.db'),
          },
          useNullAsDefault: true,
        },
  };
};