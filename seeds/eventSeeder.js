const { default: mongoose } = require("mongoose");
const { Event } = require("../schema");

const eventsFoSeeding = [
    {
        name:  "Event One @2022", // String is shorthand for {type: String}
        description: "Event Seeder",
        headline:   "Seeds seeds",
        start_time: new Date("2021-11-20T12:05:45"),
        duration: "30",
        isLive:false,
    },
    {
        name:  "Event Two @2022", // String is shorthand for {type: String}
        description: "Event Two Event Seeder",
        headline:   "Event Two Seeds seeds",
        start_time: new Date("2021-11-20T12:05:45"),
        duration: "30",
        isLive:false,
    },
    {
        name:  "Event Three @2022", // String is shorthand for {type: String}
        description: "Event Three @2022",
        headline:   "Event Three @2022",
        start_time: new Date("2021-11-20T12:05:45"),
        duration: "30",
        isLive:false,
    },
]
async function run(){
    console.log("running function");
    await mongoose.connect('mongodb://127.0.0.1:27017/EventSystem',{
        useNewUrlParser:true, useUnifiedTopology:true}).then(async () =>{
            const events = await Event.insertMany(eventsFoSeeding);
            if(events){
                console.info("inserted Events".events);
            }
        });
    await mongoose.disconnect();
    }

run();
