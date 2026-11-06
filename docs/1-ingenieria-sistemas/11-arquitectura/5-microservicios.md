---
id: a-microservicios
title:  "📄 Arquitectura microservicios"
sidebar_label: "📄 A. microservicios"
description: "Arquitectura orientada a microservicios"
---

## **Microservicios (MSA)**
El **Patrón de Arquitectura de Microservicios (*Micro-Service Architecture - MSA*)** es un estilo arquitectónico que estructura una aplicación como una **constelación de servicios pequeños, autónomos y débilmente acoplados**, donde cada servicio se ejecuta en su propio proceso de computación y modela una capacidad de negocio bien delimitada. 

A diferencia de los sistemas monolíticos tradicionales, donde todos los componentes de software (presentación, lógica y datos) residen y compiten en un único proceso ejecutable, los microservicios distribuyen la responsabilidad para permitir despliegues independientes, alta tolerancia a fallos y escalabilidad granular.

<center>

```mermaid
---
config:
  theme: redux-color
  usecase:
    colorScheme: rotate
---
flowchart TD
    %% ========================================================
    %% PATRÓN 5: MICROSERVICIOS (MSA)
    %% ========================================================
    subgraph P_MSA ["5. Arquitectura de Microservicios (MSA)"]
        direction TB
        MSA_GW["API Gateway (Enrutamiento Ligero)"]
        
        subgraph MS_A ["Microservicio A"]
            MA_SVC["Servicio Pedidos"]
            MA_DB[("BD A")]
            MA_SVC --> MA_DB
        end
        
        subgraph MS_B ["Microservicio B"]
            MB_SVC["Servicio Pagos"]
            MB_DB[("BD B")]
            MB_SVC --> MB_DB
        end
        
        subgraph MS_C ["Microservicio C"]
            MC_SVC["Servicio Catálogo"]
            MC_DB[("BD C")]
            MC_SVC --> MC_DB
        end
        
        MSA_GW -- "REST / JSON" --> MA_SVC
        MSA_GW -- "REST / JSON" --> MB_SVC
        MSA_GW -- "REST / JSON" --> MC_SVC
        MA_SVC -. "Eventos Asíncronos" .-> MB_SVC
    end

```

</center>





### Principios Fundamentales

1. **Servicios Pequeños y Altamente Cohesivos (*Single Responsibility*):**
   Cada microservicio se enfoca en resolver una tarea o subdominio específico del negocio. Esto se fundamenta en el principio de *Alta Cohesión* y *Responsabilidad Única (SRP)*: una unidad de software debe tener una sola razón para cambiar, manteniéndose ligera y comprensible.

2. **Procesos Aislados e Independientes:**
   Cada servicio corre en su propio entorno de ejecución independiente (por ejemplo, contenedores Docker orquestados con Kubernetes sobre plataformas cloud/Linux). Si un servicio experimenta un fallo crítico o saturación de memoria, no colapsa el resto del ecosistema.

3. **Mecanismos de Comunicación Ligeros (*Smart Endpoints, Dumb Pipes*):**
   La interacción entre servicios no depende de middlewares pesados con lógica centralizada de transformación (como los ESB de SOA tradicional). En su lugar, se utilizan protocolos abiertos, universales y sin estado:
   * **Sincrónicos:** APIs RESTful sobre HTTP/HTTPS transmitiendo representaciones JSON o XML.
   * **Asincrónicos:** Mensajería orientada a eventos (*Event-Driven Architecture*) a través de brokers (RabbitMQ, Kafka) utilizando patrones de publicación/suscripción (*Publish/Subscribe*) para desacoplar temporalmente los componentes.

4. **Gestión Descentralizada de Datos (*Database-per-Service*):**
   Cada microservicio es dueño exclusivo de su propio almacén de persistencia (sea SQL relacional o NoSQL no estructurado). Ningún servicio externo tiene permitido consultar o escribir directamente en la base de datos de otro; toda interacción debe realizarse a través de la API pública del servicio propietario.

