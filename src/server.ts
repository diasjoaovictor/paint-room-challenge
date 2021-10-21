
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { app } from './app'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for PAINT ROOM',
    version: '1.0.0',
    description:
      'This is a REST API app made with Express. He calculates the amount of ink to paint a room.'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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