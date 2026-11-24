<div align="center">

# 🤖 AETHROM BOT

### A full-stack AI chat application powered by OpenAI GPT-4o-mini

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?logo=openai&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

</div>

---

## 📌 About the Project

**AETHROM BOT** is a full-stack AI chatbot web application similar to ChatGPT. It allows users to have real-time AI-powered conversations, with each chat session stored in a MongoDB database. Users can create multiple conversation threads, switch between them, delete them, and get intelligent responses powered by OpenAI's `gpt-4o-mini` model.

---

## ✨ Features

- 💬 Real-time AI chat using OpenAI GPT-4o-mini
- 🧵 Multiple conversation threads (like ChatGPT's sidebar)
- 🗂️ Persistent chat history saved in MongoDB
- ➕ Create new chat threads instantly
- 🗑️ Delete any conversation thread
- 📄 Markdown rendering for AI responses (code, lists, bold, etc.)
- ⚡ Fast and modern UI built with React + Vite
- 🔒 API keys protected via environment variables

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| **React 19** | UI framework |
| **Vite 7** | Build tool & dev server |
| **React Markdown** | Render AI markdown responses |
| **Rehype Highlight** | Code syntax highlighting |
| **UUID** | Generate unique thread IDs |
| **React Spinners** | Loading animations |

### Backend
| Tech | Purpose |
|------|---------|
| **Node.js** | Runtime environment |
| **Express 5** | REST API framework |
| **Mongoose** | MongoDB ODM |
| **OpenAI SDK** | GPT-4o-mini API calls |
| **dotenv** | Environment variable management |
| **CORS** | Cross-origin resource sharing |
| **Nodemon** | Dev auto-restart |

### Database
| Tech | Purpose |
|------|---------|
| **MongoDB Atlas** | Cloud NoSQL database |

---

## 📁 Project Structure

```
AETHROM BOT/
├── backend/
│   ├── models/
│   │   └── Thread.js          # Mongoose schema for chat threads
│   ├── routes/
│   │   └── chats.js           # REST API routes (GET, POST, DELETE)
│   ├── utils/
│   │   └── openai.js          # OpenAI API integration
│   ├── server.js              # Express server entry point
│   ├── .env.example           # Environment variable template
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Root component & context provider
│   │   ├── Chatwindow.jsx     # Main chat area
│   │   ├── Sidewindow.jsx     # Sidebar with thread list
│   │   ├── Chat.jsx           # Individual message component
│   │   ├── Mycontext.jsx      # React Context for state management
│   │   ├── App.css
│   │   ├── Chat.css
│   │   ├── Chatwindow.css
│   │   └── Sidewindow.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A [MongoDB Atlas](https://cloud.mongodb.com) account
- An [OpenAI API Key](https://platform.openai.com/api-keys)

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/aethrom-bot.git
cd aethrom-bot
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
OPENAI_API_KEY=sk-your-openai-key-here
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/aethrom
```

Start the backend server:

```bash
npm start          # production
npm run dev        # development (with nodemon)
```

Backend runs on: **http://localhost:8080**

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: **http://localhost:5173**

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/thread` | Get all conversation threads |
| `GET` | `/api/thread/:threadID` | Get messages of a specific thread |
| `POST` | `/api/chat` | Send a message and get AI reply |
| `DELETE` | `/api/thread/:threadID` | Delete a conversation thread |

---

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | ✅ Yes | Your OpenAI API secret key |
| `MONGODB_URL` | ✅ Yes | MongoDB Atlas connection string |

> ⚠️ **Never commit your `.env` file to GitHub.** It is already added to `.gitignore`.

---

## 👨‍💻 Author

**Nitin Dubey**  
LNCT University  
Full Stack Developer | AI Enthusiast

---

## 📄 License

This project is for educational purposes.

---

<div align="center">
  Made with ❤️ by Nitin Dubey
</div>
