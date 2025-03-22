<?php
$ano = 2023;

function exibir(){
    global $ano;
    $ano += 2;
    return $ano;
}
echo "variavel<br>";
for($i = 0 ; $i < 10;$i++){
    echo $ano."<br>";
}

echo "<br>função exibir<br>";

for ($i = 0; $i < 10; $i++){
    echo exibir()."<br>";
}
echo exibir();

?>