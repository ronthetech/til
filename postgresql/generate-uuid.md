# How to Generate a Random UUID

---

In PostgreSQL you may find that you need a uuid for some reason, maybe an example or a test. You can generate a random uuid by using this command:

```sql
select gen_random_uuid()
```

[link](https://www.postgresql.org/docs/current/functions-uuid.html)
