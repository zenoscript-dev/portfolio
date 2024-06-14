const mysql = require('mysql2');

// Configuration for connecting to the SQL database.
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portfolio'
};

let dbConnection;

function handleDisconnect() {
    dbConnection = mysql.createConnection(dbConfig); // Recreate the connection, since the old one cannot be reused.

    dbConnection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            setTimeout(handleDisconnect, 2000); // Introduce a delay before attempting to reconnect to avoid a hot loop.
        } else {
            console.log('Connected to the database.');
            // Creating tables 
            let blogTable = `
                CREATE TABLE IF NOT EXISTS blog (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    content TEXT,
                    title VARCHAR(255),
                    image VARCHAR(255)
                )
            `;
            dbConnection.query(blogTable, function (err, result) {
                if (err) throw err;
                console.log("Table created or already exists.");
            });
        }
    });

    dbConnection.on('error', (err) => {
        console.error('Database error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect(); // Connection to the MySQL server is usually lost due to either server restart, or a timeout.
        } else {
            throw err; // If it's a different error, we throw it.
        }
    });
}

// Initialize the connection for the first time
handleDisconnect();

module.exports = dbConnection;
