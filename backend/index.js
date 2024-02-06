const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const PORT = 8080;
const config = require('./routes/config');
require('dotenv').config();
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const dbDriver = require('./mongooseDriver');
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

const { auth } = require('express-oauth2-jwt-bearer');
const checkJwt = auth({
  audience: process.env.AUTH0_AUD,
  issuerBaseURL: process.env.AUTH0_BASE_URL,
  tokenSigningAlg: 'RS256'
});

app.use(helmet());
app.use(cors());
app.use(compression());
//   app.use(bodyParser.json({ limit: "50mb" }));
//   app.use(
//     bodyParser.urlencoded({
//       extended: true,
//       parameterLimit: 50000,
//       limit: "50mb"
//     })
//   );


// Route definitions
app.use('/', config);
// For protected routes
// app.use('/', checkJwt, <route>);

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
  //TODO: Error handling! 
  //   await dbDriver.connect();
})