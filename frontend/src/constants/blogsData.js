export const blogsData = [
  {
    title:
      "What are the different ways to manage a state in a React application?",
    desc: "There are many ways to manage state in React application. Locale State, Global State, Server State, URL State, Browser State, Form State, Navigation State, Logical State",
    points: [
      "Locale State",
      "Global State",
      "Server State",
      "URL State",
      "Browser State",
      "Form State",
      "Navigation State",
      "Logical State",
    ],
  },
  {
    title: "How does prototypical inheritance work?",
    desc: "The Prototypal Inheritance is a feature in JavaScript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.",
  },
  {
    title: "What is a unit test? Why should we write unit tests?",
    desc: "The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.",
  },
  {
    title: "React vs. Angular vs. Vue?",
    desc: "Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.",
  },
  {
    title: "What is JSX?",
    desc: "JSX stands for JavaScript XML. It allows us to write HTML in React. JSX makes it easier to write and add HTML in React.",
  },
  {
    title: "What is the virtual DOM?",
    desc: "The virtual DOM is a programming concept where a virtual representation of a UI is kept in memory and synced with the real DOM by a library such as ReactDOM.",
  },
  {
    title: "What are hooks in React?",
    desc: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. The most commonly used hooks are useState and useEffect.",
  },
  {
    title: "What is Redux?",
    desc: "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.",
  },
  {
    title: "What is context API?",
    desc: "The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.",
  },
  {
    title: "What is the difference between state and props?",
    desc: "Props are read-only and allow you to pass data from one component to other components as an argument. State is a local data storage that is local to the component only and cannot be passed to other components.",
  },
  {
    title: "What is the use of useEffect hook?",
    desc: "The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.",
  },
  {
    title: "What is the significance of keys in React?",
    desc: "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.",
  },
  {
    title: "How does React handle events?",
    desc: "React events are named using camelCase, rather than lowercase. With JSX, you pass a function as the event handler, rather than a string.",
  },
  {
    title: "What are higher-order components?",
    desc: "A higher-order component (HOC) is a function that takes a component and returns a new component. It allows for code reuse and logic abstraction.",
  },
  {
    title: "What is the use of React Router?",
    desc: "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
  },
  {
    title: "What are controlled components?",
    desc: "A controlled component is an element whose value is controlled by React. A controlled component is bound to a value, and its changes are handled in code by a function.",
  },
  {
    title: "What are uncontrolled components?",
    desc: "Uncontrolled components are elements that are not controlled by React state. They use refs to access the DOM elements' current values.",
  },
  {
    title: "What is prop drilling and how can you avoid it?",
    desc: "Prop drilling is the process of passing data from a parent component through several intermediate components to the target component. You can avoid it using Context API or state management libraries like Redux.",
  },
  {
    title: "What are fragments in React?",
    desc: "A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.",
  },
  {
    title: "What is lazy loading in React?",
    desc: "Lazy loading is a design pattern commonly used to defer initialization of an object until the point at which it is needed. In React, you can use React.lazy and Suspense to dynamically import components.",
  },
  {
    title: "What is memoization in React?",
    desc: "Memoization is an optimization technique used to speed up expensive function calls by caching the results of calls with identical input.",
  },
  {
    title: "What is reconciliation in React?",
    desc: "Reconciliation is the process by which React updates the DOM by comparing the new elements with the previous ones and making the minimal number of changes to the DOM.",
  },
  {
    title: "What are portals in React?",
    desc: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
  },
];

export default blogsData;
