# File Upload App

This project is a simple web application that allows users to upload files and stores the file metadata in a database. It is built using Node.js, Express, and MongoDB.

## Features

- File upload functionality
- Stores file metadata in a MongoDB database
- User-friendly web interface for file uploads

## Project Structure

```
file-upload-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── config
│   │   └── database.js       # Database connection configuration
│   ├── controllers
│   │   └── uploadController.js # Handles file upload logic
│   ├── models
│   │   └── file.js           # Mongoose model for file metadata
│   ├── routes
│   │   └── uploadRoutes.js    # Sets up routes for file uploads
│   ├── middleware
│   │   └── upload.js         # Middleware for handling file uploads
│   └── views
│       └── index.html        # HTML structure for the upload form
├── public
│   ├── css
│   │   └── styles.css        # CSS styles for the web form
│   └── js
│       └── form.js           # JavaScript for handling form submission
├── .env                       # Environment variables
├── package.json               # npm configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd file-upload-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your environment variables in the `.env` file. You will need to specify your MongoDB connection string.

4. Start the application:
   ```
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` in your web browser.
- Use the file upload form to select and upload files.
- The uploaded file metadata will be stored in the database.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.