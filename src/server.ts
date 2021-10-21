import { normalize, join } from 'path';
import { app } from './app'

const expressSwagger = require('express-swagger-generator')(app);


const options = {
  swaggerDefinition: {
    info: {
      description: 'Paint Room',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    produces: [
      "application/json",
    ],
    schemes: ['http', 'https'],
  },
  basedir: __dirname,

  files: [
    normalize(join(__dirname, 'routes', '*.*s')),
  ],
};
expressSwagger(options);

app.use((req, res) => {
  res.status(404);
  if (req.accepts('json')) {
    res.json({
      status: 404,
      error: [
        {
          message: 'Route not found',
        },
      ],
    });
  }
});

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    message: error.message
  })
})

const PORT: number = process.env.PORT ? parseInt(process.env.PORT as string, 10) : 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});