import io from 'socket.io-client'

let socket

export const init = () => {
    console.log('sunucuya bağlanılıyor')
    socket = io('http://localhost:3001', {
        transports: ['websocket'],
    })
    socket.on('connect', () =>
        console.log('sunucuya bağlandı'))
}

export const send = (color) => {
    socket.emit('newColor', color) // client deysek backend 'e ya da tam tersi veri atıyo
}

export const subscribe = (cb) =>{
    socket.on('receive', (color) => {
        console.log(color)
        cb(color)
    })
}