# 🚀 Jaykishan Saharan — Interactive Developer Portfolio

<p align="center">
  <strong>A modern, interactive portfolio built to showcase projects, skills, experiments, and a developer journey.</strong>
</p>

<p align="center">
  <a href="https://portfolio-ruddy-nine-64.vercel.app">🌐 Live Portfolio</a> •
  <a href="https://github.com/jaykishan1saharan/portfolio">💻 GitHub Repository</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=threedotjs" alt="Three.js">
  <img src="https://img.shields.io/badge/Firebase-Push_Notifications-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase">
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" alt="Vercel">
</p>

---

## ✨ About

This is my personal developer portfolio — designed as an **interactive full-stack web experience**, rather than a simple static website.

It combines a modern animated frontend with custom API routes, visitor analytics, an admin dashboard, PostgreSQL-backed data, and Firebase-powered push notifications.

> **The goal: turn a portfolio into an experience, not just a collection of pages.**

---

## 🌐 Live Preview

### [Visit the Live Portfolio →](https://portfolio-ruddy-nine-64.vercel.app)

The production application is deployed on **Vercel** and connected to GitHub for continuous deployment.

---

## ⚡ Highlights

| Area | Features |
|---|---|
| 🎨 UI / UX | Modern dark interface, animations, responsive layouts |
| 🧊 3D | Interactive 3D laptop and technology orbit system |
| 🧑‍💻 Skills | Interactive technology showcase |
| 📂 Projects | Project cards and detailed presentations |
| 📊 Analytics | Custom visitor and page-view tracking |
| 🔔 Notifications | Firebase Cloud Messaging push notifications |
| 🔐 Admin | Protected admin authentication and dashboard |
| 🗄️ Database | PostgreSQL-backed visitor data |
| ⚡ Backend | Next.js server/API routes |
| 🚀 Deployment | Vercel production deployment |

---

## 🎨 Interactive Experience

### 🧊 3D Hero Section
- Interactive 3D laptop model
- Floating technology icons
- Multiple animated orbit layers
- Animated background effects
- Responsive presentation

### 🧠 Skills
The portfolio showcases technologies including:

`React` · `Next.js` · `JavaScript` · `TypeScript` · `HTML` · `CSS` · `C` · `C++` · `Python` · `Java` · `MySQL` · `Figma` · `Blender`

### 📱 Responsive
Designed for desktop, laptop, tablet, and mobile screens.

---

# 📊 Visitor Analytics

The portfolio contains a custom visitor analytics system instead of relying entirely on third-party analytics.

```text
Visitor opens portfolio
        ↓
Anonymous session created
        ↓
Visitor information collected
        ↓
Page view recorded
        ↓
Heartbeat sent periodically
        ↓
Session duration calculated
        ↓
Analytics stored in PostgreSQL
```

### Tracked information

- Anonymous visitor session
- Page views
- Session duration
- Active session state
- Device type
- Browser
- Operating system
- Screen dimensions
- Browser language
- Referrer

### 🔐 Privacy-conscious IP handling

Raw IP addresses are not stored directly.

```text
Visitor IP → SHA-256 → IP Hash → Database
```

---

# 🔔 Push Notification System

Firebase Cloud Messaging is used to deliver notifications to registered devices.

```text
Portfolio visitor
       ↓
Visitor event
       ↓
Notification API
       ↓
Firebase Cloud Messaging
       ↓
📱 Admin device
```

Example:

> 🔔 **New Portfolio Visitor**  
> Someone just opened your portfolio.

Technology used:

- Firebase Admin SDK
- Firebase Cloud Messaging
- Web Push
- Notification device registration
- Next.js API routes

---

# 🔐 Admin Dashboard

The project includes a protected administration area.

### Capabilities

- 🔑 Password-based authentication
- 📊 Visitor analytics
- 📈 Activity information
- 🔔 Notification management
- 🗄️ Database-backed analytics
- 🍪 HTTP-only admin session cookie

### Authentication flow

```text
Admin password
      ↓
POST /api/admin/login
      ↓
Verify ADMIN_PASSWORD
      ↓
Generate HMAC session token
      ↓
HTTP-only cookie
      ↓
Protected admin pages
```

---

# 🏗️ Architecture

