# Course-Selling

## Overview
This is a backend API for a Course Selling platform where instructors can upload courses and students can purchase them.

## Tech Stack
- Node.js
- Express.js
- JWT for Authentication
- mongoDB

## Features
- User Registration and Login with JWT Authentication
- CRUD operations for Courses
- Course Purchase functionality
- Role-based Access Control (Instructors & Students)

## Installation

### Clone the repository:
   ```bash
   git clone https://github.com/Shivanxh09/course-selling.git
   cd course-selling


### Install dependencies:
```bash
npm install
```

### Create a `.env` file and add your database configuration:
```ini
MONGO_URL=your mongo url
JWT_ADMIN_PASSWORD=admin jwt password
JWT_USER_PASSWORD=user jwt password
```


### Start the server:
```bash
npm start
```

## Folder Structure
```
/course-selling
├── routes/
├── middlewares/
├── config.js
├── index.js
└── package.json
```

## Contributing
Pull requests are welcome. Please make sure to update tests as needed.

## License
This project is licensed under the MIT License.
