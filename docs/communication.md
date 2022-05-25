---
description: Examples of my process of documenting code, tasks and pull requests
---

# Communication

### Here are some good communication practices when working in a remote, diverse team environment

**Example of how to write a function in development**

```
  //takes in a number and converts it to celsuis or farenheit, updates the conversion result state
  //toFixed converts a number to a string with a fixed decimal point. Number then converts a string to a number.
  //Params: n: number
  //Returns: void, sets result state to the output which is then consumed by the UI

  const convert = (n: number): void => {
    setConversionInput(n);
    if (conversion.formula === 'celsuisToFahrenheit') {
      const farenheit = CELSIUS_TO_FARENHEIT(n);
      setResult(Number(farenheit.toFixed(4)));
    } else {
      const celsuis = FARENHEIT_TO_CELSIUS(n);
      setResult(Number(celsuis.toFixed(4)));
    }
  };
```

**Pull Request Example**

1. Choose an issue in the taskboard
2. Create a separate branch&#x20;
3. Push your changes to the branch according to the needs of the issue in the taskboard
4. Open a PR, connect it to that issue
5. Request review and make changes according to comments

{% embed url="https://github.com/rj13371/peatix_takehome/pull/8" %}

**Task Board Example using Zenhub (Agile Methodology)**\


{% embed url="https://github.com/rj13371/peatix_takehome/issues" %}
