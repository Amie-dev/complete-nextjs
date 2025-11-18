
# ✅ **20 Next.js Interview Questions & Answers (Navigation + Images + Fonts)**

---

## **1. What are the different ways to navigate in Next.js App Router?**

**Answer:**

* Using `<Link>` (client-side navigation)
* Using `useRouter()` (programmatic navigation)
* Using `redirect()` (server-side navigation)

---

## **2. What is the difference between `<Link>` and `router.push()`?**

**Answer:**

* `<Link>` is declarative → used in JSX.
* `router.push()` is imperative → used in JS functions (ex: onClick).

---

## **3. Why can't we use `useRouter()` in Server Components?**

**Answer:**
Server Components run on the server without access to browser APIs.
`useRouter()` needs client-side environment → so it works only inside **client components**.

---

## **4. How do you redirect from a Server Component?**

**Answer:**

```js
import { redirect } from "next/navigation";
redirect('/login');
```

---

## **5. What is prefetching in Next.js `<Link>`?**

**Answer:**
Next.js automatically pre-downloads the JS for linked pages making navigation **faster**.

---

## **6. What all methods does `useRouter()` provide?**

**Answer:**

* `push()`
* `replace()`
* `back()`
* `forward()`

---

## **7. What is the advantage of Next.js client-side navigation?**

**Answer:**
It avoids full page reload → resulting in faster transitions and better UX.

---

## **8. What is `next/image` used for?**

**Answer:**
For automatic image optimization:

* Lazy loading
* WebP conversion
* Responsive sizes
* Faster load time

---

## **9. Why should you use `next/image` instead of `<img>`?**

**Answer:**
Because `<img>` does not provide:
❌ automatic optimization
❌ lazy loading
❌ format conversion

`next/image` gives all these benefits out of the box.

---

## **10. How do you use a local image in Next.js?**

**Answer:**

```js
import img from "@/public/pic.png";

<Image src={img} width={300} height={300} alt="pic" />
```

---

## **11. How do you load a remote image?**

**Answer:**
Add domain in `next.config.js`:

```js
images: {
  remotePatterns: [{ hostname: "example.com" }]
}
```

---

## **12. What will happen if you load a remote image without configuring domain?**

**Answer:**
Next.js will throw an error:
**"Invalid src prop"**
because the domain is not allowed.

---

## **13. What is `next/font` used for?**

**Answer:**
To load Google Fonts **locally**, not from CDN → resulting in:

* Better performance
* No layout shift (CLS)
* Faster rendering

---

## **14. How to import Google Fonts using next/font/google?**

**Answer:**

```js
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });
```

---

## **15. What are the benefits of next/font over traditional Google Font `<link>` tags?**

**Answer:**
✔ No external request
✔ Fonts are self-hosted
✔ Automatic preloading
✔ Zero layout shift

---

## **16. Can you use next/font in a Server Component?**

**Answer:**
Yes.
`next/font/google` works in both server and client components.

---

## **17. What is the difference between static and dynamic images in Next.js?**

**Answer:**

* **Static images** – imported from the file system → best optimization
* **Dynamic images** – loaded using a URL → require domain configuration

---

## **18. Can Image component work without width & height?**

**Answer:**
No (except in `fill={true}` mode).
Next.js needs these values for layout.

---

## **19. How do you navigate to previous page programmatically?**

**Answer:**

```js
router.back();
```

---

## **20. How do you perform server-side navigation after form submission?**

**Answer:**

```js
"use server";
import { redirect } from "next/navigation";

export async function submit() {
  redirect("/success");
}
```

---

# 🎉 Done!
