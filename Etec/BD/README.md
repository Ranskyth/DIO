## Atividade Fluery

## Como utilizar

### 🏁 Atividade Fluery

Para executar este banco de dados:

1. Abra seu gerenciador MySQL (ex: MySQL Workbench).
2. Copie e cole o conteúdo do script SQL (`script.sql`).
3. Execute o script para criar e popular o banco `script.sql`.
4. Utilize queries SQL para explorar os dados e realizar análises.

---

## Tabelas e Relacionamentos

### 1. Faixa_Etaria
Define as faixas de idade dos pacientes.
- `id`: Identificador único.
- `descricao`: Nome da faixa.
- `idade_min`: Idade mínima.
- `idade_max`: Idade máxima.

### 2. Pacientes
Contém os dados pessoais dos pacientes.
- `id`: Identificador único.
- `nome`, `data_nascimento`, `sexo`.
- `faixa_etaria_id`: Chave estrangeira para `Faixa_Etaria`.

**Relacionamento:** Muitos pacientes pertencem a uma faixa etária (N:1).

### 3. Diagnosticos
Lista os diagnósticos possíveis.
- `id`: Identificador.
- `nome`: Nome do diagnóstico.

### 4. Medicacoes
Define os medicamentos disponíveis.
- `id`: Identificador.
- `nome`, `tipo`.

### 5. Eventos_Climaticos
Registra eventos relacionados ao clima.
- `id`, `tipo`, `intensidade`, `data_ocorrencia`.

### 6. Consultas
Registra consultas dos pacientes.
- `id`, `paciente_id`, `diagnostico_id`, `evento_climatico_id`, `data`, `retorno_em_dias`.

**Relacionamentos:**
- Cada consulta é associada a um paciente (N:1).
- Cada consulta tem um diagnóstico (N:1).
- Cada consulta pode estar ligada a um evento climático (N:1).

### 7. Uso_Medicacoes
Registra o uso de medicamentos nas consultas.
- `id`, `consulta_id`, `medicacao_id`, `frequencia`.

**Relacionamentos:**
- Muitas medicações podem ser usadas por consulta (N:M com tabela intermediária).

---

## Resumo dos Relacionamentos

- Pacientes → Faixa_Etaria (N:1)
- Consultas → Pacientes (N:1)
- Consultas → Diagnosticos (N:1)
- Consultas → Eventos_Climaticos (N:1)
- Uso_Medicacoes → Consultas (N:1)
- Uso_Medicacoes → Medicacoes (N:1)

---

## Objetivo

Este banco serve para análises de como eventos climáticos influenciam na saúde (diagnósticos, medicações, taxa de retorno) por idade e outros fatores.
