var ajax = new XMLHttpRequest();

// Seta tipo de requisição e URL com os parâmetros
ajax.open("GET", "http://192.168.0.104:3000/", true);

// Envia a requisição
ajax.send();

// Cria um evento para receber o retorno.
ajax.onreadystatechange = function () {
  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
  if (ajax.readyState == 4 && ajax.status == 200) {
    var data = ajax.responseText;
    console.log(data);

    // Retorno do Ajax
    $("#comment").html(data);
  }
};
