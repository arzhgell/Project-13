const mongoose = require("mongoose");
const databaseUrl =
	"mongodb+srv://Cluster41640:U1FuU2pfY0dP@cluster41640.eo8kahe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster41640";

console.log(databaseUrl);
module.exports = async () => {
	try {
		await mongoose.connect(databaseUrl, { useNewUrlParser: true });
		console.log("Database successfully connected");
	} catch (error) {
		console.error(`Database Connectivity Error: ${error}`);
		throw new Error(error);
	}
};
