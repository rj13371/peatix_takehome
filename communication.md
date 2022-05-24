---
description: Examples of my process of documenting code, tasks and pull requests
---

# Communication

### Here are some good communication practices when working in a remote, diverse team environment

**Example of how to write a function in development**

```
  //takes in a number and converts it to celsuis or farenheit, updates the conversion result state
  //Params: n: number
  //Returns: void

  const convert = (n: number): void => {
    setConversionInput(n);
    if (conversion.formula === 'celsuisToFahrenheit') {
      setResult(CELSIUS_TO_FARENHEIT(n));
    } else {
      setResult(FARENHEIT_TO_CELSIUS(n));
    }
  };
```

**Pull Request Example**

{% embed url="https://github.com/rj13371/peatix_takehome/pull/8" %}

**Task Board Example using Zenhub(or Trello/Jira)**\


{% embed url="https://github.com/rj13371/peatix_takehome/issues" %}
