class Status {

    static main = document.querySelector('.content__status')
    static templateYes(name) {
        this.main.classList.remove('remover')
        this.main.innerHTML = `
         <div class='content__status--element'>
                <div class='content__status--elementTitle'>  
                    <h2 class='content__status-title'>Status</h2>
                </div>
                <p class='content__status-text'>${name}</p>
                <div class='content__status-colorGreen'></div>
                <button class='buttonExit' type=button>X</button>
         </div>
        `

        setTimeout(()=>{
            this.main.classList.add('remover')
        },10800)
    }

    static templateNo(name) {
        this.main.classList.remove('remover')
        this.main.innerHTML = `
        
                <div class='content__status--element'>
                <div class='content__status--elementTitle'>  
                <h2 class='content__status-title'>Status</h2>
                </div>
                <p class='content__status-text'>${name}</p>
                <div class='content__status-colorRed'></div>
                <button class='buttonExit' type=button>X</button>
            </div>    
        `
        setTimeout(()=>{
            this.main.classList.add('remover')
        },10800)
    }
}

export {Status}