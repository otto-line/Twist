# Magazine Store (TWST) - Plan & Next Steps

This project is a UK-based **magazine store** website that:

- **Showcases the magazine** (preview content, back issues, subscription info)
- **Lets customers buy it online** (single issue, bundles, subscriptions)
- **Ships internationally**
- Is **hosted on Vercel**, designed in HTML first and then converted to **Next.js** for launch

---

## 1) Immediate Focus: Styling + Product Test Page (Front-End)

### ✅ Goals
- Build a clean, responsive landing page (mostly HTML/CSS for now)
- Create a “product page” for a single magazine issue
- Add a simple “Buy Now” / “Checkout” button (dummy interaction for now)

### 🛠️ Steps
1. **Structure HTML**: Use semantic sections (`header`, `main`, `footer`).
2. **Design system**:
   - Define base typography, colors, spacing, and layout grid.
   - Use CSS variables (custom properties) for easy theming.
3. **Product card / product page**:
   - Cover image, title, issue details, price, `Add to cart`/`Buy now` button.
   - Add a simple quantity selector.
4. **Responsive behavior**:
   - Mobile-first CSS with breakpoints (tablet/desktop).
5. **Basic JS (optional)**:
   - Keep it minimal for now: toggle UI states, show “added to cart” toast.

---

## 2) Transition to Next.js (React + Vercel)

### ✅ Why Next.js?
- **Built-in routing** and page structure
- Server-side rendering (SEO benefit for magazine content)
- Easy deployment to **Vercel**
- Supports API Routes (for backend endpoints) without separate hosting

### 🔧 Steps
1. Initialize a Next.js app (`npx create-next-app@latest`) in the repo.
2. Move HTML & CSS into `app/page.js` (App Router — preferred for new projects).
3. Create a `/product/[slug]` page for the issue.
4. Implement a simple cart state (React context or Zustand) to keep it local at first.

---

## 3) Backend + Data Model (Orders, Customers, Products)

### ✅ What we'll need
- **Products**: Magazine issues (title, issue number, cover image, price, description, stock, SKU)
- **Customers**: Name, email, shipping address, order history
- **Orders**: Line items, totals, status (pending / paid / shipped), shipping info

### 🗂️ Options for backend storage
- **Headless CMS / Database** (recommended for early launch):
  - Firebase / Supabase (great for small stores)
  - PostgreSQL on a managed host (Neon is a good free-tier option)
  - Sanity / Strapi (or other CMS) if you want editorial CMS features
- **Vercel + Next.js API Routes** to act as API layer and connect to DB.

### ✅ Next steps for backend
1. Choose a DB (Supabase is quick to start, also supports auth).
2. Build a basic data model for products/orders/customers.
3. Add an API route to fetch product details (`/api/products/[id]`).
4. Add an API route to create orders (`/api/orders`) and store them.

---

## 4) Payments + Shipping Integrations

### 🧾 Payment Gateways (UK-focused, supports international)
- **Stripe** (recommended): global, supports GBP + multi-currency, excellent docs.
- Alternative: **PayPal**, **Mollie** (EU-friendly), **Checkout.com**.

### 🧭 Shipping APIs
- **Royal Mail** (UK domestic + international) via their API.
- **EasyPost** / **Shippo** (multi-carrier, supports Royal Mail, USPS, DHL, etc.). Great for international.
- We can calculate shipping cost during checkout and store tracking numbers in orders.

### 🔐 Security Best Practices
- Never store raw card/payment data on your servers.
- Use **Stripe Checkout** or **Stripe Payment Intents** to handle payments.
- Protect API routes with rate limiting, origin checks, and proper validation.
- Use HTTPS (Vercel provides this by default).

---

## 5) Next Milestones (Suggested)
1. **Finish styling + responsive product page** (HTML/CSS first) ✅
2. **Set up Next.js and migrate front-end**
3. **Implement product listing + product detail pages**
4. **Add cart + checkout flow (client-side)**
5. **Integrate payment gateway (Stripe)**
6. **Persist orders + customers (DB + API routes)**
7. **Add shipping cost calculation + tracking integration**
8. **Add admin view for order management**

---

## Notes / Tips
- Start with one product (single magazine issue) and expand later.
- Keep the checkout flow simple at first: `Cart -> Checkout -> Payment -> Confirmation`.
- Once stable, add features like subscriptions, discount codes, and multi-issue bundles.

---
