const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);