const express = require('express'),
    member_routes = require('./api');

var router = express.Router();

router.post('/api/member', member_routes.CreateMember);      //work
//router.put('/conferences/:id', conferences_routes.updateConference);     //work 
//router.post('/api/:id', member_routes.AddLecturerToConference);     
router.get('/api/:id', member_routes.getMembers)        
//router.get('/api', member_routes.getConferences);     //work
//router.delete('/lecturer/:id/:name', conferences_routes.deleteLecturerFromConference);      //repleace name to id
//router.delete('/list/:id', conferences_routes.deleteConference);  //work      


module.exports = router;