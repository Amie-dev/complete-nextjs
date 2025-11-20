
# ✅ **1) TypeScript with React Hooks (useState, useRef, useReducer)**

# ✅ **2) TypeScript with React Components (Props Patterns, Generics, HOCs)**

# ✅ **3) Advanced TypeScript Utility Types (Partial, Pick, Omit, Record, etc.)**

---

---

# 🚀 **1) TypeScript With React Hooks**

---

# 🔹 **useState Typing**

## **1. Basic typing**

```ts
const [count, setCount] = useState<number>(0);
```

## **2. With union types**

```ts
const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
```

## **3. With objects**

```ts
type User = { name: string; age: number };

const [user, setUser] = useState<User>({
  name: "Aminul",
  age: 21,
});
```

## **4. With null or object**

```ts
type User = { name: string; age: number };

const [user, setUser] = useState<User | null>(null);
```

---

# 🔹 **useRef Typing**

## **1. DOM element ref**

```ts
const inputRef = useRef<HTMLInputElement>(null);
```

## **2. Mutable value**

```ts
const id = useRef<number>(0);
id.current = 10;
```

---

# 🔹 **useReducer Typing**

## Full Example:

```ts
type State = {
  count: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset": return { count: 0 };
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

---

# 🚀 **2) TypeScript With React Components**

---

# 🔹 **Typing Props (Basic)**

```ts
type Props = {
  title: string;
  age: number;
};

const Card = ({ title, age }: Props) => {
  return <h1>{title} - {age}</h1>;
};
```

---

# 🔹 **Typing Optional Props**

```ts
type Props = {
  title: string;
  description?: string;
};
```

---

# 🔹 **Typing Children**

```ts
type Props = {
  children: React.ReactNode;
};
```

---

# 🔹 **Typing Event Handlers**

```ts
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
```

---

# 🔹 **Typing Input Change**

```ts
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
```

---

# 🔹 **Typing Component With Generics**

```ts
type BoxProps<T> = {
  value: T;
};

function Box<T>({ value }: BoxProps<T>) {
  return <div>{value}</div>;
}
```

---

# 🔹 **Typing HOCs (Higher Order Components)**

```ts
function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    return <Component {...props} />;
  };
}
```

---

# 🔹 **Typing ForwardRef**

```ts
const Input = React.forwardRef<HTMLInputElement, { label: string }>(
  (props, ref) => <input ref={ref} />
);
```

---

# 🔹 **Typing Memo Component**

```ts
export default React.memo(MyComponent);
```

---

---

# 🚀 **3) TypeScript Utility Types (Advanced)**

These are used everywhere in React projects.

---

# 🔥 **1. Partial<T>**

Makes all properties *optional*.

```ts
type User = { name: string; age: number };

const obj: Partial<User> = {
  name: "Aminul",
};
```

---

# 🔥 **2. Required<T>**

Makes all properties *required*.

```ts
type User = { name?: string; age?: number };

const u: Required<User> = {
  name: "Hello",
  age: 21,
};
```

---

# 🔥 **3. Readonly<T>**

Prevents modification.

```ts
type User = { name: string };

const u: Readonly<User> = {
  name: "Aminul",
};

// u.name = "test"; ❌ Error
```

---

# 🔥 **4. Pick<T, K>**

Pick specific keys.

```ts
type User = { name: string; age: number; id: string };

type UserName = Pick<User, "name">;
```

---

# 🔥 **5. Omit<T, K>**

Remove specific keys.

```ts
type UserWithoutAge = Omit<User, "age">;
```

---

# 🔥 **6. Record<K, T>**

Build a type where keys are of type K.

```ts
type Scores = Record<string, number>;

const score: Scores = {
  math: 90,
  english: 80,
};
```

---

# 🔥 **7. Exclude<T, U>**

Remove union members.

```ts
type A = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

---

# 🔥 **8. Extract<T, U>**

Extract matching types.

```ts
type A = Extract<"a" | "b" | "c", "c">; // "c"
```

---

# 🔥 **9. NonNullable<T>**

Remove `null` and `undefined`.

```ts
type A = NonNullable<string | null | undefined>;
```

---

# 🔥 **10. ReturnType<T>**

Get function return type.

```ts
function sum() {
  return 10;
}

type SumReturn = ReturnType<typeof sum>; // number
```

---

---