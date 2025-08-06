## 🦇 Bat Signal Challenge

Desafio com foco em TypeScript e React Native (Expo). O objetivo é criar uma aplicação inspirada no clássico **Bat-Signal**, com interface mobile para registrar incidentes e exibir alertas visualmente.

### 📁 Estrutura do repositório

```
bat-signal-challenge/
├── assets/                 # Imagens, ícones e outros recursos visuais
├── src/                    # Código-fonte da aplicação
│   ├── components/         # Componentes reutilizáveis
│   ├── app/                # Telas da aplicação
|   |── models/             # Interfaces typescript
|   |── styles/             # Estilos
└── app.json                # Configurações do Expo
├── babel.config.js         # Configuração do Babel
├── declarations.d.ts       # Tipagens adicionais
├── package.json            # Dependências, scripts e metadados
├── tsconfig.json           # Configurações do TypeScript
```

### ✨ Funcionalidades

- Solicitar ajuda através de um Botão (TouchableOpacity)
- Informar quem, por que e algo a mais
- Será exibida mensagem e imagem utilizando animação Fade-in-out
- Roteamento através do expo-router
- Uso de **TypeScript** para tipagem segura.

### 🚀 Instalação e execução

```bash
git clone https://github.com/rudneisantiago/bat-signal-challenge.git
cd bat-signal-challenge
npm install
npm run start
```

### 🧠 Tecnologias utilizadas

- **React Native / Expo** — desenvolvimento mobile multiplataforma
- **TypeScript** — tipagem robusta e segurança no código
- **Expo router** — para navegação entre telas
