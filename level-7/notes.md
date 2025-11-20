
# covering:

✅ SSG (default)
✅ SSR
✅ ISR
✅ CSR
✅ Why & When to Use each

* Code examples

---

# 🚀 **Data Fetching in Next.js (App Router)**

In the **App Router**, every component is **Server Component by default**, so **data fetching happens on the server**, not on the client.

---

# 🔥 1. **SSG – Static Site Generation (Default in App Router)**

### ✔ What is SSG?

* Data is fetched **once at build time**
* Page becomes **static HTML**
* Super fast
* No runtime cost
* Good for blogs, documentation, product lists

### ✔ Code (SSG by default)

```ts
const response = await fetch("http://localhost:3000/api/user", {
  cache: "force-cache"  // default
});

const data = await response.json();
```

> In App Router, **fetch() without config** = **SSG**.

---

# 🔥 2. **SSR – Server-Side Rendering**

### ✔ What is SSR?

* Data fetched **on every request**
* Always fresh
* Runs on server for each user visit

### ✔ When to use:

* Dashboard
* User-specific pages
* Admin panels
* Frequently changing data

### ✔ Code (SSR)

```ts
const response = await fetch("http://localhost:3000/api/user", {
  cache: "no-store"   // disable cache
});

const data = await response.json();
```

> `cache: "no-store"` forces Next.js to fetch data **every time**.

---

# 🔥 3. **ISR – Incremental Static Regeneration**

### ✔ What is ISR?

* Page is **static**, but updates automatically after a given time.
* Combines SSG + SSR benefits.
* Extremely good for:

  * E-commerce
  * News articles
  * Home pages
  * Product price updates

### ✔ How ISR works:

* Next.js creates a static page
* After **revalidate time**, it regenerates in background
* Users see updated version automatically

### ✔ Code (ISR)

```ts
const response = await fetch("http://localhost:3000/api/user", {
  next: { revalidate: 10 }  // refresh every 10 seconds
});

const data = await response.json();
```

---

# 🔥 4. **CSR – Client-Side Rendering**

### ✔ What is CSR?

* Rendering & data fetching happens in the **browser**
* Use when:

  * You need user input to fetch data
  * Highly interactive UI
  * Auth dashboards requiring JWT in localStorage
  * Components using useState/useEffect

### ✔ Code Example (CSR)

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/user");
      const json = await res.json();
      setData(json);
    }
    load();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
```

---

# 🧠 Summary (Interview Perfect)

| Method  | How It Works           | When to Use             | Code                       |
| ------- | ---------------------- | ----------------------- | -------------------------- |
| **SSG** | Static at build time   | Blogs, docs             | `cache: "force-cache"`     |
| **SSR** | Fetch on every request | Dashboards, login pages | `cache: "no-store"`        |
| **ISR** | Rebuild after X sec    | News, products          | `next: { revalidate: 10 }` |
| **CSR** | Fetch in browser       | client-side UI          | `useEffect + fetch()`      |

---

✅ **Real-world examples of SSG, SSR, ISR, CSR**
✅ **20 Interview Questions + Answers (Data Fetching in Next.js)**

All written in a clean, simple and interview-ready format.

---

# 🚀 **Real-World Examples (SSG vs SSR vs ISR vs CSR)**

---

# 🟦 **1. SSG (Static Site Generation) – Real-World Use Cases**

SSG is perfect when the data does NOT change frequently.

### **Real Examples**

* Blog posts
* Documentation websites
* Marketing landing pages
* Portfolio websites
* FAQ / About us pages
* Product pages for small e-commerce stores
* Public information pages (Terms, Privacy)

### **Why SSG?**

* Fastest performance (pre-rendered HTML)
* SEO friendly
* Zero server cost

---

# 🟥 **2. SSR (Server-Side Rendering) – Real-World Use Cases**

SSR is needed when the page needs **fresh or user-specific data**.

### **Real Examples**

* Admin dashboard
* User profile page
* Banking apps (balance changes per second)
* Stock market data
* Crypto price dashboard
* Cart page (user-specific items)
* Pages requiring authentication on server
* Personalized homepages (e.g. Netflix dashboard)

### **Why SSR?**

* Always fresh data
* Good for dashboards
* SEO friendly but dynamic

---

# 🟩 **3. ISR (Incremental Static Regeneration) – Real-World Use Cases**

ISR is used when data changes **occasionally**, not on every request.

### **Real Examples**

* News website homepage (update every X seconds)
* E-commerce product pages
* Blog post comments count
* Real estate listings
* Weather widgets
* Job listings
* Event pages (updated few times a day)

### **Why ISR?**

* Static (fast) but updates automatically
* Best hybrid approach
* Huge performance improvement

---

# 🟨 **4. CSR (Client-Side Rendering) – Real-World Use Cases**

CSR fetches data **inside the browser** (useEffect).

### **Real Examples**

* Search bar suggestions
* Chat applications
* Live notifications
* Dynamic filters on products
* Frontend form validations
* Apps depending on localStorage (auth token)
* Pages that don’t need SEO
* Highly interactive components (sliders, modals)

### **Why CSR?**

* Needed for interactivity
* Good when SEO is not important
* Required when using browser APIs

---
