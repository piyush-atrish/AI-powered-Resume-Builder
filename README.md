# 🚀 AI-Powered Resume Builder

A full-stack web application designed to help users create, edit, and export professional, ATS-friendly resumes. Built with the MERN stack and enhanced with Artificial Intelligence, this platform automates the tedious parts of resume building—from intelligent text generation to automated image processing.

---

## ✨ Key Features

- **Intelligent Text Generation:** Leverages the Gemini API (integrated via OpenAI SDK compatibility) to automatically generate tailored professional summaries and impactful job descriptions based on user input.
- **Smart Image Processing:** Integrates the **ImageKit API** to automatically remove image backgrounds and apply auto-face-centering, ensuring clean and professionally aligned profile photos.
- **Dynamic Resume Templates:** Multiple responsive resume templates that automatically adapt to varying amounts of content while maintaining a clean layout.
- **Complete Resume Management:** Full CRUD functionality to create, edit, update, delete, and export resumes as professionally formatted PDFs.
- **Authentication & Security:** Secure user authentication and session management to protect user data and resumes.

---

## 🛠️ Tech Stack & Architecture

### Frontend

- **React.js** – Component-based architecture with real-time state management.
- **Tailwind CSS** – Fully responsive UI optimized for desktop and mobile devices.

### Backend

- **Node.js & Express.js** – RESTful API handling routing, middleware, authentication, and business logic.
- **MongoDB & Mongoose** – Flexible NoSQL database for storing nested resume data such as education, experience, projects, and skills.

### AI & Third-Party Services

- **Google Gemini API** – Integrated using the OpenAI-compatible SDK by configuring the client to use the Gemini endpoint.
- **ImageKit API** – Handles automatic background removal, smart facial cropping, and image optimization.

---

## 💻 Local Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/piyush-atrish/AI-powered-Resume-Builder.git
cd AI-powered-Resume-Builder
```

### 2. Install Dependencies

Install dependencies for both the backend and frontend.

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the **backend** directory and add the following variables:

```env
MONGODB_URI=
JWT_SECRET=

IMAGEKIT_PRIVATE_KEY=

OPENAI_API_KEY=
OPENAI_BASE_URL=
OPENAI_MODEL=
```

### 4. Start the Development Servers

#### Start the Backend

```bash
cd backend
npm run server
```

#### Start the Frontend

```bash
cd frontend
npm run client
```

---

## 🌐 Deployment

The application is fully deployed and accessible online.

| Service | Platform |
|---------|----------|
| **Frontend** | Vercel |
| **Backend** | Render |
| **Database** | MongoDB Atlas |

🔗 **Live Demo:**  
https://ai-powered-resume-builder-delta-one.vercel.app/

---

## 💡 Lessons Learned

Building this project involved solving several real-world engineering challenges, including:

- Managing deeply nested React state efficiently.
- Rendering complex resume layouts into print-ready PDFs.
- Integrating Gemini models through the OpenAI-compatible SDK.
- Implementing automated image preprocessing using ImageKit APIs.
- Designing responsive resume templates that gracefully handle varying content lengths.

---

## 🚀 Future Scope

Planned enhancements include:

- LinkedIn profile import for one-click resume creation.
- ATS (Applicant Tracking System) score analysis.
- AI-powered cover letter generation.
- Additional customizable resume templates.
- Resume version history and cloud backups.
