# UT SHPE Website

Welcome to the **UT SHPE (Society of Hispanic Professional Engineers) website**! This platform is designed to showcase our events, resources, and initiatives at the University of Texas at Austin. It highlights our mission to **empower Hispanic students in STEM** through community, mentorship, and professional development.

This README provides an overview of the project, its purpose, and development workflow guidelines for contributors.

---

# UTSHPE React Website

This repository contains the React-based website for the UTSHPE organization. It uses:

* **React** (with TypeScript)
* **Create React App (CRA)**
* **Tailwind CSS 3.4.17**
* **Framer Motion**
* **React Router DOM**
* **Lucide React Icons**

---

## Getting Started

Clone the repository:

```bash
git clone {GITHUB_URL_SSH_OR_HTTPS}
cd utshpe-react-site
```

Install the necessary dependencies from the package-lock.json file by running the following command:

```bash
npm install
```

## Running the local DEV site

To run the development server, run the following command:

```bash
npm start
```

---

## 🌟 Project Overview

* **Purpose:** To serve as the official online presence of UT SHPE, featuring event information, office hours, a calendar, and more.
* **Technologies:** React, TailwindCSS, Swiper.js, and modern web standards.
* **Key Features:**

  * Full-screen intro video and animated logo.
  * Swiper-powered event carousel with click-to-expand functionality.
  * Embedded Google Calendar for easy event viewing.
  * Office hours and leadership information section.
  * Responsive and visually appealing layout with decorative gradients and animations.

---

## 📁 Branching Workflow

To maintain clean, organized, and deployable code, all contributors must follow this branching strategy:

### **Main Branch**

* `main`
* **Purpose:** Contains the official deployed version of the site.
* **Rules:** Protected branch; all merges require a pull request (PR) and code review.

### **Development Branch**

* `dev`
* **Purpose:** Integrates features and fixes from all contributors for testing and validation before deployment.
* **Rules:** Protected branch with code review required.

### **Feature & Fix Branches**

All other branches must follow one of these naming conventions:

1. **Developer-specific branch:**

   ```
   dev_{first_name}
   ```

   Example: `dev_jake`

2. **Feature branch:**

   ```
   feature/{feature_name}
   ```

   Example: `feature/event-carousel`

3. **Fix branch:**

   ```
   fix/{fix_name}
   ```

   Example: `fix/navbar-bug`

> ⚠️ All feature and fix branches must branch off `dev` and merge back into `dev` via a pull request with proper review.

---

## 🚀 Development Workflow

1. **Sync with `dev`:** Before starting, ensure your branch is up-to-date with `dev`.
2. **Create your branch:** Following the naming conventions above.
3. **Develop your feature or fix:** Commit often with clear messages.
4. **Push to remote:**

   ```bash
   git push origin your-branch-name
   ```
5. **Open a Pull Request (PR) to `dev`:** Ensure all code is reviewed and approved before merging.
6. **Merge into `main`:** Only after testing and QA on `dev` can the changes be merged into `main`.

---

## 📌 Code Guidelines

* Follow consistent **React and TailwindCSS practices**.
* Maintain **responsive design** across all pages.
* Ensure **accessibility standards** wherever applicable.
* Keep animations smooth and lightweight.
* Use Swiper.js for carousels with autoplay and manual swipe support.

---

## 👥 Contributors

We welcome contribution from all collaborators. Please follow the workflow and branch naming conventions to ensure smooth development and deployment.

---

## 📄 License

This project is intended for UT SHPE use and internal development. Please contact the project maintainers before using code externally.