5. **Despliegue y Ciclo de Vida Independientes (*Independent Deployability*):**
   Dado que las interfaces están claramente separadas de la implementación técnica, un equipo puede compilar, probar e implementar una nueva versión de un microservicio en producción sin recompilar ni reiniciar las demás partes del sistema.



### Anatomía y Topología

En un diseño integral de microservicios, la interacción se organiza en las siguientes piezas estructurales:

```
[ Clientes / Dispositivos Móviles / Web ]
                   │
                   ▼ (HTTPS / REST)
       ┌────────────────────────┐
       │      API Gateway       │  <── Enrutamiento, Autenticación, Rate Limiting
       └────────────────────────┘
         │          │          │
         ▼          ▼          ▼
   ┌──────────┐┌──────────┐┌──────────┐
   │ Servicio ││ Servicio ││ Servicio │
   │ Pedidos  ││  Pagos   ││ Catálogo │
   └────┬─────┘└────┬─────┘└────┬─────┘
        │           │           │
        ▼           ▼           ▼
     [(BD)]      [(BD)]      [(BD)]   <── Persistencia Descentralizada
        │           ▲
        └─(Eventos)─┘                 <── Broker Asíncrono / Mensajería
```

* **API Gateway (Puerta de Enlace):**
  Actúa como el punto de entrada unificado y fachada (*Facade*) para todos los clientes externos. Centraliza tareas transversales como la terminación TLS/SSL, la validación de tokens de identidad, el balanceo de carga y el enrutamiento hacia los microservicios internos.

* **Servicios de Dominio:**
  Implementan la lógica de negocio nuclear organizada por capacidades (ej. Pedidos, Facturación, Inventario).

* **Gestor de Descubrimiento de Servicios (*Service Discovery*):**
  Dado que los contenedores en la nube cambian dinámicamente de dirección IP y puerto al autoescalar, el registro de servicios permite localizar dinámicamente las instancias activas mediante nombres lógicos.

* **Persistencia Políglota (*Polyglot Persistence*):**
  Dado que cada servicio tiene su propia base de datos, el equipo puede elegir la tecnología de almacenamiento idónea para el caso de uso específico: un motor relacional como PostgreSQL para transacciones financieras o bases de datos documentales/gráficas NoSQL para catálogos o analítica.



### Microservicios vs. SOA vs. Monolito

| Dimensión | Arquitectura Monolítica | SOA (Orientada a Servicios Tradicional) | Microservicios (MSA) |
| :--- | :--- | :--- | :--- |
| **Límite de Ejecución** | Un único proceso de SO; componentes acoplados en memoria. | Varios sistemas y servicios heterogéneos. | Múltiples servicios pequeños en procesos/contenedores aislados. |
| **Gobernanza de Datos** | Base de datos centralizada compartida por todos los módulos. | Tiende a compartir bases de datos corporativas o esquemas comunes. | **Base de datos por servicio** (descentralizada y políglota). |
| **Middleware de Comunicación** | Llamadas a funciones o métodos locales (`in-process`). | **ESB inteligente**: orquestación centralizada, adaptadores y transformación de datos. | **Tuberías tontas (*Dumb Pipes*)**: APIs REST livianas o brokers de eventos simples. |
| **Granularidad del Servicio** | Gruesa / Monobloque (sin servicios externos). | Gruesa o Mediana; orientada a la integración corporativa. | **Fina y enfocada**: delimitada estrictamente por contexto de negocio. |
| **Acoplamiento Operacional** | Máximo; un fallo en un módulo puede tumbar el proceso entero. | Medio; mitigado por el bus pero con dependencia del ESB central. | Mínimo; alta resiliencia y autonomía de despliegue. |



### Ventajas Técnicas y Estratégicas

1. **Escalabilidad Elástica y Selectiva:**
   En un monolito, si el módulo de pagos se satura, es necesario replicar la aplicación completa (incluyendo catálogos y reportes), consumiendo hardware de manera ineficiente. En microservicios, se escalan horizontalmente solo las réplicas del contenedor saturado.

