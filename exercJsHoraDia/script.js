
function carregar() {
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('imagem')
 var data = new Date()
 var hora =  data.getHours() 
 var min = data.getMinutes()
 
 msg.innerHTML = `Agora são ${hora}:${min}   !`

 if (hora >= 0 && hora < 12){
     // Bom Dia!
     img.src = '_imagens/fotodia.png'
     document.body.style.background ='#f5b681'
 }else if (hora >= 12 && hora <= 18){
     // Boa Tarde
     img.src = '_imagens/fototarde.png'
     document.body.style.background ='#f87d0d'
 }else {
     //Boa Noite
     img.src = '_imagens/fotonoite.png'
     document.body.style.background ='#38383a'
 }

}