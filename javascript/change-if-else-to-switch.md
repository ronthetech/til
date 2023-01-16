# How to Change an If-Else Statement to a Switch Statement

---

In JavaScript, you can substitute the `if...else` statement with a `switch` statement.

The function below is an if-else statement:

```js
function chainToSwitch(val){
  var answer = "";
  if (val === "hip hip") {
    answer = "hooray!"
  } else if (val === 7) {
    answer = "Ate 9"
  } else if (val === "Michael") {
    answer = "Jackson"
  } else {
    answer = "Not this time!"
  }
}
```

The function below is a switch statement:

```js
switch (val) {
  case 'hip hip':
    answer = "hooray!";
    break;
  case 7:
    answer = "Ate 9";
    break;
  case "Michael":
    answer = "Jackson"
    break;
  default :
    answer = "Not this time!"
    break;
}
```

[link]()
[link - if-else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
[link - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
