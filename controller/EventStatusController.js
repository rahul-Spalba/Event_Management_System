const { Event } = require("../schema");

module.exports = {
    fetchUpcomingEvents: async (req, resp) =>{
        const today = new Date((new Date().getTime()+(5*60*60*1000 + 30*60*1000)));// local date time conversion
        console.info('today', today);
        const next = new Date((new Date().getTime() + ((24 * 60 * 60 * 1000)+(5*60*60*1000 + 30*60*1000))));
        console.info('tommorrow',next);
        const sameDate = await Event.find({start_time:{
            $gte: today,
            $lte: next}
        });
        if(sameDate.length){return resp.json({msg:"Upcoming events fetched successfully", data: sameDate});
        }else{
            return resp.json({msg:"There is no upcoming event for the day!"})
        }

    },
    fetchLiveEvent: async (req, resp) =>{
        const systemLocal = new Date((new Date().getTime()+(5*60*60*1000 + 30*60*1000))); // local Date time conversion
        const bufferTime = new Date((new Date().getTime()+(5*60*60*1000 + 20*60*1000)));
        
        const liveEvent = await Event.find({start_time:{
            $gte : bufferTime,
            $lte: systemLocal}
        });
        if(liveEvent){return resp.json({msg:"Live events fetched successfully", data: liveEvent});
        }else{
            return resp.json({msg:"No  Live  Events Currently!!"})
        }

    }
}