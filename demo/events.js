const EventEmitter = require("events");

const emitter = new EventEmitter()


//Create emitter listener
emitter.on("anything", data =>{
    console.log("ON: anything", data)
})

//Create event
emitter.emit("anything", {a:1})

setTimeout(()=>emitter.emit("anything", "Event is happen"),3000)

class Dispatcher extends EventEmitter{
    subscribe(eventName,callback){
        console.log("Subscribe...")
        this.on(eventName, callback)
    }
    dispatch (eventName, data){
        console.log("Dispatch...")
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe("Event1",(data)=>{
    console.log("ON: Event1", data)
})

dis.dispatch("Event1", "Some data")