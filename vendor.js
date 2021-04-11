'use strict';
const events = require('./events.js');

const faker = require('faker');
const date = new Date();
const time = `Date:${date.getDay()}/${date.getMonth()}/${date.getFullYear()} time:${date.getHours()}:${date.getMinutes()}`;


setInterval(function() {
    events.emit('pickup', {
        event: 'pickup',
        time: time,
        payload: {
            store: faker.commerce.product(),
            orderID: faker.datatype.uuid(),
            customer: faker.name.findName(),
            address: faker.address.city()
        }

    })
}, 5000);
events.on('pickup', event => console.log(event));