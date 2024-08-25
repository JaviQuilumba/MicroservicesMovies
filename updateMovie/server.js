const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors');

const app = express();
const port = 3006;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice update movie Running...' });
});

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use('/api', movieRoutes);
app.use('/swaggerUpdateMovie', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice update movie listening at http://localhost:${port}`);
});
