import express from 'express';
import cors from 'cors';
import models from './models';

// Initialize the app
const app = express();
app.use(cors('*'));

// Imports: GraphQL
import server from './graphql/schema.js';

// Middleware: GraphQL
server.applyMiddleware({
  app: app
});

// Express: Port
const port = process.env.PORT || 4000;

// Express: Listener
models.sequelize.sync().then(() => app.listen(port, () => {
  console.log(`The server has started on port: ${port}`);
  console.log(`http://localhost:${port}/graphql`);
}));

// Exports
export default app;