# What is Lingering I/O?

Lingering I/O is a an event scheduler that helps defer tasks into the future. Similar to a boomerang, an application can send us some data and tell us when it should be returned.

In contrast to cron jobs, the scheduler enables your service to run individual tasks at an exact time instead of having to deal with batches of data every _X_ hours.

## Open-source

The core scheduler powering Lingering I/O is [open source](https://github.com/Cloudbourn/scheduler) and free to use. While parts of this documentation is applies exclusively to the SaaS version, the [API reference](../reference/) applies to the free version as well.
