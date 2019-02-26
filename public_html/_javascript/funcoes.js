function mudaFoto(foto){
    document.getElementById("img_oculos_pequeno").src = foto;
}

function calc_total(){
    var qtd = parseInt(document.getElementById('spn_qntd').value);
    tot = qtd * 1500;
    document.getElementById('txt_total').value = tot;
}