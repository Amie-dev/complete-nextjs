
---

# ✅ **40 TypeScript Interview Questions (with Answers)**

**All questions are directly related to your topics.**

---

# 🔵 **1. What is TypeScript?**

TypeScript is a superset of JavaScript that adds **static typing**, **interfaces**, **type checking**, and **compile-time error detection**.

---

# 🔵 **2. What is type annotation in TypeScript?**

Type annotation means **manually assigning a type** to a variable.

Example:

```ts
let a: number = 10;
```

---

# 🔵 **3. What is Type Inference?**

TypeScript automatically identifies the type of a variable.

```ts
let x = 20; // inferred as number
```

---

# 🔵 **4. What is a Type Alias?**

Type Alias lets you create a custom type.

```ts
type ID = number | string;
```

---

# 🔵 **5. What are Union Types?**

Union allows **multiple types** for one variable.

```ts
let value: number | string;
```

---

# 🔵 **6. What are Literal Types?**

Literal types restrict variable to **exact values**.

```ts
type Status = "success" | "error";
```

---

# 🔵 **7. What are Intersection Types?**

Intersection combines multiple types into one.

```ts
type A = { a: string }
type B = { b: string }
type C = A & B;
```

---

# 🔵 **8. What is the difference between Union and Intersection?**

* **Union (|)** → *either A or B*
* **Intersection (&)** → *must satisfy both A and B*

---

# 🔵 **9. How do you define object types using TypeScript?**

```ts
type User = { name: string; age: number; }
```

---

# 🔵 **10. How do you define optional properties?**

Using `?`.

```ts
type Post = { image?: string }
```

---

# 🔵 **11. What is the use of the optional `?` operator?**

It allows a field to be **missing** in the object.

---

# 🔵 **12. What is a readonly property?**

Cannot be modified after assignment.

```ts
readonly id: number;
```

---

# 🔵 **13. Can you reassign a `readonly` property?**

No. Compile-time error.

---

# 🔵 **14. What is `unknown` type?**

A safer alternative to `any`—must check the type before using.

---

# 🔵 **15. Difference between `any` and `unknown`?**

| any                   | unknown                |
| --------------------- | ---------------------- |
| No type safety        | Requires type checking |
| Allows all operations | Restrictive            |

---

# 🔵 **16. What is `void` type?**

Used for functions that **do not return** anything.

---

# 🔵 **17. What is `null` and `undefined` in TypeScript?**

They are primitive types representing absence of value.

---

# 🔵 **18. How to write function type alias?**

```ts
type MathFn = (a: number, b: number) => number;
```

---

# 🔵 **19. Why use function types?**

To ensure function arguments & return types are correct.

---

# 🔵 **20. What is an interface in TypeScript?**

Defines the shape/structure of an object.

```ts
interface User { name: string }
```

---

# 🔵 **21. Difference between Type Alias and Interface?**

| Type               | Interface                  |
| ------------------ | -------------------------- |
| Can create unions  | Cannot create unions       |
| Cannot be reopened | Can be merged              |
| More flexible      | Best for objects & classes |

---

# 🔵 **22. How to extend an interface?**

```ts
interface Child extends Parent {}
```

---

# 🔵 **23. Can interfaces extend multiple interfaces?**

Yes.

---

# 🔵 **24. Can types extend interfaces?**

Yes, using intersection.

---

# 🔵 **25. How do you make a property optional in an interface?**

Same `?` syntax:

```ts
interface User { age?: number }
```

---

# 🔵 **26. Can a type alias extend another type alias?**

Yes, using `&`.

---

# 🔵 **27. When should you use interface over type?**

When building **object models** or working with **OOP** and **classes**.

---

# 🔵 **28. When should you use type alias over interface?**

When working with **union**, **intersection**, **function types**, **tuples**.

---

# 🔵 **29. What is structural typing?**

Typescript checks compatibility based on **shape**, not name.

---

# 🔵 **30. Can an interface contain readonly fields?**

Yes.

---

# 🔵 **31. What is Declaration Merging?**

Interfaces with same name merge automatically.

---

# 🔵 **32. Can type aliases merge?**

No.

---

# 🔵 **33. What is a tuple?**

A fixed-length array with specific types.

```ts
let user: [string, number]
```

---

# 🔵 **34. Difference between tuple and array?**

| Array            | Tuple           |
| ---------------- | --------------- |
| Same type        | Different types |
| Dynamic length   | Fixed length    |
| Order not strict | Order strict    |

---

# 🔵 **35. What is a custom type for objects?**

```ts
type Product = { id: number; name: string }
```

---

# 🔵 **36. Can TypeScript infer types inside objects?**

Yes.

---

# 🔵 **37. Can you create optional tuple elements?**

Yes (TS 4+)

```ts
let t: [number, string?];
```

---

# 🔵 **38. What happens if you assign wrong type?**

Compile-time error.

---

# 🔵 **39. What is narrowing in TypeScript?**

Checking the type before using it.

```ts
if (typeof x === "string") { ... }
```

---

# 🔵 **40. Can interfaces define methods?**

Yes.

```ts
interface User {
  login(): void;
}
```

---

# 🔵 **41. Can you combine interface + type?**

Yes—types can extend or use intersections.

```ts
type Mix = UserInterface & ExtraType;
```

---
