
---

# ✅ **Array vs Tuple – Interview Questions (with Answers)**

---

## 🔹 **1. What is the main difference between an array and a tuple in TypeScript?**

**Answer:**

* **Array:** collection of values of the **same type**, size is **not fixed**.
* **Tuple:** collection of values of **different types**, size is **fixed**.

---

## 🔹 **2. When should you use a tuple instead of an array?**

**Answer:**
Use a tuple when:

* The number of items is fixed
* Types of each index matter
* You are representing structured data
  Example → coordinate: `[number, number]`, API response mapping, etc.

---

## 🔹 **3. Can tuples have optional elements?**

**Answer:**
Yes. Example:

```ts
type User = [number, string?, boolean?];
```

---

## 🔹 **4. Can arrays have fixed length like tuples?**

**Answer:**
Not naturally. Arrays are dynamic; only tuples enforce length.

---

## 🔹 **5. Can tuple items be accessed by index?**

**Answer:**
Yes, and TypeScript knows the type at each index.

```ts
const user: [number, string] = [1, "Aminul"];
// user[0] → number
// user[1] → string
```

---

## 🔹 **6. What happens if a tuple receives extra values?**

**Answer:**
TypeScript throws an error unless rest elements are defined.

```ts
const t: [number, string] = [1, "abc", true];  // ❌ Error
```

---

## 🔹 **7. Can tuples use rest operator?**

**Answer:**
Yes.

```ts
type Names = [string, ...string[]];
```

---

## 🔹 **8. Can tuples be readonly?**

**Answer:**
Yes.

```ts
const pos: readonly [number, number] = [10, 20];
```

---

## 🔹 **9. Does JavaScript support tuples?**

**Answer:**
No.
Tuples exist **only in TypeScript**; they compile to normal JS arrays.

---

## 🔹 **10. Example: When would you choose tuple over object?**

**Answer:**
Use tuple for **simple structured data** where field names are not necessary.

Example:

```ts
const rgb: [number, number, number] = [255, 100, 20];
```

---

# 🧠 **Tricky Questions**

---

## 🔹 **11. What is wrong with this code?**

```ts
let t: [number, number] = [1, 2];
t.push(3);
```

**Answer:**
TS **allows** push at compile time (design flaw),
but the tuple loses its fixed-length property.

---

## 🔹 **12. Can you name a real use-case of tuples in frameworks?**

**Answer:**
Yes → **React's useState** returns a tuple:

```ts
const [value, setValue] = useState(0);
```

---

## 🔹 **13. Are tuples ordered?**

**Answer:**
Yes — order matters because each index has a type.

---

## 🔹 **14. Does TypeScript infer tuples automatically?**

**Answer:**
Only if you use **as const**:

```ts
const t = [10, "hello"] as const;
// inferred: readonly [10, "hello"]
```

---

# 🎯 **MCQ Questions**

---

### **15. What is the type of this variable?**

```ts
const t = [1, "hello"];
```

A. number[]
B. (number | string)[]
C. [number, string]
D. any[]

**Correct Answer: B**

---

### **16. Which best describes a tuple?**

A. Fixed size, fixed type per index
B. Dynamic size, similar types
C. Only numbers allowed
D. Only strings allowed

**Correct Answer: A**

---

### **17. What will this code output?**

```ts
type T = [number, ...string[]];
```

A. Only numbers allowed
B. Only strings allowed
C. One number followed by zero or more strings
D. Error

**Correct Answer: C**

---

# 🧩 **Coding Challenges**

---

### **18. Create a tuple type for representing location: city, state, pincode**

```ts
type Location = [string, string, number];
```

---

### **19. Write a function that takes a tuple `[number, string]`**

```ts
function log(user: [number, string]) {
  console.log(`ID: ${user[0]}, Name: ${user[1]}`);
}
```

---

### **20. Convert tuple to object**

```ts
const tuple: [string, number] = ["age", 20];
const obj = { [tuple[0]]: tuple[1] };
```

---
