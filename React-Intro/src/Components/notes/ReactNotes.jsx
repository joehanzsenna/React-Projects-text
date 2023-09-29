// Creating and nesting components

import { useEffect } from "react"

// React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

// React components are JavaScript functions that return markup:

// function MyButton() {
//   return <button>I'm a button</button>;
// }

// Now that you’ve declared MyButton, you can nest it into another component:

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }



// Notice that <Button /> starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.


// Writing markup with JSX
// The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.

// JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

// Adding styles
// In React, you specify a CSS class with className. It works the same way as the HTML class attribute:



// You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:

// return (
//   <img
//     className="avatar"
//     src={user.imageUrl}
//   />
// );

// Conditional rendering
// In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:

// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }
// return (
//   <div>
//     {content}
//   </div>
// );


// If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:

// <div>
//   {isLoggedIn ? (
//     <AdminPanel />
//   ) : (
//     <LoginForm />
//   )}
// </div>

// When you don’t need the else branch, you can also use a shorter logical && syntax:

// <div>
//   {isLoggedIn && <AdminPanel />}
// </div>

// Rendering lists
// You will rely on JavaScript features like for loop and the array map() function to render lists of components.

// For example, let’s say you have an array of products:

// const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
// ];


// Inside your component, use the map() function to transform an array of products into an array of <li> items:

// const listItems = products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// );

// return (
//   <ul>{listItems}</ul>
// );

// Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }

// Responding to events
// You can respond to events by declaring event handler functions inside your components:

// function MyButton() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.


// Updating the screen
// Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

// First, import useState from React:

// Now you can declare a state variable inside your component:

// function MyButton() {
//   const [count, setCount] = useState(0);
//   // ...

// You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].

// The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it. Clicking this button will increment the counter:

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }


// React will call your component function again. This time, count will be 1. Then it will be 2. And so on.

// If you render the same component multiple times, each will get its own state. Click each button separately:


// import { useState } from 'react';

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// Using Hooks
// Functions starting with use are called Hooks. useState is a built-in Hook provided by React. You can find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones.

// Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.


// useState
// useState is a React Hook that lets you add a state variable to your component.

// const [state, setState] = useState(initialState);

// Reference
// useState(initialState)
// Call useState at the top level of your component to declare a state variable.

// import { useState } from 'react';

// function MyComponent() {
//   const [age, setAge] = useState(28);
//   const [name, setName] = useState('Taylor');
//   const [todos, setTodos] = useState(() => createTodos());

// The convention is to name state variables like [something, setSomething] using array destructuring.

// Parameters
// initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.
// If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state. See an example below.
// Returns

// useState returns an array with exactly two values:

// The current state. During the first render, it will match the initialState you have passed.
// The set function that lets you update the state to a different value and trigger a re-render.


// Usage
// Adding state to a component
// Call useState at the top level of your component to declare one or more state variables.

// import { useState } from 'react';

// function MyComponent() {
//   const [age, setAge] = useState(42);
//   const [name, setName] = useState('Taylor');
//   // ...
// The convention is to name state variables like [something, setSomething] using array destructuring.

// useState returns an array with exactly two items:

// The current state of this state variable, initially set to the initial state you provided.
// The set function that lets you change it to any other value in response to interaction.
// To update what’s on the screen, call the set function with some next state:

// function handleClick() {
//   setName('Robin');
// }
// React will store the next state, render your component again with the new values, and update the UI.

// Use useEffect

// useEffect is a React Hook that lets you synchronize a component with an external system.

// useEffect(setup, dependencies?)

// If you’re not trying to synchronize with some external system, you probably don’t need an Effect.

// Usage
// Connecting to an external system
// Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page. These systems aren’t controlled by React, so they are called external.

// To connect your component to some external system, call useEffect at the top level of your component:


// Fetching data with Effects
// You can use an Effect to fetch data for your component. Note that if you use a framework, using your framework’s data fetching mechanism will be a lot more efficient than writing Effects manually.

// If you want to fetch data from an Effect manually, your code might look like this:














