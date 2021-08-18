function verificar() {
    let txtv = document.querySelector('input#txtvel')
    let res = document.querySelector('div#res')
    let vel = Number(txtv.value)

    res.innerHTML = `Sua velocidade é ${vel} km/h`
    res.style.display = 'block'

    if (vel > 60 ) {

        res.innerHTML += '<p>Você ultrapassou o limite, está <strong>MULTADO!</strong></p>'
        
        res.style.display = 'block'
        res.style.background = 'red'
        res.style.color = 'white'

    } else {

        res.style.background = 'white'
        res.style.color = 'black'
    }
    

    res.innerHTML += '<p><strong>Dirija com Cuidado!</strong></p>'
}