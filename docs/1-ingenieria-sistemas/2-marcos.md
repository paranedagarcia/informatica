---
id: ae-marcos
title:  "📄 Marco Empresarial"
sidebar_label: "📄 Marcos de trabajo"
---


## **Marco Zachman**

El **Marco Zachman** (o *Zachman Framework*) es uno de los pilares fundamentales e históricos de la Arquitectura Empresarial. Fue introducido originalmente por **John A. Zachman en 1987** y revisado y extendido una década después, en 1996. 

<center>
<figure>
![](img/Zachman.webp)
<figcaption>Guía del marco Zachman: La ontología de la Arquitectura Empresarial.</figcaption>
</figure>
</center>

Zachman, quien trabajaba para la empresa IBM en el área de metodologías de planificación de sistemas de información, propuso este modelo aplicando por analogía los conceptos de la **arquitectura de construcción clásica** al diseño y desarrollo de empresas y sus sistemas de computación. Al hacerlo, acuñó el término "Arquitectura Empresarial" (*Enterprise Architecture*).

Bajo la óptica de este marco, la arquitectura se define como un conjunto de artefactos de diseño o representaciones descriptivas que son relevantes para detallar un objeto complejo, de tal forma que pueda ser producido de acuerdo con requisitos de calidad específicos y mantenerse (cambiar) eficazmente a lo largo de su vida útil.

El Marco de Zachman constituye la ontología fundamental de la empresa. No es una metodología de pasos, sino una taxonomía estática que proporciona una vista de 360 grados de los activos organizacionales. Funciona como un "Check de Calidad Total"; si una celda de la matriz está vacía, existe una brecha de gobernanza o un punto ciego informativo que pone en riesgo la integridad estructural.

La matriz de 36 celdas se rige por la regla de la Perspectiva Única: cada celda representa un aspecto independiente y necesario para la completitud del modelo. Su estructura cruza las filas (Interesados) con las columnas (Interrogantes).


### La Matriz de 6x6
El marco toma la forma de una matriz de doble entrada que se rige por la regla de la Perspectiva Única: cada celda representa un aspecto independiente y necesario para la completitud del modelo. Intersecta **seis interrogantes básicas (las columnas)** con **seis perspectivas de los interesados (las filas)**, dando lugar a un esquema de clasificación descriptivo de 36 celdas en total:

**Las Columnas: Las Interrogantes (Abstracciones del Producto)**

Cada columna aborda un aspecto específico y diferenciado de la organización:
* **¿Qué? (Descripción de Datos - *What*):** Se enfoca en los elementos/objetos de negocio y activos de información importantes para el negocio y sus relaciones estructurales. *(Ejemplo: clases de entidades de negocio, modelos semánticos)*.

* **¿Cómo? (Descripción de Funciones - *How*):** Las funciones y transformaciones del sistema. Describe cómo funcionan las partes del sistema tanto de forma independiente como conjunta. *(Ejemplo: procesos de negocio, funciones de computadora)*.

* **¿Dónde? (Descripción de Red - *Where*):** La distribución geográfica y logística de nodos. Muestra los aspectos de distribución física y de red, la ubicación de los elementos y sus dependencias. *(Ejemplo: nodos de hardware, protocolos de red)*.

* **¿Quién? (Descripción de Personas - *Who*):** La asignación de responsabilidades y roles (Silos vs. T-Shaped). Identifica a los agentes, roles y unidades organizacionales involucradas. *(Ejemplo: organigramas, modelos de flujo de trabajo)*.

* **¿Cuándo? (Descripción de Tiempo - *When*):** Los ciclos operativos, eventos y cronogramas. Describe los aspectos temporales y de programación significativos. *(Ejemplo: calendarios maestros, ciclos de negocio, eventos del sistema)*.

* **¿Por qué? (Descripción de Motivación - *Why*):** La estrategia, metas y reglas de negocio. Proporciona los requerimientos lógicos y de justificación detrás de las decisiones. *(Ejemplo: metas de negocio, planes estratégicos, reglas de negocio)*.

**Las Filas: Las Perspectivas (Roles de los Interesados)**

