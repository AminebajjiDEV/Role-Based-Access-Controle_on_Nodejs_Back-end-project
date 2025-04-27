import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            dbName: "RBAC-project"});
        console.log(`Database connected to : ${connect.connection.host} ${connect.connection.name}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export {dbConnect};
