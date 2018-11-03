{
    let view = {
        el: ".wrapper .main .music-list",
        template: `
        <ul>
            <li>
                <img width=100% height=100 src="./img/music-cover.png" alt="">
                <div class="music-detail">
                    <p>那些你很冒险的梦</p>
                    <p>林俊杰</p>
                </div>
            </li>
            <li>
                <img width=100% height=100 src="./img/music-cover.png" alt="">
                <div>
                    <p></p>
                    <p></p>
                </div>
            </li>
            <li>
                <img width=100% height=100 src="./img/music-cover.png" alt="">
                <div>
                    <p></p>
                    <p></p>
                </div>
            </li>
            <li>
                <img width=100% height=100 src="./img/music-cover.png" alt="">
                <div>
                    <p></p>
                    <p></p>
                </div>
            </li>
            <li>
                <img width=100% height=100 src="./img/music-cover.png" alt="">
                <div>
                    <p></p>
                    <p></p>
                </div>
            </li>
            <li>
                <img width=100% height=100 src="./img/music-cover.png" alt="">
                <div>
                    <p></p>
                    <p></p>
                </div>
            </li>
            <li>
                <img width=100% height=100 src="./img/music-cover.png" alt="">
                <div>
                    <p></p>
                    <p></p>
                </div>
            </li>
            <li>
                <img width=100% height=100 src="./img/music-cover.png" alt="">
                <div>
                    <p></p>
                    <p></p>
                </div>
            </li>
        </ul>
        `,
        render: function(data){
            $(this.el).html(this.template);
        }
    };
    let model = {};
    let controller = {
        init: function(model, view){
            this.model = model;
            this.view = view;
            this.view.render(model.data);
        },
    };
    controller.init(model, view);
    
}