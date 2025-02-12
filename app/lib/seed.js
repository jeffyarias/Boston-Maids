const { db } = require("./db");

// Insert initial data into rooms table
db.prepare("INSERT INTO rooms (name, base_price) VALUES (?, ?)").run("Standard Room", 100);
db.prepare("INSERT INTO rooms (name, base_price) VALUES (?, ?)").run("Deluxe Suite", 200);

// Insert initial data into cleaning_types table
db.prepare("INSERT INTO cleaning_types (name, multiplier) VALUES (?, ?)").run("Standard Cleaning", 1.0);
db.prepare("INSERT INTO cleaning_types (name, multiplier) VALUES (?, ?)").run("Deep Cleaning", 1.5);

// Insert initial availability
db.prepare("INSERT INTO availability (room_id, cleaning_id, date, slots) VALUES (?, ?, ?, ?)").run(1, 1, "2025-02-01", 5);
db.prepare("INSERT INTO availability (room_id, cleaning_id, date, slots) VALUES (?, ?, ?, ?)").run(1, 2, "2025-02-02", 3);
db.prepare("INSERT INTO availability (room_id, cleaning_id, date, slots) VALUES (?, ?, ?, ?)").run(2, 1, "2025-02-03", 2);

console.log("Database seeded successfully!");
