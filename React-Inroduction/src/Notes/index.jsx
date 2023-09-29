// Creating and nesting components

// React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
// React components are JavaScript functions that return markup:

// Notice that <Button /> starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.

// Writing markup with JSX
// The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.

// JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

// Adding styles
// In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

// using images in react


// Conditional rendering
// In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:



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

//4, Common Use Cases: useEffect is commonly used for various tasks, including:

// Data fetching and API calls.
// Managing subscriptions, timers, or event listeners.
// Updating the DOM or triggering animations.
// Synchronizing state with external data sources.

//5, Dependency Management: Specifying dependencies is crucial for avoiding unnecessary re-renders and ensuring that side effects are performed only when needed. Omitting the dependency array ([]) means the effect runs after every render, while specifying dependencies ensures it runs only when those dependencies change.

// In summary, useEffect is a key hook in React for managing side effects and interactions with the outside world in functional components. It promotes clean and predictable code by controlling when side effects occur and providing mechanisms for cleanup when the component unmounts or dependencies change.



// UseRef
// useRef is a hook in React that provides a way to create mutable references to elements or values that persist across renders. It's a versatile hook used for various purposes, such as interacting with the DOM or keeping track of values between renders.

// Here's a brief explanation of how useRef works:

//1, Creating a Ref: You start by creating a ref using the useRef function. For example:

// const myRef = useRef();

// This creates a myRef object that can be used to reference elements or values.

//2, Attaching a Ref to an Element: To attach a ref to a DOM element, you can use the ref attribute in JSX:

{/* <div ref={myRef}>Element to be referenced</div> */}

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

