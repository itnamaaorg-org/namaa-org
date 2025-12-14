# Admin Portal Setup Guide

## Initial Setup

### 1. Local Testing Admin (Recommended for Development)

For local testing, you can use a hardcoded admin account that doesn't require database setup. This admin is stored in local state (environment variables) and never touches the database.

**Default Credentials:**
- Username: `admin@example.com`
- Password: `admin123`

You can customize these by creating a `.env.local` file with:
```env
LOCAL_ADMIN_USERNAME=admin
LOCAL_ADMIN_PASSWORD=admin123
```

**Note:** The local admin is stored in environment variables, not in the database. This makes it perfect for quick local testing without needing to set up database admin accounts.

### 2. Create Database Admin Account (Production)

To create a database admin account, you have two options:

#### Option A: Using the API Endpoint (Development Only)

Make a POST request to `/api/admin/create-admin` with the following JSON body:

```json
{
  "username": "admin",
  "password": "your-secure-password"
}
```

**Example using curl:**
```bash
curl -X POST http://localhost:3000/api/admin/create-admin \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your-secure-password"}'
```

**⚠️ Important:** In production, you should:
- Remove or protect this endpoint
- Create admin accounts directly in the database
- Use a more secure method for initial admin creation

#### Option B: Direct Database Creation

You can also create an admin account directly in MongoDB. The password will be automatically hashed when saved through the model.

### 2. Access the Admin Portal

1. Navigate to `/admin/login`
2. Enter your username and password
3. You will be redirected to `/admin/dashboard`

## Admin Portal Features

### Tab A: News Management
- **Add News**: Create new news items
- **Update News**: Edit existing news items
- **Delete News**: Remove news items
- Full CRUD operations available

### Tab B: Volunteer Requests
- **View All Requests**: See a list of all volunteer requests
- **View Details**: Click on any request to see full details
- **Read-Only**: No edit or delete options (as per requirements)

## Security Notes

- All admin routes are protected by authentication middleware
- Admin session cookies are HTTP-only and secure in production
- News creation, update, and delete operations require authentication
- Volunteer request viewing requires authentication
- Volunteer request submission is public (from the website)

## Environment Variables

Make sure you have the following environment variables set:

```env
MONGODB_URI=your-mongodb-connection-string
SESSION_SECRET=your-secret-key-for-sessions
NODE_ENV=production
```

## API Endpoints

### Public Endpoints
- `GET /api/news` - Get all news (public)
- `POST /api/volunteer-requests` - Submit volunteer request (public)

### Protected Endpoints (Require Admin Authentication)
- `POST /api/news` - Create news
- `PUT /api/news/[id]` - Update news
- `DELETE /api/news/[id]` - Delete news
- `GET /api/volunteer-requests` - Get all volunteer requests
- `GET /api/volunteer-requests/[id]` - Get specific volunteer request

### Authentication Endpoints
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/me` - Check authentication status

