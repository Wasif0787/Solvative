# Problem Statement

**Mini Peerfives** is a service that allows users to reward other people with peerfives (P5) points.

- Design a backed system to handle transaction of points between users.
  > **P5** - Points that can be given to others.
  > **Rewards** - Points that are earned and can not be given to others.
  >
  > - Entities/models
  >   - Users
  >     > ID - string
  >     > Name - string
  >   - Reward history
  >     > Datetime stamp
  >     > Points - number
  >     > Given by (User ID) - string
  >     > Given to (User ID) - string
- Keep the frontend minimal without using any css framework like bootstrap, tailwind, etc.
- Create a `README.md` file for ease of use.

# Getting Started

### Prerequisites

Your system must have Node.js installed in your system.

```bash

# after cloning the repo

cd backend
npm i
npm start

# new terminal

cd frontend
npm i
npm run dev
```

Now you can open localhost of front-end and view the webpage on your local system.

# Completed

### Frontend

- Home page - shows the list of all users.
- Rewards - shows the history of all reward points received.
- P5 - shows transaction history of points sent, options to delete the transaction and an option to create a new transaction.
- Create user - option to add new user(s).
- View user - shows the details of the selected user.
- Transaction - select the user who will receive the points and the amount of points to send.

### Backend

- REST APIs
  - User model, Reward model
  - get all users
  - view users
  - update users
  - create users
  - transaction of points
