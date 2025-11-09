import { io } from 'socket.io-client'

let socket

export function getSocket() {
  if (!socket) {
    const url = 'https://online-exam-backend-xi.vercel.app/' || 'http://localhost:4001'
    socket = io(url, { transports: ['websocket'], withCredentials: false })
  }
  return socket
}
