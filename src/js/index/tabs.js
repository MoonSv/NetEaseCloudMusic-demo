{
    let view = {
        el: "#tabs"
    };
    let model = {

    };
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.bindEvents();
        },
        bindEvents: function(){
            let tabs = $(this.view.el);
            tabs.on('click', 'li', (e)=>{
                let li = $(e.currentTarget);
                let tabName = li.attr('data-tab-name');
                console.log(`tabName = ${tabName}`)
                li.addClass("active").siblings().removeClass('active');
                window.eventHub.emit('selectTab', tabName);
            })
        }
    }
    controller.init(view, model);
}