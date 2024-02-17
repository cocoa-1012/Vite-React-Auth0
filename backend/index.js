const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const config = require('./routes/config');
const importer = require('./routes/importer');
const { auth } = require('express-oauth2-jwt-bearer');
const mongoose = require("mongoose");
const PORT = 8080;

require('dotenv').config();

const checkJwt = auth({
  audience: process.env.AUTH0_AUD,
  issuerBaseURL: process.env.AUTH0_BASE_URL,
  tokenSigningAlg: 'RS256'
});
const bodyParser = require('body-parser');
// const dbDriver = require('./mongooseDriver');
app.use(bodyParser.json());

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 50000,
    limit: "50mb"
  })
);


// Route definitions
app.use('/', config);
app.use('/import', importer);
// For protected routes
// app.use('/', checkJwt, <route>);

// app.get('/api/private', checkJwt, (req, res) => {
//   res.json({ message: `Hello ${req.auth.payload.sub}!` });
// });

app.listen(PORT, async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log(`Listening on port ${PORT}`);
  // TODO: close connection 
})