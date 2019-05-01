const restify = require('restify');

const server = restify.createServer({
  name: 'appengine-restify',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(process.env.PORT || 8080, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
