# 💬 MERN Stack Real-Time Chat Application

<div align="center">

<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
<img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />

![Chat App Screenshot](frontend/public/preview.gif)

</div>

A full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring Socket.io for real-time communication, JWT authentication, and modern UI with TailwindCSS and Daisy UI.

---

## ✨ Features

- 🔐 **Authentication & Authorization** - Secure JWT-based user authentication
- 💬 **Real-time Messaging** - Instant message delivery using Socket.io
- 👥 **Online User Status** - See who's online in real-time
- 🖼️ **Image Upload** - Send images in chat using Cloudinary integration
- 🎨 **Modern UI** - Beautiful, responsive interface with TailwindCSS & Daisy UI
- 🔔 **Global State Management** - Efficient state handling with Zustand
- ⚡ **Error Handling** - Comprehensive error handling on both client and server
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

---

## 🏗️ Project Structure

```
mern-chat-app/
├── backend/                    # Backend server
│   ├── controllers/           # Request handlers
│   ├── models/                # MongoDB schemas
│   ├── routes/                # API routes
│   ├── middleware/            # Custom middleware (auth, etc.)
│   ├── utils/                 # Helper functions
│   ├── socket/                # Socket.io configuration
│   └── server.js              # Entry point
│
├── frontend/                   # React frontend
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── context/           # Context API
│   │   ├── hooks/             # Custom React hooks
│   │   ├── store/             # Zustand store
│   │   ├── utils/             # Helper functions
│   │   └── App.jsx            # Main App component
│   └── package.json
│
├── package.json               # Root package.json for build scripts
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Daisy UI** - TailwindCSS component library
- **Socket.io Client** - Real-time communication
- **Zustand** - State management
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Socket.io** - WebSocket library
- **JWT** - Authentication
- **Cloudinary** - Image hosting
- **bcrypt** - Password hashing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (local or Atlas account)
- **npm** or **yarn**
- **Cloudinary Account** (for image uploads)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AngeloMafilas/mern-chat-app.git
cd mern-chat-app
```

### 2. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5001
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

**Required Environment Variables:**
- `PORT` - Server port (default: 5001)
- `NODE_ENV` - Environment mode (development/production)
- `MONGODB_URI` - MongoDB connection string (local or Atlas)
- `JWT_SECRET` - Secret key for JWT token generation
- `CLOUDINARY_CLOUD_NAME` - Your Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Your Cloudinary API key
- `CLOUDINARY_API_SECRET` - Your Cloudinary API secret

