<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Folha de Pagamento</title>
    <link rel="stylesheet" href="./styles/style.css">
    <link rel="stylesheet" href="./styles/responsividade.css">
</head>

<body>
    <main>
        <section>
            <img src="https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2025/04/nova-tabela-do-imposto-de-renda-comeca-a-valer-em-maio-veja-o-que-muda/tabela-atualizada-do-imposto-de-renda.jpg/@@images/74640067-d778-4f3e-b1b7-0bdb96dff6ff.jpeg" alt="">
            <form action="/" method="post">
                <input type="number" name="salario">
                <button type="submit">Calcular</button>
            </form>
        </section>
    </main>
    <?php
    function calc_ir($salarioBruto)
    {
        if ($salarioBruto < 2428.80) {
            return 0;
        }
        if ($salarioBruto < 2826.65) {
            return 7.5;
        }
        if ($salarioBruto < 3751.05) {
            return 15;
        }
        if ($salarioBruto < 4664.68) {
            return 22.5;
        }
        return 27.5;
    }
    function main()
    {
        $salario = htmlspecialchars($_POST['salario']);

        $ir = calc_ir($salario);

        $valorDesconto = $salario * $ir / 100;
        $salarioLiquido = $salario - $valorDesconto;

        echo "<article class='salario'>Salario Bruto R$ : $salario <br> Aliquota do IR(%) : $ir% <br> Valor do Desconto : $valorDesconto <br> Salario Liquido : $salarioLiquido</article>";
    }
    main();
    ?>
</body>

</html>