Cada fila representa el punto de vista de un actor o rol clave en la cadena de diseño y construcción:
1. **Planificador (Contextual - *Planner's View*):** El resumen ejecutivo que define el alcance (*scope*), tamaño global, costos y relación de la empresa con su entorno.
2. **Propietario (Conceptual - *Owner's View*):** Representa el punto de vista de quien posee y opera el negocio; muestra modelos conceptuales de alto nivel de las entidades e interacciones.
3. **Diseñador (Lógico - *Designer's View / System Model*):** Muestra el modelo del sistema desde una perspectiva lógica e independiente de las herramientas físicas específicas.
4. **Constructor (Físico - *Builder's View / Technology Model*):** Representa el diseño técnico físico, adaptando los modelos lógicos a tecnologías específicas (hardware, lenguajes de programación, etc.).
5. **Subcontratista (Fuera de Contexto - *Subcontractor's View*):** Proporciona las especificaciones detalladas e independientes para el ensamble de componentes modulares y configuraciones de bajo nivel.
6. **Empresa en Funcionamiento (*Functioning Enterprise*):** El sistema real operando en producción, es decir, la organización física funcionando.



### Características y Reglas

Para aplicar correctamente el marco, John Zachman propuso un conjunto de siete reglas básicas que restringen y guían la generación de los planos arquitectónicos:

* **No hay orden en las columnas:** La regla número 1 indica que las columnas no poseen un orden jerárquico ni temporal implícito. El hecho de que la motivación se liste al final no significa que se defina al último o que tenga menor prioridad.

* **El número de perspectivas y columnas es fijo:** Debe haber estrictamente seis filas y seis columnas, número que no puede reducirse ni ampliarse.

* **No es una metodología, es una clasificación:** A diferencia de marcos como **TOGAF** (que define un ciclo paso a paso como el ADM), el Marco Zachman **no prescribe un proceso, secuencia ni método de desarrollo**. Es un esquema de clasificación taxonómico puro y descriptivo. Su propósito es asegurar que todos los puntos de vista de la empresa sean mapeados de forma integral y estructurada sin importar el orden en que se creen.

* **Independencia de herramientas:** Es abstracto y completamente neutral respecto al uso de tecnologías, notaciones o metodologías específicas.

### Fortalezas y Desafíos
* **Fortalezas:** Proporciona un vocabulario común, es fácil de entender a nivel de concepto y ayuda a gestionar la complejidad empresarial al estructurar el diseño holístico. Es ampliamente considerado el estándar de referencia más longevo y popular dentro del ámbito académico y corporativo.

* **Desafíos:** Al no ofrecer un manual de procesos "paso a paso", muchas organizaciones encuentran complejo llevarlo a la práctica y recurren a consultorías externas ante la falta de conocimiento operativo (*know-how*). Además, la profundidad requerida para completar los modelos de cada una de las 36 celdas puede llegar a ser abrumadora para los equipos de arquitectura si se intenta modelar todo a la vez.

Impacto Estratégico ("So What?"): Zachman mitiga el Riesgo Estructural y de Alcance (Appendix X2). Al mapear la realidad organizacional en esta matriz, el estratega puede identificar redundancias costosas y activos huérfanos. Si Zachman define "qué es" la empresa (el estándar), necesitamos un motor dinámico para gestionar "cómo transformarla": el ciclo ADM de TOGAF.

---
## **Marco TOGAF**
**The Open Group Architecture Framework**

<center>
![](img/togaf.jpg)
</center>

El **Marco TOGAF** (*The Open Group Architecture Framework*) es un enfoque y una metodología altamente popular diseñada para el diseño, planificación, implementación y gobernanza de la Arquitectura Empresarial (AE) de una organización. 

Aunque convencionalmente se le denomina "marco de referencia", en realidad, **TOGAF no es un marco arquitectónico estático**, sino un manual detallado de fases y procesos metodológicos que guían a los arquitectos en la creación y evolución de su propia arquitectura de TI.

TOGAF se posiciona como el marco metodológico dinámico esencial para la transformación continua. A través de su **Método de Desarrollo de Arquitectura (ADM)**, TOGAF proporciona el proceso iterativo para mover la organización desde su estado actual hacia el estado objetivo, alineándose con las características de los ciclos de vida incrementales.

El ciclo ADM gestiona el cambio mediante fases que van desde la "Visión de Arquitectura" hasta la "Gestión de Cambios de Arquitectura". Esta última fase es el punto de conexión crítica con la Gestión de Cambios en la Organización (OCM). Un despliegue acelerado de arquitectura pondrá a prueba la capacidad de adaptación de la empresa, lo que exige un patrocinio ejecutivo activo y visible para superar la resistencia al cambio y garantizar que la entrega de valor sea sostenible.

Impacto Estratégico ("So What?"): TOGAF es la estrategia de mitigación definitiva para la Deuda Técnica y la "Calidad Degradada". Mediante sus iteraciones constantes, el ADM permite refactorizar procesos y sistemas antes de que la complejidad del producto detenga la innovación. Mientras Zachman clasifica, TOGAF ejecuta el cambio, creando una sinergia entre lo estático y lo dinámico.

Su estructura y funcionamiento se basan en los siguientes componentes fundamentales:


### Las Dos Columnas
Como meta-arquitectura, TOGAF está constituido por dos partes esenciales que trabajan de manera conjunta:

*   **ADM (*Architecture Development Method*):** Es el corazón y motor operativo de TOGAF. Proporciona directrices paso a paso, iterativas y en un ciclo continuo, para guiar la creación y el desarrollo de la arquitectura empresarial en sus diferentes fases.

*   **El Continuo Empresarial (*Enterprise Continuum*):** Es un modelo que describe de manera lógica cómo una organización puede transicionar y moverse de manera ordenada desde su estado actual ("dónde está") hacia el estado futuro deseado ("dónde quiere estar"), clasificando los activos arquitectónicos desde los más genéricos (comunes de la industria) hasta los más específicos de la propia empresa.



### Los 4 Dominios o Capas
TOGAF prescribe que la Arquitectura Empresarial debe subdividirse en cuatro capas o dominios interdependientes para poder ser gestionada de manera efectiva:

1.  **Arquitectura de Negocio (*Business*):** Define la estrategia del negocio, la gobernanza, la organización y los procesos de negocio clave.
2.  **Arquitectura de Datos/Información (*Data*):** Describe la estructura de los activos físicos y lógicos de datos de la empresa, así como sus recursos de gestión de datos.
3.  **Arquitectura de Aplicaciones (*Applications*):** Define las especificaciones de las aplicaciones individuales y de software que se implementan para dar soporte y activar los procesos de negocio.
4.  **Arquitectura de Tecnología (*Technology*):** Detalla las capacidades lógicas y físicas de hardware y software (servidores, redes, middleware) que sustentan la infraestructura para ejecutar las aplicaciones.



### Las Fases del Ciclo ADM
El método ADM se representa de forma circular y cuenta con un conjunto de fases que guían el ciclo de vida del desarrollo arquitectónico:

*   **Fase Preliminar:** Se ejecuta al inicio para definir el contexto, obtener el respaldo (*buy-in*) de los patrocinadores del proyecto, establecer los principios arquitectónicos generales y definir los roles y responsabilidades del equipo.
*   **Fase A (Visión de la Arquitectura):** Define el alcance inicial del esfuerzo, la visión del proyecto y los criterios de validación de éxito.
*   **Fase B (Arquitectura de Negocio):** Diseña y modela el dominio de la arquitectura de negocio para alinearla con la visión.
*   **Fase C (Arquitectura de Sistemas de Información):** Desarrolla los planos específicos de las aplicaciones y de los activos de datos que interactúan con el negocio.
*   **Fase D (Arquitectura de Tecnología):** Mapea la infraestructura de hardware y software necesaria para habilitar la arquitectura de sistemas de información.
*   **Fase E (Oportunidades y Soluciones):** Evalúa los paquetes de trabajo y las opciones de implementación (p. ej., definir si conviene construir software a la medida o comprar soluciones comerciales ya hechas).
*   **Fase F (Planificación de la Migración):** Prioriza los proyectos o paquetes de trabajo, analiza sus dependencias y genera un plan detallado de migración.
*   **Fase G (Gobernanza de la Implementación):** Supervisa y coordina la ejecución de los proyectos para garantizar que la construcción real cumpla de forma conforme con los planos de la arquitectura.
*   **Fase H (Gestión de Cambios de la Arquitectura):** Implementa un proceso de control y gobernanza para evaluar y gestionar de manera ordenada cualquier alteración futura que sufra la arquitectura en producción.
*   **Gestión de Requisitos (*Requirements Management*):** Se ubica en el centro exacto del ciclo ADM. Es un proceso dinámico que interactúa de manera bidireccional y continua con cada una de las fases, asegurando que todos los requisitos del cliente estén alineados en todo momento.



### Flexibilidad
Un aspecto clave es que **TOGAF no prescribe ni define el aspecto o la apariencia visual que deben tener sus entregables**. Estos pueden materializarse como documentos de texto en un Wiki corporativo o como diagramas UML de alta complejidad en una herramienta especializada. 

Por esta razón, la organización que promueve TOGAF (*The Open Group*) proporciona un lenguaje de modelado visual estándar llamado **ArchiMate** para dar soporte gráfico al diseño de las vistas de AE. Asimismo, dada la flexibilidad de TOGAF, es una práctica común de la industria **unirlo de forma sinérgica con el Marco Zachman**; se utiliza el proceso dinámico ADM de TOGAF para guiar el orden de construcción de los planos del proyecto, y se utiliza la matriz estática de Zachman como el "archivador o repositorio taxonómico" ideal para clasificar y organizar esos planos una vez generados.

---
## **TOGAF vs Zachman**

Las diferencias fundamentales entre el **Marco Zachman** y **TOGAF** (*The Open Group Architecture Framework*) radican en su naturaleza, su propósito metodológico y la forma en que estructuran la Arquitectura Empresarial (AE). Mientras que uno es un esquema de clasificación taxonómica (una ontología), el otro es una metodología basada en procesos de gestión y planificación.

<center>
![](img/Zachman_TOGAF.webp)
</center>

A continuación se detallan las diferencias clave:

### Naturaleza y Enfoque
* **El Marco Zachman es un esquema de clasificación o taxonomía:** No prescribe ningún proceso, secuencia o ciclo de vida para el desarrollo de la arquitectura. Su enfoque consiste en asegurar que todos los planos y descripciones relevantes de una empresa estén mapeados y clasificados de forma integral.

* **TOGAF es un enfoque y metodología orientados a procesos:** No es en sí mismo un marco arquitectónico rígido, sino un manual de fases organizadas en torno a un método llamado **ADM** (*Architecture Development Method*). Se enfoca principalmente en la gestión, planificación y gobernanza de la creación de la AE, más que en predefinir el aspecto final de las vistas.

### Estructura y Componentes
* **Zachman utiliza una Matriz Estática (6x6):** La clasificación cruza **seis interrogantes básicas** (las columnas: *Qué, Cómo, Dónde, Quién, Cuándo, Por qué*) con **seis perspectivas de los interesados** (las filas: *Planificador, Propietario, Diseñador, Constructor, Subcontratista y Empresa en funcionamiento*). Cuenta con reglas estrictas de completitud (el formato es fijo y las columnas no tienen un orden jerárquico o temporal).

* **TOGAF utiliza el Ciclo ADM:** Es una estructura circular e iterativa de **fases consecutivas** (desde la Fase Preliminar y Visión de la Arquitectura, pasando por Negocio, Sistemas de Información y Tecnología, hasta la Planificación de la Migración, Gobernanza y Gestión de Cambios). También introduce el *Enterprise Continuum* para guiar el tránsito de la empresa desde su estado actual al deseado.

### Dominios y Capas
* **TOGAF prescribe cuatro capas específicas de arquitectura:** Negocio (*Business*), Datos/Información (*Data/Information*), Aplicaciones (*Applications*) y Tecnología (*Technology*).

* **Zachman descompone la organización en seis bloques de modelado (las columnas):** Datos, Procesos, Redes, Personas, Tiempo y Motivación.

### Entregables
* **Zachman define vistas preestructuradas:** Trata de predefinir qué representaciones lógicas y físicas requiere cada rol (por ejemplo, el modelo semántico para el Propietario o la arquitectura de red para el Diseñador). Sin embargo, carece de un instrumento o herramienta de modelado propio, por lo que frecuentemente se utiliza con la notación UML.

* **TOGAF es flexible en el formato de sus entregables:** Las salidas del proceso ADM no tienen una forma gráfica o look definido por defecto; pueden ser textos planos en un Wiki, documentos tradicionales o modelos lógicos en herramientas de software. The Open Group proporciona un lenguaje estandarizado llamado **ArchiMate** para dar soporte visual al modelado de AE bajo las fases de TOGAF.

### Sinergia
En el diseño real de Arquitectura Empresarial, **ambos marcos no son excluyentes, sino altamente complementarios y a menudo se combinan**. Las organizaciones suelen adoptar el **ADM de TOGAF** para tener un mapa de ruta metodológico claro (el "cómo" y en qué orden avanzar), y utilizan la **Matriz de Zachman** como el repositorio o "archivador" estructurado para clasificar, gobernar y asegurar la completitud de todos los artefactos de diseño que se producen a lo largo de esas fases.

### Análisis Comparativo
**Zachman (Estático) vs. TOGAF (Dinámico)**

La madurez arquitectónica de una organización se mide por su capacidad para integrar ambos marcos. No son excluyentes: Zachman define el Estándar y TOGAF define la Transformación.

| Atributo | Marco Zachman (Estático) | TOGAF / ADM (Dinámico) |
| ----- | ----- | ----- |
| Naturaleza | Ontología / Taxonomía | Metodología / Proceso |
| Enfoque | Definición de la existencia (Ser) | Guía de acción y transformación (Hacer) |
| Estructura | Matriz fija (36 celdas) | Ciclo iterativo (ADM) |
| Riesgo que Maneja | Riesgo Estructural y de Alcance | Riesgo de Ejecución y Proceso |
| Propósito | Clasificación de artefactos y diagnóstico | Ejecución de cambios y entrega de valor |

Impacto Estratégico ("So What?"): Esta dualidad permite gestionar la variabilidad. Zachman asegura que no olvidemos componentes críticos (integridad), mientras que TOGAF asegura que el proceso de cambio sea gobernado y adaptativo (agilidad). Juntos, proporcionan una base empírica para la toma de decisiones estratégicas.

### Sinergia Práctica y Adaptabilidad
**Implementación en la Empresa Ágil**

Para el estratega moderno, la integración de estos marcos no es opcional. Bajo una mentalidad ágil, el marco de Zachman funciona como el Backlog de la Arquitectura (la estructura de lo que debe ser), mientras que TOGAF opera como el Sprint (el flujo de mejora continua).

La elección del ciclo de vida debe basarse en el Continuo de los Ciclos de Vida: la AE debe decidir el enfoque (predictivo, híbrido o adaptativo) basándose en el grado de cambio y la frecuencia de entrega requerida. Para medir el éxito de esta implementación, debemos abandonar las métricas de utilización y adoptar Métricas Empíricas (Sección 5.4):

1. Lead Time y Cycle Time: Medir la velocidad de entrega de valor sobre la simple ocupación de recursos.  
2. "Done" Empírico (DoD): Sustituir el "porcentaje de avance" por criterios de aceptación terminados y probados.  
3. Satisfacción del Cliente: Priorizar la entrega de productos funcionales sobre la complacencia de contratos estáticos.

Impacto Estratégico ("So What?"): El éxito final de esta sinergia reside en la creación de una PMO Ágil. Esta unidad debe ser multidisciplinaria y orientada a la invitación (no impositiva), actuando como un Centro de Excelencia. Una PMO que impone EA fallará; una PMO que actúa como consultora de Zachman y TOGAF optimizará la entrega de valor, garantizando que la arquitectura sea un motor de agilidad y no un lastre burocrático.

---
## **FEAF**

El **FEAF** (*Federal Enterprise Architecture Framework* o Marco de Arquitectura Empresarial Federal) es un marco de trabajo integral desarrollado a finales de la década de 1990 para el **Gobierno Federal de los Estados Unidos**. Surgió como respuesta a mandatos legales como la ley *Clinger-Cohen Act* de 1996, con el objetivo de transformar la gestión de Tecnologías de la Información (TI) y resolver problemas de ineficiencia y duplicación en agencias públicas.


### Aspectos Fundamentales

1. **Objetivo Principal:**
   * **Estandarizar y gobernar** el desarrollo de la arquitectura empresarial en distintas agencias.
   * Promover la **interoperabilidad**, optimizar el uso de recursos tecnológicos, reducir sistemas redundantes y facilitar la comunicación entre áreas directivas y técnicas.

2. **Estructura y Modelos de Referencia (*Consolidated Reference Model*):**
   * El FEAF se apoya en un conjunto de modelos de referencia estandarizados que abarcan diferentes capas de la organización:
     * **BRM (*Business Reference Model*):** Centrado en las funciones y servicios de negocio.
     * **DRM (*Data Reference Model*):** Estandarización y flujo de datos interinstitucionales.
     * **ARM (*Application Reference Model*):** Funcionalidad de software y servicios de integración.
     * **IRM (*Infrastructure Reference Model*):** Hardware, centros de datos y redes.
     * **SRM (*Security Reference Model*):** Controles de seguridad y gestión de riesgos.
     * **PRM (*Performance Reference Model*):** Medición de resultados y valor generado.
   * Además, incluye una metodología de ejecución paso a paso llamada *Collaborative Planning Methodology* (CPM).

3. **Aplicabilidad:**
   * Aunque fue diseñado para el ámbito gubernamental público, sus principios, taxonomías y modelos de referencia se pueden adaptar y utilizar en **empresas e instituciones del sector privado** para estructurar sus propios planes de arquitectura empresarial.


### FEAF vs. TOGAF vs. Zachman

| Criterio / Atributo | **FEAF** | **TOGAF** | **Marco Zachman** |
| :--- | :--- | :--- | :--- |
| **Naturaleza y Enfoque** | Marco estandarizado de arquitectura para el sector público (gubernamental), adaptable a empresas privadas. | Metodología y proceso dinámico orientado a la planificación, gestión, transformación y gobernanza de la AE. | Ontología y taxonomía estática descriptiva; no prescribe un método, proceso o ciclo de vida. |
| **Origen e Historia** | Desarrollado en EE. UU. (1996/1999) impulsado por la *Clinger-Cohen Act* y el *Federal CIO Council*. | Desarrollado por *The Open Group* (1995), originalmente basado en el proyecto TAFIM del DoD. | Creado por John A. Zachman en IBM (1987, revisado en 1996) basándose en la arquitectura clásica. |
| **Estructura Principal** | Modelos de Referencia Consolidados (*BRM, DRM, ARM, IRM, SRM, PRM*) y Metodología *CPM*. | Ciclo iterativo **ADM** (*Architecture Development Method*) y el **Continuo Empresarial** (*Enterprise Continuum*). | **Matriz Estática de 36 celdas** (6 interrogantes × 6 perspectivas de partes interesadas). |
| **Propósito Fundamental** | Promover la interoperabilidad interinstitucional, reducir la duplicación de recursos y estandarizar la TI pública. | Guiar paso a paso la evolución de la empresa desde el estado actual (*As-Is*) hacia el estado objetivo (*To-Be*). | Ofrecer una clasificación de 360° para mapear, estructurar y verificar la integridad de los activos organizacionales. |
| **Dominios / Capas** | Negocio, Datos, Aplicaciones, Infraestructura/Tecnología, Seguridad y Rendimiento. | **4 dominios clave:** Negocio (*Business*), Datos (*Data*), Aplicaciones (*Applications*) y Tecnología (*Technology*). | **6 bloques de modelado (columnas):** Datos (Qué), Procesos (Cómo), Redes (Dónde), Personas (Quién), Tiempo (Cuándo) y Motivación (Por qué). |
| **Entregables y Lenguaje** | Modelos de referencia estandarizados e indicadores de rendimiento gubernamentales. | Entregables de formato flexible, representados formalmente con el lenguaje visual estándar **ArchiMate**. | Vistas preestructuradas por rol; neutral respecto a herramientas, utilizado comúnmente con notación **UML**. |
| **Manejo del Riesgo** | Riesgo de inversión pública, incompatibilidad e ineficiencia en servicios compartidos. | **Riesgo de ejecución, proceso y deuda técnica:** Gestiona el cambio iterativo sin degradar la calidad. | **Riesgo estructural y de alcance:** Evita puntos ciegos informativos o componentes huérfanos en el diseño. |


### Resumen de la Sinergia

En la práctica real de las organizaciones, estos tres enfoques no compiten entre sí, sino que se integran funcionalmente:

1. **El Marco Zachman funciona como la Ontología / Archivador:** Define *qué debe existir* para tener un modelo completo y libre de vacíos de gobernanza.

2. **TOGAF funciona como el Motor Metodológico (ADM):** Proporciona la guía procesal del *cómo y cuándo* transformar la empresa a través de fases iterativas de desarrollo.

3. **FEAF actúa como el Estándar de Referencia Dominial / Gubernamental:** Aporta taxonomías, catálogos e indicadores de rendimiento (*KPIs*) para evaluar la efectividad de los servicios interinstitucionales e inversiones.

### Ejemplos de aplicación


#### Ejemplo 1: Implementación de la Estrategia "Cloud-First" en Agencias Gubernamentales

* **Contexto del Problema:** Diversas agencias y departamentos operaban sistemas fragmentados y centros de datos dispares, dificultando la colaboración interinstitucional y aumentando los costos operativos de TI.
* **Aplicación Práctica de FEAF/FSAM:** 
  * Se utilizó la metodología de arquitectura por segmentos de FEAF (**FSAM**) junto con el marco general de FEA para realizar una **evaluación de la nube** en cuatro fases (evaluación, despliegue, habilitación y transición).
  * Se utilizaron los modelos de referencia de aplicaciones (ARM) e infraestructura (IRM) de FEAF para catalogar las aplicaciones críticas y definir cuáles podían migrarse hacia modelos SaaS, PaaS e IaaS.
* **Resultados Obtenidos:** Permitieron crear *blueprints* de transformación en la nube alineados con la política pública *"Cloud-First"*, asegurando que la consolidación de servidores y la analítica de Big Data respetaran los estándares de interoperabilidad y seguridad federales.



#### Ejemplo 2: Integración de Sistemas de Salud e Intercambio de Información Médica (NIH / *Caso "Health-Is-US"*)

* **Contexto del Problema:** Una organización de salud del sector público (que brinda servicios a agencias federales como los *National Institutes of Health - NIH*) enfrentaba procesos aislados, aplicaciones personalizadas no reutilizables y dificultades para compartir datos de manera eficiente y segura.

* **Aplicación Práctica de FEAF/FSAM:**
  * La organización adoptó la metodología **FSAM** de FEAF combinada con marcos como TOGAF y Zachman para diseñar e institucionalizar su **Práctica de Arquitectura de Negocio (BAP)**.
  * Se aplicó el modelo de datos de FEAF (DRM) y el modelo de aplicaciones (ARM) para descomponer sistemas monolíticos y acoplados en **servicios orientados a arquitectura (SOA)** reconfigurables e integrados sobre un bus de servicios empresariales (*Enterprise Service Bus - ESB*).

* **Resultados Obtenidos:** Se facilitó la interoperabilidad del Registro Médico Electrónico (*EHR*) y la plataforma de Intercambio de Información de Salud (*HIE*), garantizando el cumplimiento estricto de las regulaciones gubernamentales de privacidad de datos médicos (*Affordable Care Act*) y reduciendo los costos de mantenimiento de software.



---
## 📝 **Test:** Marcos de trabajo

Antes de continuar, comprueba tus conocimientos.


import QuizComponent from '@site/src/components/Quiz';
import quiz from '@site/src/components/Quiz/data/ae-marcos.json';


<QuizComponent quiz={quiz} showInstantFeedback />