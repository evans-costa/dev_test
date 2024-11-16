import 'reflect-metadata';
import express from 'express';
import database from './infra/db';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = express();
app.use(express.json());

const startServer = async () => {
  try {
    await database.initializeDatabase();
    console.log('Database initialized');

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error initializing the database:', error);
    process.exit(1);
  };
}

startServer();

app.use("/users", userRoutes)
app.use("/posts", postRoutes)

