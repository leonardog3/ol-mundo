function carregar () {
    var txt = document.getElementById ('msg')
    var ft = document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    
    txt.innerHTML = (`agora são exatamente ${hora} horas .`)
    
    if (hora >= 0 && hora < 12) {
        ft.src = 'manha.png'
        document.body.style.background = 'blue baby' // BOM DIA 
    }
    else if (hora >= 12 && hora < 18 ) {
        ft.src = 'tarde.png'
        document.body.style.background = ('orange ') // BOA TARDE 
    }
    else {
        ft.src = 'noite.png'
        document.body.style.background = 'gray' // BOA NOITE
    }
    
    
    
    }