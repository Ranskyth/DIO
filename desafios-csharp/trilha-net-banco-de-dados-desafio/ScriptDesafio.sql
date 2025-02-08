SELECT Nome, Ano FROM Filmes

SELECT Nome, Ano, Duracao FROM Filmes ORDER BY Ano ASC

SELECT Nome, Ano, Duracao FROM Filmes WHERE UPPER(Nome) = 'DE VOLTA PARA O FUTURO'

SELECT Nome, Ano, Duracao FROM Filmes WHERE Ano = 1997

SELECT Nome, Ano, Duracao FROM Filmes WHERE Ano > 2000

SELECT Nome, Ano, Duracao FROM Filmes WHERE Duracao BETWEEN 100 AND 150 ORDER BY Duracao ASC

SELECT Ano, COUNT(*)AS Quantidade FROM Filmes group by Ano 

SELECT PrimeiroNome, UltimoNome FROM Atores WHERE Genero='M'

SELECT PrimeiroNome, UltimoNome FROM Atores WHERE Genero='F' ORDER BY PrimeiroNome

SELECT FM.Nome, G.Genero 
FROM Filmes FM
INNER JOIN FilmesGenero FG ON FG.IdFilme = FM.Id
INNER JOIN Generos G ON G.Id = FG.IdGenero

SELECT FM.Nome, G.Genero 
FROM Filmes FM
INNER JOIN FilmesGenero FG ON FG.IdFilme = FM.Id
INNER JOIN Generos G ON G.Id = FG.IdGenero
WHERE G.Genero = 'Mistério'

SELECT FM.Nome, A.PrimeiroNome, A.UltimoNome, EF.Papel 
FROM Filmes FM
INNER JOIN ElencoFilme EF ON EF.Id = FM.Id
INNER JOIN Atores A ON A.Id = EF.IdAtor 