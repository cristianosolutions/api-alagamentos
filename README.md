# 🌊 API de Monitoramento e Alerta de Alagamentos

## 🎯 Objetivo do Trabalho
O objetivo principal deste projeto é demonstrar a capacidade de integrar sistemas heterogêneos através do desenvolvimento de uma **API REST**.  

A API atua como um **hub central** para coletar dados de sensores de monitoramento de alagamentos e distribuí-los para sistemas de alerta e informação, como aplicativos de defesa civil ou sites comunitários.  

A solução visa fornecer **informações em tempo real** para a população de bairros costeiros, minimizando riscos e agilizando a resposta a eventos de alagamento.

---

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

## 🏗️ Arquitetura da API
A arquitetura da API segue o padrão **Cliente-Servidor** e é baseada em camadas para garantir modularidade e separação de responsabilidades.  

📡 O protocolo de comunicação utilizado é o **REST (HTTP)**.

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
