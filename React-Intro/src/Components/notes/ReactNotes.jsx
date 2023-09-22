// Creating and nesting components

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



