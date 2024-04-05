import mongoose from "mongoose";

const database = async () => {
  	try {
      const conn = await mongoose.connect(process.env.MONGODB_URL, {
        // To avoid warnings in the console
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log(`🍃 MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
};

export default database;
