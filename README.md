# StyleSpot

**StyleSpot** — A marketplace to discover beauty & wellness services, book slots (in-shop or home visit), and let shop owners manage slots, menu, prices, holidays, and booking approvals.

## 🚀 Tech Stack

### Frontend
- **Next.js** (latest) + TypeScript
- **Zustand** for state management
- **NextAuth** (Auth.js) for authentication

### Backend
- **NestJS** + TypeScript
- **Prisma** ORM
- **PostgreSQL** 15+
- **Redis** for caching and distributed locks
- **Socket.io** for real-time notifications

### Infrastructure
- **Docker** + Docker Compose
- **GitHub Actions** for CI/CD

## 📁 Project Structure

```
stylespot/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # NestJS backend
├── packages/
│   ├── prisma/       # Prisma schema & generated client
│   └── shared/       # Shared types/interfaces
├── docker-compose.yml
└── README.md
```

## 🛠️ Local Development Setup

### Prerequisites
- Node.js 20+
- npm 10+
- Docker Desktop

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd style-spot
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Start Docker services
```bash
npm run docker:up
```

This starts:
- PostgreSQL on port 5432
- Redis on port 6379
- Adminer (DB UI) on port 8080

### Step 4: Setup environment variables

**Backend** - Create `apps/api/.env`:
```env
DATABASE_URL=postgresql://stylespot:stylespot_pass@localhost:5432/stylespot_dev
REDIS_URL=redis://localhost:6379
NEXTAUTH_SECRET=change_me_random_secret_here
JWT_SECRET=change_me_jwt_secret_here
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:4000
EMAIL_FROM=no-reply@stylespot.local
SENDGRID_API_KEY=
FILE_UPLOAD_PATH=./uploads
PORT=4000
```

**Frontend** - Create `apps/web/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=change_me_random_secret_here
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

### Step 5: Run Prisma migrations
```bash
npm run prisma:migrate
```

### Step 6: Generate Prisma client
```bash
npm run prisma:generate
```

### Step 7: Start development servers

**Terminal 1 - Backend (NestJS)**
```bash
npm run dev:api
```
Backend runs on http://localhost:4000

**Terminal 2 - Frontend (Next.js)**
```bash
npm run dev:web
```
Frontend runs on http://localhost:3000

## 🗄️ Database

Access Adminer at http://localhost:8080
- System: PostgreSQL
- Server: postgres
- Username: stylespot
- Password: stylespot_pass
- Database: stylespot_dev

Or use Prisma Studio:
```bash
npm run prisma:studio
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register customer or owner
- `POST /api/auth/signin` - Login

### Customer Flows
- `GET /api/shops` - List shops/freelancers (with filters)
- `GET /api/shops/:owner_id` - Shop details
- `GET /api/services/:service_id` - Service details
- `POST /api/bookings` - Create booking
- `GET /api/bookings/:booking_id` - Booking status
- `POST /api/bookings/:booking_id/cancel` - Cancel booking

### Owner Flows
- `POST /api/owners/register` - Owner registration
- `PATCH /api/owners/:owner_id` - Update owner details
- `POST /api/services` - Create service
- `PATCH /api/services/:service_id` - Update service
- `POST /api/slots` - Create slot templates
- `GET /api/bookings` - List bookings (owner view)
- `POST /api/owners/:owner_id/upload` - Upload files

### Payments
- `POST /api/payments/generate-qr` - Generate UPI QR code
- `POST /api/payments/reconcile` - Reconcile manual payments

## 🧪 Testing

```bash
npm test
```

## 🚢 Deployment

### Build for production
```bash
npm run build:api
npm run build:web
```

### Environment Variables for Production
- Enable HTTPS
- Set secure cookie options in NextAuth
- Configure Cloudinary/S3 for file uploads
- Add SendGrid/Mailgun API keys for emails
- Configure proper CORS origins
- Set up Sentry for error monitoring

## 🔐 Security Notes

- Customer phone numbers are hidden until booking confirmation
- Use Redis locks for concurrent booking prevention
- Implement rate limiting in production
- Enable HTTPS and secure cookies
- Add CSRF protection

## 📝 Manual Payment Flow

1. Customer selects service and payment method
2. For UPI: Generate QR code via `/api/payments/generate-qr`
3. Customer scans and pays
4. Owner reconciles payment manually via dashboard
5. Booking confirmed after payment verification

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📄 License

See LICENSE file for details.

## 🆘 Support

For issues and questions, please open a GitHub issue.