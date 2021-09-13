const WebSocket = require('ws');

//this is actually a socket-handler factory
module.exports = (wsServer) => {
    const broadcast = (msg, sender) => {
        wsServer.clients.forEach(client => {
            if (client !== sender && client.readyState === WebSocket.OPEN)
                client.send(data, { binary: isBinary });
        });
    }

    const handleMsg = msg => {
        console.log('Client says: ', msg)
    }


    // this is the actuall socket-handler
    return ws => {
        console.log('Client connected');

        ws.send(JSON.stringify([]))

        ws.on('message', handleMsg);

        ws.on('close', () => console.log('Client disconnected'));
    }
}