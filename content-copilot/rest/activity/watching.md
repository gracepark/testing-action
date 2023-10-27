# Watching

Use the REST API to subscribe to notifications for activity in a repository.

## About watching

You can use the REST API to subscribe to notifications for activity in a repository. To bookmark a repository instead, see "[AUTOTITLE](/rest/activity/starring)."

### Watching versus starring

In August 2012, we [changed the way watching
works](https://github.com/blog/1204-notifications-stars) on GitHub. Some API
client applications may still be using the original "watcher" endpoints for accessing
this data. You should now use the "star" endpoints instead. For more information, see the REST API "[AUTOTITLE](/rest/activity/starring)" documentation and the [Watcher API Change post](https://developer.github.com/changes/2012-09-05-watcher-api/).

In responses from the REST API, `subscribers_count` corresponds to the number of watchers, whereas `watchers`, `watchers_count`, and `stargazers_count` correspond to the number of users that have starred a repository.