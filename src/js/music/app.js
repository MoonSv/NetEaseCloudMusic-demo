{
    let view = {
        el: '#music-wrapper',
        // template: `<audio autoplay src={{url}}></audio>`,
        render(url){
            $(this.el).find('audio')[0].src = url
        }
    }
    let model = {
        data: {
            id: '',
            name: '',
            artist: '',
            url: ''
        },
        getMusicInfo() {
            let tmp = window.location.search.split('?').filter(v => v)
            for (let i = 0; i < tmp.length; i++) {
                let key = tmp[i].split('=')[0]
                let value = tmp[i].split('=')[1]
                if (key === 'id') {
                    this.data.id = value;
                }
            }
            var query = new AV.Query('Music');
            return query.get(this.data.id).then((music)=>{
                // 获取音乐信息成功
                console.log(music)
                Object.assign(this.data, music.attributes)
                // console.log(this.data)
            }, function (error) {
                // 异常处理
            });
        }
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            this.model.getMusicInfo().then(()=>{
                this.view.render(this.model.data.url)
            })
            this.bindEvents()
            
        },
        bindEvents(){
            $(this.view.el).find('.music-light').on('click', ()=>{
                $(this.view.el).find('audio')[0].play();
                $(this.view.el).find('.music-img').toggleClass('active');
                $(this.view.el).find('.dist .play-icon').toggleClass('playing');
            })
        }
    }
    controller.init(view, model)
}