
---

# ✅ **50 TypeScript Interview Questions + Answers (Only this Topic)**

Covers:
✔ What is TypeScript
✔ Why TypeScript
✔ JS vs TS
✔ TS Basic Types
✔ number, string, array, tuple, enum, any, unknown, void, null, undefined

---

# 🧠 **1–10: TypeScript Basics**

### **1. What is TypeScript?**

TypeScript is a superset of JavaScript that adds static typing and compiles to JavaScript.

### **2. Who created TypeScript?**

Microsoft.

### **3. Why do we need TypeScript?**

To detect errors during development and improve code maintainability.

### **4. Does TypeScript run in the browser?**

No. TS must compile to JS first.

### **5. What is static typing?**

Variables have fixed types known at compile time.

### **6. What is dynamic typing?**

Types are determined at runtime.

### **7. Is TypeScript strongly typed?**

Yes—TS is strongly typed but also flexible.

### **8. What is the main benefit of TS over JS?**

Early error detection during compilation.

### **9. Does TypeScript support OOP?**

Yes—classes, interfaces, inheritance.

### **10. How do you compile TypeScript?**

Using the command:

```bash
tsc file.ts
```

---

# 🧠 **11–18: JavaScript vs TypeScript**

### **11. JavaScript type system?**

Dynamic, weakly typed.

### **12. TypeScript type system?**

Static, strongly typed.

### **13. Does JavaScript support interfaces?**

No.

### **14. Does TypeScript support interfaces?**

Yes.

### **15. JS vs TS error detection?**

JS → runtime
TS → compile-time

### **16. Does TS guarantee bug-free code?**

No, but reduces bugs significantly.

### **17. Can TypeScript use all JavaScript features?**

Yes—TS is a superset.

### **18. Is TypeScript optional?**

Yes—types are optional.

---

# 🧠 **19–25: number, string, boolean**

### **19. What is `number` type?**

All numeric values including float.

### **20. Example of number type:**

```ts
let age: number = 25;
```

### **21. What is string type?**

Represents text.

### **22. Example of string:**

```ts
let name: string = "Aminul";
```

### **23. What is boolean type?**

true or false values.

### **24. Example:**

```ts
let isActive: boolean = true;
```

### **25. Are number and string primitive types?**

Yes.

---

# 🧠 **26–30: array + tuple**

### **26. How to declare an array of numbers?**

```ts
let scores: number[] = [10, 20];
```

### **27. Alternative array syntax?**

```ts
let scores: Array<number>;
```

### **28. What is a tuple?**

Fixed-length & fixed-type array.

### **29. Tuple example:**

```ts
let user: [string, number] = ["John", 20];
```

### **30. Can tuple order change?**

No—order & types matter.

---

# 🧠 **31–35: enum**

### **31. What is an enum?**

A group of named constant values.

### **32. Enum example:**

```ts
enum Role { ADMIN, USER }
```

### **33. How are enums indexed by default?**

Starting from 0.

### **34. Can enums have custom values?**

Yes:

```ts
enum Status { SUCCESS = 200, ERROR = 404 }
```

### **35. Why use enums?**

Readable and maintainable constant values.

---

# 🧠 **36–40: any + unknown**

### **36. What is `any` type?**

Disables type checking.

### **37. When to use any?**

When unsure about the value type (not recommended).

### **38. Example of any:**

```ts
let data: any = "hello";
```

### **39. What is `unknown` type?**

Safer version of any; requires type checking.

### **40. Example of unknown:**

```ts
let value: unknown = "Hi";
```

---

# 🧠 **41–45: void, null, undefined**

### **41. What is `void` type?**

Functions that return nothing.

### **42. Example:**

```ts
function log(): void {
  console.log("hi");
}
```

### **43. What is null type?**

Represents intentional empty value.

### **44. What is undefined type?**

Variable declared but not assigned.

### **45. Example:**

```ts
let a: undefined = undefined;
let b: null = null;
```

---

# 🧠 **46–50: Mixed Questions on Types**

### **46. Can you assign null to number?**

No (unless `strictNullChecks` is false).

### **47. Can void be used for variables?**

