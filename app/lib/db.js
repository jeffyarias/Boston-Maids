const Database = require("better-sqlite3"); // ✅ Use CommonJS require()
const path = require("path");

// Create or open the database file
const db = new Database(path.join(process.cwd(), "database.sqlite"));

// Create required tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS rooms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    base_price INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS cleaning_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    multiplier REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS availability (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_id INTEGER NOT NULL,
    cleaning_id INTEGER NOT NULL,
    date TEXT NOT NULL,
    slots INTEGER NOT NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    FOREIGN KEY (cleaning_id) REFERENCES cleaning_types(id)
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    room_id INTEGER NOT NULL,
    cleaning_id INTEGER NOT NULL,
    date TEXT NOT NULL,
    total_price INTEGER NOT NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    FOREIGN KEY (cleaning_id) REFERENCES cleaning_types(id)
  );
`);

module.exports = { db };
