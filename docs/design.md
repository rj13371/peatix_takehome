# Design

## Architecture

\
\
I brushed up on Clean Architecture before starting this project. According to this [article ](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)_"The clean architecture is a way of separating responsibilities and parts of functionality according to their proximity to the application domain... Clean Architecture is often referred to as a three-layer architecture, because the functionality in it is divided into layers."_ . Although this project is simple and is only client side based, I still attempted to structure and write my code according to this paradigm. I did this mainly by separating my code by feature rather then by layers, keeping code independent and modular, and keeping imports/require statements clean.

## Code Structure

An overview on folder structure

```
src/
App.tsx
App.css
|_components/
  |header/
    |index.jsx
    |header.css  
|_features/
  |Temperature/
    |TemperatureConverter/
      |index.ts
      |ITemperature.ts
      |TemperatureConverter.css
      |TemperatureConverter.test.tsx
      |TemperatureConverter.tsx
    |Thermometor/
      |index.ts
      |ITemperature.ts
      |Thermometor.test.tsx
      |Thermometor.tsx 
  |Light/DarkTheme
    |index.ts
    |ToggleThemeButton.tsx
    |ToggleThemeButton.test.tsx
|_pages/
  |Landing/
    |Landing.tsx
    |index.ts
  |NotFound/
    |NotFound.tsx
    |index.ts
|_state/
  |ThemeContext.tsx
```

\
The folder structure is separated into four main parts: state, pages, features and components.\
\
**State** includes all code that will handle global state of the application.\
\
**Pages** contains all the separate that our app will contain now and in the future. They serve the main purpose of displaying our UI while not containing any internal state. The routes to each page will be handled by App.tsx and can easily be added and removed. \
\
**Features** includes our two main components. I decided to separate the main user components the user will interact with by feature in order to make my code more maintainable and readable. For example, because Thermometer is dependent on the Temperature Converter component, if you want to remove the Temperature converter feature, you can safely remove both components without having to refactor so much code. This makes the project easier to maintain in the future. \
\
**Components** will include reusable components like buttons, images or in this case a simple page header. Components is at the top level because it's code can be imported by any children.\
These components are usually simple and do not handle any complex logic. \
\
Other notes:\
tests, interfaces, and styles are included in its siblings component in order to make our code more maintainable and readable. \
\
\


