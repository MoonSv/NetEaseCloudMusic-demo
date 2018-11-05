{
    let view = {
        el: '.wrapper .main .edit-form',
        template: `
        <form action="">
            <div class="row">
                <label for="">音乐名称</label>
                <input name="name" type="text" value="__musicName__">
            </div>
            <div class="row">
                <label for="">艺术家</label>
                <input name="artist" type="text" value="">
            </div>
            <div class="row">
                <label for="">URL</label>
                <input name="url" type="text" value="__url__">
            </div>
            <div class="row">
                <button type="submit">更新</button>
            </div>
        </form>
        `,
        render: function (data = {}) {
            let html = this.template;
            let keys = ['musicName', 'url'];
            keys.map((key) => {
                html = html.replace(`__${key}__`, data[key] || '')
            })
            $(this.el).html(html)
        }
    };
    let model = {};
    let controller = {
        init: function (model, view) {
            this.model = model;
            this.view = view;
            this.view.render(model.data)
            // 从eventHub那里监听（订阅）一下upload时间
            this.bindEvents();
            window.eventHub.on('upload', (data) => {
                this.reset(data)
                // console.log(window.eventHub)
            })
        },
        reset: function (data) {
            console.log('开始重制form')
            console.log(data);
            this.view.render(data);
        },
        bindEvents: function () {
            $(this.view.el).on('submit', 'form', (e) => {
                e.preventDefault();
                let keys = ['name', 'artist', 'url'];
                let data = {};
                keys.map((key) => {
                    data[key] = $(this.view.el).find(`input[name=${key}]`).val();
                })
                console.log(data);
                // 声明类型
                let Music = AV.Object.extend('Music');
                // 新建对象
                let music = new Music();
                for (let key in data) {
                    music.set(key, data[key]);
                }
                music.save().then(function (response) {
                    // 发射事件
                    window.eventHub.emit('createCard', response.attributes);
                }, function (error) {
                    console.error(error);
                });
            })
        }
    }
    controller.init(model, view);
}