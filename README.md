# Phoenix Med

Phoenix Med is am online healthcare platform providing services such as pharmacy price locking, doctor consultations, home nursing, and medical donations. This project consists of two major directories:

- **Frontend**: A Next.js application.
- **Backend**: A Node.js + Express + TypeScript API.

## Features

- **Price Lock 🔐**: Lock medication prices for 6–12 months.
- **Doctors Consultation 🩺**: Consult freelancing doctors with stored medical records.
- **Nursing/Home Care 🏠**: Hire freelance nurses with verified credentials.
- **Save a Life ❤️**: Donate to individuals in need of medical support.

## Tech Stack

- **Frontend**: Next.js (React) + TypeScript
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL
- **Deployment**:
  - **Frontend**: Vercel
  - **Backend**: (Edge Serverless Functions)

## Installation

To get started with the project, clone the repository and install dependencies.

```sh
# Clone the repository
git clone https://github.com/gicodes/phoenix-med.git
cd phoenix-med
```

### Install Dependencies

```sh
npm install  # Installs both frontend & backend dependencies
```

Or install separately:

```sh
npm run install:backend
npm run install:frontend
```

## Running the Project

### **Development Mode**

Run the frontend and backend concurrently:

`npm run dev`

Or start them separately:

# Start frontend
`npm run backend`

# Start frontend
`npm run frontend`

### **Building the Project**

To build both the frontend and backend:

`npm run build`

Or build them separately:

`npm run build:backend`
`npm run build:frontend`


## Deployment

### **Frontend (Vercel)**

The frontend is deployed on Vercel. Ensure the root directory is set to `/frontend` in Vercel settings.

### **Backend**

Your backend should be hosted on a Node.js-friendly platform (e.g., Render, Railway, Fly.io). Set up environment variables accordingly.

## Environment Variables

Ensure you have the required environment variables configured in a `.env` file for both the frontend and backend.

Example `.env` structure:

```sh
# Backend
PORT=5000
DATABASE_URL=your-database-url
JWT_SECRET=your-secret-key

# Frontend
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
```

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.

---

### **Contact**

For any inquiries, reach out at [your email] or open an issue on GitHub.