```text
                    ┌──────────────────┐
                    │    Portfolio     │
                    │    Frontend      │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │    Next.js       │
                    │    App Router    │
                    └────────┬─────────┘
                             │
            ┌────────────────┼────────────────┐
            ▼                ▼                ▼
      ┌────────────┐   ┌────────────┐   ┌────────────┐
      │ Visitor API│   │  Admin API │   │Notification│
      └─────┬──────┘   └─────┬──────┘   │    API     │
            │                │            └─────┬──────┘
            └────────────────┼─────────────────┘
                             ▼
                    ┌──────────────────┐
                    │   PostgreSQL     │
                    └──────────────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Firebase FCM     │
                    └──────────────────┘
```

---

# 📁 Project Structure

```text
portfolio/
├── app/
│   ├── admin/
│   │   ├── analytics/
│   │   ├── login/
│   │   └── notifications/
│   └── api/
│       ├── admin/
│       │   ├── analytics/
│       │   ├── login/
│       │   └── notifications/
│       └── visitors/
│           ├── events/
│           ├── heartbeat/
│           ├── page-view/
│           ├── session/
│           └── test-db/
│
├── components/
├── lib/
│   ├── analytics/
│   ├── auth/
│   ├── db/
│   ├── firebase/
│   ├── notifications/
│   └── firebase-admin.ts
│
├── models/
├── projects/
├── public/
├── next.config.ts
├── package.json
└── README.md
```

---

# 🛠️ Tech Stack

### Frontend
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Three.js**
- **tsparticles**

### Backend & Data
- **Next.js API Routes**
- **Node.js**
- **PostgreSQL**
- **Supabase**

### Cloud & Notifications
- **Firebase Admin SDK**
- **Firebase Cloud Messaging**
- **Vercel**
- **GitHub**

---

# 🗄️ Database

PostgreSQL stores application and visitor analytics data.

Example entities:

```text
visitor_sessions
notification_devices
page_views
visitor_events
```

---

# ⚙️ Environment Variables

Create `.env.local` in the project root:

```env
DATABASE_URL="your_postgresql_connection_string"
ADMIN_PASSWORD="your_admin_password"
ADMIN_SESSION_SECRET="your_long_random_secret"
FIREBASE_SERVICE_ACCOUNT_JSON='{"type":"service_account","...":"..."}'
```

### 🔒 Never commit secrets

Do not commit:

```text
.env
.env.local
firebase/service-account.json
```

Production secrets should be configured through Vercel Environment Variables.

---

# 💻 Local Development

```bash
git clone https://github.com/jaykishan1saharan/portfolio.git
cd portfolio
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🏗️ Production Build

Always verify the production build locally:

```bash
npm run build
npm start
```

---

# 🚀 Deployment

The application is deployed through **Vercel**.

```text
Local Development
       ↓
Git Commit
       ↓
Git Push
       ↓
GitHub main
       ↓
Vercel Build
       ↓
Production
       ↓
🚀 Live Portfolio
```

Required production environment variables:

```text
DATABASE_URL
ADMIN_PASSWORD
ADMIN_SESSION_SECRET
FIREBASE_SERVICE_ACCOUNT_JSON
```

---

# 🧪 Testing

Useful checks:

```bash
npm run build
```

Then verify:

- Visitor session creation
- Page-view tracking
- Heartbeat updates
- Session duration
- Admin login
- Analytics dashboard
- Notification device registration
- Push notifications

---

# 🗺️ Roadmap

- [ ] Advanced analytics charts
- [ ] Geographic visitor visualization
- [ ] Real-time dashboard updates
- [ ] Notification history
- [ ] Notification preferences
- [ ] Advanced project filtering
- [ ] Blog / developer notes
- [ ] More interactive 3D experiences
- [ ] Automated testing
- [ ] Accessibility improvements
- [ ] PWA enhancements

---

# 💡 Why This Project?

A portfolio should demonstrate more than what a developer **knows**.

It should demonstrate what they can **build**.

```text
Design
  +
Frontend Engineering
  +
3D Web Development
  +
Backend APIs
  +
Database Engineering
  +
Analytics
  +
Cloud Services
  +
Real-time Notifications
```

All combined into one practical application.

---

# 👨‍💻 Author

## Jaykishan Saharan

Computer Science student and developer interested in building modern, interactive, and practical software.

🌐 **Portfolio:** https://portfolio-ruddy-nine-64.vercel.app  
💻 **GitHub:** https://github.com/jaykishan1saharan

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

<p align="center">
  <strong>Built with curiosity, code, and a lot of experimentation. 🚀</strong>
</p>

<p align="center">© 2026 Jaykishan Saharan</p>
