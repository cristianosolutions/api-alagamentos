1. Pré-requisitos
Primeiro, certifique-se de que você tem o Node.js e o MongoDB instalados na sua máquina. A API vai precisar deles para rodar.


2. Instalar os pacotes npm no terminal. Execute o comendo:

npm install

- Com isso vai criar a pasta node_modules e instalar todas as dependências do projeto

3. Como rodar a API?

- Abra o Terminal Integrado no VS Code, se ele ainda não estiver aberto.
- Digite o comando abaixo e pressione Enter:
    npm start

4. Como rodar os teste?

- Abra um segundo terminal Integrado no VS Code.
- Digite o comando abaixo e pressione Enter:
    npm test
	
	
	API de Monitoramento e Alerta de Alagamentos
	
Objetivo do Trabalho

O objetivo principal deste projeto é demonstrar a capacidade de integrar sistemas heterogêneos através do desenvolvimento de uma API REST. A API atua como um hub central para coletar dados de sensores de monitoramento de alagamentos e distribuí-los para sistemas de alerta e informação, como aplicativos de defesa civil ou sites comunitários. A solução visa fornecer informações em tempo real para a população de bairros costeiros, minimizando riscos e agilizando a resposta a eventos de alagamento.

Descrição Funcional da Solução

A API é o elo de comunicação entre dois sistemas principais:

Sistema de Monitoramento (Sistema 1): Consiste em sensores ou dispositivos IoT que medem o nível da água em áreas de risco. Quando um nível crítico é detectado, este sistema envia um alerta para a API.

Sistema de Alerta e Informação (Sistema 2): Pode ser um aplicativo móvel da defesa civil ou um portal web comunitário. Este sistema consulta a API periodicamente para verificar o status de alagamentos em bairros específicos e exibe alertas para os moradores.

A API simplifica essa comunicação, garantindo que os dados de alagamento cheguem de forma rápida e padronizada aos destinatários finais.

Arquitetura da API e Diagrama
A arquitetura da API segue o padrão Cliente-Servidor e é baseada em camadas para garantir modularidade e separação de responsabilidades. O protocolo de comunicação utilizado é o REST (HTTP).

Diagrama de Arquitetura:

graph TD
    subgraph "Sistema de Monitoramento"
        A[Sensor de Nível de Água]
        B[Dispositivo IoT]
    end

    subgraph "Nossa API (Servidor)"
        C(Endpoint POST /alertas)
        D(Lógica do Controller)
        E[Modelo de Dados]
        F[Banco de Dados MongoDB]
        G(Endpoint GET /alertas/:bairro)
    end

    subgraph "Sistema de Alerta"
        H[Aplicativo Móvel da Defesa Civil]
        I[Portal Web Comunitário]
    end

    A --> C
    B --> C
    C --> D
    D --> E
    E <--> F
    G --> I
    G --> H

Instruções de Execução via Postman/Insomnia
Para testar a API, certifique-se de que o servidor Node.js esteja rodando (npm start). Utilize a coleção JSON abaixo para importar todas as rotas e requisições para o seu cliente HTTP (Postman ou Insomnia).

Copie o conteúdo da coleção JSON fornecida na seção seguinte.

No Postman, clique em File -> Import e cole o texto copiado.

No Insomnia, clique em Create -> Import from Clipboard.

Após importar, você terá uma coleção com as duas requisições prontas para uso.

Documentação das Rotas da API
Rota

Método

Descrição

/api/alertas

POST

Registra um novo alerta de alagamento.

/api/alertas/:bairro

GET

Lista alertas por bairro.

1. Endpoint: POST /api/alertas
Descrição: Usado pelo sistema de monitoramento para enviar um novo alerta.

Parâmetros (Body JSON):

bairro (string, obrigatório): O nome do bairro.

nivel_agua (number, obrigatório): O nível da água em metros.

status (string, opcional): Pode ser emergencia, alerta ou normal. Padrão é normal.

Exemplo de Requisição:

{
  "bairro": "Copacabana",
  "nivel_agua": 1.5,
  "status": "alerta"
}

Exemplo de Resposta de Sucesso (201 Created):

{
  "mensagem": "Alerta registrado com sucesso!",
  "alerta": {
    "bairro": "Copacabana",
    "nivel_agua": 1.5,
    "status": "alerta",
    "_id": "60a8c2f1b0a8c5a4d4e6f8a0"
  }
}

2. Endpoint: GET /api/alertas/:bairro
Descrição: Usado pelo sistema de alerta para consultar os alertas mais recentes de um bairro específico.

Parâmetros (URL):

bairro (string, obrigatório): O nome do bairro a ser consultado.

Exemplo de Requisição:

GET http://localhost:3000/api/alertas/Copacabana

Exemplo de Resposta de Sucesso (200 OK):

[
  {
    "_id": "60a8c2f1b0a8c5a4d4e6f8a0",
    "bairro": "Copacabana",
    "nivel_agua": 1.5,
    "status": "alerta",
    "data_alerta": "2023-10-27T10:00:00.000Z"
  }
]

Coleção do Postman
Copie e cole este código JSON para importar a coleção completa no seu cliente HTTP.

{
	"info": {
		"_postman_id": "063529b3-40e1-4c12-a162-851509a27d53",
		"name": "API de Alagamentos",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "31548695"
	},
	"item": [
		{
			"name": "Registrar Alerta (POST)",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"bairro\": \"Copacabana\",\n    \"nivel_agua\": 1.5,\n    \"status\": \"alerta\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/alertas",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"alertas"
					]
				}
			},
			"response": []
		},
		{
			"name": "Listar Alertas por Bairro (GET)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/alertas/Copacabana",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"alertas",
						"Copacabana"
					]
				}
			},
			"response": []
		}
	]
}
 
