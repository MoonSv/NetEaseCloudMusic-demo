{
    let view = {
        el: 'section.latest-music .musics',
        render(data) {
            data.map((music)=>{
                let li = $(`
                <li>
                <a href="./music.html?id=${music.id}">
                <div class="text-wrapper">
                    <p class="music-name">${music.name}</p>
                    <div class="artist-wrapper">
                        <img src="./img/SQ.svg" alt="" width=12>
                        <span class="artist">${music.artist}</span>
                    </div>
                </div>
                <div class="logo">
                    <img src="./img/play.svg" alt="" width=25>
                </div>
                </a>
            </li>`)
            $(this.el).append(li)
            })
        }
    }
    let model = {
        data: {
            musics: []
        },
        find() {
            var query = new AV.Query('Music');
            return query.find().then((musics) => {
                // 如果这样写，第二个条件将覆盖第一个条件，查询只会返回 priority = 1 的结果
                this.data.musics = musics.map((music) => {
                    return {
                        id: music.id,
                        ...music.attributes
                    }
                })
                return musics
            })
        }
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            this.view.render(this.model.data.musics)
            this.model.find().then(() => {
                this.view.render(this.model.data.musics)
            })
        }
    }
    controller.init(view, model)
}