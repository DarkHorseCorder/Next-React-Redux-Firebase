const next = require('next');
const routes = require('./routes');

const serverTools = require("./express_server");

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dir: './src/app', dev });
const handle = routes.getRequestHandler(nextApp);
const port = parseInt(process.env.PORT, 10) || 3000;
const server = serverTools.configServer(handle);

nextApp.prepare().then(() => {
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`>Server is Ready on http://localhost:${port}`);
    })
})
      