2. **Diversidad Tecnológica (*Polyglot Programming*):**
   Cada equipo puede seleccionar el lenguaje de programación, framework y motor de base de datos más eficiente para su problema (ej. Node.js para I/O intensivo, Python para modelos analíticos, Java para transaccionalidad bancaria).

3. **Agilidad Organizacional y Equipos Descentralizados:**
   Alinea la estructura técnica con la estructura humana: equipos pequeños, autónomos y multifuncionales que son dueños del ciclo de vida completo de un servicio (*DevOps*), facilitando entregas continuas y liberaciones semanales o diarias.



### Desafíos y Complejidades

El patrón de microservicios traslada la complejidad desde el interior del código hacia la red y las operaciones:

* **Consistencia Eventual frente a Transacciones ACID:**
  Al no existir una base de datos única, no es posible aplicar transacciones ACID globales tradicionales o mecanismos de bloqueo directo sin introducir bloqueos y cuellos de botella severos. Se debe recurrir a la *consistencia eventual* y patrones de compensación mediante transacciones distribuidas o flujos asíncronos.

* **Latencia de Red y Fallos Parciales:**
  Las llamadas a métodos en memoria son instantáneas y seguras, mientras que las llamadas remotas por red introducen latencia, pérdidas de paquetes o caídas temporales. Requiere patrones de tolerancia a fallos como *Circuit Breakers*, *Proxies de Redirección* y reintentos exponenciales.

* **Observabilidad y Trazabilidad Compleja:**
  Un solo clic del usuario puede desencadenar peticiones a través de 10 microservicios distintos. Diagnosticar un error exige infraestructura de observabilidad avanzada: correlación de registros (*Log Aggregation*), métricas de rendimiento y trazabilidad distribuida (*Distributed Tracing*).


***
## **Transacciones distribuidas**

En un sistema monolítico o centralizado, garantizar la consistencia transaccional es directo: el gestor de la base de datos relacional proporciona garantías **ACID** (Atomicidad, Consistencia, Aislamiento y Durabilidad) mediante bloqueos de registros y confirmaciones atómicas locales (`BEGIN TRANSACTION ... COMMIT / ROLLBACK`).

Sin embargo, en una arquitectura de microservicios, el patrón fundamental es la **gestión descentralizada de datos (*Database-per-Service*)**:
* Cada microservicio posee y administra de manera exclusiva su propia base de datos (relacional o NoSQL).

* Ningún servicio externo tiene permitido consultar o escribir directamente en las tablas de otro microservicio; toda interacción se realiza estrictamente a través de APIs o intercambio de mensajes.

#### ¿Por qué no se utiliza el compromiso en dos fases (2PC)?

El protocolo tradicional de transacciones distribuidas en bases de datos es el **Compromiso en Dos Fases (*Two-Phase Commit - 2PC*)**. Como explican las fuentes especializadas en sistemas distribuidos, el 2PC impone graves limitaciones operacionales:
1. **Bloqueo síncrono prolongado:** Requiere que todos los nodos aseguren bloqueos locales en la fase de preparación y esperen la instrucción del coordinador central, manteniendo recursos retenidos por períodos prolongados.

2. **Punto único de fallo y acoplamiento temporal:** Si el coordinador o la red fallan durante el proceso, los servicios quedan bloqueados (*in-doubt*), comprometiendo la disponibilidad y autonomía del sistema.

3. **Incompatibilidad con persistencia moderna:** Muchos motores NoSQL y brokers de mensajería no implementan interfaces de transacciones distribuidas compatibles con XA/2PC.

Para resolver este dilema, la arquitectura de microservicios adopta la **consistencia eventual** y las **transacciones de larga duración (*Long-Running Transactions*)**, donde el trabajo se confirma de manera local e incremental y se recurre a **actividades de compensación** en caso de aborto o error.



### Patrón Saga

