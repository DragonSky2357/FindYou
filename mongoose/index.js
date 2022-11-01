const mongoose = require('mongoose');

const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug', true);
    }
}

mongoose.connect('mongodb://root:1234@localhost:27017/admin', {
    dbName : 'dev',
}, (error) => {
    if(error) {
        console.error('Mongodb Connect fail', error);
    } else {
        console.log('MongoDB Connect Success\nListenning on localhost:27017/admin')
    }
});

mongoose.connection.on('error', (error) => {
    console.error('Mongodb Connect fail', error);
})

mongoose.connection.on('disconnected', () => {
    console.error('Mongodb Disconnect. Retry to Connect');
    connect();
})
module.exports = {
    connect
};