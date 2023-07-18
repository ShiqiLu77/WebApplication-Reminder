import Reminder from "../models/reminder.js";

export const search = async (params) => {
    const reminder = Reminder.find(params).exec();
    return reminder;
}