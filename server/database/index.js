import mongoose from 'mongoose';

const mongoUri = '127.0.0.1';
mongoose.connect(mongoUri);

const db = mongoose.connection;

export default db;