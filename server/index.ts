import express from 'express';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 5000;

// Path to the static React content, it changes if we build this ts file..
const buildPath = __dirname.includes('dist') ? '../build' : 'build';

app.use(express.static(path.join(__dirname, buildPath)));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get('/health', (_req, res) => {
  res.send('ok');
});