El patrón Saga es un patrón de diseño arquitectónico para gestionar transacciones distribuidas de larga duración (Long-Running Transactions) en sistemas compuestos por servicios o microservicios que manejan bases de datos independientes.

A diferencia de las bases de datos relacionales tradicionales, donde todas las operaciones se agrupan en una única transacción atómica local bajo el estándar ACID (mediante sentencias BEGIN TRANSACTION ... COMMIT / ROLLBACK), en un entorno de microservicios con persistencia descentralizada (Database-per-Service) no es viable retener bloqueos globales sin degradar severamente la disponibilidad y el rendimiento del sistema.

El **Patrón Saga** modela una transacción de negocio que abarca múltiples microservicios como una **secuencia ordenada de transacciones locales independientes**.

```math
\text{Saga} = \{T_1, T_2, T_3, \dots, T_n\}
```

* **Compromiso Local Inmediato:** Cada paso $T_i$ actualiza la base de datos local de un microservicio específico y publica un mensaje o evento que desencadena la siguiente transacción local $T_{i+1}$.

* **Reversión Semántica mediante Compensación:** Si alguna de las transacciones locales falla (por ejemplo, fondos insuficientes en el servicio de pagos o falta de stock en inventario), la Saga no puede ejecutar un rollback físico tradicional porque los pasos previos ya hicieron commit en sus bases de datos locales. En su lugar, el patrón ejecuta una serie de **transacciones compensatorias** en orden inverso para revertir semánticamente los efectos ya confirmados:

```math
\text{Flujo de Compensación} = \{C_{i-1}, C_{i-2}, \dots, C_1\}
```

Una **transacción compensatoria ($C_k$)** no es un *rollback* físico de bajo nivel de base de datos (ya que $T_k$ ya hizo `COMMIT`), sino una acción de negocio explícita que restaura el sistema a un estado consistente equivalente  (por ejemplo: si $T_1$ reservó stock, $C_1$ devuelve los artículos al inventario disponible; si $T_2$ emitió un cobro, $C_2$ genera un reembolso o abono).

---

### Mecanismos de Coordinación
**Orquestación vs. Coreografía**

Existen dos estrategias principales para orquestar la secuencia de eventos y compensaciones:

#### A. Coreografía (Descentralizada / Reactiva)
* **Mecanismo:** Los microservicios colaboran intercambiando eventos a través de un canal o broker de mensajería (como Apache Kafka o RabbitMQ) sin un controlador central. Cada servicio escucha los eventos que le conciernen, ejecuta su transacción local y publica un nuevo evento notificando su éxito o fallo.

* **Manejo de fallo:** Si el servicio de pagos emite el evento PagoFallido, los servicios que ya realizaron cambios (como inventario o pedidos) capturan ese evento de manera reactiva y ejecutan sus correspondientes tareas de compensación local

* **Ventajas:** Máximo desacoplamiento y no requiere un orquestador adicional.

* **Desventajas:** Dificultad para rastrear el flujo completo del proceso (*deadlocks* o bucles cíclicos si las suscripciones no están rigurosamente diseñadas). Su trazabilidad es más compleja de monitorear a medida que aumenta el número de servicios.


#### B. Orquestación (Centralizada / Mediada)
* **Mecanismo:** Un componente o servicio especializado (el **Orquestador de Saga**, a menudo implementado mediante un motor de procesos ejecutables como Camunda o un microservicio dedicado) le indica a cada participante qué transacción local ejecutar enviando comandos de solicitud/respuesta.

* **Manejo de fallo:** Si un microservicio responde con un error de negocio, el orquestador toma el control y envía de forma estructurada los comandos de compensación ($C_k$) a los servicios que completaron con éxito sus etapas previas.

* **Ventajas:** Lógica de negocio y control de estados concentrados en un solo flujo observable; simplifica enormemente la gestión de compensaciones y auditoría en tiempo real.

* **Desventajas:** Riesgo de sobrecargar al orquestador con lógica de dominio si no se respeta la separación de responsabilidades.

---

