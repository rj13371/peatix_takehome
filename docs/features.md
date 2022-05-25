---
description: Implemented Features and Rationale
---

# Features

### Temperature Converter

This component takes in a number input and outputs Fahrenheit to Celsius or vice versa. The user can switch conversions using a toggle button. It uses an antd number input component to handle user input. It only will convert the value if a proper number string is inputted.

Edge-cases:\
\
If the user enters too large of a value, the input/output will show a tool tip with the overflowed value.\
\
If the user deletes their input, it is set to 0 instead of null.

### Light/Dark Theme

This is the only globally managed state in the application. I created a state component using Context API. Context API allows the application to share state between components without having to prop drill (passing props down the component tree). \
\
The button component is a switch enabling the user to choose either dark or light theme mode, which changes the text and background color of the application to either black/white.\
\
I used Context API to manage the states application as it is a elegant and simple way to share state between components that need it. Context properties or functions only need to be called or viewed by consuming them in relevant components.&#x20;

### Thermometer

This is a simple component that I made using gsap, a JavaScript animation library. The thermometers scale increases (up to a maximum height) or decreases based on the result of the conversion. gsap enabled me to simply animate the elements height property using React hooks. This was the first time I have used an animation library in JavaScript and it was a interesting and fun way to animate css properties. I choose gsap because the documentation for gsap was easy to understand and it is one of the most popular JS animation libraries.&#x20;
