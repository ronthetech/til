# How to Count How Many Records Are In Each Category

---

You can get the count of how many records there are in each "category" in a table by using `group by`:

```sql
> select species, count(*) from animals group by species;
```

| species | count |
| :---         |          ---: |
|bird|140|
|mammal|430|
|reptile|200|
|fish|750|

[link](https://www.postgresql.org/docs/15/tutorial-agg.html)

You can also optionally sort the output in descending order.

```sql
> select species, count(*) from animals group by species order by count;
```

| species | count |
| :---         |          ---: |
|fish|750|
|mammal|430|
|reptile|200|
|bird|140|

[link](https://www.postgresql.org/docs/15/tutorial-select.html)