### Transacción Clásica (ACID / 2PC) y Patrón Saga

| Característica | Transacción Clásica ACID / 2PC (Two-Phase Commit) | Patrón Saga |
| :--- | :--- | :--- |
| **Garantía de Consistencia** | Consistencia Inmediata y Fuerte (Atomicidad global). | **Consistencia Eventual** (los datos se equilibran al finalizar la cadena o compensación). |
| **Aislamiento (*Isolation*)** | Alto: los registros permanecen bloqueados para otros usuarios hasta el *commit*. | Bajo: los cambios locales se confirman de inmediato, por lo que otros procesos pueden leer estados intermedios pendientes. |
| **Mecanismo de Deshacer** | *Rollback* técnico directo en el motor de base de datos. | **Compensación semántica** (nueva transacción de negocio que contrarresta el efecto previo). |
| **Tolerancia y Escalabilidad** | Baja en redes distribuidas; susceptible a bloqueos prolongados y caídas de nodos. | **Alta escalabilidad y resiliencia**; adecuada para arquitecturas de microservicios en la nube. |

***


### Diagrama de Secuencia UML
**Saga Orquestada de Compra y Pago**

El siguiente diagrama de secuencia ilustra el flujo de una compra en comercio electrónico bajo el patrón Saga orquestado, demostrando tanto el **camino de éxito** como el **manejo de fallos con compensación semántica**:

```mermaid
sequenceDiagram
    autonumber
    actor Cliente as 👤 Cliente
    participant Gateway as 🚪 API Gateway
    participant Orquestador as ⚙️ Orquestador de Saga
    participant SvcPedidos as 📦 Svc Pedidos
    participant SvcInventario as 🏬 Svc Inventario
    participant SvcPagos as 💳 Svc Pagos

    %% INICIO DE LA SAGA
    Cliente->>Gateway: POST /pedidos (articuloId, cant, tarjeta)
    Gateway->>Orquestador: IniciarSagaCrearPedido(datos)
    
    %% PASO 1: CREAR PEDIDO LOCAL
    Note over Orquestador,SvcPedidos: Paso 1: Transacción Local T1
    Orquestador->>SvcPedidos: Comando: CrearPedidoPendiente()
    SvcPedidos->>SvcPedidos: Insertar pedido (Estado: PENDIENTE)
    SvcPedidos-->>Orquestador: Evento: PedidoCreado(pedidoId)

    %% PASO 2: RESERVAR INVENTARIO
    Note over Orquestador,SvcInventario: Paso 2: Transacción Local T2
    Orquestador->>SvcInventario: Comando: ReservarStock(articuloId, cant)
    SvcInventario->>SvcInventario: Decrementar stock disponible
    SvcInventario-->>Orquestador: Evento: StockReservado()

    %% ESCENARIO DE FALLO EN PASO 3
    Note over Orquestador,SvcPagos: Paso 3: Transacción Local T3 (Fallo)
    Orquestador->>SvcPagos: Comando: ProcesarCobro(tarjeta, monto)
    SvcPagos->>SvcPagos: Contactar pasarela financiera externa
    SvcPagos-->>Orquestador: Evento: CobroRechazado(Fondos Insuficientes)

    %% DISPARO DE COMPENSACIONES
    rect rgb(255, 235, 238)
    Note over Orquestador,SvcPedidos: FLUJO COMPENSATORIO (Reversión Semántica)
    
    %% COMPENSACIÓN C2 (INVENTARIO)
    Orquestador->>SvcInventario: Compensación C2: LiberarStock(articuloId, cant)
    SvcInventario->>SvcInventario: Incrementar stock (Restaurar)
    SvcInventario-->>Orquestador: StockLiberado()

    %% COMPENSACIÓN C1 (PEDIDOS)
    Orquestador->>SvcPedidos: Compensación C1: CancelarPedido(pedidoId)
    SvcPedidos->>SvcPedidos: Actualizar pedido (Estado: RECHAZADO)
    SvcPedidos-->>Orquestador: PedidoCancelado()
    end

    %% RESPUESTA AL CLIENTE
    Orquestador-->>Gateway: SagaFallida(Motivo: Pago denegado)
    Gateway-->>Cliente: HTTP 422: "Compra no completada: fondos insuficientes"
```

