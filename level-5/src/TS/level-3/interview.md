
---

# ✅ **Top 30 Interview Questions on TypeScript Generics (With Answers)**

---

## **1. What are Generics in TypeScript?**

Generics allow you to write **reusable and type-safe** components by passing types as parameters.

---

## **2. Why do we use Generics?**

* Reusability
* Type safety
* Avoid `any`
* Cleaner APIs
* Better IntelliSense and maintainability

---

## **3. Write a generic function in TypeScript.**

```ts
function hello<T>(a: T, b: T) {
    return [a, b];
}
```

---

## **4. How does TypeScript infer generic types?**

If you call:

```ts
hello(10, 20);
```

TS infers `T = number`.

---

## **5. What happens if types mismatch in generics?**

```ts
hello(10, "abc"); // ❌ Error
```

Both arguments must follow the same inferred type.

---

## **6. Write a generic interface.**

```ts
interface User<T> {
    name: string;
    age: T;
}
```

---

## **7. Can generic interfaces accept different types?**

Yes:

```ts
let u1: User<number>;
let u2: User<string>;
```

---

## **8. What is the syntax for generic constraints?**

```ts
function print<T extends string | number>(value: T) {}
```

---

## **9. What is a default generic type?**

```ts
interface Box<T = string> {
    value: T;
}
```

---

## **10. Can generics be used with classes?**

Yes:

```ts
class Store<T> {
    item: T;
}
```

---

## **11. What is the difference between `any` and generics?**

| any               | generic                   |
| ----------------- | ------------------------- |
| Loses type safety | Maintains type safety     |
| Accepts any value | Restricted to passed type |

---

## **12. Can generics be used with arrow functions?**

Yes:

```ts
const identity = <T>(value: T): T => value;
```

---

## **13. What is a generic constraint using `extends`?**

Used to limit allowed types.

---

## **14. Example of generic constraint.**

```ts
function logLength<T extends { length: number }>(data: T) {
    console.log(data.length);
}
```

---

## **15. Can you use multiple generic parameters?**

Yes:

```ts
function pair<A, B>(x: A, y: B) {}
```

---

## **16. Write a generic type alias.**

```ts
type Response<T> = {
    status: string;
    data: T;
};
```

---

## **17. How do generics improve code maintainability?**

Because the same function/class supports multiple types.

---

## **18. How do generics help reduce duplicate code?**

You write one function instead of multiple versions for different types.

---

## **19. Can generics be nested?**

Yes:

```ts
interface APIResponse<T> {
    result: Promise<T>;
}
```

---

## **20. What is a generic array syntax?**

```ts
Array<number>
number[]
```

---

## **21. Can generics restrict return types?**

Yes:

```ts
function wrap<T>(value: T): T {
    return value;
}
```

---

## **22. Generic vs Overloading?**

Generics handle type flexibility better and avoid multiple overload definitions.

---

## **23. Can interfaces extend generics?**

Yes:

```ts
interface A<T> {}
interface B<U> extends A<U> {}
```

---

## **24. Can we create generic constraints using interface?**

Yes.

---

## **25. Write a generic stack implementation.**

```ts
class Stack<T> {
    items: T[] = [];
    push(item: T) { this.items.push(item); }
}
```

---

## **26. Can generics be optional?**

Yes using default types:

```ts
interface Box<T = number> {}
```

---

## **27. What is the purpose of `<T>` syntax?**

It makes type a parameter like a variable.

---

## **28. Can you infer generics from return values?**

Yes:

```ts
const result = wrap(100); // infer number
```

---

## **29. What is a generic utility type?**

Example:

```ts
type Partial<T> = { [K in keyof T]?: T[K]; };
```

---

## **30. When should you avoid generics?**

* When a type will always be the same
* When values are not type-dependent
* When it reduces code readability

---
