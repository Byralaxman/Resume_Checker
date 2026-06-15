# Resume Checker

A comprehensive full-stack application designed to help users analyze, validate, and improve their resumes using intelligent parsing and AI-powered feedback.

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage Examples](#usage-examples)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## 🎯 Overview

Resume Checker is a modern web application that provides intelligent analysis and feedback on user resumes. Whether you're a job seeker looking to enhance your resume or an HR professional seeking to streamline candidate evaluation, Resume Checker offers comprehensive tools to assess resume quality, identify improvement areas, and provide actionable recommendations.

The application combines a responsive React frontend with a robust backend API to deliver real-time resume analysis, formatting suggestions, keyword optimization, and skill assessment.

## ✨ Key Features

- **Resume Upload & Parsing**: Upload resumes in multiple formats (PDF, DOCX, TXT) with automatic content extraction
- **AI-Powered Analysis**: Intelligent resume evaluation using advanced NLP algorithms
- **Skill Assessment**: Identify technical and soft skills with proficiency level analysis
- **ATS Optimization**: Recommendations to improve Applicant Tracking System (ATS) compatibility
- **Formatting Feedback**: Get suggestions on resume structure, design, and readability
- **Keyword Analysis**: Discover high-impact keywords relevant to your target industry and position
- **Comparison Reports**: Benchmark your resume against industry standards
- **Actionable Recommendations**: Receive specific, prioritized suggestions for resume improvements
- **Download Reports**: Export detailed analysis reports in PDF format
- **Real-Time Feedback**: Get instant analysis results without delays

## 🛠 Tech Stack

### Frontend
- **React** (18.x) - UI library for building interactive user interfaces
- **Material-UI (MUI)** (5.x) - Professional component library and styling
- **Emotion** - CSS-in-JS styling solution
- **Axios** - HTTP client for API communication
- **React Scripts** - Build and development tooling

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Python** (NLP Processing) - Machine learning and text analysis
- **MongoDB** - NoSQL database for data persistence
- **JWT** - Authentication and authorization

### Development & Deployment
- **npm/yarn** - Dependency management
- **Git** - Version control
- **Docker** - Containerization (optional)

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Included with Node.js
- **Git** - [Download](https://git-scm.com/)
- **MongoDB** (v4.0 or higher) - [Download](https://www.mongodb.com/try/download/community) or use MongoDB Atlas
- **Python** (3.8 or higher) - For backend NLP processing [Download](https://www.python.org/)

### System Requirements
- RAM: Minimum 2GB, Recommended 4GB+
- Storage: At least 500MB available
- OS: Windows, macOS, or Linux
- Internet connection for initial setup and dependencies

## 🚀 Installation

Follow these step-by-step instructions to set up Resume Checker locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Byralaxman/Resume_Checker.git
cd Resume_Checker
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the backend directory:

```bash
cd backend
touch .env
```

Add the following configuration:

```env
# Backend Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/resume_checker
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/resume_checker

# Authentication
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_DIR=./uploads

# API Configuration
API_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

### 5. Configure Frontend Environment

Create a `.env` file in the frontend directory:

```bash
cd ../frontend
touch .env
```

Add the following configuration:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

### 6. Start MongoDB

**Option A: Local Installation**
```bash
# macOS with Homebrew
brew services start mongodb-community

# Windows (if installed as a service)
net start MongoDB

# Linux
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Skip this step; your connection string is already in `.env`

### 7. Start the Backend Server

```bash
cd backend
npm start
```

Expected output:
```
Server running on port 5000
Connected to MongoDB
```

### 8. Start the Frontend Development Server

In a new terminal window:

```bash
cd frontend
npm start
```

The application will automatically open at `http://localhost:3000`

## 📖 Usage Examples

### Example 1: Upload and Analyze a Resume

```bash
# Navigate to the application
# Click on "Upload Resume" button
# Select your resume file (PDF, DOCX, or TXT)
# Wait for analysis to complete
# Review the detailed feedback report
```

### Example 2: View Skill Assessment

```
1. Upload your resume
2. Navigate to the "Skills" tab
3. Review identified skills with proficiency levels
4. View recommended skills for your target role
```

### Example 3: Export Analysis Report

```
1. Complete resume analysis
2. Click "Download Report" button
3. Select PDF format
4. Save to your desired location
```

### Example 4: API Usage (Backend)

```javascript
// Upload and analyze a resume via API
const axios = require('axios');

const formData = new FormData();
formData.append('file', resumeFile);

axios.post('http://localhost:5000/api/resume/analyze', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${token}`
  }
})
.then(response => {
  console.log('Analysis Result:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});
```

### Example 5: Using the Analysis Results

```javascript
// Sample response structure
{
  "resumeId": "12345",
  "analysisScore": 78,
  "skills": [
    { "name": "JavaScript", "proficiency": "Expert", "frequency": 15 },
    { "name": "React", "proficiency": "Advanced", "frequency": 12 }
  ],
  "recommendations": [
    {
      "category": "Keywords",
      "priority": "High",
      "suggestion": "Add more industry-specific keywords"
    },
    {
      "category": "Formatting",
      "priority": "Medium",
      "suggestion": "Improve section spacing for better readability"
    }
  ],
  "atsCompatibility": 85
}
```

## 📁 Project Structure

```
Resume_Checker/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ResumeUpload.jsx
│   │   │   ├── AnalysisResult.jsx
│   │   │   ├── SkillsAssessment.jsx
│   │   │   └── ReportGeneration.jsx
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── backend/
│   ├── routes/
│   │   ├── resume.js
│   │   ├── analysis.js
│   │   └── auth.js
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
├── README.md
└── CONTRIBUTING.md
```

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

### Development Workflow

1. **Fork the Repository**
   ```bash
   # Click "Fork" on the GitHub repository page
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Add comments for complex logic
   - Follow existing code style and conventions

4. **Test Your Changes**
   ```bash
   # Frontend testing
   cd frontend
   npm test

   # Backend testing
   cd ../backend
   npm test
   ```

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: Add your feature description"
   # Use conventional commits: feat:, fix:, docs:, style:, refactor:, test:, chore:
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Provide a detailed description of your changes
   - Link any related issues

### Contribution Guidelines

- **Code Quality**: Maintain consistent code style with the existing codebase
- **Documentation**: Update README and add comments for new features
- **Testing**: Write tests for new functionality (aim for >80% coverage)
- **Commits**: Use descriptive commit messages following conventional commits
- **No Breaking Changes**: Maintain backward compatibility when possible
- **Performance**: Consider performance implications of your changes

### Reporting Issues

- **Bug Reports**: Include steps to reproduce, expected vs. actual behavior
- **Feature Requests**: Explain the use case and expected benefit
- **Questions**: Use discussions or open an issue with a clear question

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Follow GitHub's Community Guidelines
- Report harmful behavior to the project maintainers

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

### Getting Help

- **Documentation**: Check the [Wiki](https://github.com/Byralaxman/Resume_Checker/wiki) for detailed guides
- **Issues**: Search [existing issues](https://github.com/Byralaxman/Resume_Checker/issues) for solutions
- **Discussions**: Join [GitHub Discussions](https://github.com/Byralaxman/Resume_Checker/discussions) for community support

### FAQ

**Q: What resume formats are supported?**
A: We support PDF, DOCX, and TXT formats. Maximum file size is 5MB.

**Q: Is my resume data stored?**
A: Resumes are stored securely in encrypted form and can be deleted anytime from your dashboard.

**Q: Can I use this for commercial purposes?**
A: Yes, under the MIT License. See LICENSE file for details.

**Q: How long does analysis take?**
A: Most resumes are analyzed in 5-15 seconds depending on length and complexity.

## 🔗 Quick Links

- [GitHub Repository](https://github.com/Byralaxman/Resume_Checker)
- [Issues Tracker](https://github.com/Byralaxman/Resume_Checker/issues)
- [Discussions](https://github.com/Byralaxman/Resume_Checker/discussions)

---

**Happy Resume Checking! 🚀** If you find this project helpful, please consider giving it a ⭐ on GitHub.
