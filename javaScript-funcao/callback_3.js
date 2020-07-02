// Exemplo de callback no Browser
document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('O evento ocorreu!')
}

// Após essa callback ser registrada no Browser, a mensagem "O evento ocorreu!"
// somente será exibida no console quando o evento "onclick" for disparado.