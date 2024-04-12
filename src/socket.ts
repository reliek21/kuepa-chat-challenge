import { io, Socket } from 'socket.io-client';

('use client');

export const socket: Socket = io();
