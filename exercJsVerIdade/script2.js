function verificar() {
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
       var fsex= document.getElementsByName('radsex')
       var idade= ano - Number(fano.value)
       var genero= ''
       var img= document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0].checked) {
           genero= 'Homen'
           if (idade >= 0 && idade < 10){
               // criança
               img.setAttribute('src', '_imagens/criancaM.png')
           }else if (idade < 21) {
               // Jovem
               img.setAttribute('src', '_imagens/jovemM.png')
           }else if (idade < 50) {
               // Adulto
               img.setAttribute('src', '_imagens/adulto.png')
           }else {
               //Idoso
               img.setAttribute('src', '_imagens/idoso.png')
           }

       }else if (fsex[1].checked) {
           genero= 'Mulher'
           if (idade >= 0 && idade < 10){
            // criança
            img.setAttribute('src', '_imagens/criancaF.png')
        }else if (idade < 21) {
            // Jovem
            img.setAttribute('src', '_imagens/jovemF.png')
        }else if (idade < 50) {
            // Adulto
            img.setAttribute('src', '_imagens/adulta.png')
        }else {
            //Idoso
            img.setAttribute('src', '_imagens/idosa.png')
        }
       }
       res.style.textAlign= 'center'
       res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

}