window.eventHub = {
    events: {

    },
    emit: function(eventsName, data){
        for( event in events){
            if (event === eventsName){
                events[event].map((fn) => {
                    fn.call(undefined, data);
                })
            }
        }
    },
    on: function(eventsName, fn){

    }
}