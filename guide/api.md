# API

Our RESTful API makes it easy to integrate with Lingering I/O. On this page, we'll give you a quick overview of things to keep in mind when communicating with the scheduler.

## Authentication

Each HTTP request must include a `Authorization` header containing an API key:

```http
Authorization: aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
```

!> Many APIs prefix the key with "_Bearer_", but it is not necessary here.

## JSON

Because the API expects JSON data, requests other than `GET` must include a `Content-type` header:

```http
Content-type: application/json
```

## Limits

There are two types of limits you may run into when using Lingering I/O:

Firstly, there's the API call quota applied to each organisation. It is derived from the subscription plan and is shared across all API keys in an organisation. The quota is reset at the beginning of a [billing period](./billing.md).

The second type of limit is more technical in nature as AWS quotas apply to our infrastructure. Generally this should not be an issue, but if you plan on making _a lot_ of concurrent requests, please [reach out to us](./contact.md) in advance so that we can ensure our systems are ready for you.

