# QuickRent | Property Rental & Booking Platform

**QuickRent** is a robust full-stack property rental and marketplace application designed to connect tenants and property owners seamlessly. The platform features an intuitive interface that allows property owners to list their spaces while enabling tenants to easily discover, book, and complete secure online payments for reservation fees.

🔗 **Live Deployment:** [QuickRent Live Site](https://quickrent-client.vercel.app/)

---

## 📌 Project Overview & Purpose

The core objective of **QuickRent** is to deliver a transparent, efficient, and highly secure marketplace for rental management. Built with a full-width dynamic dashboard layout and standard micro-interactions, it features rigid **Role-Based Access Control (RBAC)** across three distinct user flows: **Tenants, Owners, and Admins**. This project showcases end-to-end full-stack capabilities, from deep backend search/filter pipelines to synchronized state workflows and comprehensive payment transactions.

---

## ✨ Key Features

### 🌐 Public & General Features
* **Dynamic Landing Page:** Features high-quality banner elements, search bars, customer review sliders, and dynamic layouts utilizing fluid interface animations.
* **Advanced Search & Multi-Filters:** Full backend-driven processing allowing granular discovery by Location, Property Type, and custom Minimum/Maximum Price brackets.
* **Secure Authentication (JWT):** Secure session tracking via JSON Web Tokens, state maintenance on persistent routes, and automated Tenant role provisioning for Google Social Logins.

### 🏠 Tenant Capabilities
* **Wishlist System (Favorites):** Save preferred listings to an active database-tracked favorites dashboard module.
* **Streamlined Booking & Payments:** Instant checkout workflow via a dedicated dynamic modal, initializing automated redirects straight into the Stripe Payment Gateway interface.
* **Dynamic Review Feedback:** Authenticated users can write standalone ratings and feedback commentary displayed contextually across specific listings.

### 💼 Owner Management
* **Comprehensive Analytics Dashboard:** Features immediate data visualization utilizing responsive charts highlighting Total Property Counts, Cumulative Bookings, and Total Earnings history.
* **Dynamic Listings Pipeline:** Complete CRUD capabilities tracking variables like sizing, specific configuration assets, pricing frequency, and amenities.
* **Admin Rejection Logs:** Direct viewport access for properties rejected by structural admins, providing inline visibility into exact moderation issues.

### 🛡️ Administrative Controls
* **Granular System Moderation:** Full management tables covering active users, role switching mechanisms, global transactions tracking, and complete listing approvals.

---

## 🛠️ Tech Stack & Dependencies

### Frontend (Client-Side)
* **Core Framework:** Next.js
* **Styling & UI:** Tailwind CSS, HeroUI (Clean Alignment, Component Library & Consistent Color Schemes)
* **Animation Engine:** Framer Motion (Implemented across Home Banner, Featured Properties, and Sections)
* **Data Visualization:** Recharts (Used for active Owner Monthly Earnings metrics)
* **Payment Gateway:** Stripe

### Backend (Server-Side)
* **Runtime Environment:** Node.js
* **Framework:** Express.js
* **Database Management:** MongoDB (Utilizing backend pipelines for limiting, sorting, and pagination queries)
* **Security Protocol:** JSON Web Tokens (JWT), dotenv environmental setups