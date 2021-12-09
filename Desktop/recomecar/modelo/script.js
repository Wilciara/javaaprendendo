function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >=0 && hora <12){
    img.scr = 'manha.png'
}else if (hora >=12 && hora <18){
    img.scr = 'tarde.png'
}else{
    img.scr = 'noite.png'
}
}