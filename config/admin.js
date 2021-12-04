module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '409f195d5812804b0e6b1872cd178bf0'),
  },
});
