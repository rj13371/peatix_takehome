# Tech Stack

## Typescript

TypeScript allows for static typing which results in fewer bugs on production and more verbose yet easier to understand code which is important when working in a team and large company. It encourages better code structuring and object-oriented programming techniques. Generally the most common types of bugs in software come from typos, uncalled functions, incorrect params, and TypeScript throws errors catching these bugs during complication and within VScode.  In the project I utilized some ES6 features like object destructing and arrow functions while also taking advantage of TypeScripts type checkers and non exception failures.&#x20;

Using TypeScript can save people and companies precious time on trivial bugs and typos.\
\
For example:\
When I added the toFixed() method to my convert function in order to only have the output be maximum 4 decimals, TypeScript threw an error that my CELSUIS_TO_FARENHEIT function only takes in numbers, not strings. I had forgotten that toFixed returns a string instead of a number. What could have happened if I used regular JavaScript is that my CELSUIS_TO_FARENHEIT function would not properly calculate the string Celsius var(instead of a number) to a Fahrenheit value, and could have wasted time on this bug.&#x20;

## React

I choose React for my front end framework because it is a modular, un-opinionated (can structure very freely) and has a large community of developers and support. It's large community means it has tons of information online when it comes to bug fixing and finding help online, and it also is supported by many 3rd party libraries and npm packages. I also used create-react-app to take care of webpack bundling.

## antd

I choose antd for my UI library because it's simplicity suited the needs of this project. antd has more UI components then bootstrap and is simpler then Material UI for this project so I choose it over both of them. Some of antds form components (like number input) include built in type checking which was very useful for creating the Temperature conversion component.&#x20;
