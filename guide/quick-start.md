# Quick Start

[Sign up for free](https://lingering.io), create an <abbr title="a group for your team, friends, family, or book club">organisation</abbr> and generate an API key. Then:

```sh
curl https://api.lingering.io/jobs \
  -H "Authorization: aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" \
  -H "Content-type: application/json" \
  -d '{
        "scheduleAt": "2022-08-22T22:00:00.000+0000",
        "endpoint": "https://webhook.site/ee39004f-f7b7-41fc-8a01-cf642d35089b"
      }'
```

That's it! The endpoint will receive a HTTP `GET` request at the specified time.

You may want to read up on our [API concepts](./api.md), or jump straight to the [API reference](../reference/).
