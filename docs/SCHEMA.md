# WetPets Database Schema (Preliminary Design)

This document outlines the proposed database schema for implementing social and community features. This design is a starting point and can be extended.

We will model our data using several related collections or tables.

---

### 1. `users`

Stores information about the human users of the application.

| Field             | Type      | Description                                          |
|-------------------|-----------|------------------------------------------------------|
| `id`              | `string`  | Unique identifier (e.g., from auth provider)         |
| `name`            | `string`  | User's display name                                  |
| `email`           | `string`  | User's email address (unique)                        |
| `image`           | `string`  | URL for the user's profile picture                   |
| `createdAt`       | `datetime`| Timestamp of when the user account was created       |
| `premiumUntil`    | `datetime`| (For future use) Timestamp for premium subscription expiry |

---

### 2. `pets`

Stores information about the users' pets. A user can have multiple pets.

| Field             | Type      | Description                                          |
|-------------------|-----------|------------------------------------------------------|
| `id`              | `string`  | Unique identifier for the pet                        |
| `ownerId`         | `string`  | Foreign key linking to the `users.id`                |
| `name`            | `string`  | Pet's name                                           |
| `breed`           | `string`  | (Optional) Pet's breed                               |
| `image`           | `string`  | (Optional) URL for the pet's profile picture         |
| `createdAt`       | `datetime`| Timestamp of when the pet profile was created        |

---

### 3. `posts`

Stores information about each post created by a user.

| Field             | Type      | Description                                          |
|-------------------|-----------|------------------------------------------------------|
| `id`              | `string`  | Unique identifier for the post                       |
| `authorId`        | `string`  | Foreign key linking to the `users.id`                |
| `spotId`          | `string`  | (Optional) Foreign key linking to a `spots.slug`     |
| `imageUrl`        | `string`  | URL for the post's main image                        |
| `caption`         | `text`    | The text content of the post                         |
| `createdAt`       | `datetime`| Timestamp of when the post was created               |

---

### 4. `comments`

Stores comments made by users on posts.

| Field             | Type      | Description                                          |
|-------------------|-----------|------------------------------------------------------|
| `id`              | `string`  | Unique identifier for the comment                    |
| `postId`          | `string`  | Foreign key linking to the `posts.id`                |
| `authorId`        | `string`  | Foreign key linking to the `users.id`                |
| `text`            | `text`    | The text content of the comment                      |
| `createdAt`       | `datetime`| Timestamp of when the comment was created            |

---

### 5. `likes` (or "Paws")

Stores a record of a user liking a post. This is a simple join table to represent a many-to-many relationship.

| Field             | Type      | Description                                          |
|-------------------|-----------|------------------------------------------------------|
| `id`              | `string`  | Unique identifier for the like                       |
| `postId`          | `string`  | Foreign key linking to the `posts.id`                |
| `userId`          | `string`  | Foreign key linking to the `users.id`                |

**Constraint:** A user can only like a post once. The combination of `postId` and `userId` must be unique.
