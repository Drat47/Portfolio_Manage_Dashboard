# Portfolio Manage Dashboard

## Project Overview
Portfolio Manage Dashboard is a full-stack web application designed to help multiple users track, manage, and analyze their investment portfolios efficiently. Each user can securely manage their own investment data, perform CRUD operations, and view visual summaries of their portfolios through dynamic charts.

## Features
- Multi-user authentication system with signup, login, and logout.
- User-specific portfolio management with Create, Read, Update, and Delete (CRUD) operations on investments.
- Search and filter investments by name.
- Interactive portfolio distribution visualization via Pie Charts (Recharts).
- Modern, responsive UI developed using React and TailwindCSS.
- Basic validation and error handling on both frontend and backend.

## Technology Stack
- Backend: Python FastAPI with in-memory storage (for demonstration).
- Frontend: React.js with TailwindCSS.
- Charting: Recharts library.
- Servers: Uvicorn for backend, Vite for frontend.

## Folder Structure

portfolio-manage-dashboard/
├── backend/
│   ├── main.py                 # FastAPI backend app and endpoints
│   ├── requirements.txt        # Python dependencies
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── api.js              # API utility functions
│   │   ├── App.jsx             # Main React component
│   │   ├── index.css           # Tailwind base CSS imports
│   │   ├── main.jsx            # React app entry point
│   │   └── components/         # React reusable components
│   ├── package.json            # Frontend npm configuration
│   ├── tailwind.config.js      # Tailwind config
│   ├── postcss.config.js       # PostCSS config for Tailwind
│   └── README.md               # Frontend-specific documentation (optional)
└── README.md                   # This overall project documentation


## Getting Started

### Backend Setup

1. Create and activate a Python virtual environment:
   
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   .\venv\Scripts\activate   # Windows PowerShell
   

2. Install backend dependencies:
   
   pip install -r backend/requirements.txt
   

3. Run the backend server:
   
   uvicorn backend.main:app --reload
   

### Frontend Setup

1. Change to the frontend directory:
   
   cd frontend
   

2. Install frontend dependencies:
   
   npm install
   

3. Start the frontend server:
   
   npm run dev
   

4. Open your browser at:
   
   http://localhost:5173
   

## Usage

- Sign up for a new user account.
- Log in using your credentials.
- Add, edit, delete your portfolio investments.
- Use the search box to find investments quickly.
- View your portfolio investment distribution on the pie chart.
- Log out once finished.

## Troubleshooting

- Receiving **401 Unauthorized** error?  
  After restarting the backend, re-register and log in as tokens do not persist in-memory.

- TailwindCSS styles not showing?  
  Verify Tailwind CSS imports, restart frontend server, and clear browser cache.

- Errors running `npm run dev`?  
  Ensure you run commands in the correct frontend directory where `package.json` exists.

## Future Enhancements

- Persistent database integration (PostgreSQL, MySQL)
- Secure password hashing and JWT authentication
- User profile page and password recovery
- Export/import investments in CSV format
- Pagination or infinite scroll for large portfolios
- Fully responsive and mobile-friendly UI enhancements  

## License

MIT License

---

Thank you for using Portfolio Manage Dashboard!  
Feel free to open issues or contribute via pull requests.
