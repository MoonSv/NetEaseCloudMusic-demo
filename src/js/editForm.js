{
    let view = {
        el: '.wrapper .main .edit-form',
        template: `
        <form action="">
            <div class="row">
                <label for="">音乐名称</label>
                <input type="text">
            </div>
            <div class="row">
                <label for="">艺术家</label>
                <input type="text">
            </div>
            <div class="row">
                <label for="">URL</label>
                <input type="text">
            </div>
            <div class="row">
                <button type="submit">更新</button>
            </div>
        </form>
        `,
        render: function(data){
            $(this.el).html(this.template)
        }
    };
    let model = {};
    let controller = {
        init: function(model, view){
            this.model = model;
            this.view = view;
            this.view.render(model.data)
        },
        reset = function(data){
            console.log(data);
        }
    }
    controller.init(model, view);
    window.app.editForm = controller;
}