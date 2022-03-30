const express = require('express');
const app = express();
const port = 5050;
const mongoose = require('mongoose');

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Event System is Online')
  })
app.use('/event', require("./route/event.js"));

app.listen(port, () => {
    console.log(`Event System Server listening on port ${port}`)
  })

  main().catch(err => console.log(err));
  async function main() {
    //conncetion is made visible here for the assignment , 
    //But never expose this connection configuration in code
    await mongoose.connect('mongodb://127.0.0.1:27017/EventSystem',{
      useNewUrlParser:true, useUnifiedTopology:true})
      .then(() => {console.log("Db listening")}).catch((err)=>{
        console.log('Error while connecting',err);
      });
    };
  