**Note:** Get your Cloudinary credentials from [Cloudinary Dashboard](https://cloudinary.com/console)

### 3. Install Dependencies

Install dependencies for both frontend and backend:

```bash
# Install root dependencies (includes build scripts)
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Run the Application

#### Development Mode

Run both frontend and backend in development mode:

```bash
# From root directory
npm run dev
```

This will start:
- Backend server at `http://localhost:5001`
- Frontend dev server at `http://localhost:3000`

#### Production Mode

Build and run in production:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/check` | Check authentication status |

### Messages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/messages/:userId` | Get messages with a user |
| POST | `/api/messages/send/:userId` | Send message to user |
| DELETE | `/api/messages/:messageId` | Delete a message |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users for sidebar |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/profile` | Update user profile |

---

## 🔌 Socket.io Events

### Client → Server

| Event | Description | Payload |
|-------|-------------|---------|
| `setup` | Initialize socket connection | `userId` |
| `join chat` | Join a chat room | `roomId` |
| `typing` | User is typing | `roomId` |
| `stop typing` | User stopped typing | `roomId` |
| `new message` | Send new message | `message` |

### Server → Client

| Event | Description | Payload |
|-------|-------------|---------|
| `connected` | Socket connected | - |
| `message received` | New message | `message` |
| `typing` | Someone is typing | `userId` |
| `stop typing` | Someone stopped typing | `userId` |
| `user online` | User came online | `userId` |
| `user offline` | User went offline | `userId` |

---

## 📁 Key Files Explained

### Backend

**`server.js`**
- Main entry point
- Express server setup
- MongoDB connection
- Socket.io initialization
- Route mounting

**`models/User.js`**
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  avatar: String,
  createdAt: Date
}
```

**`models/Message.js`**
```javascript
{
  sender: ObjectId (ref: User),
  receiver: ObjectId (ref: User),
  message: String,
  image: String,
  createdAt: Date
}
```

**`middleware/auth.js`**
- JWT token verification
- Protects routes requiring authentication

### Frontend

**`src/store/useAuthStore.js`**
- Authentication state management
- User data
- Login/logout functions

**`src/store/useChatStore.js`**
- Chat messages
- Selected user
- Online users

**`src/components/MessageContainer.jsx`**
- Main chat interface
- Message display
- Send message input

---

## 🎨 UI Components

### Pages
- **Login** - User login form
- **Signup** - User registration form
- **Home** - Main chat interface

### Components
- **Sidebar** - User list and search
- **MessageContainer** - Chat window
- **Message** - Individual message bubble
- **MessageInput** - Text input with image upload
- **UserAvatar** - Display user avatar

---

## 🔐 Authentication Flow

1. User registers with email, username, and password
2. Password is hashed using bcrypt before storing
3. On login, JWT token is generated and stored in HTTP-only cookie
4. Token is verified on protected routes via middleware
5. Frontend stores user data in Zustand store
6. Socket.io authenticates using the same JWT token

---

## 🌐 Deployment

### Deploy to Render/Railway/Heroku

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Set environment variables** on your hosting platform

3. **Start command:**
   ```bash
   npm start
   ```

4. **MongoDB:** Use MongoDB Atlas for production database

5. **Cloudinary:** Configure production Cloudinary account

---

## 🐛 Troubleshooting

### Common Issues

**CORS Errors**
- Ensure frontend URL is added to CORS configuration in `server.js`

**Socket.io Connection Failed**
- Check if Socket.io server URL matches your backend URL
- Verify firewall settings allow WebSocket connections

**Image Upload Not Working**
- Verify Cloudinary credentials in `.env`
- Check Cloudinary upload preset settings

**MongoDB Connection Error**
- Ensure MongoDB is running locally or Atlas connection string is correct
- Check IP whitelist in MongoDB Atlas

---

## 📝 Scripts

```json
{
  "scripts": {
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "server": "cd backend && npm run dev",
    "client": "cd frontend && npm run dev",
    "build": "cd frontend && npm run build",
    "start": "cd backend && npm start"
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Angelo Mafilas**
- GitHub: [@AngeloMafilas](https://github.com/AngeloMafilas)

---

## 🙏 Acknowledgments

- Socket.io documentation
- MongoDB documentation
- React documentation
- TailwindCSS & Daisy UI
- Cloudinary

---

## 📸 Screenshots

### Login Page
![Login Page](./frontend/public/screenshot-login.png)

### Chat Interface
![Chat Interface](./frontend/public/screenshot-for-readme.png)

### User List
![User List](./frontend/public/screenshot-sidebar.png)

---

## 🔮 Future Enhancements

- [ ] Group chat functionality
- [ ] Voice/Video calling
- [ ] Message reactions
- [ ] File sharing
- [ ] Message search
- [ ] User profiles
- [ ] Push notifications
- [ ] Message encryption
- [ ] Read receipts
- [ ] Message editing

---

## 💡 Tips for Developers

### Database Indexes
Add indexes for better query performance:
```javascript
// In User model
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

// In Message model
messageSchema.index({ sender: 1, receiver: 1, createdAt: -1 });
```

### Socket.io Room Management
```javascript
// Join user to their own room for private messages
socket.join(userId);

// Leave room on disconnect
socket.on('disconnect', () => {
  socket.leave(userId);
});
```

---

**⭐ If you find this project helpful, please give it a star!**
