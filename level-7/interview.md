
# 🧠 **20 Interview Questions With Answers (Data Fetching – Next.js App Router)**

---

### **1. What is the default data fetching method in the App Router?**

**SSG (Static Site Generation)** using `force-cache`.

---

### **2. How do you enable SSR in Next.js App Router?**

Use:

```ts
fetch(url, { cache: "no-store" })
```

---

### **3. How do you enable ISR?**

Use:

```ts
fetch(url, { next: { revalidate: 10 } })
```

---

### **4. What is the difference between SSR and ISR?**

* **SSR** fetches data **on every request**
* **ISR** generates static pages but refreshes after a **revalidate** time

---

### **5. Which data fetching makes the page static?**

SSG and ISR (both create static HTML)

---

### **6. Which is best for SEO?**

SSR
SSG
ISR
(All server-side rendered or pre-rendered)

---

### **7. When should you use CSR?**

When:

* SEO doesn’t matter
* data depends on user interactions
* client-only APIs like localStorage

---

### **8. What happens if you use plain fetch() without options?**

Next.js uses **SSG (force-cache)**.

---

### **9. Difference between CSR and SSR?**

* **CSR** runs in browser
* **SSR** runs on server

---

### **10. What is a revalidate value?**

Time (in seconds) after which ISR regenerates the page.

---

### **11. Can ISR regenerate multiple pages at once?**

Yes, each requested page regenerates individually.

---

### **12. Example of when SSR is required?**

When data is:

* Highly dynamic
* User-specific
* Auth protected

---

### **13. Can we use useEffect in Server Components?**

❌ No, useEffect works only in **Client Components**.

---

### **14. How to force a component to become client-side?**

Add:

```ts
"use client";
```

---

### **15. How to fetch API data inside a server component?**

Use:

```ts
const res = await fetch(url);
```

---

### **16. What is the problem with CSR for SEO?**

Content is not pre-rendered → SEO crawlers see empty HTML.

---

### **17. How do you fetch data with cookies/session on server?**

Use:

```ts
fetch(url, { cache: "no-store" });
```

---

### **18. What is full-page static regeneration?**

Pages update after revalidate time using ISR.

---

### **19. Does SSR work in API routes?**

API routes are always server-side, so yes.

---

### **20. Can we use fetch() in layout.js?**

Yes — layouts support server data fetching too.

---
