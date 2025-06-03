# Integração entre Node.js e Flask  

## Integrantes: Gabriel Majeau & Lerry Pereira. 

### Introdução: 

Este documento descreve o desenvolvimento e funcionamento de um sistema composto pelo Node.js e outra em  Flask, que utiliza python. O objetivo do projeto é demonstrar a integração entre as linguagens por meio de comunicação HTTP utilizando uma API REST. A aplicação Node.js funciona como cliente, enviando requisições para a API criada em Flask, que responde com uma mensagem fixa.  

### Estrutura do Projeto: 

 flask_app/: aplicação em Python com Flask que atua como servidor. 

 node_client/: aplicação em Node.js que consome a API do Flask que exibe a mensagem, atuando como o cliente. 

### Visão Geral da Comunicação: 

A comunicação entre as aplicações segue o padrão REST, utilizando o método HTTP POST para troca de dados. A aplicação Node.js envia uma requisição contendo um corpo JSON. O Flask, por sua vez, processa a requisição e responde com uma mensagem que no caso, nunca muda. De forma técnica: 

O Node.js envia uma requisição HTTP contendo um método POST e o flask responde com o resultado: “Amo o professor harrison”. 

### Explicação do Código: 

No lado do servidor (Flask), criamos uma rota `/executar` que aceita requisições do tipo POST. Ao receber a requisição, a função ignora o conteúdo e simplesmente retorna uma mensagem JSON fixa. No cliente (Node.js), utilizamos a biblioteca Axios para realizar a chamada HTTP, capturar a resposta e exibi-la no terminal. 

 
---
 
RODAR O FLASK
----------------------------
cd flask_app

pip install -r requirements.txt

python app.py

RODAR O NODE
-------------------------------
Abra outro terminal ou nova aba no VS Code

cd node_client

npm install

node index.js


