# Git blobs

Use the REST API to interact with a Git blob (binary large object), the object type used to store the contents of each file in a repository.

## About Git blobs

A Git blob (binary large object) is the object type used to store the contents of each file in a repository. The file's SHA-1 hash is computed and stored in the blob object. These endpoints allow you to read and write [blob objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)
to your Git database on GitHub. Blobs leverage [these custom media types](#custom-media-types-for-blobs). For more information about the use of media types in the API, see "[AUTOTITLE](/rest/overview/media-types)."

### Custom media types for blobs

These are the supported media types for blobs.

    application/json
    application/vnd.github.raw

For more information, see "[AUTOTITLE](/rest/overview/media-types)."
