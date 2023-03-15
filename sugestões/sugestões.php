<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obrigado!</title>
</head>
<body>
    <h1>Obrigado por nos ajudar!</h1>
    <?php 
        date_default_timezone_set("America/Sao_Paulo");  // definindo fuso horario de SP
        $momento = date("d/M/Y G:i:s"); // criando uma variavel com a data e a hora
        $entrada = $_REQUEST["sugestões"]; // capturando dados e colocando uma variável 

        $reg = fopen("sugestões.txt", "a"); // criando uma variavel de abertura de arquivo, no modo 'a', que apenas adiona sem sobescrever
        fwrite($reg, "\n$momento\n$entrada"); // comando de escrever no arquivo o texto indicado
        fclose($reg); // fechando arquivo
    ?>
</body>
</html>