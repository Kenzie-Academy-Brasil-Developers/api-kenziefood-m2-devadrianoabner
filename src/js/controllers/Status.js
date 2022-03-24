class Status {

    static main = document.querySelector('.content__status')
    static templateYes(name) {
        this.main.classList.remove('remover')
        this.main.innerHTML = `
        <div class="status__modal">
        <div class="modal__title">
            <p class="modal__title--format" >Status</p>
            <button class="resmodal__title--resize" >X</button>
            </div>
            <div class="modal__description">
            <p class="modal__description--format">${name}</p>
            <div class="modal__color--resize"></div>
            </div>
    
        </div>
        `

        setTimeout(()=>{
            this.main.classList.add('remover')
        },4000)
    }


    static templateNo(name) {
        this.main.classList.remove('remover')
        this.main.innerHTML = `
        <div class="status__modal">
        <div class="modal__title">
            <p class="modal__title--format" >Status</p>
            <button class="resmodal__title--resize" >X</button>
            </div>
            <div class="modal__description">
            <p class="modal__description--format">${name}</p>
            <div class="modal__color--resizeRed"></div>
            </div>
        </div>
        `
        setTimeout(()=>{
            this.main.classList.add('remover')
        },4000)
    }
}

export {Status}