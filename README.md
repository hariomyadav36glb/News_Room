# 📰 News Room

**News Room** is a simple and interactive news application where users can explore the **latest news** and browse by categories such as **Technology, Business, Entertainment, Health, Science, and Sports**.

---

## 🚀 Features

- 🆕 Latest news feed  
- 🗂️ Category-based filtering (Technology, Business, Entertainment, Health, Science, Sports)  
- 📱 Responsive design for mobile and desktop  
- 🎨 Clean and minimal UI  

---

## 🛠️ Tech Stack

- **HTML5** – Structure of the website  
- **CSS3** – Styling and layout  
- **JavaScript (ES6)** – Functionality and interactivity
- **React -- Component-based UI library for building the news interface (Navbar, Newsboard, Newsitem)

---

## 📂 Project Structure

news-room/
├── public/                 # Public assets
│
├── src/                    # Main source code
│   ├── assets/             # Images and static files
│   │   └── news-img.jpg
│   │
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Newsboard.jsx
│   │   └── Newsitem.jsx
│   │
│   ├── App.css             # Global styles
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
│
├── dist/                   # Production build output
│   ├── assets/
│   └── index.html
│
├── .env                    # Environment variables (API key etc.)
├── .gitignore              # Ignored files/folders for Git
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry template
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
├── vite.config.js          # Vite bundler configuration
└── README.md               # Documentation
