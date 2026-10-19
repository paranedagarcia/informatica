---
id: ae-bloques
title:  "Diagrama"
sidebar_label: "📄 Diagrama de bloques"
---

## **bloques**

Un **Diagrama de Bloques** en el modelado de sistemas es una representación gráfica, simplificada y de alto nivel que describe la estructura, composición o comportamiento funcional de un sistema. En él, las funciones principales, subsistemas, módulos o componentes se representan mediante **bloques** (generalmente rectángulos), mientras que las interconexiones, flujos de datos, señales o relaciones se representan mediante **líneas o flechas** que unen dichos bloques.

Pertenece a la categoría de los **modelos orientados a la estructura** (*structure-oriented models*), ya que su propósito primario es abstraer la complejidad del sistema para mostrar cómo se organizan y comunican sus elementos constitutivos.



### Elementos de un Diagrama

* **Bloques (Nodos / Módulos):** Representan una unidad funcional, un componente físico/lógico, un subsistema o una etapa de procesamiento. Pueden ser analizados como "cajas negras" (enfocándose únicamente en sus entradas y salidas) o desglosarse en subbloques más detallados.

* **Líneas y Flechas (Conexiones / Flujos / Interfaces):** Indican la dirección del flujo de información, energía, señales de control o relaciones de dependencia e interfaz entre los bloques.

* **Puntos de Suma / Comparación y Ramificación:** En sistemas dinámicos y teoría de control, se utilizan para modelar comparaciones de señales y **lazos de retroalimentación (*feedback loops*)**.



### Principales Aplicaciones

1. **Arquitectura de Software y Sistemas (Bloques de TI / IS Blocks):**
   * Muestra la división modular de una aplicación o infraestructura (ej. capa de presentación, motor de procesos, base de datos, servicios de integración).
   * Ayuda a definir las **interfaces** y el acoplamiento entre módulos antes de pasar al diseño detallado o implementación en código.

2. **Teoría de Control y Sistemas Dinámicos:**
   * Representa matemáticamente las funciones de transferencia de un sistema, ilustrando cómo una entrada (*input*) es transformada en una salida (*output*) mediante bloques operacionales y retroalimentación.

3. **Ingeniería de Procesos y Flujo de Actividades:**
   * Se utiliza para ilustrar la distribución de tareas, cadenas de valor o el ensamblaje de componentes en una organización.



### Ventajas del Uso de Diagramas de Bloques

* **Alto Nivel de Abstracción:** Permite entender el panorama global de un sistema complejo sin perderse en detalles de implementación de bajo nivel.

* **Facilidad de Comunicación:** Sirve como lenguaje visual común entre ingenieros, arquitectos de software, gerentes de proyecto y clientes.

* **Delimitación de Fronteras (*System Boundaries*):** Facilita la identificación de los límites del sistema, sus entradas/salidas externas y los puntos de integración con otros sistemas.



### Comparación con otras notaciones

| Criterio | Diagrama de Bloques | Diagrama de Flujo de Datos (DFD) | Diagramas de Componentes UML |
| :--- | :--- | :--- | :--- |
| **Enfoque principal** | Estructura modular, interfaces y bloques funcionales. | Transformación y flujo continuo de datos entre procesos y almacenes. | Estructura estática y relaciones de software orientado a objetos. |
| **Nivel de formalismo** | Notación libre, flexible y conceptual. | Notación estructurada fija (procesos, entidades, almacenes, flujos). | Estándar UML formal con estereotipos e interfaces especificadas. |

## **Diagrama**

El **diagrama de bloques** para la arquitectura de un **Sistema de Información Empresarial Moderno**.


### Arquitectura de un Sistema de Información

