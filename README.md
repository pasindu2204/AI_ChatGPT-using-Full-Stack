# 🤖 AI ChatGPT - Full Stack MERN Application

<div align="center">

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

*An intelligent conversational AI platform powered by Google's Generative AI and OpenAI*

[Features](#-features) • [Setup](#-setup-instructions) • [Usage](#-usage) • [Contributing](#-contributing-guidelines) • [License](#-license)

</div>

---

## 📋 Description

**AI ChatGPT** is a modern, full-stack conversational AI application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This platform provides an intuitive chat interface that leverages cutting-edge AI technologies including Google's Generative AI and OpenAI to deliver intelligent, context-aware responses.

Whether you're looking to build an AI chatbot, integrate conversational AI into your application, or explore advanced AI capabilities, AI ChatGPT provides a solid foundation with authentication, credit management, and community features.

### ✨ Key Features

- 🎨 **Modern UI/UX** - Built with React 19 and TailwindCSS for a sleek, responsive interface
- 💬 **Real-time Chat** - Seamless conversation experience with AI-powered responses
- 🔐 **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- 👥 **Community Features** - Interactive community space for user engagement
- 💳 **Credit System** - Transaction management for API usage tracking and cost control
- 📝 **Syntax Highlighting** - Code snippets rendered beautifully with Prism.js
- 🖼️ **Image Management** - Integrated ImageKit for efficient image handling
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Development** - Vite-powered frontend for blazing-fast development
- 🔗 **Multiple AI Providers** - Support for Google Generative AI and OpenAI APIs

### 🛠️ Tech Stack

**Frontend:**
- ⚛️ React 19 with React Router DOM
- ⚡ Vite for blazing-fast build and development
- 🎨 TailwindCSS for styling
- 📄 React Markdown for rich text rendering
- 💻 Prism.js for code syntax highlighting
- 🔔 React Hot Toast for notifications
- 📡 Axios for API communication

**Backend:**
- 🟢 Node.js with Express.js
- 🗄️ MongoDB with Mongoose ODM
- 🤖 Google Generative AI API
- 🔑 OpenAI API
- 🔐 JWT for authentication
- 🛡️ Bcryptjs for password hashing
- 🖼️ ImageKit for media management
- 💳 Stripe for payment processing
- 🪝 Svix for webhooks

---

## 🚀 Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB (local or MongoDB Atlas cloud)
- Git

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# AI APIs
OPENAI_API_KEY=your_openai_api_key
GOOGLE_API_KEY=your_google_generative_ai_key

# Image Management
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Payment (Stripe)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Webhooks
SVIX_WEBHOOK_SECRET=your_svix_webhook_secret

# Frontend
VITE_SERVER_URL=http://localhost:5000
```

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/AIGPT.git
cd AIGPT
```

#### 2. Install Server Dependencies

```bash
cd server
npm install
```

#### 3. Install Client Dependencies

```bash
cd ../client
npm install
```

#### 4. Configure Environment Variables

Create `.env` file in the server directory with all required variables (see Environment Variables section above).

### Running the Application

#### Development Mode

**Terminal 1 - Start the Server:**
```bash
cd server
npm run server
# or
npm start
```

The server will start on `http://localhost:5000` (or your configured port)

**Terminal 2 - Start the Client:**
```bash
cd client
npm run dev
```

The client will start on `http://localhost:5173`

#### Production Build

**Build the Client:**
```bash
cd client
npm run build
```

**Start the Server:**
```bash
cd server
npm start
```

---

## 📖 Usage

### Getting Started

1. **Sign Up / Login** - Create an account or login with existing credentials
2. **Navigate to Chat** - Access the main chat interface from the sidebar
3. **Start Conversation** - Type your message and press send to interact with the AI
4. **View Community** - Explore shared conversations and community features
5. **Manage Credits** - Check your credit balance and purchase more if needed

### Project Structure

```
AIGPT/
├── client/
│   ├── src/
│   │   ├── Components/       # Reusable React components
│   │   │   ├── ChatBox.jsx   # Main chat interface
│   │   │   ├── Message.jsx   # Message display component
│   │   │   └── SideBar.jsx   # Navigation sidebar
│   │   ├── Pages/            # Page components
│   │   │   ├── Login.jsx     # Authentication page
│   │   │   ├── Community.jsx # Community features
│   │   │   └── Credit.jsx    # Credit management
│   │   ├── Context/          # React Context for state
│   │   └── App.jsx           # Main app component
│   └── package.json
│
├── server/
│   ├── controllers/          # Route handlers
│   │   ├── chatController.js
│   │   ├── userController.js
│   │   ├── messageController.js
│   │   └── creditController.js
│   ├── models/              # MongoDB schemas
│   │   ├── userModel.js
│   │   ├── Chat.js
│   │   └── Transaction.js
│   ├── routes/              # API endpoints
│   ├── middleware/          # Custom middleware
│   ├── configs/             # Configuration files
│   ├── server.js            # Entry point
│   └── package.json
│
└── README.md
```

### API Endpoints Overview

**Authentication:**
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user

**Chat:**
- `GET /api/chats` - Get all chats
- `POST /api/chats` - Create new chat
- `GET /api/chats/:id` - Get specific chat

**Messages:**
- `POST /api/messages` - Send message and get AI response
- `GET /api/messages/:chatId` - Get messages for a chat

**Credits:**
- `GET /api/credits/balance` - Get user credit balance
- `POST /api/credits/purchase` - Purchase credits

---

## 🤝 Contributing Guidelines

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the Repository** - Click the fork button at the top right
2. **Clone Your Fork** - `git clone https://github.com/yourusername/AIGPT.git`
3. **Create a Branch** - `git checkout -b feature/amazing-feature`
4. **Make Changes** - Implement your feature or fix
5. **Commit Changes** - `git commit -m 'Add amazing feature'`
6. **Push to Branch** - `git push origin feature/amazing-feature`
7. **Open Pull Request** - Submit a PR with a clear description

### Code Standards

- **JavaScript/React:** Follow ES6+ conventions
- **Naming:** Use camelCase for variables and functions
- **Comments:** Add comments for complex logic
- **Testing:** Ensure code works before submitting PR
- **Formatting:** Use consistent indentation (2 spaces)

### Commit Message Format

```
[type]: [description]

feat: Add new feature
fix: Fix a bug
docs: Update documentation
style: Code formatting changes
refactor: Refactor existing code
test: Add or update tests
```

### Areas for Contribution

- 🐛 Bug fixes and error handling
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🎨 UI/UX improvements
- ⚡ Performance optimizations
- 🧪 Test coverage expansion

### Code Review Process

All contributions will be reviewed by maintainers. We may request changes before merging. Please:
- Be responsive to feedback
- Make requested changes promptly
- Keep discussions respectful and constructive

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

You are free to:
- ✅ Use this project for commercial and private purposes
- ✅ Modify the code for your needs
- ✅ Distribute the software
- ✅ Use it for a patent

With the conditions:
- ⚠️ Include a copy of the license
- ⚠️ Include a copyright notice
- ⚠️ State significant changes made to the software

---

## 📞 Support & Feedback

If you have questions or feedback about this project:

- 📧 **Email:** support@aigpt.com
- 💬 **Issues:** Open an issue on GitHub
- 💡 **Discussions:** Start a discussion for feature requests
- 🐛 **Bug Reports:** Report bugs using the issues tab

---

## 🙏 Acknowledgments

- Built with ❤️ using the MERN stack
- Powered by Google Generative AI and OpenAI
- Thanks to all contributors and the open-source community

---

<div align="center">

**Made with ❤️ by the AI ChatGPT Team**

⭐ If you found this project helpful, please star it! ⭐

</div>
