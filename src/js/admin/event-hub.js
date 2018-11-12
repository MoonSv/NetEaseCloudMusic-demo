window.eventHub = {
    events: {

    },
    emit: function(eventsName, data){
        for( event in this.events){
            if (event === eventsName){
                this.events[event].map((fn) => {
                    fn.call(undefined, data);
                })
            }
        }
    },
    on: function(eventsName, fn){
        console.log(`绑定了${eventsName}事件`);
        if (this.events[eventsName] === undefined){
            this.events[eventsName] = [];
        }
        this.events[eventsName].push(fn);
    }
}