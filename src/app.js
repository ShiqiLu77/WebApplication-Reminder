/*
    Responsibility: 
    Define the configuration and route registration of the Express application
    Contains core logic of the application, involving: routes, middleware, and database connections
*/

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
//import models from './models/index.js';
import registerRoutes from './routes/index.js';

// Connecting to the MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'ReminderResourse';
mongoose.connect(`${url}/${dbName}`, { useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connection successful');

    // 在此处编写数据库操作的代码

    // // 关闭连接
    // mongoose.connection.close()
    //   .then(() => {
    //     console.log('成功关闭与 MongoDB 的连接');
    //   })
    //   .catch((error) => {
    //     console.error('关闭 MongoDB 连接失败:', error);
    //   });
  })
  .catch(err => {
    console.error('MongoDB Connection failed:', err);
  });

// Creating an instance of the Express application
const app = express();
app.use(cors());
app.use(express.json()); //解析 JSON 格式请求体(Content-Type: application/json), 将请求的主体数据解析为 JSON 格式，并将其作为 req.body 对象的属性。 
app.use(express.urlencoded({ extended: false })); // 解析 URL-encoded 格式请求体 (Content-Type: application/x-www-form-urlencoded), 将请求的主体数据解析为键值对，并将其作为 req.body 对象的属性。

// Registering routes and middleware
registerRoutes(app);

export default app;