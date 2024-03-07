'use strict';

const _ = require('lodash');
const LandoMemcached = require('@lando/memcached/builders/memcached.js');

// Builder
module.exports = {
  name: 'acquia-memcached',
  parent: '_service',
  builder: (parent, config) => class AcquiaMemcached extends LandoMemcached.builder(parent, LandoMemcached.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    };
  },
};
