
# Hospital Appointment Booking System Backend

This project is a backend system for managing hospital appointments, developed using Node.js, Express.js, and MongoDB. It includes features for patient and admin authentication, appointment scheduling, and managing doctor and patient records. Key technologies used include bcrypt for password hashing, JWT for authentication, and Mongoose for database interactions.

## Features

- Patient Registration: Allows patients to register with required details.

 - Doctor Management: Admins can add new doctors and retrieve doctor details.

 - Appointment Scheduling: Patients can book appointments, and admins can manage appointment statuses.

- Role-based Access: Different access levels for admin, doctor, and patient roles.

- Error Handling: Comprehensive error handling for various scenarios including duplicate keys, JWT errors, and validation issues.

## Technologies Used

- Node.js

- Express.js

- MongoDB

- Mongoose

- bcrypt

- JWT

- dotenv
## Deployment

1. Clone the repository:

```bash
  git clone https://github.com/yourusername/hospital-appointment-booking-backend.git

```
2. Navigate to the project directory:

```bash
cd hospital-appointment-booking-backend
```

3. Install dependencies:

```bash
npm install
```
4. Create a .env file in the root directory and add the following environment variables:

```bash
PORT=5000
MONGO_URL=mongodb://localhost:27017/FINAL_HOSPITAL_MANAGE
JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRES=1d
```
5. Start the server
```bash
npm run dev
```

