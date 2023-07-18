import reminderRouter from './reminder-route.js';

const registerRoutes = (app) => {
    // app.use 方法将一个路由处理器（reminderRouter）与特定的 URL 路径 ('/reminders') 关联起来。
    app.use('/reminders', reminderRouter); 
}

export default registerRoutes;