'use client';
import React, { useEffect } from 'react';
import { Button, Textarea } from '@/components/ui/shadcn';
import { io, Socket } from 'socket.io-client';

export const socket: Socket = io('http://localhost:3001');

interface User {
	id: string;
	username: string;
	role: string;
}

export default function Chat(): React.ReactElement {
	const [isConnected, setIsConnected] = React.useState<boolean>(false);
	const [transport, setTransport] = React.useState<string>('N/A');
	const [messages, setMessages] = React.useState<Array<string>>([]);
	const [inputValue, setInputValue] = React.useState<string>('');
	const [user, setUser] = React.useState<User | null>(null);

	useEffect(() => {
		if (socket.connect()) onConnect();

		function onConnect(): void {
			setIsConnected(true);
			setTransport(socket.io.engine.transport.name);

			socket.io.engine.on('upgrade', (transport: any): void => {
				setTransport(transport.name);
			});
		}

		function onDisconnect(): void {
			setIsConnected(false);
			setTransport('N/A');
		}

		socket.on('message', (message: string) => {
			setMessages((prevMessages) => [...prevMessages, message]);
		});

		socket.on('connect', onConnect);
		socket.on('disconnect', onDisconnect);

		return (): void => {
			socket.off('connect', onConnect);
			socket.off('disconnect', onDisconnect);
		};
	}, []);

	const handleLogin = (): void => {
		const username = prompt('Enter your username:');
		if (username) {
			const newUser: User = {
				id: socket.id as string,
				username: username,
				role: 'user'
			};

			socket.emit('login', newUser);
			setUser(newUser);
		}
	};

	const handleMessageSubmit: React.FormEventHandler<HTMLFormElement> = (
		e: React.FormEvent
	): void => {
		e.preventDefault();

		if (inputValue.trim() !== '') {
			socket.emit('chatMessage', inputValue);
			setInputValue('');
		}
	};

	return (
		<div className='h-full flex flex-col items-center justify-between'>
			<p>Status: {isConnected ? 'connected' : 'disconnected'}</p>

			{user ? (
				<>
					<div>
						{messages.map((message: string, index: number) => (
							<div key={index}>{message}</div>
						))}
					</div>

					<form
						onSubmit={handleMessageSubmit}
						className='overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring'>
						<Textarea
							id='message'
							value={inputValue}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								setInputValue(e.target.value)
							}
							placeholder='Escriba aquí su mensaje...'
							className='min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0'
						/>

						<div className='flex items-center p-3 pt-0'>
							<Button type='submit' size='sm' className='ml-auto gap-1.5'>
								Enviar mensaje
								<i className='bi bi-arrow-return-left'></i>
							</Button>
						</div>
					</form>
				</>
			) : (
				<Button
					type='submit'
					onClick={handleLogin}
					size='sm'
					className='ml-auto gap-1.5'>
					Enviar mensaje
					<i className='bi bi-arrow-return-left'></i>
				</Button>
			)}
		</div>
	);
}
