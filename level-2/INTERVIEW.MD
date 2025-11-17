# ⭐ **50 Next.js App Router Interview Questions + Answers**

---

## ✅ **1. What is the App Router in Next.js?**

The App Router is a file-based routing system introduced in Next.js 13+ that uses the `app/` directory and supports layouts, nested routes, server components, and advanced routing features.

---

## ✅ **2. What is the purpose of `page.js`?**

`page.js` defines a route’s main component. A folder containing `page.js` becomes a URL path.

---

## ✅ **3. What is the difference between `page.js` and `page.jsx`?**

There is no functional difference.
`page.jsx` is preferred for JSX syntax highlighting.

---

## ✅ **4. What is the purpose of `layout.js`?**

`layout.js` acts as a wrapper around pages in its folder. It provides shared UI like headers, footers, sidebars, and remains persistent across navigation.

---

## ✅ **5. Why must a layout include `{children}`?**

Because the page component renders inside the layout. Without `{children}`, the page won’t appear.

---

## ✅ **6. What is the global layout?**

`app/layout.js` is the root layout applied to the entire project.

---

## ✅ **7. What is a nested layout?**

A layout inside a subfolder (e.g., `app/dashboard/layout.js`) that wraps pages inside that subfolder only.

---

## ✅ **8. How does routing work in the App Router?**

Each folder becomes a route, and files inside like `page.js`, `layout.js`, etc., define behaviors.

---

## ✅ **9. What are server components?**

Components that render on the server by default, can run async code, and improve performance.

---

## ✅ **10. What are client components?**

Components rendered on the client using `"use client";`. They support hooks like `useState`, `useEffect`, but cannot be async.

---

## ✅ **11. What is the default type of component in the App Router?**

Server Component.

---

## ✅ **12. How do you define a Client Component?**

Add `"use client";` at the top of the file.

---

## ✅ **13. How do you access URL params in a Server Component?**

Use async/await:

```js
export default async function Page({ params }) {
  const { id } = await params;
}
```

---

## ✅ **14. How do you access URL params in a Client Component?**

Using `useParams()`:

```js
const { id } = useParams();
```

---

## ✅ **15. What are dynamic routes?**

Routes created with `[param]` to handle variable URL segments like `/blog/hello-world`.

---

## ✅ **16. What does `[slug]` represent?**

A dynamic segment where `slug` is replaced by a real value from the URL.

---

## ✅ **17. What is a catch-all route?**

A route that captures **unlimited nested segments** using `[...slug]`.

---

## ✅ **18. What is an optional catch-all route?**

A route using `[[...slug]]` that also matches the root path.

---

## ✅ **19. Difference between catch-all and optional catch-all?**

| Type          | Matches `/route` | Matches nested |
| ------------- | ---------------- | -------------- |
| `[...slug]`   | ❌ No             | ✔ Yes          |
| `[[...slug]]` | ✔ Yes            | ✔ Yes          |

---

## ✅ **20. What are route groups?**

Folders inside `(group-name)` used for organizing routes without affecting the URL.

---

## ✅ **21. Do route groups appear in the final URL?**

No.

---

## ✅ **22. What are parallel routes?**

Named slots (e.g., `@team`, `@analytics`) that allow multiple UI sections to render concurrently.

---

## ✅ **23. What is the `default.js` file used for?**

Provides fallback content for parallel routes.

---

## ✅ **24. What is the purpose of `loading.js`?**

Shows a loading UI while server components fetch data.

---

## ✅ **25. What is `error.js` used for?**

Catches and displays errors for a specific route segment.

---

## ✅ **26. What is `global-error.js`?**

A global root-level error handler.

---

## ✅ **27. What is `not-found.js`?**

A custom 404 UI for a specific route folder.

---

## ✅ **28. What is metadata in Next.js?**

SEO information such as title, description, icons.

---

## ✅ **29. How do you set metadata in a route?**

Add `export const metadata = { title: "...", description: "..." }`

---

## ✅ **30. What is the difference between `layout.js` and `template.js`?**

| layout.js         | template.js                     |
| ----------------- | ------------------------------- |
| Persistent        | Re-renders on navigation        |
| Shared UI         | Good for transitions/animations |
| Only renders once | Renders every time              |

---

## ✅ **31. Can you use `useEffect` inside a server component?**

No. Server components cannot use client-side hooks.

---

## ✅ **32. Can server components access browser APIs?**

No. They run on the server only.

---

## ✅ **33. Can client components fetch data directly?**

Yes, using browser fetch or hooks.

---

## ✅ **34. What is the purpose of `route.js`?**

Creates backend API endpoints inside the `app` directory.

Example:
`app/api/users/route.js → /api/users`

---

## ✅ **35. What methods can `route.js` export?**

`GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `OPTIONS`.

---

## ✅ **36. How do you return JSON from a route?**

```js
return Response.json({ message: "Hello" });
```

---

## ✅ **37. What is the difference between App Router and Pages Router?**

App Router is newer, supports server components, nested layouts, and advanced routing.

Pages Router is older and uses `pages/` folder.

---

## ✅ **38. Does the App Router support API routes?**

Yes, via `route.js`.

---

## ✅ **39. What is server-side rendering (SSR)?**

Rendering components on the server before sending HTML to the browser.

---

## ✅ **40. What is static site generation (SSG)?**

Pre-rendering pages at build time.

---

## ✅ **41. How does Next.js support incremental static regeneration (ISR)?**

Pages can revalidate using:

```js
export const revalidate = 10;
```

---

## ✅ **42. Are layouts shared between server and client components?**

Layouts are server components by default.

---

## ✅ **43. What is the recommended rendering method in App Router?**

Server Components with async/await because they reduce JS bundle size.

---

## ✅ **44. Can a Client Component import a Server Component?**

❌ No.

---

## ✅ **45. Can a Server Component import a Client Component?**

✔ Yes.

But the client component will bundle on the client.

---

## ✅ **46. How do you navigate programmatically in App Router?**

In client components use:

```js
const router = useRouter();
router.push("/dashboard");
```

---

## ✅ **47. What is the `useSearchParams()` hook?**

Used to access query parameters in client components.

---

## ✅ **48. How do you access search params in a Server Component?**

Using:

```js
export default function Page({ searchParams }) {
  console.log(searchParams);
}
```

---

## ✅ **49. What is streaming in Server Components?**

The ability to send partial UI to the browser before the full page loads using `loading.js`.

---

## ✅ **50. What is the biggest benefit of the App Router?**

A unified system for:

* server rendering
* nested layouts
* automatic routing
* performance optimization
* backend routing

All inside one folder (`app/`).

---

# 🎉 DONE — You now have:

✔ **50 Interview Questions + Answers**
✔ Deep knowledge of Next.js App Router
✔ Full routing system understanding
