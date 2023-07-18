import express from 'express';

import * as reminderController from './../controllers/reminder-controller.js';

const router = express.Router();

router.route('')
    .get(reminderController.index);
    // .post(reminderController.post);

export default router;