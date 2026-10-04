# Google AI Workshop — Hands-On Campus Session 🚀

> **Don't just learn about AI. Use it.**  
> An interactive Google AI workshop website designed for campus students to explore Google Gemini, experiment with live prompts, and turn creative ideas into tangible projects.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](css/style.css)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](js/)
[![Node.js](https://img.shields.io/badge/Node.js-Preview%20Server-339933?logo=nodedotjs&logoColor=white)](server.js)

---

## 📌 Overview

This repository hosts the official web microsite for the **Google AI Workshop**, facilitated by **Huzefa Lokhandwala** (Google Student Ambassador).

Unlike theoretical AI lectures, this workshop emphasizes direct participation: students work through real prompt architectures, collaborate on mini-challenges, visualize brand concepts with modern tools, and confirm participation for Google-verified certificates.

---

## ✨ Key Features & Sections

### 1. Registration & Surveys
* **Pre-Workshop Survey & Seat Reservation**: Direct link to the official Google product trial survey form to reserve workstation access and tailor prompt examples to attendee interests.
* **Post-Workshop Feedback Form**: Form link for verified attendees to submit session feedback and help confirm certificate eligibility.
* **Prominent Google Meet Requirement**: High-contrast reminder ensuring attendees use the same email address across both forms and when joining Google Meet.
* **Organizer Reference Card**: Displays the coordinator's Name (`Huzefa Lokhandwala`), GID (`9427`), and Email (`huzefalokhand55@gmail.com`) on single responsive rows with individual copy chips and a **Copy All Details** shortcut.

### 2. Attendee Benefits
* **Google-Verified Certificate**: Official digital certificate of participation recognizing training in Google Gemini, prompt design, and practical prototyping.
* **Google Pixel Reward Opportunity**: Challenge-based recognition opportunity for standout participants and top contributors.

### 3. Practical Challenge ("Fest Stall Brand & Pitch")
A 4-step hands-on group challenge:
1. **01 • Idea**: Pick a theme or campus problem.
2. **02 • Gemini**: Build prompt logic, brand narrative, and pitch structure.
3. **03 • Visualize**: Render visuals and concept assets with Nano Banana.
4. **04 • Pitch**: Rapid 60-second room showcase with peer voting.

### 4. Authentic Workshop Media Gallery
* Curated with genuine workshop photography and high-definition video clips showing real students collaborating, experimenting at workstations, and exploring live Gemini projections.

### 5. Host Profile & Logistics
* Clean host credentials and student-led philosophy.
* Real-time modals for calendar reminders, Google Meet fallback streaming, and event logistics.

---

## 🛠️ Tech Stack & Architecture

* **Markup**: Semantic HTML5 with accessibility attributes (`ARIA`, roles, landmarks).
* **Styling**: Vanilla CSS3 using Google Design Tokens:
  * Google Brand Colors: Google Blue (`#1A73E8`), Red (`#EA4335`), Yellow (`#FBBC04`), Green (`#34A853`).
  * Modern typography via Google Fonts (`Google Sans Display`, `Google Sans Text`, `Roboto Mono`).
  * Fluid responsive grid and flex layouts (`clamp()` font scaling, mobile drawer).
* **Scripting**: Vanilla JavaScript (ES6 Modules) with zero external runtime dependencies.
* **Preview Server**: Lightweight zero-dependency Node.js HTTP server supporting proper MIME types, range headers, and clean video streaming.

---

## 📂 Project Structure

```text
Google-AI-Workshop/
├── index.html              # Core single-page microsite markup
├── css/
│   └── style.css           # Design system tokens, components, responsive styles
├── js/
│   ├── config.js           # Centralized event data, survey URLs, coordinator details
│   └── main.js             # Interactivity, modals, clipboard copy, share handlers
├── assets/
│   ├── images/
│   │   ├── branding/       # Google logos, Gemini sparkle accents, ambassador badges
│   │   ├── sessions/       # Authentic workshop photos and video stills
│   │   └── ...             # Visual assets & mockups
│   └── videos/             # Authentic workshop highlight video reels (MP4)
├── server.js               # Local development and preview HTTP server
├── package.json            # Project scripts and configuration
├── .gitignore              # Ignore rules for OS, secrets, and caches
└── README.md               # Repository documentation
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16.0 or higher recommended)

### 1. Clone the Repository
```bash
git clone https://github.com/huzefa-lokhandwala/google-ai-workshop.git
cd google-ai-workshop
```

### 2. Start the Local Server
```bash
npm start
```
*Or directly:*
```bash
node server.js
```

### 3. Open in Browser
Visit **[http://localhost:3000](http://localhost:3000)** to view the live website.

---

## ⚙️ Configuration Guide

All event dates, times, venue details, and external URLs can be updated in **[`js/config.js`](js/config.js)** without altering HTML or CSS:

```javascript
export const WORKSHOP_CONFIG = {
  event: {
    venueTitle: "Campus Auditorium / Room 101",
    date: "October 15, 2026",
    time: "2:00 PM – 4:30 PM",
    onlineOption: {
      meetUrl: "https://meet.google.com/xyz-abcd-efg"
    }
  },
  registration: {
    preSurveyUrl: "https://producttrialsurvey.geministudentambassador.com/",
    postFeedbackUrl: "https://producttrialfeedback.geministudentambassador.com/",
    organizer: {
      name: "Huzefa Lokhandwala",
      gid: "9427",
      email: "huzefalokhand55@gmail.com"
    }
  }
};
```

---

## 👤 Facilitator & Contact

* **Facilitator**: Huzefa Lokhandwala
* **Role**: Google Student Ambassador
* **Organizer GID**: `9427`
* **Email**: [huzefalokhand55@gmail.com](mailto:huzefalokhand55@gmail.com)
* **GitHub**: [@huzefa-lokhandwala](https://github.com/huzefa-lokhandwala)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
