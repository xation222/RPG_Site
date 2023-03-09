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
        date_default_timezone_set("America/Sao_Paulo");
        $momento = date("d/M/Y G:i:s");
        $entrada = $_GET["sugestões"];

        $reg = fopen("sugestões.txt", "a");
        fwrite($reg, "\n$momento\n$entrada");
        fclose($reg);
    ?>
</body>
</html>