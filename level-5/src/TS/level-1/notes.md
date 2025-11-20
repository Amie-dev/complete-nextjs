
# 🟦 **What is TypeScript?**

**TypeScript (TS)** is a **superset of JavaScript** that adds *static typing* and *type-checking* at compile time.

✔ Written by Microsoft
✔ Runs everywhere JavaScript runs
✔ TS → compile → JS

**Key idea:**
➡ JavaScript is dynamically typed
➡ TypeScript is statically typed + more powerful

---

# 🟦 **Why do we need TypeScript?**

### ✔ 1. Catch errors before runtime

TS detects mistakes during development.

### ✔ 2. Helps avoid bugs

If you use the wrong value type → TS warns.

### ✔ 3. Makes code easier to maintain

Large codebases are easier with type safety.

### ✔ 4. Excellent developer experience

Autocomplete, IntelliSense, type hints.

### ✔ 5. Self-documenting code

Types tell you what a function expects/returns.

### ✔ 6. Works perfectly with React

Helps avoid prop and state-related bugs.

---

# 🟦 **JavaScript vs TypeScript**

| Feature         | JavaScript     | TypeScript            |
| --------------- | -------------- | --------------------- |
| Typing          | Dynamic        | Static                |
| Error detection | Runtime        | Compile-time          |
| IntelliSense    | Basic          | Excellent             |
| Browser support | Direct         | Needs compilation     |
| Best for        | Small projects | Medium–large projects |
| Learning curve  | Easy           | Moderate              |

---

# 🟦 **Types in TypeScript (Deep Theory + Syntax + Examples)**

Now the main part.

---

# 🔢 **1. number**

### **Theory**

Represents all numeric values (integer, float).

### **Syntax**

```ts
let age: number;
```

### **Example**

```ts
let price: number = 99.5;
let quantity: number = 10;
```

---

# 🔤 **2. string**

### **Theory**

Represents text values.

### **Syntax**

```ts
let name: string;
```

### **Example**

```ts
let username: string = "Aminul";
```

---

# 📚 **3. array**

### **Theory**

Array of specific type.

### Methods:

Two ways:

### **Syntax**

```ts
let names: string[];
let values: Array<number>;
```

### **Example**

```ts
let fruits: string[] = ["apple", "banana"];
let scores: Array<number> = [10, 20, 30];
```

---

# 🧩 **4. tuple**

### **Theory**

Tuple = array with **fixed types** and **fixed length**.

### **Syntax**

```ts
let user: [string, number];
```

### **Example**

```ts
let person: [string, number] = ["John", 25];
```

---

# 🏷 **5. enum**

### **Theory**

Represents a set of named constants.

### **Syntax**

```ts
enum Role { ADMIN, USER, GUEST }
```

### **Example**

```ts
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

let move: Direction = Direction.UP;
```

---

# ❓ **6. any**

### **Theory**

*Avoid using this*.
Accepts **any type** → disables TypeScript checking.

### **Syntax**

```ts
let data: any;
```

### **Example**

```ts
let something: any = "hello";
something = 123;
something = true;
```

---

# 🟡 **7. unknown**

### **Theory**

Safer version of **any**.
TS forces you to check the type before using it.

### **Syntax**

```ts
let value: unknown;
```

### **Example**

```ts
let input: unknown = "Hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

---

# 🔇 **8. void**

### **Theory**

Used in functions that return **nothing**.

### **Syntax**

```ts
function log(): void {}
```

### **Example**

```ts
function greet(): void {
  console.log("Hello");
}
```

---

# 🚫 **9. null**

### **Theory**

Represents intentional emptiness.

### **Syntax**

```ts
let a: null = null;
```

### **Example**

```ts
let data: null = null;
```

---

# ❌ **10. undefined**

### **Theory**

Variables declared but not assigned.

### **Syntax**

```ts
let b: undefined = undefined;
```

### **Example**

```ts
let result: undefined = undefined;
```

---

# 🎁 Bonus → Type Aliases Example

```ts
type User = {
  name: string;
  age: number;
};
```

---

# 🎁 Bonus → Functions with Types Example

```ts
function add(a: number, b: number): number {
  return a + b;
}
```
