# Brainy Buddy

An interactive children's learning application built for **ITSC 4155 (Software Development Projects)** at UNC Charlotte. Brainy Buddy helps young learners practice foundational skills through engaging quizzes and a fun, user-friendly interface.

> **Team** — Shannah Smith, Janvi Ghandi, Ini Ogunsanya, Jie Zhou, Taniyah Armstrong  
> **Status:**Completed - Adding more features in the future

---

## Features

-  **Interactive Quizzes** — Engaging, hardcoded question sets designed for young learners
-  **Kid-Friendly UI** — Clean, colorful interface built with usability in mind
-  **Fast Backend** — REST API powered by FastAPI for smooth data handling
-  **Persistent Data** — SQLite database to store and manage app data
-  **Frontend & Backend Integration** — React Native frontend connected seamlessly to the FastAPI backend

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React Native (Expo) |
| Backend | FastAPI |
| Database | SQLite |
| Language | Python, JavaScript |

---

## Getting Started

### Prerequisites
- Python 3.8 or higher
- Node.js & npm

### Backend Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/brainy-buddy.git
cd brainy-buddy

# 2. Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the backend
uvicorn main:app --reload
```

### Frontend Setup

```bash
# From the root of the repository, install dependencies
npm install

# Start the Expo development server
npx expo start
```

You'll find options to open the app in:
- **Expo Go** app on your phone
- **Android emulator**
- **iOS simulator**

---

## API Overview

The backend exposes REST API endpoints for managing quiz data and application resources. CRUD operations are implemented using FastAPI, with SQLite as the database layer.

Access the interactive API docs at:
```
http://127.0.0.1:8000/docs
```

---

## Database

The app uses **SQLite** for lightweight, file-based data storage. The database schema was designed to support the quiz content and any associated application data, with CRUD operations handled through FastAPI endpoints.

---

## Project Structure

```
Brainy-Buddy-App/
├── backend/                  # FastAPI backend
│   ├── app/
│   │   ├── main.py           # FastAPI app entry point
│   │   ├── models/           # SQLAlchemy database models
│   │   ├── routes/           # API route definitions
│   │   ├── schemas/          # Pydantic schemas for validation
│   │   ├── db/               # Database configuration
│   │   └── __init__.py
│   ├── brainypop.db          # SQLite database file
│   └── buddy_questions.py    # Hardcoded question data
├── app/                      # Expo React Native frontend
│   ├── Questions/            # Quiz question screens
│   ├── tabs/                 # Tab navigation screens
│   ├── ActivityMap.jsx       # Activity map screen
│   ├── ParentDashboard.jsx   # Parent dashboard screen
│   ├── SignIn.jsx            # Sign in screen
│   ├── childLogin.jsx        # Child login screen
│   ├── childProgress.jsx     # Child progress tracking
│   ├── createChild.jsx       # Create child profile
│   └── parentAuth.jsx        # Parent authentication
├── components/               # Reusable UI components
├── assets/images/            # App images and icons
├── requirements.txt          # Python dependencies
├── package.json              # Node dependencies
└── app.json                  # Expo configuration
```

---

## Contributors

| Name | Role |
|------|------|
| Shannah Smith | Database Engineer & Backend Developer |
| Jie Zhou | Backend Developer |
| Taniyah Armstrong | API Integration |
| Janvi Ghandi | Frontend Developer |
| Ini Ogunsanya | UI/UX Designer |

---

## Course

Developed as a capstone project for **ITSC 4155 — Software Development Projects**  
University of North Carolina at Charlotte
