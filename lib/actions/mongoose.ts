import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
	mongoose.set("strictQuery", true);

	if (!process.env.MONGODB_URI) {
		return console.log("MISSING MONGODB_URL");
	}

	if (isConnected) {
		return console.log("using existing connection");
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: "Devflow",
		});

		isConnected = true;

		console.log("MongoDB connected");
	} catch (error) {
		console.log("MongoDB connection error", error);
	}
};
