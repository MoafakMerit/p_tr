'use strict';

/**
 * currency-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::currency-list.currency-list');
