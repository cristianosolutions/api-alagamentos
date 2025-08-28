## ⚙️ Descrição Funcional da Solução
A API é o elo de comunicação entre dois sistemas principais:

- **Sistema de Monitoramento (Sistema 1):**  
  Consiste em sensores ou dispositivos IoT que medem o nível da água em áreas de risco.  
  Quando um nível crítico é detectado, este sistema envia um alerta para a API.

- **Sistema de Alerta e Informação (Sistema 2):**  
  Pode ser um aplicativo móvel da defesa civil ou um portal web comunitário.  
  Este sistema consulta a API periodicamente para verificar o status de alagamentos em bairros específicos e exibe alertas para os moradores.

👉 A API simplifica essa comunicação, garantindo que os dados de alagamento cheguem de forma rápida e padronizada aos destinatários finais.



---



## 📌 Documentação das Rotas da API

 **🔹 1. Endpoint:** POST /api/alertas

- **Descrição:** Usado pelo sistema de monitoramento para enviar um novo alerta.

- **Parâmetros (Body JSON):**

- bairro (string, obrigatório): O nome do bairro.

- nivel_agua (number, obrigatório): O nível da água em metros.

- status (string, opcional): Pode ser emergencia, alerta ou normal.

  - Padrão: normal.

---

## 🏗️ Arquitetura da API
A arquitetura da API segue o padrão **Cliente-Servidor** e é baseada em camadas para garantir modularidade e separação de responsabilidades.  

📡 O protocolo de comunicação utilizado é o **REST (HTTP)**.


---

## 📂 Coleção do Postman

A coleção de requisições do Postman já está pronta para facilitar os testes da API.  
👉 [Baixe a coleção aqui](https://github.com/cristianosolutions/api-alagamentos/blob/main/src/postman/collection.json)

Depois, importe esse arquivo no Postman e você poderá testar todos os endpoints rapidamente.




### Diagrama de Arquitetura
```mermaid
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
