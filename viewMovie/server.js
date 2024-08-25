const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors');

const app = express();
const port = 3007;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/api', movieRoutes);
app.use('/swaggerViewMovies', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice list movies listening at http://localhost:${port}`);
});
