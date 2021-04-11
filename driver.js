'use strict';

const events = require('./events.js');
require('./vendor.js');
const date = new Date();
const time = `Date:${date.getDay()}/${date.getMonth()}/${date.getFullYear()} time:${date.getHours()}:${date.getMinutes()}`;


events.on('pickup', event => {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${event.payload.orderID}`)
        events.emit('in-transit', event.payload)
    }, 1000)
})

events.on('in-transit', event => {
    console.log({
        event: 'in-transit',
        time: time,
        payload: event
    })
    setTimeout(() => {
        console.log('delivered');
        events.emit('delivered', event)
    }, 3000)
})

events.on('delivered', event => {
    console.log({
        event: 'delivered',
        time: time,
        payload: event
    })
})