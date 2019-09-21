/**/
$(document).ready(function(){

    /*autenticação do login para entrar apenas se o usuario e senha for admin e exibir mensagem caso não for*/ 
    $(document).on("click", "#logar", function(){
        var usuario = $("#usuario").val();
        var senha = $("#senha").val();

        if(usuario == "admin" && senha == "admin"){
            $(location).attr("href", "menu.html");
        } else if(usuario != "admin" && senha != "admin"){
            $("#mensagemUsuario").html("usuario está incorreto, por favor tentar novamente");
            $("#mensagemUsuario").css("color", "red");

            $("#mensagemSenha").html("senha está incorreto, por favor tentar novamente");
            $("#mensagemSenha").css("color", "red");
        } else if(usuario != "admin"){
            $("#mensagemUsuario").html("usuario está incorreto, por favor tentar novamente");
            $("#mensagemUsuario").css("color", "red");
        } else if(senha != "admin"){
            $("#mensagemSenha").html("senha está incorreto, por favor tentar novamente");
            $("#mensagemSenha").css("color", "red");
        }  
    });
});
