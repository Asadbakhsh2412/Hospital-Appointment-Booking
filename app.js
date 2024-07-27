import express  from 'express';
import {config} from "dotenv";
// import cors from "cors";
import cookieParser from 'cookie-parser';
// import fileUpload from 'express-fileupload';
import { dbConnection } from './database/dbConnection.js';
//import messageRouter from './routes/messageRouter.js';
import { errorMiddleware } from './middlewares/errorsMiddlewares.js';
import userRouter from './routes/userRouter.js';
import appointmentRouter from './routes/appointmentRouter.js';
const app = express();

// app.use(cors(
//     {
//         origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         credentials: true,
//     }
// ));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app.use(
//     fileUpload({
//         useTempFiles: true,
//         tempFileDir : "/tmp/",
//     })
// );

config({path : "./config/config.env"});
//app.use("/api/v1/message",messageRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/appointments",appointmentRouter);
dbConnection();
app.use(errorMiddleware);
export default app;