module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4e0e6849bfbee950a7094af73218ecd2'),
  },
});
