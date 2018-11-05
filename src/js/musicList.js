{
    let view = {
        el: ".wrapper .main .music-list ul",
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
        render: function (data) {
            console.log(data);
            let renderData = data.map((music) => {
                return (
                    `<li>
                    <img width=100% height=100 src="./img/music-cover.png" alt="">
                    <div class="music-detail">
                        <p>${music.name}</p>
                        <p>${music.artist}</p>
                    </div>
                </li>`)
            })
            $(this.el).html(renderData);
        }
    };
    let model = {
        musics: [],
        fetchAllMusic() {
            // 批量获取
            var query = new AV.Query('Music');
            return query.find().then(results => {
                console.log(results);
                // 返回一个符合条件的 list
                this.musics = results.map((music) => {
                    return {id: music.id, ...music.attributes}
                }, (error)=>{
                    console.log(error)
                })
            })
            
        },
    };
    let controller = {
        init(model, view) {
            this.model = model;
            this.view = view;
            this.renderMusic();
            this.bindEvents();
            window.eventHub.on('createCard', (music) => {
                this.model.musics.push(music);
                this.view.render(model.musics);
            })
        },
        renderMusic(){
            this.model.fetchAllMusic().then(()=>{
                this.view.render(this.model.musics);
            }, (error)=>{
                console.log(error);
            });
        },
        bindEvents() {
            console.log('绑定！')
            $(this.view.el).on('click', 'li', function (e) {
                console.log(e.currentTarget);
                $(e.currentTarget).addClass('active').siblings().removeClass('active');
            })
        }
    };
    controller.init(model, view);

}

let Animal = {
    eat: function () {
        console.log('eat');
    }
}