// ------------------------------------------------>>>>>>>>>>>>>>


// useEffect is a fundamental hook in React that allows you to perform side effects in your functional components.Side effects refer to any code that needs to interact with the outside world, Side effects can include data fetching, DOM manipulation, or subscribing to external data sources. It's called "useEffect" because it helps you manage the side effects of your components.

// Here's a brief explanation:

// "In React, useEffect is a hook used to manage side effects in functional components. Side effects are operations like data fetching, DOM manipulation, or subscribing to data sources. You can use useEffect to perform these tasks after the component has rendered or when certain dependencies change. It helps ensure that your component interacts with the outside world in a predictable and controlled way."

//1, Declaring Effects: You use the useEffect hook by passing it a function. This function represents the side effect you want to perform. For example:

// useEffect(() => {
//   // Side effect code goes here
// });

//2, Dependencies (Optional): You can also pass a second argument to useEffect in the form of an array of dependencies. These dependencies are variables or values from your component's scope. The effect will only re-run when one or more of these dependencies change. For example:

// useEffect(() => {
//   // Side effect code goes here
// }, [dependency1, dependency2]);


// 3, Executing Side Effects: The code inside the useEffect function is executed after the component renders. This is where you perform side effects, such as data fetching or DOM manipulation.

// 4, Cleanup (Optional): If your side effect involves setting up resources, such as event listeners or subscriptions, you can return a cleanup function from the useEffect. React will automatically run this function when the component unmounts or when the dependencies change and the effect needs to be re-run. For example:


// useEffect(() => {
//   const subscription = someExternalService.subscribe((data) => {
//     // Handle data
//   });

//   return () => {
//     // Cleanup function to unsubscribe
//     subscription.unsubscribe();
//   };
// }, [dependency]);


//4, Common Use Cases: useEffect is commonly used for various tasks, including:

// Data fetching and API calls.
// Managing subscriptions, timers, or event listeners.
// Updating the DOM or triggering animations.
// Synchronizing state with external data sources.

//5, Dependency Management: Specifying dependencies is crucial for avoiding unnecessary re-renders and ensuring that side effects are performed only when needed. Omitting the dependency array ([]) means the effect runs after every render, while specifying dependencies ensures it runs only when those dependencies change.

// In summary, useEffect is a key hook in React for managing side effects and interactions with the outside world in functional components. It promotes clean and predictable code by controlling when side effects occur and providing mechanisms for cleanup when the component unmounts or dependencies change.




// ==============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// UseRef
// useRef is a hook in React that provides a way to create mutable references to elements or values that persist across renders. It's a versatile hook used for various purposes, such as interacting with the DOM or keeping track of values between renders.

// Here's a brief explanation of how useRef works:

//1, Creating a Ref: You start by creating a ref using the useRef function. For example:

// const myRef = useRef();

// This creates a myRef object that can be used to reference elements or values.

//2, Attaching a Ref to an Element: To attach a ref to a DOM element, you can use the ref attribute in JSX:

// <div ref={myRef}>Element to be referenced</div>

// Now, myRef.current will point to the DOM element.

//3, Accessing the Ref Value: You can access the value of the ref using myRef.current. For example, to get the value of an input element:

//i, const inputElementValue = myRef.current.value;

// Or to access the DOM element itself:

//ii const element = myRef.current;

// Preservation Across Renders: Unlike regular variables in functional components, the myRef object's value (i.e., myRef.current) persists between renders. This is useful for maintaining state or references without causing re-renders when the ref changes.

// Common Use Cases: useRef is often used for the following purposes:

// DOM Interaction: To directly manipulate or access DOM elements.
// Preserving Values: To preserve values between renders without causing re-renders.
// Managing Focus: For managing focus in input elements.
// Storing Previous Values: For storing the previous value of a state variable to compare it with the current value.
// Overall, useRef is a powerful tool in React for working with both the DOM and state in a way that doesn't trigger re-renders when the referenced value changes, making it efficient for certain use cases.


