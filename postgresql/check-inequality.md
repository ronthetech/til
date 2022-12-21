# How to Check Inequality

---

Like many other languages, PostgreSQL supports the `!=` comparison operator.

```sql
> select category from animals where datatype != datatype;
```

PostgreSQL also supports the `<>` comparison operator, and actually converts `!=` into `<>` during parsing.

```sql
> select category from animals where datatype <> datatype;
```

[link](https://www.postgresql.org/docs/15/functions-comparison.html)
