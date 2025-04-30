import React from 'react';
import Accordion from '../components/Accordion';

function Learning() {
  return (
<div className="page-content" style={{ backgroundColor: '#0d1117', padding: '2rem', borderRadius: '12px' }}>
<h2 style={{ textAlign: 'center', color:'white' }}>📚 React Dev Manual</h2>

      <Accordion title="📌 JSX in React">
        <p>JSX stands for <strong>JavaScript XML</strong>. It allows writing HTML-like syntax directly in JavaScript files, and React compiles it into `React.createElement()` under the hood.</p>
        <p>You can also embed variables and expressions using curly braces `{}`.</p>
        <pre><code>
{`function Welcome() {
  const name = "Manjunath";
  return <h1>Hello, {name}!</h1>;
}`}
        </code></pre>
      </Accordion>

      <Accordion title="⚛️ Functional Component">
        <p>A <strong>Functional Component</strong> is a JavaScript function that returns JSX. It is the most common way to write components in modern React.</p>
        <pre><code>
{`function Header() {
  return <h2>This is a functional component</h2>;
}

export default Header;`}
        </code></pre>
      </Accordion>

      <Accordion title="🏗️ Class Component">
        <p>A <strong>Class Component</strong> is an ES6 class that extends `React.Component`. It uses a `render()` method to return JSX. Class components support lifecycle methods like <code>componentDidMount</code>.</p>
        <pre><code>
{`import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return <footer>This is a class component</footer>;
  }
}

export default Footer;`}
        </code></pre>
      </Accordion>


      <Accordion title="🔗 Props in React">
  <p>Props (short for <strong>properties</strong>) let you pass data from parent to child components.</p>
  <pre><code>
{`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Greeting name="Manjunath" />`}
  </code></pre>
</Accordion>

<Accordion title="📦 State in React">
  <p><strong>State</strong> holds data that can change over time in a component. It's local and managed with <code>useState()</code> in functional components.</p>
  <pre><code>
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}`}
  </code></pre>
</Accordion>

<Accordion title="⏱ Lifecycle Methods">
  <p><strong>Lifecycle methods</strong> run at specific points of a component's life.</p>
  <ul>
    <li><code>componentDidMount</code> – after render (Class)</li>
    <li><code>componentWillUnmount</code> – before destroy (Class)</li>
    <li><code>useEffect</code> – replacement in Functional components</li>
  </ul>
  <pre><code>
{`// Class version
componentDidMount() {
  console.log('Mounted!');
}

// Functional version
useEffect(() => {
  console.log('Mounted!');
}, []);`}
  </code></pre>
</Accordion>

<Accordion title="🧠 Common React Hooks">
  <p>Hooks are functions that let functional components use React features like state, lifecycle, and context.</p>
  <ul>
    <li><code>useState()</code> – manage local state</li>
    <li><code>useEffect()</code> – run side effects (API calls, timers)</li>
    <li><code>useRef()</code> – persist values across renders</li>
    <li><code>useContext()</code> – access global context</li>
  </ul>
  <pre><code>
{`const [name, setName] = useState('');
useEffect(() => {
  console.log('Name updated:', name);
}, [name]);`}
  </code></pre>
</Accordion>

<Accordion title="🧩 useReducer Hook">
  <p><strong>useReducer</strong> is used for complex state logic. It’s like Redux but built into React.</p>
  <pre><code>
{`import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}`}
  </code></pre>
</Accordion>

<Accordion title="⚙️ Custom Hook Example">
  <p><strong>Custom hooks</strong> let you extract reusable logic into your own function, starting with <code>use</code>.</p>
  <pre><code>
{`// useCounter.js
import { useState } from 'react';

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return [count, increment];
}

// Usage:
const [count, increment] = useCounter();
`}
  </code></pre>
</Accordion>

    </div>
  );
}

export default Learning;
