# 💼 Career Hub

A sleek and responsive job search platform built with React, React Router, and TailwindCSS—designed for users to explore, apply, and track their dream jobs with simplicity and style.

---

## 📖 Project Description

Career Hub is a single-page job portal application where users can:

- Browse featured job categories and listings
- View detailed job descriptions, responsibilities, and application info
- Apply to jobs and track them using persistent local storage
- Filter applied jobs based on their location type (Remote or Onsite)

This project demonstrates practical use of modern React tooling alongside clean UI design. It’s built for both functionality and developer readability—making it an ideal learning resource or portfolio piece.

---

## 🛠️ Technologies Used

| Tool / Library           | Description                            |
|--------------------------|----------------------------------------|
| **React**                | UI development and component structure |
| **React Router DOM**     | Routing, dynamic routes, and loaders   |
| **Tailwind CSS**         | Utility-first styling framework        |
| **daisyUI**              | Component styling on top of Tailwind   |
| **React Toastify**       | Toast notifications for UX feedback    |
| **localStorage API**     | Persist applied jobs between sessions  |
| **PropTypes**            | Runtime props validation for components|

---

## 🌟 Key Features

1. **💾 Applied Job Tracker**  
   Applied job IDs are stored in localStorage so users never lose track of their submissions—even after refreshing the page.

2. **🧭 Dynamic Routing & Filtering**  
   Job detail views are loaded via dynamic route parameters (`/:id`) and users can filter applied jobs by type using an interactive dropdown.

3. **🧑‍💻 Beginner-Friendly Codebase**  
   Includes structured comments, PropTypes, component reusability, and clean folder organization—perfect for learning or contributing.

---

## 📸 Screenshot Preview (Optional)

<!-- Add an image or gif here -->
<!-- ![Career Hub Demo](./public/assets/preview.gif) -->

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/career-hub.git

# Navigate to the project directory
cd career-hub

# Install dependencies
npm install

# Start the development server
npm run dev
