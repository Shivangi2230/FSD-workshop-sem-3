const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('study', (subject) => {
    console.log(`I am studying ${subject}`);
});

myEmitter.on('complete', () => {
    console.log('Study session completed');
});

myEmitter.emit('study', 'DSA');
myEmitter.emit('complete');