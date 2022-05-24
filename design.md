# Design

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

I structured the application with an eye on maintenance, scalability and stability.\
\
The folder structure is separated into four main parts, state, pages, features and components.\
State is self descriptive, and will include all code that will handle global state of the application.\
\
Pages will contain all the separate routes that our app will contain now and in the future. They serve the main purpose of displaying our UI while not containing any internal state.\
\
Features contains the //TODO\
\
Components will include reusable components like buttons, images or in this case a simple page header. Components is at the top level because it's code will be imported anywhere.\
These components are usually simple and do not handle any complex logic. \
\
Other notes:\
tests and styles are included in its siblings component in order to make our code more maintainable and readable.&#x20;

