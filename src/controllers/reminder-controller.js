import * as reminderService from './../services/reminder-service.js';

import {
    setResponse, setResponseError
} from './response-handler.js';

export const index = async (request, response) => {
    try {
        const params = {...request.query};
        const reminders = await reminderService.search(params);
        setResponse(reminders, response);
    } catch (error) {
        setResponseError(500, error, response);
    }

}

// export const post = async (request, response) => {
//     try {
//         const newCourse = request.body;
//         const course = await courseService.save(newCourse);
//         setResponse(course, response);
//     } catch (err) {
//         setResponseError(500, err, response);
//     }

// }

// export const getById = async (request, response) => {
//     try {
//         const id = request.params.id;
//         const course = await courseService.getById(id);
//         setResponse(course, response);
//     } catch (err) {
//         setResponseError(500, err, response);
//     }

// }

// export const put = async (request, response) => {
//     try {
//         const id = request.params.id;
//         const updatedCourse = request.body;
//         const course = await courseService.update(id, updatedCourse);
//         setResponse(course, response);
//     } catch (err) {
//         setResponseError(500, err, response);
//     }
// }

// export const remove = async (request, response) => {
//     try {
//         const id = request.params.id;
//         const course = await courseService.remove(id);
//         setResponse({}, response);
//     } catch (err) {
//         setResponseError(500, err, response);
//     }
// }