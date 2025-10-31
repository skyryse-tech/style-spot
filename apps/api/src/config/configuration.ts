export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  database: {
    url: process.env.DATABASE_URL,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d',
  },
  frontend: {
    url: process.env.FRONTEND_URL,
  },
  email: {
    from: process.env.EMAIL_FROM,
    sendgridKey: process.env.SENDGRID_API_KEY,
  },
  upload: {
    path: process.env.FILE_UPLOAD_PATH || './uploads',
  },
});
