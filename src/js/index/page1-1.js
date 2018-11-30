{
    let view = {
        el: 'section.suggestion-list',
        render(){
            
        }
    }
    let model = {
        data: []
    }
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render()

        }
    }
}