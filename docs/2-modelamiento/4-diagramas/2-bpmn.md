---
id: bpmn
title: "📄 Business Process Model and Notation"
sidebar_label: "📄 BPMN"
---
import YouTubeVideo from '@site/src/components/YouTubeVideo';

## **BPMN**

**BPMN** significa **Business Process Model and Notation** (Modelo y Notación de Procesos de Negocio). Es el estándar global y la notación gráfica de referencia para modelar flujos de trabajo y procesos de negocio. Originalmente publicado en 2004 por la *Business Process Management Initiative* (BPMI), su desarrollo fue asumido por el prestigioso **Object Management Group (OMG)** (creador de UML) y ratificado internacionalmente bajo la norma **ISO/IEC 19510**.

Su propósito esencial es actuar como un **puente lingüístico y analítico** que unifique el entendimiento de los procesos de negocio a lo largo de toda la organización. Resuelve la brecha histórica entre el diseño conceptual de la empresa y la implementación técnica, proporcionando una representación clara y sin ambigüedades comprensible tanto para analistas de negocio, gerentes, desarrolladores de TI y operadores de sistemas.

<YouTubeVideo id="l-sCUKQZ44s" title="Tutorial: How to get started with Camunda" />

### Las Dos Grandes Revoluciones de BPMN

Para comprender el impacto de BPMN frente a diagramas de flujo tradicionales (como los DFD), hay que destacar dos características clave:

1.  **"WYMIWYR" — *What You Model Is What You Run* (Lo que modelas es lo que ejecutas):** En su versión 2.0, BPMN dejó de ser solo un lenguaje de dibujo estático. Además de definir símbolos, introduce un **metamodelo formal y un esquema basado en XML**. Esto significa que el mismo diagrama que un analista de negocio diseña en un software de modelado puede ser exportado de manera directa como código ejecutable hacia un **motor de ejecución de procesos (BPMS)**, automatizando el proceso sin necesidad de reescribir especificaciones de requisitos ni programar código intermedio.

2.  **Diferencia frente a enfoques declarativos (como CMMN):** Mientras que metodologías como CMMN se basan en un enfoque declarativo (describir *qué* actividades se pueden realizar según el estado del caso, sin un orden secuencial rígido), **BPMN es imperativo**. Define con absoluta precisión y rigurosidad cronológica la secuencia de pasos de control que el sistema *debe* seguir desde un inicio hasta su final.



### Los 5 Pilares de la Notación BPMN (Elementos Básicos)

Un diagrama de procesos de negocio (BPD) se construye organizando sus símbolos gráficos en cinco grandes categorías de elementos:

#### 1. Objetos de Flujo (Flow Objects)
Son los nodos principales que definen el comportamiento dinámico del proceso:
*   **Eventos (Event - Círculos):** Representan cosas que "suceden" instantáneamente durante el proceso (sin duración física). Tienen tres formatos: **Inicio** (borde delgado), **Intermedio** (borde doble) y **Fin** (borde grueso). Además, se clasifican según sus disparadores en *Mensajes* (un sobre), *Temporizadores* (un reloj), *Errores* (un rayo para excepciones) o *Señales*.
*   **Actividades (Activity - Rectángulos con esquinas redondeadas):** Representan el trabajo o tareas que toman tiempo en ejecutarse. Se dividen en **Tareas** (unidades atómicas no descomponibles, como una *Tarea de Usuario* para humanos o una *Tarea de Servicio* automatizada por sistemas) y **Subprocesos** (unidades complejas que encapsulan su propio flujo interno y que pueden colapsarse para mantener el diseño limpio).
*   **Compuertas (Gateway - Rombos):** Son los puntos de decisión que controlan la división, divergencia y convergencia de los caminos del proceso. Las más comunes son la **Exclusiva (XOR)** (solo se toma un camino), la **Paralela (AND)** (todos los caminos se ejecutan al mismo tiempo), la **Inclusiva (OR)** (uno o varios caminos según condiciones) y la **Basada en Eventos** (el flujo se define por el primer evento que ocurra, como la recepción de un mensaje o el paso de un temporizador).

