const { default: mongoose } = require("mongoose");
const { Event } = require("../schema")
async function checkIsExisting(id){
    const data = await Event.exists({_id:id})
    return data
};
module.exports = {
    //Create
    createEvent: async(req, res) =>{
        let event_info = req.body;
        try {
        const event  = await Event.create(event_info);
        res.json({msg:"Event created successfully", data:event});
        } catch (error) {
            res.json({msg:"server error"}); 
        }
    },
    //Read
    getAllEvents:async (req, res)=>{
        console.info('get all Events api hit');
        try {
            const events = await Event.find();
            res.json({msg:'All Events Fetched Successfully', data:events})
        } catch (error) {
            res.json({msg:'Server Error!!'});
        }
    },
    getEventById: async(req, res)=>{
        const event_id = req.params.id;
        const isExisting = checkIsExisting(event_id);
        if(isExisting){
            const data = await Event.findById(event_id);
            res.json({msg:"Event Fetched successfully", data:data});
        }else{
            res.json({msg:'Event not present! Please try valid id'});
        }
    },
    //Update
    updateEventById: async(req, res)=>{
        const event_id = req.params.id;
        const update_body = req.body;
        const isExisting = checkIsExisting(event_id);
        if(isExisting){
           const updated= await Event.findByIdAndUpdate(event_id,update_body,{new: true} );
           res.json({msg:"Updated Successfully", data:updated})
        }else{
            res.json({msg:"Event not present! Please try valid id"});
        }
    },
    //Delete
    deleteEventById: async(req, res) =>{
        let event_id = req.params.id;
        try {
           const isExisting= checkIsExisting(event_id);
            if(isExisting) {
                await Event.findByIdAndDelete(event_id);
                res.json({msg:'deleted successfully'})
            }else{
                res.json({msg:"Event doesnot Exist! Pass a valid id"})
            }
        } catch (error) {
            res.json({msg:"Server Error!"})
        }
    }
}