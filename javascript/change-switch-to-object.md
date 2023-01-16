# How to Change a Switch Statement to an Object

---

In JavaScript, you can substitute the `switch` statement with an `object`.

The function below is a switch statement:

```js
function whoPlaysWhere(val) {
let answer = "";

  switch (val) {
    case "Steph Curry":
      answer = "Golden State Warriors";
      break;
    case "LeBron James":
      answer = "Los Angeles Lakers";
      break;
    case "Kevin Durant":
      answer = "Brooklyn Nets"
      break;
    case "Giannis Antetokounmpo" :
      answer = "Milwaukee Bucks"
      break;
  }
  
  return answer;
}
```

The object below was formed using the switch statement above:

```js
function whoPlaysWhere(val) {
let answer = "";

  const players = {
    "Steph Curry" : "Golden State Warriors",
    "LeBron James" : "Los Angeles Lakers",
    "Kevin Durant" : "Brooklyn Nets",
    "Giannis Antetokounmpo" : "Milwaukee Bucks",
  }
  
  answer = players[val];
  return answer;
}
```

The object below will return the same results as the one above:

```js
function whoPlaysWhereObject(val) {
  return {
    "Steph Curry" : "Golden State Warriors",
    "LeBron James" : "Los Angeles Lakers",
    "Kevin Durant" : "Brooklyn Nets",
    "Giannis Antetokounmpo" : "Milwaukee Bucks",
  }[val];
}
```

[link]()
[link - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
[link - object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
