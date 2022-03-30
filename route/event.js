const express = require('express');
const router = express.Router({mergeParams:true});
const EventController = require('../controller/EventController');
const EventStatusController = require('../controller/EventStatusController');
router.get('/getAllEvents', EventController.getAllEvents);
router.get('/getEventsById/:id', EventController.getEventById);
router.delete('/deleteEventById/:id', EventController.deleteEventById);
router.post('/createNewEvent', EventController.createEvent);
router.patch('/updateEventById/:id', EventController.updateEventById);
router.get('/upcomingEvent', EventStatusController.fetchUpcomingEvents);
router.get('/liveEvent', EventStatusController.fetchLiveEvent);
module.exports = router