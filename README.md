## Environment Configuration Instructions

To set up your environment for development, you'll need to configure several environment variables. Below is a guide on what each variable is for and how you can set them up.

### Required Environment Variables:

- **NODE_ENV**

  - **Description**: Specifies the environment in which your application is running. For development purposes, this should be set to `development`.
  - **Example**: `NODE_ENV=development`

- **PORT**

  - **Description**: Defines the port number on which your application will listen. You can choose any port that is not already in use by another process.
  - **Example**: `PORT=3000` (Feel free to replace `3000` with your desired port number.)

- **MONGODB_URL**
  - **Description**: The connection string used to connect to your MongoDB database. You'll need to replace `USERNAME` and `PASSWORD` with your actual MongoDB credentials, and `mongo-db-cluster.xhgzu6n.mongodb.net` with your MongoDB cluster's address.
  - **Example**: `MONGODB_URL=mongodb+srv://USERNAME:PASSWORD@mongo-db-cluster.xhgzu6n.mongodb.net/?retryWrites=true&w=majority`

### Credentials:

Make sure to replace `USERNAME` and `PASSWORD` in the `MONGODB_URL` with your actual MongoDB credentials. These are placeholders to show where your MongoDB username and password should be inserted.

- **USERNAME**: Your MongoDB username.
- **PASSWORD**: Your MongoDB password.

### Note:

Ensure that you never commit sensitive information, such as your MongoDB username and password, directly into your Git repository. It's recommended to use environment variable files (like `.env`) that are excluded from your repository (via `.gitignore`) to keep your credentials secure.
