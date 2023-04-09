function logar(){   
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "rodrigo" && senha == "123456"){
        location.href = "visita.html";
    }else{
        alert('Usuário ou senha incorreto')
    }
}