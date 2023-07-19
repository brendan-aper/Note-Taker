const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);