
---

# 🚀 **1. Interfaces vs Types — Full Deep Comparison**

Both `type` and `interface` are used to define shapes of objects.
But they have important differences.

---

## ▶ **1.1 Syntax Examples**

### **Interface**

```ts
interface User {
  name: string;
  age: number;
}
```

### **Type Alias**

```ts
type User = {
  name: string;
  age: number;
}
```

---

## ▶ **1.2 Interface Features**

### ✔ Can be extended (inheritance)

```ts
interface A {
  x: number;
}

interface B extends A {
  y: number;
}
```

### ✔ Supports Declaration Merging

Two interfaces with same name merge:

```ts
interface Car {
  model: string;
}

interface Car {
  price: number;
}

let c: Car = {
  model: "BMW",
  price: 5000000
};
```

---

## ▶ **1.3 Type Features**

### ✔ Can create unions

```ts
type Status = "success" | "error" | "pending";
```

### ✔ Can create intersection

```ts
type AB = A & B;
```

### ✔ Can represent primitive types

```ts
type ID = string | number;
```

### ✔ Can define tuples

```ts
type UserTuple = [string, number];
```

---

## ▶ **1.4 Full Comparison Table**

| Feature             | Interface    | Type Alias         |
| ------------------- | ------------ | ------------------ |
| Object definition   | ✔ Yes        | ✔ Yes              |
| Union Types         | ❌ No         | ✔ Yes              |
| Intersection Types  | Limited      | ✔ Powerful         |
| Declaration merging | ✔ Yes        | ❌ No               |
| Extending           | ✔ extends    | ✔ & (intersection) |
| Tuples              | ❌ No         | ✔ Yes              |
| Primitives          | ❌ No         | ✔ Yes              |
| Preferred for       | OOP, classes | Advanced typing    |

---

# 🚀 **2. Generics in TypeScript**

Generics allow you to create **reusable, type-safe components**.

---

## ▶ **2.1 Basic Generic Function**

```ts
function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("Aminul");
```

---

## ▶ **2.2 Generic Array**

```ts
let items: Array<number> = [1, 2, 3];
```

Same as:

```ts
let items: number[] = [1, 2, 3];
```

---

## ▶ **2.3 Generic Interface**

```ts
interface ApiResponse<T> {
  data: T;
  status: number;
}

let res: ApiResponse<string> = {
  data: "OK",
  status: 200
};
```

---

## ▶ **2.4 Multiple Generics**

```ts
function pair<A, B>(a: A, b: B) {
  return { a, b };
}

pair<string, number>("age", 20);
```

---

## ▶ **2.5 Generic Constraints**

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");
getLength([1, 2, 3]);
```

---

# 🚀 **3. Classes + OOP in TypeScript**

---

## ▶ **3.1 Basic Class**

```ts
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
```

---

## ▶ **3.2 Access Modifiers**

| Modifier    | Meaning                            |
| ----------- | ---------------------------------- |
| `public`    | accessible everywhere              |
| `private`   | only inside class                  |
| `protected` | inside class + subclasses          |
| `readonly`  | cannot change after initialization |

---

### **Example:**

```ts
class Person {
  private salary = 50000;
  protected age = 20;
  public name = "Aminul";
  readonly id = 101;
}
```

---

## ▶ **3.3 Inheritance (extends)**

```ts
class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  model = "BMW";
}

let c = new Car();
c.start();  // inherited method
```

---

## ▶ **3.4 Implement Interface**

```ts
interface Driveable {
  drive(): void;
}

class Bike implements Driveable {
  drive() {
    console.log("Bike driving...");
  }
}
```

---

# 🚀 **4. Advanced Types in TypeScript**

---

# 🔵 **4.1 `unknown`**

Safer version of `any`.

```ts
let data: unknown = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

# 🔵 **4.2 `never`**

Function that **never returns**.

Example 1: errors

```ts
function error(msg: string): never {
  throw new Error(msg);
}
```

Example 2: infinite loop

```ts
function loop(): never {
  while (true) {}
}
```

---

# 🔵 **4.3 Readonly Array**

```ts
let nums: readonly number[] = [1, 2, 3];

nums.push(4); // ❌ Error
```

---

# 🔵 **4.4 `type narrowing`**

Identifying the type at runtime.

```ts
function display(x: number | string) {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  }
}
```

---

# 🔵 **4.5 Type Guards**

### **typeof guard**

```ts
if (typeof x === "string") { ... }
```

### **instanceof guard**

```ts
if (obj instanceof Car) { ... }
```

### **in guard**

```ts
if ("price" in data) { ... }
```

---

# 🔵 **4.6 `keyof` Operator**

```ts
type User = { name: string; age: number }
type UserKeys = keyof User; 
// "name" | "age"
```

---

# 🔵 **4.7 Indexed Access Types**

```ts
type User = { name: string; age: number }
type UserNameType = User["name"]; // string
```

---

# 🔵 **4.8 Mapped Types**

```ts
type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};
```

---

