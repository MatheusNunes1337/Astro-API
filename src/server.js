const dotenv = require('dotenv');
const app = require('./index');

dotenv.config();

app.listen(process.env.PORT || 8080, () => {
  console.log(`the server is running on port ${process.env.PORT}!!!`);
});