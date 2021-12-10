function verificar() {
    let data = new Date ()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente !')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'menino.png')

            }else if(idade < 21){
                img.setAttribute('src', 'jovemm.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto.png')

            }else {
                img.setAttribute('src', 'idoso.png')

            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'menina.png')

            }else if(idade < 21){
                img.setAttribute('src', 'jovemf.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulta.png')

            }else {
                img.setAttribute('src', 'idosa.png')
                
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}