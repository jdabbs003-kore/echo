const net = require('net');

let client = 0;
let ctrlc = 0;

const server = net.createServer((c) => {
	const thisClient = client++;
	const addr = c.remoteAddress;
	console.log('* client ' + thisClient + ' connected (' + addr + ')');

	c.on('end', () => {
		console.log('* client ' + thisClient + ' disconnected');
	});

	c.on('data', (data) => {
		console.log('  client ' + thisClient + ' recv ' + data.length + ' bytes');
		console.log('  client ' + thisClient + ' send ' + data.length + ' bytes');
		c.write(data);
	});
});

server.on('error', (err) => {
  throw err;
});

server.on('close', () => {
  console.log('* echoserver closed');
  setTimeout(() => {process.exit();}, 250);
});

process.on('SIGINT', function() {
	switch (ctrlc)
	{
		case 0:
		{
			ctrlc = 1;
			console.log('* ctrl-c from shell');
			server.close()
			break;
		}

		case 1:
		{
			ctrlc = 2;
			console.log('* echoserver stopped');
			setTimeout(() => {process.exit();}, 250);
			break;
		}

		default:
		{
			process.exit();
			break;
		}
	}
});

server.listen(7, () => {
	const address = server.address();
	console.log('\n* echoserver listening on port ' + address.port);
});