```mermaid
flowchart TB
    %% Estilos visuales
    classDef cliente fill:#e3f2fd,stroke:#1565c0,stroke-width:2px,color:#0d47a1,font-weight:bold
    classDef puerta fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#bf360c,font-weight:bold
    classDef negocio fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20,font-weight:bold
    classDef datos fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#4a148c,font-weight:bold

    subgraph PRESENTACION["1. Capa de Presentación (Interfaces de Usuario / Entradas)"]
        A1["Cliente Web (SPA / React)"]
        A2["Cliente Móvil (App iOS/Android)"]
        A3["Sistemas Externos (APIs B2B / Terceros)"]
    end

    subgraph ACCESO["2. Capa de Entrada, Control y Seguridad"]
        B1["API Gateway & Balanceador de Carga"]
        B2["Servidor de Autenticación (OAuth2 / JWT)"]
    end

    subgraph NEGOCIO["3. Capa de Lógica de Negocio (Servicios / Procesamiento)"]
        C1["Módulo de Gestión de Usuarios"]
        C2["Módulo de Procesamiento de Ventas"]
        C3["Módulo de Control de Inventario"]
        C4["Motor de Notificaciones y Eventos"]
    end

    subgraph DATOS["4. Capa de Persistencia y Datos (Salidas y Almacenamiento)"]
        D1[("Base de Datos Relacional\n(PostgreSQL / Transaccional)")]
        D2[("Base de Datos NoSQL\n(MongoDB / Catálogo)")]
        D3[("Caché en Memoria\n(Redis / Acceso Rápido)")]
    end

    %% Flujos e Interconexiones
    A1 -->|Peticiones HTTPS| B1
    A2 -->|Peticiones HTTPS| B1
    A3 -->|REST / gRPC| B1

    B1 <-->|Validación Token| B2
    B1 -->|Enrutamiento| C1
    B1 -->|Enrutamiento| C2
    B1 -->|Enrutamiento| C3

    C2 -->|Dispara eventos| C4
    C1 -->|Consultas SQL| D1
    C2 -->|Transacciones| D1
    C3 -->|Consultas Documentos| D2
    C1 <-->|Lectura/Escritura rápida| D3
    C2 <-->|Lectura/Escritura rápida| D3

    %% Asignación de clases
    class A1,A2,A3 cliente
    class B1,B2 puerta
    class C1,C2,C3,C4 negocio
    class D1,D2,D3 datos
```



### Descripción

1. **Capa de Presentación (Clientes / Puntos de Entrada):**
   * **Bloques:** Aplicaciones web, aplicaciones móviles y servicios de terceros.
   * **Función:** Capturar las entradas del usuario (*inputs*) y presentar las salidas procesadas (*outputs*). Cada bloque actúa como una interfaz especializada para distintos tipos de usuarios.

2. **Capa de Entrada, Control y Seguridad:**
   * **Bloques:** **API Gateway** (Puerta de enlace) y **Servidor de Autenticación**.
   * **Función:** Actúa como el punto centralizado de inspección y enrutamiento. Recibe el tráfico externo, valida los permisos del usuario y distribuye las peticiones hacia los módulos correspondientes, protegiendo los componentes internos.

3. **Capa de Lógica de Negocio (Procesamiento Core):**
   * **Bloques:** Módulos independientes de **Usuarios**, **Ventas**, **Inventario** y **Notificaciones**.
   * **Función:** Contiene las reglas operativas de la organización. Recibe los datos validados, ejecuta los algoritmos de cálculo/transformación y coordina la ejecución de tareas secundarias (como el envío automático de correos o alertas).

4. **Capa de Persistencia y Datos:**
   * **Bloques:** Bases de Datos Relacionales (SQL), NoSQL y Memoria Caché (Redis).
   * **Función:** Garantiza el almacenamiento permanente, seguro y estructurado de la información del sistema, respondiendo a consultas de lectura/escritura y optimizando tiempos de respuesta.



### Principios de Modelado

* **Cajas Negras y Modularity:** Cada bloque oculta su complejidad interna (código, algoritmos) y se limita a exponer sus entradas y salidas mediante interfaces claras (APIs, protocolos de red, SQL).

* **Direccionalidad del Flujo:** Las flechas muestran la dependencia técnica y el sentido en el que viaja la información desde la captura hasta el almacenamiento.

* **Desacoplamiento:** Si el bloque de *Notificaciones* o *Caché* falla o requiere mantenimiento, el resto de las capas del sistema puede continuar operando sin interrupción directa.


## **Detalle de interfaz**

A continuación se detalla la **interfaz de comunicación interna y el protocolo de interacción** entre el **Módulo de Procesamiento de Ventas** (Capa de Negocio) y la **Base de Datos Transaccional** (Capa de Persistencia), integrando la **Memoria Caché (Redis)** para optimizar el rendimiento y garantizar las propiedades **ACID** (Atomicidad, Consistencia, Aislamiento y Durabilidad).


### Diagrama de Interacción de la Interfaz Interna

