-- Create Admins Table (for Admins/Mods)
CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',  -- or 'mod'
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create Users Table (common fields for all regular users)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(50) NOT NULL,  -- e.g., 'doctor' or 'nurse'
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create Doctors Table (sub-table with doctor-specific fields)
CREATE TABLE IF NOT EXISTS doctors (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    specialization VARCHAR(255),
    clinic_location TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create Nurses Table (sub-table with nurse-specific fields)
CREATE TABLE IF NOT EXISTS nurses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    shift_schedule TEXT,
    ward VARCHAR(100),
    location GEOGRAPHY(Point),  -- Optional: for queries like "nurses nearby"
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
