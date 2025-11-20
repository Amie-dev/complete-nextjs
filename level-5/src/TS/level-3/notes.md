
---

# ✅ **Generics in TypeScript – Theory + Explanation + Output**

---

# **1. What are Generics?**

Generics allow you to create **reusable, type-safe** components in TypeScript.

✔ Makes functions flexible
✔ Allows type to be passed as a parameter
✔ Avoids using *any*
✔ Ensures strong type-checking

---

# **2. Your Generic Function Example**

### **Code:**

```ts
function hello<T>(a: T, b: T) {
    console.log(a, b);
}

hello(21, 34);
hello<number>(21, 34);
// hello(21, "ss"); // ❌ Error: type mismatch
```

### **Explanation:**

* `<T>` is a **type variable**.
* `hello<T>` means the function accepts values of type `T`.
* If the first argument is a number, the second must also be a number.
* Generic enforces **same type for both parameters**.

### Why does this throw error?

```ts
hello(21, "ss"); 
```

✔ Because TypeScript infers `T` from first argument (`T = number`)
❌ A string is not allowed.

---

# **3. Generic Interface Example**

### **Code:**

```ts
interface User<T> {
    name: string;
    age: T;
}

let user: User<number> = {
    name: "AN",
    age: 21
};
```

### **Explanation:**

* `User<T>` is a generic interface.
* You can pass the type of `age` dynamically.
* Here: `User<number>` ⇒ age must be a number.

---

# **4. More Examples of Generic Interfaces**

### **Number age**

```ts
let u1: User<number> = { name: "Aminul", age: 21 };
```

### **String age**

```ts
let u2: User<string> = { name: "Aminul", age: "Twenty" };
```

---

# **5. Why Use Generics?**

| Feature         | Benefit                                    |
| --------------- | ------------------------------------------ |
| Reusability     | One function/interface works for all types |
| Type safety     | No runtime errors due to wrong types       |
| Maintainability | Cleaner & scalable code                    |
| Flexible        | Works with functions, classes, interfaces  |

---

# **6. A Few More Generic Examples**

### **Generic Array**

```ts
let numbers: Array<number> = [1, 2, 3];
let names: Array<string> = ["a", "b", "c"];
```

### **Generic Arrow Function**

```ts
const identity = <T>(value: T): T => value;

identity<number>(10);
identity<string>("hello");
```

### **Generic with Two Types**

```ts
function pair<A, B>(x: A, y: B) {
    return [x, y];
}

pair<string, number>("Age", 21);
```

---

