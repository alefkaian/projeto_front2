function enviar_mensagem(){
	txt_nome = document.getElementById("nome")
	txt_email = document.getElementById("email")
	txt_msg = document.getElementById("msg")
	if (txt_nome.value && txt_email.value && txt_msg.value){
		mostrar_erro(false)
		var mensagem = {
			nome: txt_nome.value,
			email: txt_email.value,
			mensagem: txt_msg.value
		}
		inserirMensagem(mensagem)
		txt_nome.value = ""
		txt_email.value = ""
		txt_msg.value = ""
		alert("Mensagem enviada.")
	}
	else mostrar_erro(true)
}

function mostrar_erro(tipo){
	if (tipo == true){
		document.getElementById("msg_erro").innerHTML = "Preencha todos os campos"
	}
	else document.getElementById("msg_erro").innerHTML = ""
	
}