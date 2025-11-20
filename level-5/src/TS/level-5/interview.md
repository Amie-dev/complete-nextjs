
---

# ✅ **40 React + TypeScript Interview Questions & Answers**

---

# 🔥 **1. What is ReactNode?**

`ReactNode` represents **anything React can render**: JSX, string, number, array, null, undefined, fragments, portals.

---

# 🔥 **2. When do we use ReactNode?**

Used for `children` props because it supports all renderable types.

---

# 🔥 **3. What is ReactElement?**

The object returned by calling `React.createElement()` internally via JSX.

---

# 🔥 **4. Difference between ReactNode and ReactElement?**

| ReactNode                          | ReactElement          |
| ---------------------------------- | --------------------- |
| Wider type                         | Specific JSX return   |
| Can be string, number, null, array | Must be a JSX element |
| Used for children                  | Used for return type  |

---

# 🔥 **5. What is JSX.Element?**

The type returned by JSX—almost identical to `ReactElement`.

---

# 🔥 **6. Difference between JSX.Element and ReactElement?**

`JSX.Element` is the standard return type of JSX.
`ReactElement` is a more generic type that supports metadata like props and type.

---

# 🔥 **7. What is ReactChild?**

A very **narrow** type: only `string | number | ReactElement`.

---

# 🔥 **8. Why is ReactChild not recommended?**

It does NOT support:

* arrays
* fragments
* portals
* null
* undefined

`ReactNode` is preferred.

---

# 🔥 **9. What is ReactFragment?**

Represents a React fragment (`<> ... </>`).

---

# 🔥 **10. Example of ReactFragment?**

```tsx
const frag: React.ReactFragment = (
  <>
    <p>Hello</p>
  </>
);
```

---

# 🔥 **11. What is ReactPortal?**

Type for elements rendered outside the parent DOM tree using:

```ts
ReactDOM.createPortal(child, container)
```

---

# 🔥 **12. Example of using ReactPortal?**

```tsx
const modal = ReactDOM.createPortal(<Modal />, document.body);
```

---

# 🔥 **13. What is ComponentType<P>?**

Represents **any** React component: function or class.

---

# 🔥 **14. When to use ComponentType<P>?**

Used in Higher-Order Components (HOCs).

---

# 🔥 **15. Example of ComponentType<P>?**

```ts
function withAuth<T>(Comp: ComponentType<T>) {
  return (props: T) => <Comp {...props} />;
}
```

---

# 🔥 **16. What is React.FC<P>?**

A function component type that automatically adds:

```ts
children?: ReactNode
```

---

# 🔥 **17. Why is React.FC discouraged sometimes?**

* Implicit children
* Poor type inference for default props
* Narrower return type

---

# 🔥 **18. Should you use React.FC?**

Use only when you **want children automatically**.
Otherwise type manually.

---

# 🔥 **19. How to type children without React.FC?**

```ts
type Props = { children: React.ReactNode };
const Box = ({ children }: Props) => <div>{children}</div>;
```

---

# 🔥 **20. How to type component props with interface?**

```ts
interface Props { title: string }
const Header = ({ title }: Props) => <h1>{title}</h1>;
```

---

# 🔥 **21. How do you type default props?**

```ts
type Props = { title?: string };
const Header = ({ title = "Default" }: Props) => <h1>{title}</h1>;
```

---

# 🔥 **22. How to type component returning null?**

```ts
function Comp(): React.ReactNode {
  return null;
}
```

---

# 🔥 **23. How to type an array of children?**

ReactNode already supports arrays.

---

# 🔥 **24. What is the best type for "children"?**

Always:

```ts
children: React.ReactNode
```

---

# 🔥 **25. How to type an event?**

```ts
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
```

---

# 🔥 **26. How to type input change event?**

```ts
const handle = (e: React.ChangeEvent<HTMLInputElement>) => {};
```

---

# 🔥 **27. How to type a component that accepts a React element?**

```ts
el: React.ReactElement;
```

---

# 🔥 **28. How to type a component that accepts a component?**

```ts
comp: React.ComponentType<any>;
```

---

# 🔥 **29. How to type component props using generics?**

```ts
type Box<T> = { value: T };
```

---

# 🔥 **30. How to type useState?**

```ts
const [count, setCount] = useState<number>(0);
```

---

# 🔥 **31. How to type async component?**

```ts
const Comp = async (): Promise<JSX.Element> => {
  return <div>Hello</div>;
};
```

---

# 🔥 **32. How to type React ref?**

```ts
const divRef = useRef<HTMLDivElement>(null);
```

---

# 🔥 **33. How to type children function (render props)?**

```ts
children: (value: number) => React.ReactNode;
```

---

# 🔥 **34. How to type context value?**

```ts
const MyContext = createContext<number | null>(null);
```

---

# 🔥 **35. How to type memo components?**

```ts
export default memo(Component);
```

---

# 🔥 **36. How to type forwardRef?**

```ts
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {});
```

---

# 🔥 **37. How to type custom hooks?**

```ts
function useCustom(): string {
  return "hello";
}
```

---

# 🔥 **38. How to type map over list?**

```ts
items.map((item: string) => <li>{item}</li>);
```

---

# 🔥 **39. Difference between element vs component?**

* **Element** → JSX object (`<div />`)
* **Component** → Function or class returning element

---

# 🔥 **40. What type should a React component return?**

Prefer:

```ts
JSX.Element
```

Or:

```ts
ReactElement
```

Or (flexible):

```ts
ReactNode
```

---