```mermaid
sequenceDiagram
    autonumber
    participant APIGW as API Gateway
    participant Ventas as Módulo de Ventas (App Core)
    participant Cache as Caché (Redis)
    participant DB as BD Transaccional (PostgreSQL)

    APIGW->>Ventas: 1. POST /api/v1/ventas (Payload JSON)
    
    rect rgb(240, 248, 255)
        Note over Ventas,DB: Fase 1: Validación y Verificación de Stock
        Ventas->>Cache: 2. GET /productos/{id}/stock
        alt Stock disponible en Caché
            Cache-->>Ventas: Stock OK
        else Miss de Caché
            Ventas->>DB: SELECT stock FROM productos WHERE id = ?
            DB-->>Ventas: Retorna stock actual
            Ventas->>Cache: SETEX /productos/{id}/stock
        end
    end

    rect rgb(255, 243, 224)
        Note over Ventas,DB: Fase 2: Transacción SQL en Base de Datos (ACID)
        Ventas->>DB: 3. BEGIN TRANSACTION (Isolation Level: Read Committed)
        Ventas->>DB: 4. SELECT stock FROM productos WHERE id = ? FOR UPDATE (Bloqueo Pesimista)
        
        alt Stock suficiente
            Ventas->>DB: 5. UPDATE productos SET stock = stock - qty WHERE id = ?
            Ventas->>DB: 6. INSERT INTO ordenes_venta (cliente_id, total, estado) VALUES (...)
            Ventas->>DB: 7. INSERT INTO detalle_venta (orden_id, producto_id, cantidad, precio) VALUES (...)
            Ventas->>DB: 8. COMMIT TRANSACTION
            DB-->>Ventas: Transacción Confirmada (OK)
        else Stock insuficiente
            Ventas->>DB: ROLLBACK TRANSACTION
            DB-->>Ventas: Error de Transacción (Abortado)
        end
    end

    rect rgb(232, 245, 233)
        Note over Ventas,Cache: Fase 3: Invalidación de Caché y Respuesta
        Ventas->>Cache: 9. DEL /productos/{id}/stock (Invalidar caché obsoleta)
        Ventas-->>APIGW: 10. HTTP 201 Created (Orden registrada)
    end
```


### Componentes Técnicos

#### 1. Protocolo de Red y Gestión de Conexiones
* **Mecanismo de Conexión:** La aplicación de negocio no abre una conexión socket TCP individual por cada transacción. En su lugar, utiliza un **Pool de Conexiones** (*Connection Pool* como HikariCP o PgBouncer) para reutilizar conexiones persistentes hacia la base de datos, reduciendo la latencia de *handshake*.
* **Protocolo:** Comunicación vía **Wire Protocol de PostgreSQL** sobre TCP/IP encriptado con TLS/SSL.

#### 2. Control de Concurrencia y Aislamiento (ACID)
Para evitar condiciones de carrera (*race conditions*) cuando múltiples clientes intentan comprar el último producto simultáneamente:
* **Bloqueo Pesimista (`FOR UPDATE`):** Durante la transacción, el registro del producto se bloquea temporalmente a nivel de fila (*row-level lock*) en la base de datos hasta que se ejecuta el `COMMIT` o `ROLLBACK`.
* **Nivel de Aislamiento:** *Read Committed* o *Repeatable Read*, asegurando que ningún otro proceso pueda leer o modificar el stock en estado inconsistente.

#### 3. Patrón de Caché (*Cache-Aside / Invalidation*)
* **Lectura rápida:** El módulo de ventas consulta primero la **memoria caché (Redis)** para validar la existencia y precios de productos sin sobrecargar la base de datos relacional.
* **Invalidación posterior al Commit:** Inmediatamente después de un `COMMIT` exitoso en la BD relacional, el servicio elimina o actualiza las llaves asociadas en Redis (`DEL /productos/{id}/stock`) para obligar a las subsecuentes lecturas a sincronizarse con el valor real.

#### 4. Manejo de Errores y Resiliencia
* **Rollback Automático:** Ante cualquier fallo de red, restricción de clave foránea violada o falta de stock, la aplicación envía un comando `ROLLBACK` a la BD para revertir cualquier cambio parcial, garantizando la **atomicidad**.
* **Patrón Circuit Breaker:** Si la base de datos relacional deja de responder o supera el tiempo límite (*timeout*), el módulo de ventas activa un *Circuit Breaker* para no saturar la infraestructura y responde al cliente con un mensaje de degradación controlada (`HTTP 503 Service Unavailable`).
