const dbConnection = require('../config/db.config');

exports.createBlog = async (title, image, content) => {
    // Validate input fields
    if (!title || !image || !content) {
        throw { statusCode: 400, message: 'Title, image, and content are required fields' };
    }

    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = createdAt;

    const sql = 'INSERT INTO blog (title, image, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?)';

    try {
        const [result] = await dbConnection.promise().query(sql, [title, image, content, createdAt, updatedAt]);
        return result;
    } catch (error) {
        console.error('Error inserting into blog table:', error);
        throw { statusCode: 500, message: 'Failed to create blog entry' };
    }
};


exports.getAllBlogs = async () => {
    const sql = 'SELECT * FROM blog';

    try {
        // Assuming dbConnection.query returns an array of results and metadata
        const [results, fields] = await dbConnection.promise().query(sql);
        return results; // Return only the results array
    } catch (error) {
        console.error('Error getting all blogs:', error);
        throw error;
    }
};

exports.getBlogDetails = async (id) => {
    const sql = 'SELECT * FROM blog WHERE id = ?';

    try {
        const [rows, fields] = await dbConnection.promise().query(sql, [id]);
        if (rows.length === 0) {
            throw new Error(`Blog with id ${id} not found`);
        }
        return rows[0]; // Return the first (and presumably only) result
    } catch (error) {
        console.error(`Error getting blog details with id ${id}`, error);
        throw error;
    }
};
