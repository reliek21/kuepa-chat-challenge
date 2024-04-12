const { createServer } = require('http');
const cors = require('cors');

const next = require('next');
const { Server: SocketIOServer } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3001;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

const users = [];

app.prepare().then(() => {
	const httpServer = createServer(handler);

	const io = new SocketIOServer(httpServer, {
		path: '/socket.io',
		cors: {
			origin: '*', // Permitir solicitudes desde cualquier origen
			methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir todos los métodos HTTP
			allowedHeaders: ['my-custom-header'],
			credentials: true
		}
	});

	io.on('connect_error', (error) => {
		console.error('Error de conexión Socket.io:', error);
	});

	io.on('connection', (socket) => {
		console.log('A user connected!');

		let currentUser;

		socket.on('login', (userData) => {
			currentUser = userData;
			users.push(currentUser);
		});

		socket.on('chatMessage', (message) => {
			console.log(`Message from ${currentUser.username}: ${message}`);
			io.emit('message', `${currentUser.username}: ${message}`);
		});

		socket.on('disconnect', () => {
			console.log('A user disconnected!');

			const index = users.findIndex((user) => user.id === currentUser.id);
			if (index !== -1) users.splice(index, 1);
		});
	});

	httpServer.once('error', (error) => {
		console.error(error);
		process.exit(1);
	});

	httpServer.listen(port, () => {
		console.log(`> Ready on http://${hostname}:${port}`);
	});
});
