# 🌊 API de Monitoramento e Alerta de Alagamentos

## 🎯 Objetivo do Trabalho
O objetivo principal deste projeto é demonstrar a capacidade de integrar sistemas heterogêneos através do desenvolvimento de uma **API REST**.  

A API atua como um **hub central** para coletar dados de sensores de monitoramento de alagamentos e distribuí-los para sistemas de alerta e informação, como aplicativos de defesa civil ou sites comunitários.  

A solução visa fornecer **informações em tempo real** para a população de bairros costeiros, minimizando riscos e agilizando a resposta a eventos de alagamento.

---
<br>

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/)  
- [Mongoose](https://mongoosejs.com/)  
- [Nodemon](https://www.npmjs.com/package/nodemon)

---
<br>

## 📦 Como Executar a API

1. **Clonar o repositório**
   ```bash
   https://github.com/cristianosolutions/api-alagamentos      
2. **Entrar na pasta do projeto**
   ```bash
   cd api-alagamentos
3. **Instalar as dependências**
   ```bash
   npm install
4. **No terminal, execute o comando para iniciar o servidor**
   ```bash
   npm start   
   ```
   Você deverá ver a mensagem: Servidor rodando na porta 3000 e MongoDB Conectado: localhost
   
6. **Rodando os Testes**
   <br>
   Para rodar os testes unitários e verificar se tudo está funcionando como o esperado
   ```bash
   npm test
   ```
   O Jest irá executar todos os testes e você deverá ver um resultado como `4 passed, 4 total`, confirmando que sua API está robusta e confiável.
   <br>

---
<br>

## 🚀 Instruções de Execução via Postman

   **Para testar a API, siga os passos:**

1. Certifique-se de que o servidor **Node.js** esteja rodando e o **MongoDB**:
   ```bash
   npm start
   ```
   Executa o servidor **Node.js**
2. Utilize a coleção JSON abaixo para importar todas as rotas e requisições para o seu cliente HTTP
   <br>
   (Postman).
   
   👉 [Aqui está a coleção pronta para importar:](https://github.com/cristianosolutions/api-alagamentos/blob/main/src/postman/collection.json)
   
4. No **Postman:** File -> Import -> Raw text e cole o JSON.
   <br><br>
   Após importar, você terá uma coleção com as duas requisições prontas para uso.

---

<br>

## Documentação API

[Clique aqui para visualizr a documentação da API:](https://github.com/cristianosolutions/api-alagamentos/blob/main/doc/architecture.md)

<br><br>   

   
