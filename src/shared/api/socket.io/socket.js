import { io } from "socket.io-client"

const target = process.env.REACT_APP_BACKEND_URL

const socket = io(`${target}/game`, {
  autoConnect: false,
})

export default socket
