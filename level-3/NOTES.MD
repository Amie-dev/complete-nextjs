# 🧭 **Navigation in Next.js (App Router)**

In Next.js **App Router**, navigation can be done in three ways:

---

# ✅ **1. `<Link>` Component (Client-Side Navigation)**

Used for **basic navigation between pages**.

### **Example**

```jsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/profile">Go to Profile</Link>
    </div>
  );
}
```

### **Why use `<Link>`?**

* Performs **client-side navigation**
* Does **not reload the page**
* **Prefetches** pages automatically (faster performance)

---

# ✅ **2. useRouter() – Client-Side Navigation (Imperative Navigation)**

Use when you need to **navigate using JavaScript** (like on button click).

### Import:

```javascript
import { useRouter } from "next/navigation";
```

### Usage:

```jsx
'use client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const goToProfile = () => {
    router.push('/profile');
  };

  return (
    <button onClick={goToProfile}>
      Go to Profile
    </button>
  );
}
```

### **Key Router Methods**

| Method                    | What It Does                     |
| ------------------------- | -------------------------------- |
| `router.push('/path')`    | Navigate to new page             |
| `router.replace('/path')` | Replace history (no back button) |
| `router.back()`           | Go back one step                 |
| `router.forward()`        | Go forward                       |

---

# 🖥️ **3. Server-Side Navigation (Server Components / Server Actions)**

You cannot use `useRouter()` in a Server Component.
Instead, you use:

### **redirect()**

```javascript
import { redirect } from "next/navigation";

export default function Page() {
  redirect('/login');
}
```

### **When to use `redirect`?**

* After **server-side validation**
* After **server action**
* After **form submission**
* When user is **not authenticated**

---

# 🖼️ **Image Optimization (next/image)**

Next.js provides a special component:

```jsx
import Image from "next/image";
```

It automatically optimizes images.

---

# ✅ **Why use `next/image`?**

### **Benefits**

✔ Automatic resizing
✔ Automatic WebP conversion
✔ Lazy loading
✔ High performance
✔ Built-in responsive images
✔ Prevents layout shift

---

# 🖼️ **Using Local Images**

Works by importing:

```jsx
import Image from "next/image";
import profilePic from "@/public/profile.png";

export default function Page() {
  return <Image src={profilePic} alt="Profile" width={300} height={300} />;
}
```

✔ Best performance
✔ Fast bundling
✔ Optimized automatically

---

# 🌍 **Using Remote Images**

If using external image URLs:

```jsx
<Image 
  src="https://example.com/image.jpg"
  alt="remote image"
  width={500}
  height={300}
/>
```

You **must allow domains** in `next.config.js`:

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
};
```

---

# 🔤 **Font Optimization (`next/font/google`)**

Next.js has built-in automatic font optimization.

### Import:

```javascript
import { Roboto } from "next/font/google";
```

### Usage Example:

```javascript
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export default function Page() {
  return (
    <h1 className={roboto.className}>
      Hello World
    </h1>
  );
}
```

---

# 🎯 **Why use next/font?**

✔ No external CDN required (Google Fonts loaded locally)
✔ Better performance
✔ No CLS (layout shift)
✔ Preloaded automatically
✔ Easy to use

---

# 🔤 Example with Multiple Weights

```javascript
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
```

---

# ⭐ Complete Example (Image + Font + Navigation)

```jsx
import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className={roboto.className}>
      <h1>Welcome</h1>
      <Link href="/about">Go to About</Link>

      <Image
        src="/hero.jpg"
        alt="Hero"
        width={800}
        height={400}
      />
    </div>
  );
}
```