No—used mainly for functions.

### **48. What happens if type mismatches?**

TypeScript throws a compile-time error.

### **49. Is TypeScript optional in a variable?**

Yes:

```ts
let x = 10; // type inferred
```

### **50. Why are strict types important?**

They prevent bugs, improve maintainability, and increase code quality.

---

# ✅ **Array vs Tuple in TypeScript — Complete Explanation**

---

# 🔵 **1. What is an Array in TypeScript?**

### **📌 Theory**

An **array** in TypeScript is a data structure that stores **multiple values of the same type**.
Though JavaScript arrays are totally dynamic, TypeScript allows you to **define the type of elements** inside an array.

### **📌 Syntax**

```ts
let arr: number[] = [1, 2, 3];
let names: string[] = ["Aminul", "Roy"];
```

### **📌 Example**

```ts
let scores: number[] = [80, 90, 70];
scores.push(100);
```

### **📌 Key Points**

* Stores **unlimited values**
* All values have the **same data type**
* Length is **not fixed**
* Order does **not enforce types** (every value must be same type generally)

---

# 🔵 **2. What is a Tuple in TypeScript?**

### **📌 Theory**

A **tuple** is a data structure used to store a **fixed number of elements**,
where **each element can have a different type**.

### **📌 Syntax**

```ts
let user: [string, number];
```

### **📌 Example**

```ts
let employee: [string, number, boolean] = ["Aminul", 101, true];
```

### **📌 Key Points**

* Stores a **fixed number** of items
* Every position has a **specific type**
* Enforces **order + type** strictly
* Useful for structured data (like returning two values)

---

# 🟢 **3. Difference Between Array and Tuple (Fast Table)**

| Feature    | Array                       | Tuple                            |
| ---------- | --------------------------- | -------------------------------- |
| Data Type  | Usually same type           | Different types allowed          |
| Length     | Dynamic                     | Fixed length                     |
| Type Order | Not enforced                | Enforced                         |
| Use Case   | Collection of similar items | Structured data with mixed types |
| Access     | Any index allowed           | Specific types at specific index |
| Example    | `number[]`                  | `[string, number]`               |

---

# 🟣 **4. Syntax Comparison**

### **Array**

```ts
let colors: string[] = ["red", "green", "blue"];
```

### **Tuple**

```ts
let person: [string, number] = ["Aminul", 22];
```

If you try wrong order → error:

```ts
let person: [string, number] = [22, "Aminul"]; 
// ❌ Error: Type 'number' is not assignable to type 'string'
```

---

# 🔵 **5. Real-Life Examples**

### **Array Example**

```ts
let productNames: string[] = ["Laptop", "Mouse", "Keyboard"];
```

### **Tuple Example**

Represent a product with 3 different data types:

```ts
let product: [number, string, number] = [101, "Laptop", 50000];
```

---

# 🔥 **6. Why Use Tuple?**

* When order + type matters
* For returning multiple values from functions

### Example:

```ts
function getUser(): [string, number] {
  return ["Aminul", 20];
}

const [name, age] = getUser();
```

---

# 🧠 **7. Interview-Level Explanation**

### **Q: What is the difference between Array and Tuple in TypeScript?**

**Answer:**

* An **array** stores multiple values of the same type and has dynamic length.
* A **tuple** has a fixed length and each position has a predefined type.
* Tuples are useful for grouping mixed data types and ordered parameters.

---

# 🧠 **8. Example Showing Type Enforcement**

### Array → All same type:

```ts
let arr: number[] = [1, 2, "3"]; 
// ❌ Error
```

### Tuple → Mixed allowed but in correct order:

```ts
let t: [string, boolean, number] = ["Aminul", true, 25];
```

Wrong order:

```ts
let t: [string, boolean, number] = [true, "Aminul", 25];
// ❌ Error
```

---

# 🚀 Final Summary

| Feature   | Array              | Tuple               |
| --------- | ------------------ | ------------------- |
| Stores    | Same-type elements | Mixed-type elements |
| Length    | Dynamic            | Fixed               |
| Order     | Not important      | Important           |
| Ideal For | Lists              | Structured records  |

---

