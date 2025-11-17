
# ⭐ NEXT.JS APP ROUTER — FULL DEEP NOTES

*(page.js, layout.js, dynamic routes, catch-all, client/server components, route groups, parallel routes, special files)*

---

# 🔥 1. What is `page.js` or `page.jsx`?

### ► Definition

`page.js` (or `page.jsx`) is the **entry point for a route** in the Next.js App Router.

Every folder with a `page.js` becomes a URL.

### ► Example

```
app/page.js         →  domain.com/
app/about/page.js   →  domain.com/about
app/blog/page.js    →  domain.com/blog
```

### ► Characteristics

* Server Component by default
* Loads fast
* Supports async/await
* SEO-friendly because rendered on server
* Must export default React component

### ► Example Code

```jsx
export default function About() {
  return <h1>About Page</h1>;
}
```

### `.js` vs `.jsx` difference?

**NO difference in Next.js functionality.**
`page.jsx` just gives JSX syntax highlighting.
Use whichever you prefer.

---

# 🔥 2. What is `layout.js` or `layout.jsx`?

### ► Definition

A `layout.js` is a **UI wrapper** that surrounds all pages and nested routes inside that folder.

### ► Purpose

* Reusable UI
* Shared navigation
* Shared header & footer
* Shared sidebar
* Common styling
* Renders **once** and persists during navigation

### ► Must include `{children}`

Because the child pages render inside layout.

Example:

```jsx
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}  {/* every page will appear here */}
        <Footer />
      </body>
    </html>
  );
}
```

---

# 🔥 3. GLOBAL LAYOUT vs FOLDER LAYOUT

### ✔ Global Layout → `app/layout.js`

* Applies to the entire application
* Loads once
* Used for: Navbar, Footer, global CSS, theme

### ✔ Folder Layout → `app/dashboard/layout.js`

* Applies **only inside that folder**
* Perfect for: dashboards, admin panel UI, nested layouts

Example:

```
app/dashboard/layout.js → only wraps dashboard pages
app/dashboard/page.js
app/dashboard/settings/page.js
```

---

# 🔥 4. Routing System in Next.js (App Router)

Next.js uses **File-based Routing**
→ Folders = Routes
→ Files inside folder = Special behaviors

Example:

```
app/products/page.js → /products
app/products/new/page.js → /products/new
```

No React Router needed.

---

# 🔥 5. Nested Routes

Folder-level nesting automatically creates nested URLs.

Example:

```
app/dashboard/settings/profile/page.js
```

URL:

```
/dashboard/settings/profile
```

No config required.

---

# 🔥 6. Dynamic Routes

Dynamic Routes allow variable URL segments like:

* `/blog/react-hooks`
* `/user/aminul`
* `/products/123`

### ► How to create dynamic route

Wrap the folder name in brackets:

```
app/blog/[slug]/page.js
```

### ► Example URL

```
/blog/next-js-routing
```

### ► Params object

```js
params = { slug: "next-js-routing" };
```

---

# 🔥 6.1 Dynamic Routes in SERVER COMPONENTS

In App Router, the `params` prop is a **promise**, not an object.

So you **must use async/await**.

Example:

```jsx
export default async function BlogPage({ params }) {
  const { slug } = await params;
  return <h1>Blog: {slug}</h1>;
}
```

### Why params is a promise?

Because server components fetch data before rendering.

---

# 🔥 6.2 Dynamic Routes in CLIENT COMPONENTS

Client components cannot use server-style async params.

You use:

```jsx
'use client';
import { useParams } from 'next/navigation';

export default function BlogPage() {
  const { slug } = useParams();
  return <h1>Blog: {slug}</h1>;
}
```

### Why useParams() is needed?

Because client components cannot access server’s async params.

---

# 🔥 7. Catch-all Routes `[...slug]`

These match **infinite nested segments**.

### Folder:

```
app/shop/[...slug]/page.js
```

### Matches:

```
/shop/books
/shop/books/fiction
/shop/books/fiction/english
/shop/books/fiction/english/horror
```

### Params:

```
{ slug: ["books", "fiction", "english"] }
```

Use when you need recursive page levels.

---

# 🔥 8. Optional Catch-All Routes `[[...slug]]`

Matches **everything INCLUDING the root route**.

Folder:

```
app/shop/[[...slug]]/page.js
```

### Matches:

```
/shop               ← root included ✓
/shop/shoes
/shop/shoes/men
/shop/shoes/men/loafers
```

### Difference:

| Type          | Matches /shop? | Matches nested? |
| ------------- | -------------- | --------------- |
| `[...slug]`   | ❌ No           | ✔ Yes           |
| `[[...slug]]` | ✔ Yes          | ✔ Yes           |

Optional catch-all is more flexible.

---

# 🔥 9. Route Groups `(folder-name)`

Route groups organize files **without affecting the URL**.

Folder name wrapped in parentheses is ignored in the route path.

Example:

```
app/(marketing)/about/page.js → /about
app/(dashboard)/settings/page.js → /settings
```

Used for:

* Folder organization
* Splitting layouts
* Managing complex apps

---

# 🔥 10. Parallel Routes

Parallel routes let you render **multiple pages at the same time** inside layouts.

Used for:

* Dashboards
* Multi-section pages
* Conversational UI
* Preview vs Editor panels

### Syntax:

```
app/@team/page.js
app/@analytics/page.js
```

The `@slotname` tells Next.js that this is a parallel route.

Example layout:

```jsx
export default function Layout({ team, analytics }) {
  return (
    <div>
      <div>{team}</div>
      <div>{analytics}</div>
    </div>
  );
}
```

---

# 🔥 11. Special Next.js Files (VERY IMPORTANT)

NEXt.js App Router gives 10 special files:

### 1️⃣ `page.js`

Main page.

### 2️⃣ `layout.js`

UI wrapper for all child routes.

### 3️⃣ `loading.js`

Loading UI while server component fetches data.

```jsx
export default function Loading() {
  return <p>Loading...</p>;
}
```

### 4️⃣ `not-found.js`

404 page for that route.

### 5️⃣ `error.js`

Error boundary—catches JS errors.

### 6️⃣ `global-error.js`

Global error handler.

### 7️⃣ `template.js`

Like layout, but **re-renders every time**.

Use for:

* Animations
* Page transitions

### 8️⃣ `route.js`

Built-in backend API route.

Example:

```
app/api/users/route.js → /api/users
```

Code:

```jsx
export async function GET() {
  return Response.json({ name: "Aminul" });
}
```

### 9️⃣ `default.js`

Fallback for parallel routes.

### 🔟 `head.js` (Optional in older versions)

Used for page-level metadata.

---

# 🎯 FINAL FULL SUMMARY

## ⭐ Files

| File            | Purpose                  |
| --------------- | ------------------------ |
| page.js         | The actual page (route)  |
| layout.js       | Wrapper for nested pages |
| loading.js      | Skeleton Loader          |
| not-found.js    | Route 404                |
| error.js        | Route error boundary     |
| global-error.js | App-wide error boundary  |
| template.js     | Re-rendered layout       |
| route.js        | API backend endpoint     |
| default.js      | Parallel route fallback  |

## ⭐ Routing

* Normal routes
* Nested routes
* Dynamic routes `[slug]`
* Catch-all `[...slug]`
* Optional catch-all `[[...slug]]`
* Route groups `(folder)`
* Parallel routes `@slot`

## ⭐ Components

* Server Components → default, async params
* Client Components → use `useParams()`, `useState`, `useEffect`

---