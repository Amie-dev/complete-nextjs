
# ✅ **TypeScript Type Declaration – Full Deep Explanation**

---

# 🔵 **1. Type Annotations**

### ✔ What is a Type Annotation?

Type annotation means **manually telling TypeScript the type** of a variable.

### **Example**

```ts
let a = 90;  
// TS auto detects → a: number (Type Inference)
```

Explicit annotation:

```ts
let b: number;
b = 100;
```

---

# 🔵 **2. Custom Type (Type Alias)**

You can create your own reusable type using:

```ts
type TypeName = TypeDefinition;
```

### **Example 1: Union Custom Type**

```ts
type Amie = number | string;

let a1: Amie;
a1 = 90;
a1 = "Aminul";
```

---

### **Example 2: Literal Type**

```ts
type Status = "success" | "error" | "pending";

let st1: Status;
st1 = "success";
```

---

# 🔵 **3. Object Types**

### **Using `type`**

```ts
type Obj = {
  name: string,
  age: number,
  roll: number
};

let obj1: Obj = {
  name: "Aminul",
  age: 21,
  roll: 99,
};
```

---

# 🔵 **4. Optional Properties ( ? )**

Use `?` when a property is **not mandatory**.

```ts
type Post = {
  description: string,
  image?: string,
  likes: boolean
};

let post1: Post = {
  description: "Hello world",
  // image not required
  likes: true,
};
```

---

# 🔵 **5. Combining Types (Union & Intersection)**

---

## **A) Union Type ( | )**

Either A or B.

```ts
type X = string | number;
```

---

## **B) Intersection Type ( & )**

Must satisfy **all types combined**.

```ts
type A1 = {
  a: string;
};

type A2 = {
  b: string;
};

type A1A2 = A1 & A2;

let obj12: A1A2 = {
  a: "hello",
  b: "world",
};
```

---

# 🔵 **6. Function Types**

Define a function's parameter & return types.

### **Using a Type Alias**

```ts
type MathFn = (a: number, b: number) => number;

let add: MathFn = (a, b) => {
  return a + b;
};
```

---

# 🔵 **7. Type Inference**

TypeScript automatically detects types.

```ts
let x = 200;   // inferred as number
let y = "hi";  // inferred as string
```

No need to explicitly write:

```ts
let x: number = 200; // unnecessary
```

---

# 🔵 **8. Readonly Property**

Prevents modification **after initialization**.

```ts
type User = {
  readonly id: number,
  name: string
};

let u1: User = { id: 1, name: "Roy" };

u1.name = "Aminul"; // OK
u1.id = 2;          // ❌ Error: id is readonly
```

---

# 🔵 **9. Write-only (Not Supported Fully)**

TypeScript does **not** have direct `writeonly` support.
But you can simulate using **setters only** in classes:

```ts
class Demo {
  private _val: number = 0;

  set value(v: number) {
    this._val = v;
  }
}

const d = new Demo();
d.value = 10;       // write allowed
// d.value;         // ❌ can’t read (no getter)
```

---

# 🔴 **10. Interfaces**

Interfaces are similar to type but used mainly for **object structure**.

### **Basic Interface**

```ts
interface Post1 {
  description: string;
  image?: string;
  likes: boolean;
}
```

---

# 🔵 **11. Extending Interfaces**

Use `extends` like inheritance.

```ts
interface Post31 extends Post1 {
  sub: number;
}

let p: Post31 = {
  description: "New Post",
  likes: true,
  sub: 10
};
```

---

# 🔵 **12. Type vs Interface (Quick Difference)**

| Feature                | Type Alias | Interface       |
| ---------------------- | ---------- | --------------- |
| Can create union types | ✔ Yes      | ❌ No            |
| Can extend / inherit   | ✔ Yes (&)  | ✔ Yes (extends) |
| Preferred for objects  | ✔ Good     | ✔ Best          |
| Can be reopened/merged | ❌ No       | ✔ Yes           |

---

# 📌 **13. Complete Example Covering All Concepts**

```ts
// 1. Custom Types
type Status = "active" | "inactive";

// 2. Object
type User = {
  name: string;
  age: number;
  readonly id: number;
  status: Status;
};

// 3. Functions
type Multiply = (x: number, y: number) => number;

// 4. Interface with extend
interface Address {
  city: string;
  pin: number;
}

interface Employee extends Address {
  salary: number;
}

const emp: Employee = {
  city: "Delhi",
  pin: 110011,
  salary: 50000
};
```

---

# 🎯 Final Summary (Short & Sharp)

### ✔ **Type Annotations** → manual types

### ✔ **Type Alias** → create custom type

### ✔ **Union** → OR

### ✔ **Intersection** → AND

### ✔ **Optional ?** → not required field

### ✔ **Readonly** → cannot modify

### ✔ **Interface** → structure for objects

### ✔ **Extend** → inheritance

### ✔ **Function Types** → typed parameters & return value

---
