{
    let view = {
        el: ".wrapper .main .music-list ul",
        template: ``,
        render: function (data) {
            let renderData = data.map((music) => {
                return (
                    `<li data-id=${music.id}>
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
            $(this.view.el).on('click', 'li', function (e) {
                $(e.currentTarget).addClass('active').siblings().removeClass('active');
                let musicID = $(e.currentTarget).attr('data-id');
                let musicData;
                for (let i = 0; i < this.model.musics.length; i++){
                    let music = this.model.musics[i]
                    console.log(music)
                    if (music.id === musicID){
                        musicData = music;
                        break
                    }
                }
                window.eventHub.emit('clickCard', musicData);
            }.bind(this))
        }
    };
    controller.init(model, view);
}