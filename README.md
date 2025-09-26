# Digital Gold Investment Tracker

## Project Overview
Digital Gold Investment Tracker is a full-stack web application that allows users to track, manage, and analyze their digital gold investments. It includes features such as user authentication, investment CRUD operations, search/filter functionality, and investment distribution visualization with a pie chart.

## Features
- User Signup, Login, and Logout with token-based authentication.
- User-specific investment management (Create, Read, Update, Delete).
- Search and filter investments by name.
- Investment distribution visualization using Pie Chart (powered by Recharts).
- Responsive and modern User Interface designed using TailwindCSS.
- Error handling and validation on both frontend and backend.

## Technology Stack
- Backend: FastAPI (Python) with in-memory storage for demonstration.
- Frontend: React.js with TailwindCSS for styling.
- Charting Library: Recharts.
- Development Servers: Uvicorn for backend, Vite for frontend.

## Folder Structure


digital-gold-project/
├── backend/
│   ├── main.py              # FastAPI backend application and endpoints
│   ├── requirements.txt     # Python dependencies
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── api.js           # API utility functions
│   │   ├── App.jsx          # Main React component
│   │   ├── index.css        # TailwindCSS base imports
│   │   ├── main.jsx         # React app entry point
│   │   └── components/      # Reusable React UI components
│   ├── package.json         # Frontend npm configuration
│   ├── tailwind.config.js   # TailwindCSS configuration
│   ├── postcss.config.js    # PostCSS config for TailwindCSS
│   └── README.md            # Frontend specific documentation (optional)
└── README.md                # Project overview and setup instructions (this file)


## Getting Started

### Backend Setup

1. Create and activate a Python virtual environment:
   
   python -m venv venv
   source venv/bin/activate  # For Linux/macOS
   .\venv\Scripts\activate   # For Windows PowerShell
   

2. Install backend dependencies:
   
   pip install -r backend/requirements.txt
   

3. Start the backend server:
   
   uvicorn backend.main:app --reload
   

### Frontend Setup

1. Navigate to the frontend directory:
   
   cd frontend
   

2. Install frontend dependencies:
   
   npm install
   

3. Run the frontend development server:
   
   npm run dev
   

4. Open your browser and visit:
   
   http://localhost:5173
   

## Usage

- First, sign up with a new account.
- Then log in using your credentials.
- Add, edit, or delete your investments.
- Use the search bar to filter investments.
- View the pie chart for investment distribution.
- Log out when done.

## Troubleshooting

- **401 Unauthorized Error:**  
  After restarting the backend server, you need to sign up and log in again because existing tokens become invalid.

- **TailwindCSS styles not applying:**  
  Make sure your `index.css` contains Tailwind directives, restart the frontend dev server, and clear your browser cache.

- **npm run dev error (ENOENT):**  
  Make sure you run commands inside the frontend folder where `package.json` is located.

## Future Improvements

- Add persistent database support (PostgreSQL, MySQL)
- Implement password hashing and more secure JWT tokens.
- User profile management and password reset features.
- Export and import investments as CSV files.
- Pagination or infinite scrolling for large investment lists.
- Enhanced responsive design and UI improvements for mobile.

## License

MIT License

---

Thank you for using the Digital Gold Investment Tracker!  
For questions, issues, or contributions, please open an issue or pull request on this repository.
