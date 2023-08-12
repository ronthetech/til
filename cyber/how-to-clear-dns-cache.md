# How to Clear DNS Cache

---
If you ever need to clear the DNS cache on a machine for any reason, like for instance if it has been poisoned, or to refresh the outdated entries, you can achieve this from the command line. 
Enter the following command:
```
C:\Users\YOUR_MACHINE>ipconfig /displaydns

Windows IP Configuration

Successfully flushed the DNS Resolver Cache.
```
Based on the output, we know that the DNS Cache has been succesfully cleared.
