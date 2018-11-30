{

    let view = {
        el: ".tab-content .page1",
        show() {
            $(this.el).addClass('active')
        },
        hide() {
            $(this.el).removeClass('active')
        }
    }
    let model = {

    }
    let controller = {
        init(view, model) {
            this.view = view;
            this.model = model;
            this.bindEventHub()
            this.loadModule('page1-1.js')
            this.loadModule('page1-2.js')
        },
        bindEventHub() {
            window.eventHub.on('selectTab', (tabName) => {
                if (tabName === "page1") {
                    this.view.show()
                } else {
                    this.view.hide()
                }
            })
        },
        loadModule(jsFile) {
            let script = document.createElement('script')
            script.src = `./js/index/${jsFile}`
            document.body.appendChild(script);
            script.onload = function () {
                console.log(`${jsFile}加载成功`)
            }
        }
    }
    controller.init(view, model)
}