
### ✅ API Routes in Next.js

### ✅ How request/response works

### ✅ HTTP methods (GET, POST, PUT, DELETE, PATCH)

### ✅ Dynamic API Routes

### ✅ Ways to accept parameters (query, params, body, headers)

---

# 🚀 **API Routes in Next.js (App Router)**

API routes allow you to build backend endpoints **inside Next.js** (server-only).
Location:

```
app/api/*
```

Each route must export functions named like:

```
GET, POST, PUT, DELETE, PATCH
```

Example:

```ts
// app/api/hello/route.ts
export async function GET(request: Request) {
  return Response.json({ message: "Hello API" })
}
```

---

# 🔥 **How Request & Response Work in Next.js API Routes**

### ✔ Request Object

Next.js uses the **Web Fetch API Request** object.

You can access:

| What         | Code                                |
| ------------ | ----------------------------------- |
| URL          | `request.url`                       |
| Query params | `new URL(request.url).searchParams` |
| Body (JSON)  | `await request.json()`              |
| Headers      | `request.headers`                   |
| Method       | `request.method`                    |

---

### ✔ Response Object

Use:

```
return Response.json(data, { status: 200 });
```

Or:

```
return new Response("Hello", { status: 200 });
```

---

# 🧨 **HTTP Methods in Next.js API Routes**

## ✅ 1. **GET**

Used for reading data.

```ts
export async function GET(request: Request) {
  return Response.json({ message: "GET called" });
}
```

---

## ✅ 2. **POST**

Used for sending/creating data.

```ts
export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ received: body });
}
```

---

## ✅ 3. **PUT**

Used for full update.

```ts
export async function PUT(request: Request) {
  const body = await request.json();
  return Response.json({ updated: body });
}
```

---

## ✅ 4. **PATCH**

Used for partial update.

```ts
export async function PATCH(request: Request) {
  const body = await request.json();
  return Response.json({ patch: body });
}
```

---

## ✅ 5. **DELETE**

Used for deleting.

```ts
export async function DELETE(request: Request) {
  return Response.json({ message: "Deleted" });
}
```

---

# 🚀 **Dynamic API Routes (Super Important)**

Structure:

```
app/api/users/[id]/route.ts
```

### Example:

```ts
export async function GET(request: Request, { params }: any) {
  const { id } = params;
  return Response.json({ userId: id });
}
```

---

# ⚡ **Ways to Accept Params in API Route**

## **1. Route Params (Folder-based)**

URL:

```
/api/users/10
```

Folder:

```
app/api/users/[id]/route.ts
```

Access:

```ts
export function GET(req: Request, { params }: any) {
  console.log(params.id);
}
```

---

## **2. Query Parameters**

URL:

```
/api/products?category=mobile&limit=10
```

Read:

```ts
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const limit = searchParams.get("limit");

  return Response.json({ category, limit });
}
```

---

## **3. Request Body (POST, PUT, PATCH)**

```ts
export async function POST(request: Request) {
  const data = await request.json();
  return Response.json({ body: data });
}
```

---

## **4. Headers**

```ts
export function GET(request: Request) {
  const token = request.headers.get("authorization");
  return Response.json({ token });
}
```

---

## **5. Cookies**

```ts
import { cookies } from "next/headers";

export function GET() {
  const token = cookies().get("token");
  return Response.json({ token });
}
```

---

## **6. FormData**

```ts
export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file");
  return Response.json({ file });
}
```

---

# 🎯 Summary Table

| Way              | Example               | Usage              |
| ---------------- | --------------------- | ------------------ |
| **Route Params** | `/api/user/1`         | params.id          |
| **Query Params** | `/api/user?search=ab` | searchParams.get() |
| **Body**         | JSON, formData        | await req.json()   |
| **Headers**      | Authorization         | req.headers.get()  |
| **Cookies**      | token                 | cookies().get()    |

---
