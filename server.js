require('dotenv').config();
const app = require('./src/app');

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 24) {
  throw new Error('JWT_SECRET missing or too short. Run npm start to generate local .env');
}
const port = Number(process.env.PORT) || 5050;
app.listen(port, () => console.log(`CourseNest API running at http://localhost:${port}`));
