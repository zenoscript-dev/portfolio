import mongoose from 'mongoose';

const connectToDb = async() => {

  try {
    const connection = await mongoose.connect(process.env.MONGOOSE_DB_URL);
    console.log("successfully connected to mongodb");
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
}

export default connectToDb;