#### 2. Objetos de Conexión (Connecting Objects)
Son las líneas que enlazan los elementos del flujo:
*   **Flujo de Secuencia (Sequence Flow - Flecha de línea sólida):** Define el orden cronológico en que se ejecutan los objetos de flujo. **Regla de Oro:** Un flujo de secuencia *nunca* puede cruzar los límites de un Pool.
*   **Flujo de Mensajes (Message Flow - Flecha de línea discontinua con un círculo de origen):** Muestra el flujo de información o comunicaciones entre dos participantes independientes (es decir, que cruza de un Pool a otro). *Nunca* puede utilizarse para conectar elementos dentro del mismo Pool.
*   **Asociación (Association - Línea punteada):** Se utiliza para vincular anotaciones de texto, metadatos o artefactos de datos con los objetos de flujo.

#### 3. Swimlanes (Líneas de Carril)
Ayudan a organizar y delimitar las responsabilidades operacionales dentro del diagrama:
*   **Pool (Piscina):** Representa un participante principal del proceso (por ejemplo, una organización completa, un departamento o un sistema de información masivo como un ERP). Actúa como un contenedor contenedor rígido; las comunicaciones entre pools independientes se modelan exclusivamente con *Flujos de Mensajes*.
*   **Lane (Carril):** Son las subdivisiones internas horizontales o verticales de un Pool. Se utilizan para clasificar y agrupar actividades de acuerdo con los roles de los usuarios (ej. *Cajero, Supervisor*), áreas de la empresa (ej. *Bodega, Finanzas*) o componentes de software específicos.

#### 4. Datos (Data)
Elementos que representan la información física o digital procesada, consumida o producida por el sistema:
*   **Objetos de Datos (Data Object):** Información temporal de la transacción (como un *Ticket de venta* o un *Formulario de solicitud*).
*   **Almacenes de Datos (Data Store):** Representan persistencia de datos (bases de datos relacionales o sistemas de archivos) que sobreviven más allá del ciclo de vida de la instancia del proceso.

#### 5. Artefactos (Artifacts)
Elementos puramente visuales que no alteran la lógica de control del proceso, pero mejoran drásticamente su lectura y documentación:
*   **Anotaciones de Texto (Text Annotation):** Notas aclaratorias adjuntas a un elemento del flujo para agregar comentarios contextuales.
*   **Grupos (Group):** Recuadros de línea punteada utilizados para agrupar actividades con fines informales o de análisis estadístico de rendimiento.



### Ejemplo de Aplicación (Conexión Histórica)

En el caso de estudio de **Supermercados Alianza S.A.** que modelamos en la versión 2 de tu PDF de Arquitectura Fractal, la lógica de control homeostática se diseña bajo este estándar:
1.  **El POS (Punto de Venta) en Tienda:** El proceso inicia con un *Evento de Inicio de Mensaje* ("Cliente presenta productos"). Las cajas registradoras ejecutan una secuencia de *Tareas de Usuario* ("Escanear código", "Registrar ítem") dentro del *Lane de Cajero*.

2.  **La Compuerta XOR:** Tras finalizar la transacción, una *Compuerta de Decisión Exclusiva (XOR)* evalúa el medio de pago: si es Efectivo, se ejecuta una tarea rápida; si es Crédito, se invoca una *Tarea de Servicio* asíncrona para conectarse con el motor transaccional financiero remoto.
3.  **El Lazo de Retroalimentación Inter-Pool:** Cuando el inventario físico desciende de la meta de seguridad, el sistema genera automáticamente un *Flujo de Mensajes* (línea discontinua) que viaja desde el Pool de la *Tienda* hacia el Pool del *Centro de Distribución (CD)* para activar el WMS (Warehouse Management System), modelando la homeostasis del negocio de manera completamente sinérgica y sin fisuras organizativas.

