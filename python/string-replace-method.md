# How to Use the String Replace Method

---

## str.replace()

Python has a built-in function that can be called on a string object to replace all occurrences of a substring with a new substring. You can also optionally pass in the count argument, which controls the number of occurrences to replace.

```python
message = "Hi, I'm a Python Expert!"
new_message = message.replace("Python", "Ruby")  
print(new_message)
#  Hi, I'm a Ruby Expert!
```

```python
message = "Where can you find what you need to finish the project that you just started."
new_message = message.replace("you", "I", 2)  
print(new_message)
#  Where can I find what I need to finish the project that you just started.
```

[example](./examples/string-replace-method.py)