---

### Modelo de Proceso BPMN 2.0
**Transacción con Compensadores**

BPMN 2.0 cuenta con semántica nativa estándar para modelar transacciones de negocio que requieren reversión mediante **Subprocesos Transaccionales** y **Manejadores de Compensación (*Compensation Handlers*)**:

```mermaid
flowchart LR
    %% Elementos
    Start((Inicio Orden)) --> SubprocTrans

    subgraph SubprocTrans ["Subproceso Transaccional: Saga de Compra"]
        T_Ped["Crear Pedido Pendiente"] --> T_Inv["Reservar Stock de Artículos"]
        T_Inv --> T_Pago["Ejecutar Cobro con Tarjeta"]

        %% Eventos de compensación asociados a tareas
        T_Inv -.-> CompEvent_Inv{{"⏪ Intermedio Captura Compensación"}}
        CompEvent_Inv --> ActComp_Inv["⏪ Compensar: Reponer Stock en Bodega"]

        T_Ped -.-> CompEvent_Ped{{"⏪ Intermedio Captura Compensación"}}
        CompEvent_Ped --> ActComp_Ped["⏪ Compensar: Marcar Pedido como Cancelado"]

        %% Manejo de excepción de pago
        T_Pago -- "Fallo de Pago" --> ThrowCancel["✖️ Evento Fin Cancelación / Reversa"]
    end

    %% Captura de cancelación a nivel de borde
    SubprocTrans --> ExitOk(((Pedido Confirmado y Cobrado)))
    SubprocTrans -.-> CatchCancel{{"✖️ Borde: Transacción Cancelada"}}
    CatchCancel --> T_Notif["Notificar al Cliente el Rechazo"]
    T_Notif --> ExitFail(((Orden Anulada y Compensada)))
```

#### Reglas de ejecución en la notación BPMN:
1. **Asociación de Compensación:** Las actividades marcadas con el símbolo de rebobinado (`⏪`) no tienen flujos de secuencia salientes directos; únicamente son disparadas por el motor de procesos cuando una excepción o evento de cancelación posterior exige restaurar el estado de negocio.

2. **Orden Inverso:** El motor ejecuta las compensaciones en estricto orden cronológico inverso: primero libera el inventario que se reservó en el paso 2 y luego cancela la orden creada en el paso 1.

3. **Idempotencia:** En arquitecturas de microservicios, tanto los comandos de acción como los de compensación deben diseñarse como **operaciones idempotentes** (procesar el mismo mensaje repetido no debe duplicar inventario ni cobrar dos veces) para tolerar reintentos en redes no confiables.



### Consideraciones de Diseño para Sagas

| Desafío en Microservicios | Riesgo Técnico | Solución con Patrón Saga |
| :--- | :--- | :--- |
| **Pérdida de Aislamiento (Lecturas Sucias)** | Otro microservicio o usuario puede ver datos en estado intermedio (ej. inventario reservado) antes de que la transacción global falle. | **Estados intermedios explícitos:** Usar estados como `PENDIENTE_PAGO` en lugar de confirmar el pedido inmediatamente, o aplicar lecturas con versionado semántico. |
| **Mensajes Duplicados o Fuera de Orden** | La red o el broker pueden entregar el mismo evento más de una vez (*at-least-once delivery*). | **Receptores Idempotentes:** Registrar claves de deduplicación de transacciones antes de procesar cualquier comando o compensación. |
| **Fallos en la Compensación** | Si un servicio de inventario falla cuando intenta devolver el stock al almacén. | **Reintentos automáticos e intervención asistida:** Los comandos compensatorios deben garantizarse mediante colas persistentes con reintentos exponenciales y alertas a colas de mensajes fallidos (*Dead-Letter Queues*). |

