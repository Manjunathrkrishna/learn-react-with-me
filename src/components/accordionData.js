const accordionData = [
  {
    title: "📌 JSX in React",
    content: `
JSX stands for JavaScript XML. It allows writing HTML-like syntax directly in JavaScript files.
JSX makes it easier to visualize UI structure. Under the hood, it's compiled to React.createElement.

Example:
function Hello() {
  const name = "Manju";
  return <h1>Hello, {name}!</h1>;
}
    `
  },
  {
    title: "🔗 Props in React",
    content: `
Props are used to pass data from parent to child components.
They are read-only and help make components reusable.

Example:
function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

<Welcome name="Manjunath" />
    `
  },
  {
    title: "📦 State in React",
    content: `
State is data that can change over time. It is local to the component and controlled using useState().

Example:
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>+</button>
    `
  },
  {
    title: "⚛️ Functional vs Class Components",
    content: `
Functional components are functions that return JSX.
Class components use ES6 class syntax and can manage lifecycle methods.

Functional:
function Greet() { return <h1>Hello</h1>; }

Class:
class Greet extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
    `
  },
  {
    title: "⏱ Lifecycle Methods",
    content: `
Lifecycle methods run at specific stages in class components.
useEffect is their replacement in functional components.

Example:
useEffect(() => {
  console.log("Mounted");
  return () => console.log("Cleanup");
}, []);
    `
  },
  {
    title: "🧠 useEffect Hook",
    content: `
useEffect lets you perform side effects in functional components.
Example uses: data fetching, timers, event listeners.

Example:
useEffect(() => {
  fetch('/api/data').then().catch();
}, []);
    `
  },
  {
    title: "🌀 useState Hook",
    content: `
useState is a Hook that lets you add state to functional components.

Example:
const [text, setText] = useState("");
<input value={text} onChange={(e) => setText(e.target.value)} />
    `
  },
  {
    title: "📡 Fetch API",
    content: `
The fetch API is used to make HTTP requests from the browser.

Example:
fetch('https://api.example.com')
  .then(res => res.json())
  .then(data => console.log(data));
    `
  },
  {
    title: "🚦 React Router – Page Navigation",
    content: (
      <>
        <h4>What is React Router?</h4>
        <p>React Router is a library that lets you handle navigation in a React SPA (Single Page App).</p>
  
        <h4>📦 Installation</h4>
        <pre><code>npm install react-router-dom</code></pre>
  
        <h4>🔧 Setup</h4>
        <pre><code>{`import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  
  function App() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }`}</code></pre>
  
        <p><strong>🧠 Pro Tip:</strong> Use <code>Routes</code> instead of <code>Switch</code> in React Router v6.</p>
      </>
    )
  },
  {
    title: "🔀 Conditional Rendering in React",
    content: (
      <>
        <h4>What is Conditional Rendering?</h4>
        <p>In React, you can show different UI based on conditions using `if`, `ternary`, or `&&`.</p>
  
        <h4>✅ Example: Logged in vs Logged out</h4>
        <pre><code>{`const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please login.</p>}
    </div>
  );`}</code></pre>
  
        <h4>⚡ Alternate: && Operator</h4>
        <pre><code>{`const hasMessages = true;
  {hasMessages && <p>You have new messages!</p>}`}</code></pre>
  
        <h4>🧠 Tip:</h4>
        <p>
          React skips rendering if the condition is false. Use ternary for two options, <code>&&</code> when you just want to show/hide something.
        </p>
      </>
    )
  },
  {
    title: "📝 Forms in React (Controlled Components)",
    content: (
      <>
        <h4>What are Controlled Components?</h4>
        <p>A controlled component in React is a form element whose value is controlled by React state.</p>
  
        <h4>🧪 Example: Controlled Input</h4>
        <pre><code>{`import { useState } from 'react';
  
  function ContactForm() {
    const [name, setName] = useState('');
    const handleChange = e => setName(e.target.value);
    const handleSubmit = e => {
      e.preventDefault();
      alert('Submitted: ' + name);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }`}</code></pre>
  
        <h4>🧠 Tip:</h4>
        <p>Keep the form data in state and update it using <code>onChange</code>. The input’s value is always linked to the state.</p>
      </>
    )
  },
  
  
];

export default accordionData;