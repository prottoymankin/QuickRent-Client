# QuickRent | Property Rental & Booking Platform

[cite_start]**QuickRent** is a robust full-stack property rental and marketplace application designed to connect tenants and property owners seamlessly[cite: 12, 14]. [cite_start]The platform features an intuitive interface that allows property owners to list their spaces while enabling tenants to easily discover, book, and complete secure online payments for reservation fees[cite: 12, 13].

🔗 **Live Deployment:** [QuickRent Live Site](https://quickrent-client.vercel.app/)

---

## 📌 Project Overview & Purpose

[cite_start]The core objective of **QuickRent** is to deliver a transparent, efficient, and highly secure marketplace for rental management[cite: 12, 14]. [cite_start]Built with a full-width dynamic dashboard layout and standard micro-interactions, it features rigid **Role-Based Access Control (RBAC)** across three distinct user flows: **Tenants, Owners, and Admins**[cite: 13, 51, 144, 162, 218, 240]. [cite_start]This project showcases end-to-end full-stack capabilities, from deep backend search/filter pipelines to synchronized state workflows and comprehensive payment transactions[cite: 13, 113, 143, 241].

---

## ✨ Key Features

### 🌐 Public & General Features
* [cite_start]**Dynamic Landing Page:** Features high-quality banner elements, search bars, customer review sliders, and dynamic layouts utilizing fluid interface animations[cite: 33, 70, 73, 82, 91].
* [cite_start]**Advanced Search & Multi-Filters:** Full backend-driven processing allowing granular discovery by Location, Property Type, and custom Minimum/Maximum Price brackets[cite: 73, 135, 138, 143, 241].
* [cite_start]**Secure Authentication (JWT):** Secure session tracking via JSON Web Tokens, state maintenance on persistent routes, and automated Tenant role provisioning for Google Social Logins[cite: 31, 43, 44, 46, 240].

### 🏠 Tenant Capabilities
* [cite_start]**Wishlist System (Favorites):** Save preferred listings to an active database-tracked favorites dashboard module[cite: 100, 101, 147, 156].
* [cite_start]**Streamlined Booking & Payments:** Instant checkout workflow via a dedicated dynamic modal, initializing automated redirects straight into the Stripe Payment Gateway interface[cite: 102, 104, 111, 113].
* [cite_start]**Dynamic Review Feedback:** Authenticated users can write standalone ratings and feedback commentary displayed contextually across specific listings[cite: 122, 123, 126].

### 💼 Owner Management
* [cite_start]**Comprehensive Analytics Dashboard:** Features immediate data visualization utilizing responsive charts highlighting Total Property Counts, Cumulative Bookings, and Total Earnings history[cite: 164, 169, 171, 178, 240].
* [cite_start]**Dynamic Listings Pipeline:** Complete CRUD capabilities tracking variables like sizing, specific configuration assets, pricing frequency, and amenities[cite: 183, 199, 201].
* [cite_start]**Admin Rejection Logs:** Direct viewport access for properties rejected by structural admins, providing inline visibility into exact moderation issues[cite: 228, 229, 242].

### 🛡️ Administrative Controls
* [cite_start]**Granular System Moderation:** Full management tables covering active users, role switching mechanisms, global transactions tracking, and complete listing approvals[cite: 221, 222, 223, 224, 225, 227].

---

## 🛠️ Tech Stack & Dependencies

### Frontend (Client-Side)
* **Core Framework:** Next.js
* [cite_start]**Styling & UI:** Tailwind CSS, HeroUI (Clean Alignment, Component Library & Consistent Color Schemes) [cite: 22, 240]
* [cite_start]**Animation Engine:** Framer Motion (Implemented across Home Banner, Featured Properties, and Sections) [cite: 91, 92, 93, 94]
* [cite_start]**Data Visualization:** Recharts (Used for active Owner Monthly Earnings metrics) [cite: 179]
* [cite_start]**Payment Gateway:** Stripe Component SDK (`@stripe/stripe-js`, `@stripe/react-stripe-js`) [cite: 113]
* **State & Data Fetching:** TanStack Query / React Context API

### Backend (Server-Side)
* **Runtime Environment:** Node.js
* **Framework:** Express.js
* [cite_start]**Database Management:** MongoDB (Utilizing backend pipelines for limiting, sorting, and pagination queries) [cite: 21, 75, 143, 241]
* [cite_start]**Security Protocol:** JSON Web Tokens (JWT), dotenv environmental setups [cite: 20, 21, 43, 240]