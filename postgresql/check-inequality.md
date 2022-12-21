# How to Check Inequality

---

Like many other languages, PostgreSQL supports the `!=` comparison operator.

```sql
> select datatype != datatype;
```

PostgreSQL also supports the `<>` comparison operator, and actually converts `!=` into `<>` during parsing.

```sql
> select datatype <> datatype;
```

[link]()
