const express = require('express');
const http = require('http');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', createProxyMiddleware({ target: 'http://data-simsimi.glitch.me', changeOrigin: true }));

const server = http.createServer(app);
server.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});
