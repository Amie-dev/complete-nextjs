
---

# 🚀 **TypeScript With React — All Important Types Explained**

---

# #️⃣ **1. ReactNode**

### ✅ **What is it?**

`ReactNode` is the **widest** type that represents anything React can render.

This includes:

* string
* number
* boolean (ignored)
* null
* undefined
* JSX elements
* React elements
* Fragments
* Portals
* Arrays of nodes

### Example:

```ts
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
```

### When to use:

✔ For `children` props
✔ When you want to allow any renderable React content

---

# #️⃣ **2. ReactElement**

### ✅ **What is it?**

A `ReactElement` is the **actual object returned by JSX** after transpilation.

```tsx
const el = <div>Hello</div>; // this is a ReactElement
```

### Example:

```ts
function Page(): React.ReactElement {
  return <h1>Hello</h1>;
}
```

### When to use:

✔ When the component **must return a JSX element**
❌ Not used for children because ReactNode is broader.

---

# #️⃣ **3. JSX.Element**

### ❗ Important

`JSX.Element` ≈ `ReactElement<any, any>`

It is almost the same as `ReactElement`.

### Example:

```ts
const Component = (): JSX.Element => {
  return <div>Hello</div>;
};
```

### Difference:

* `JSX.Element` → returned by JSX
* `ReactElement` → more generic, includes type info and props info

Both are acceptable for component return types.

---

# #️⃣ **4. ReactChild**

### This is a **VERY NARROW** type.

It only includes:

* ReactElement
* string
* number

### Example:

```ts
type Props = {
  text: React.ReactChild;
};
```

### When to use:

Rarely.
Usually, we use `ReactNode` instead.

### Why?

Because ReactChild does NOT allow:

❌ arrays
❌ fragments
❌ portals
❌ null
❌ undefined

---

# #️⃣ **5. ReactFragment**

Represents a fragment:

```tsx
<>
  <p>One</p>
  <p>Two</p>
</>
```

### Type:

```ts
React.ReactFragment;
```

### Example:

```ts
const f: React.ReactFragment = <>
  <h1></h1>
</>;
```

You usually don't need this type directly.

---

# #️⃣ **6. ReactPortal**

A portal created via:

```tsx
ReactDOM.createPortal(children, domNode)
```

### Type:

```ts
import { ReactPortal } from "react";
```

### Example:

```ts
const portal: ReactPortal = ReactDOM.createPortal(
  <div>Modal</div>,
  document.body
);
```

---

# #️⃣ **7. ComponentType<P>**

Represents **ANY** type of React component:

* Function component
* Class component

### Example:

```ts
import { ComponentType } from "react";

function Wrapper<T>(Comp: ComponentType<T>) {
  return (props: T) => <Comp {...props} />;
}
```

### When to use:

✔ When accepting a React component as a prop
✔ When writing Higher-Order Components

---

# #️⃣ **8. React.FC<P>**

(**FunctionComponent**)

### ❗Note

In modern React (2024+), `React.FC` is **not recommended**, but still allowed.

### What it does:

✔ Applies type to props
✔ Automatically adds `children?: ReactNode`
✔ Ensures function returns JSX

### Example:

```ts
import { FC } from "react";

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};
```

### Pros

* Easy to use
* Auto children typing

### Cons

* Adds unwanted implicit `children`
* Narrow return type

---

# 🆚 **React.FC vs ComponentType vs ReactNode — Quick Table**

| Type                 | Use Case                                   |
| -------------------- | ------------------------------------------ |
| **ReactNode**        | Anything React can render                  |
| **ReactElement**     | A specific JSX-return object               |
| **JSX.Element**      | Component return type                      |
| **ReactChild**       | Only string, number, JSX                   |
| **ComponentType<P>** | Accepting any React component              |
| **React.FC<P>**      | Typing function components (auto children) |
| **ReactPortal**      | Portal output                              |
| **ReactFragment**    | Fragment type                              |

---

# 📘 Examples Using All Types

### Children as ReactNode

```ts
type BoxProps = {
  children: React.ReactNode;
};
```

### Component return type

```ts
function Page(): JSX.Element {
  return <div>Home Page</div>;
}
```

### HOC accepting component

```ts
function withAuth<T>(Comp: React.ComponentType<T>) {
  return (props: T) => {
    return <Comp {...props} />;
  };
}
```

### Using React.FC

```ts
const Card: React.FC<{title: string}> = ({ title }) => {
  return <h2>{title}</h2>;
};
```

---
