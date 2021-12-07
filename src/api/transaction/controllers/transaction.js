/* 'use strict';

/**
 *  transaction controller
 */

/* const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::transaction.transaction");
 */

const { createCoreController } = require("@strapi/strapi").factories;

// extende the core controller to handle error and custom error response messages

module.exports = createCoreController(
  "api::transaction.transaction",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const response = await super.create(ctx);

        return response;
      } catch (error) {
        return ctx.badRequest(error.message);
      }
    },
  })
);
