# How To Generate a Current Timestamp Without TimeZone

---

In PostgreSQL you may find that you need a current timestamp without timezone for some reason, maybe an example or a test. You can generate a current timestamp without timezone by using this command:

```sql
select now()::timestamp;


```

<!-- [link]() -->
