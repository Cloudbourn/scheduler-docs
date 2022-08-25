---
sidebar: auto
---

# API Reference

Below you'll find a description of the API endpoints exposed by Lingering I/O. They can also be found in [swagger.yaml](https://github.com/Cloudbourn/scheduler/blob/main/swagger.yaml)

## `/jobs`

Jobs are what we call the scheduled webhooks. When the scheduler receives a job it will store it for the requested duration before executing the task by calling an endpoint of your choice.

### POST `/jobs`

Creates a new timer

```sh
curl https://api.lingering.io/jobs \
  -H "Authorization: aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" \
  -H "Content-type: application/json" \
  -d '{
        "endpoint": "https://webhook.site/ee39004f-f7b7-41fc-8a01-cf642d35089b",
        "scheduleAt": "2022-08-22T22:00:00.000Z"
      }'
```


### GET `/jobs/{id}`

Returns an existing job and its current status

```json
{
 "id": "1c065ec1-2855-4043-a73d-c4851197296f",
 "createdAt": "2022-08-25T22:11:26.099Z",
 "endpoint": "https://webhook.site/ee39004f-f7b7-41fc-8a01-cf642d35089b",
 "executedAt": "2022-08-25T22:11:27.370Z",
 "scheduleAt": "2022-08-25T22:11:26.099Z",
 "status": "DONE",
 "updatedAt": "2022-08-25T22:11:27.371Z"
}
```
