---
id: arquitectura-empresarial
title:  "Arquitectura Empresarial"
sidebar_label: "📄 Arquitectura Empresarial"
---

La **Arquitectura Empresarial (AE)** (o *Enterprise Architecture*, EA) es un enfoque holístico que define la lógica organizativa de los procesos de negocio y la infraestructura de TI de una organización. Su objetivo principal es traducir la visión y la estrategia empresarial en planos estructurados de capacidades tecnológicas, permitiendo que la tecnología y el negocio avancen alineados hacia sus metas.

<center>
![](img/ae.jpg)
</center>
### ¿Qué es y para qué sirve?
La Arquitectura Empresarial actúa como un puente entre la **planificación estratégica** y los **esfuerzos de implementación** técnica. En lugar de ver a la tecnología y al negocio como silos separados, la AE proporciona un "mapa general" o *big picture* que unifica procesos, personas, información y sistemas. 

En la práctica, sirve para diseñar tanto el **estado actual ("As-Is")** de la organización como el **estado futuro deseado ("To-Be")**, trazando una ruta de migración clara que minimice riesgos y redundancias. Esto ayuda a superar el problema histórico de los "silos de aplicaciones" —sistemas aislados que funcionan bien por sí mismos pero que juntos impiden la coordinación organizacional— y a construir una base unificada para la ejecución.

### Los 4 Dominios de la AE
Tradicionalmente, la AE divide la complejidad de una organización en **cuatro dominios interconectados e interdependientes**:

<center>
![](img/ae_dominios.jpg)
</center>

* **Arquitectura de Negocio (*Enterprise Business Architecture* - EBA):** Se basa en la estrategia de la organización para definir los procesos, flujos de valor, estructuras de servicio y actividades operativas diarias. Es la base sobre la cual se definen los demás dominios.

* **Arquitectura de Información o Datos (*Enterprise Information Architecture* - EIA):** Organiza el flujo de datos y describe la estructura de los activos de información lógicos y físicos de la empresa. Define qué información se necesita, cómo fluye y cómo se gestiona y comparte de forma segura.

* **Arquitectura de Aplicaciones (*Enterprise Application Architecture* - EAA):** Define el conjunto de sistemas de software y aplicaciones que activan los procesos de negocio. Describe cómo interactúan las aplicaciones entre sí, cómo se integran y de qué manera se distribuyen a lo largo de la organización.

* **Arquitectura Técnica o Tecnológica (*Enterprise Technical Architecture* - ETA):** Define las plataformas tecnológicas, el hardware, los servidores, las redes, el middleware y los sistemas operativos que sirven de soporte a las aplicaciones y garantizan su interoperabilidad.

### Marcos de Referencia Comunes
Desarrollar una Arquitectura Empresarial desde cero es una tarea monumental. Por ello, las organizaciones adoptan marcos de trabajo que actúan como metodologías y plantillas de diseño:

* **El Marco Zachman:** John Zachman, considerado el pionero que acuñó el término AE, propuso una matriz de clasificación descriptiva que cruza **seis interrogantes** (qué, cómo, dónde, quién, cuándo, por qué) con **seis perspectivas de partes interesadas** (desde el planificador ejecutivo hasta la empresa en funcionamiento) para asegurar que se capturen todas las dimensiones de la organización.

* **TOGAF (*The Open Group Architecture Framework*):** Uno de los estándares más populares, que prescribe un método de desarrollo estructurado por fases llamado **ADM (Architecture Development Method)**, centrándose principalmente en la gestión y planificación de la arquitectura a través de sus cuatro dominios clave (negocio, datos, aplicaciones y tecnología).

* **FEAF (*Federal Enterprise Architecture Framework*):** Desarrollado inicialmente para el gobierno federal de los Estados Unidos, utiliza modelos de referencia de AE que pueden ser aplicados en otras industrias para facilitar la comunicación y la efectividad de la TI.

La Arquitectura Empresarial es, por lo tanto, una **práctica iterativa y continua** —no un proyecto de una sola vez— que fomenta el aprendizaje organizacional, la optimización de procesos y la flexibilidad ante los cambios dinámicos del mercado.

## **TOGAF vs Zachman**

Las diferencias fundamentales entre el **Marco Zachman** y **TOGAF** (*The Open Group Architecture Framework*) radican en su naturaleza, su propósito metodológico y la forma en que estructuran la Arquitectura Empresarial (AE). Mientras que uno es un esquema de clasificación taxonómica (una ontología), el otro es una metodología basada en procesos de gestión y planificación.

<center>
![](img/Zachman_TOGAF.webp)
</center>

A continuación se detallan las diferencias clave:

#### Naturaleza y Enfoque (¿Qué es cada uno?)
* **El Marco Zachman es un esquema de clasificación o taxonomía:** No prescribe ningún proceso, secuencia o ciclo de vida para el desarrollo de la arquitectura. Su enfoque consiste en asegurar que todos los planos y descripciones relevantes de una empresa estén mapeados y clasificados de forma integral.
* **TOGAF es un enfoque y metodología orientados a procesos:** No es en sí mismo un marco arquitectónico rígido, sino un manual de fases organizadas en torno a un método llamado **ADM** (*Architecture Development Method*). Se enfoca principalmente en la gestión, planificación y gobernanza de la creación de la AE, más que en predefinir el aspecto final de las vistas.

#### Estructura y Componentes Principales
* **Zachman utiliza una Matriz Estática (6x6):** La clasificación cruza **seis interrogantes básicas** (las columnas: *Qué, Cómo, Dónde, Quién, Cuándo, Por qué*) con **seis perspectivas de los interesados** (las filas: *Planificador, Propietario, Diseñador, Constructor, Subcontratista y Empresa en funcionamiento*). Cuenta con reglas estrictas de completitud (el formato es fijo y las columnas no tienen un orden jerárquico o temporal).
* **TOGAF utiliza el Ciclo ADM:** Es una estructura circular e iterativa de **fases consecutivas** (desde la Fase Preliminar y Visión de la Arquitectura, pasando por Negocio, Sistemas de Información y Tecnología, hasta la Planificación de la Migración, Gobernanza y Gestión de Cambios). También introduce el *Enterprise Continuum* para guiar el tránsito de la empresa desde su estado actual al deseado.

#### Dominios y Capas de la Arquitectura
* **TOGAF prescribe cuatro capas específicas de arquitectura:** Negocio (*Business*), Datos/Información (*Data/Information*), Aplicaciones (*Applications*) y Tecnología (*Technology*).
* **Zachman descompone la organización en seis bloques de modelado (las columnas):** Datos, Procesos, Redes, Personas, Tiempo y Motivación.

#### Entregables y Lenguajes de Modelado
* **Zachman define vistas preestructuradas:** Trata de predefinir qué representaciones lógicas y físicas requiere cada rol (por ejemplo, el modelo semántico para el Propietario o la arquitectura de red para el Diseñador). Sin embargo, carece de un instrumento o herramienta de modelado propio, por lo que frecuentemente se utiliza con la notación UML.
* **TOGAF es flexible en el formato de sus entregables:** Las salidas del proceso ADM no tienen una forma gráfica o look definido por defecto; pueden ser textos planos en un Wiki, documentos tradicionales o modelos lógicos en herramientas de software. The Open Group proporciona un lenguaje estandarizado llamado **ArchiMate** para dar soporte visual al modelado de AE bajo las fases de TOGAF.

#### Sinergia (¿Cómo se aplican juntos en la práctica?)
En el diseño real de Arquitectura Empresarial, **ambos marcos no son excluyentes, sino altamente complementarios y a menudo se combinan**. Las organizaciones suelen adoptar el **ADM de TOGAF** para tener un mapa de ruta metodológico claro (el "cómo" y en qué orden avanzar), y utilizan la **Matriz de Zachman** como el repositorio o "archivador" estructurado para clasificar, gobernar y asegurar la completitud de todos los artefactos de diseño que se producen a lo largo de esas fases.



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

Su funcionamiento y estructura se organizan de la siguiente manera:



### La Matriz de 6x6 (36 Celdas)
El marco toma la forma de una matriz de doble entrada que intersecta **seis interrogantes básicas (las columnas)** con **seis perspectivas de los interesados (las filas)**, dando lugar a un esquema de clasificación descriptivo de 36 celdas en total:

#### Las Columnas: Las Interrogantes (Abstracciones del Producto)
Cada columna aborda un aspecto específico y diferenciado de la organización:
* **¿Qué? (Descripción de Datos - *What*):** Se enfoca en los elementos e información importantes para el negocio y sus relaciones estructurales. *(Ejemplo: clases de entidades de negocio, modelos semánticos)*.
* **¿Cómo? (Descripción de Funciones - *How*):** Describe cómo funcionan las partes del sistema tanto de forma independiente como conjunta. *(Ejemplo: procesos de negocio, funciones de computadora)*.
* **¿Dónde? (Descripción de Red - *Where*):** Muestra los aspectos de distribución física y de red, la ubicación de los elementos y sus dependencias. *(Ejemplo: nodos de hardware, protocolos de red)*.
* **¿Quién? (Descripción de Personas - *Who*):** Identifica a los agentes, roles y unidades organizacionales involucradas. *(Ejemplo: organigramas, modelos de flujo de trabajo)*.
* **¿Cuándo? (Descripción de Tiempo - *When*):** Describe los aspectos temporales y de programación significativos. *(Ejemplo: calendarios maestros, ciclos de negocio, eventos del sistema)*.
* **¿Por qué? (Descripción de Motivación - *Why*):** Proporciona los requerimientos lógicos y de justificación detrás de las decisiones. *(Ejemplo: metas de negocio, planes estratégicos, reglas de negocio)*.

#### Las Filas: Las Perspectivas (Roles de los Interesados)
Cada fila representa el punto de vista de un actor o rol clave en la cadena de diseño y construcción:
1. **Planificador (Contextual - *Planner's View*):** El resumen ejecutivo que define el alcance (*scope*), tamaño global, costos y relación de la empresa con su entorno.
2. **Propietario (Conceptual - *Owner's View*):** Representa el punto de vista de quien posee y opera el negocio; muestra modelos conceptuales de alto nivel de las entidades e interacciones.
3. **Diseñador (Lógico - *Designer's View / System Model*):** Muestra el modelo del sistema desde una perspectiva lógica e independiente de las herramientas físicas específicas.
4. **Constructor (Físico - *Builder's View / Technology Model*):** Representa el diseño técnico físico, adaptando los modelos lógicos a tecnologías específicas (hardware, lenguajes de programación, etc.).
5. **Subcontratista (Fuera de Contexto - *Subcontractor's View*):** Proporciona las especificaciones detalladas e independientes para el ensamble de componentes modulares y configuraciones de bajo nivel.
6. **Empresa en Funcionamiento (*Functioning Enterprise*):** El sistema real operando en producción, es decir, la organización física funcionando.



### Características y Reglas Clave del Marco

Para aplicar correctamente el marco, John Zachman propuso un conjunto de siete reglas básicas que restringen y guían la generación de los planos arquitectónicos:
* **No hay orden en las columnas:** La regla número 1 indica que las columnas no poseen un orden jerárquico ni temporal implícito. El hecho de que la motivación se liste al final no significa que se defina al último o que tenga menor prioridad.
* **El número de perspectivas y columnas es fijo:** Debe haber estrictamente seis filas y seis columnas, número que no puede reducirse ni ampliarse.
* **No es una metodología, es una clasificación:** A diferencia de marcos como **TOGAF** (que define un ciclo paso a paso como el ADM), el Marco Zachman **no prescribe un proceso, secuencia ni método de desarrollo**. Es un esquema de clasificación taxonómico puro y descriptivo. Su propósito es asegurar que todos los puntos de vista de la empresa sean mapeados de forma integral y estructurada sin importar el orden en que se creen.
* **Independencia de herramientas:** Es abstracto y completamente neutral respecto al uso de tecnologías, notaciones o metodologías específicas.

### Fortalezas y Desafíos en la Práctica
* **Fortalezas:** Proporciona un vocabulario común, es fácil de entender a nivel de concepto y ayuda a gestionar la complejidad empresarial al estructurar el diseño holístico. Es ampliamente considerado el estándar de referencia más longevo y popular dentro del ámbito académico y corporativo.
* **Desafíos:** Al no ofrecer un manual de procesos "paso a paso", muchas organizaciones encuentran complejo llevarlo a la práctica y recurren a consultorías externas ante la falta de conocimiento operativo (*know-how*). Además, la profundidad requerida para completar los modelos de cada una de las 36 celdas puede llegar a ser abrumadora para los equipos de arquitectura si se intenta modelar todo a la vez.


## **Pensamiento sistémico**

El **pensamiento sistémico** se aplica en la **Arquitectura Empresarial (AE)** al concebir a la organización como un sistema complejo, dinámico e integrado, en lugar de una colección de departamentos o funciones aislados. Bajo este enfoque, un sistema es un conjunto de elementos interrelacionados e interdependientes que operan de manera conjunta para alcanzar objetivos predeterminados, y el pensamiento sistémico es el proceso metodológico que busca entender el comportamiento de este conjunto como un todo unificado.

En la práctica de la Arquitectura Empresarial, este concepto se despliega a través de los siguientes pilares clave:

#### La Organización como un Todo Holístico
Las empresas suelen desarrollarse de manera fragmentada, lo que da lugar a "silos" de aplicaciones y de información que operan bien individualmente pero impiden la coordinación organizacional global. La AE aborda este problema aplicando una visión estrictamente holística. Reúne a las personas, los procesos, los datos y la tecnología bajo reglas y relaciones comunes, analizando cómo interactúan los distintos subsistemas de la organización y facilitando la toma de decisiones coordinadas en todos los niveles administrativos.

#### Interdependencia y el Efecto Dominó del Cambio
En la teoría de sistemas, cualquier cambio en una de las partes afecta inevitablemente a los demás componentes del sistema. La AE mapea y documenta estas dependencias a través de sus distintos dominios (Negocio, Información, Aplicaciones y Tecnología). De este modo, los arquitectos pueden modelar de forma precisa el impacto de cualquier cambio —como sustituir un servidor o alterar un proceso de negocio— sobre las aplicaciones instaladas, el flujo de datos y los procesos de valor de la empresa, previniendo disrupciones inesperadas.

#### Alineación Estratégica y Sinergia
El pensamiento sistémico reconoce que la salida del sistema es mayor y más valiosa gracias a la interacción coordinada de sus componentes. En la AE, esta sinergia se busca mediante la alineación estratégica entre el negocio y la tecnología. La infraestructura y las soluciones tecnológicas no se diseñan ni se adquieren de forma aislada; se configuran de manera iterativa para dar soporte directo a las necesidades del negocio, la estrategia corporativa y los flujos de información requeridos para crear valor.

#### Gestión de la Complejidad a través de la Descomposición
Cuando un sistema empresarial crece en tamaño y complejidad, se vuelve inmanejable como un bloque único. La AE resuelve esto subdividiendo la complejidad organizacional en dominios arquitectónicos (arquitecturas de negocio, datos, aplicaciones y técnica). Al modelar estos dominios y separar conceptualmente el diseño del sistema (la arquitectura en diseño o el estado futuro "to-be") del día a día del negocio (la arquitectura en operación o el estado actual "as-is"), los arquitectos pueden deconstruir los problemas y encontrar soluciones óptimas e integradas.

#### Adaptabilidad en un Entorno Abierto (Ciclos de Retroalimentación)
Las organizaciones son sistemas abiertos que interactúan dinámicamente con su entorno, el cual incluye competidores, leyes, clientes y tendencias tecnológicas cambiantes. La AE actúa como un mecanismo de retroalimentación continua que ayuda a la empresa a aprender y adaptarse. A través de un proceso iterativo y evolutivo de planificación, implementación y análisis de brechas (*gap analysis*), la arquitectura se actualiza de manera constante para responder a los cambios dinámicos del mercado.


## **Herramientas**

La implementación del **Marco Zachman** se ve facilitada por diversas herramientas tecnológicas y lenguajes de modelado, aunque tus fuentes destacan un principio fundamental de diseño sobre este marco:

### 1. Independencia de Herramientas y Metodologías
John Zachman concibió su modelo para ser **completamente independiente de cualquier herramienta, tecnología o metodología específica**. Al ser un esquema de clasificación taxonómico puro (una matriz descriptiva y no un proceso paso a paso), no está ligado a un software en particular.

### 2. Ausencia de un Instrumento de Modelado Propio
Debido a su naturaleza abstracta y de clasificación, tus fuentes señalan que en el Marco Zachman **existe una falta de un instrumento o herramienta de modelado específica** que venga integrado por defecto en la matriz.

### 3. El Lenguaje Unificado de Modelado (UML) y RUP
Para resolver la falta de una herramienta nativa, los arquitectos y diseñadores recurren de manera muy extendida al [**UML (Unified Modeling Language)**](/docs/modelamiento/herramientas/uml) para crear las representaciones diagramáticas y los modelos requeridos en las diversas celdas y perspectivas de la matriz. 
* En la práctica, se suele combinar el uso de la **notación UML** con el **Proceso Unificado Racional (RUP - *Rational Unified Process*)** para el modelado de la Arquitectura de Negocio (BA) y la creación de la vista general (*big picture*) de la organización.

### 4. Herramientas de Arquitectura Empresarial (EA Tools) y Repositorios
La adopción formal de la Arquitectura Empresarial requiere de inversiones organizacionales en **herramientas de EA y repositorios**. Estas herramientas tecnológicas facilitan la implementación de marcos como Zachman al:
* Proveer los medios tecnológicos para **crear y vincular los elementos de navegación** a lo largo de las distintas dimensiones de la organización.
* Brindar características de **extensibilidad** esenciales para soportar capacidades ágiles dentro de la Arquitectura Empresarial.
* Servir de soporte para el modelado visual empírico utilizando lenguajes estándar de la disciplina como **ArchiMate**.

### 5. Herramientas CASE y de Diagramación General
Para poblar las celdas lógicas, físicas y conceptuales descritas por las columnas de Zachman (datos, procesos, redes, personas, tiempo y motivación), se emplean herramientas comunes de análisis y diseño de sistemas:
* **Herramientas CASE (Computer-Aided Software Engineering):** Aplicaciones como **Visible Analyst (VA)** facilitan a los analistas realizar la planificación, análisis y diseño gráfico de bases de datos y aplicaciones complejas cliente/servidor.
* **Software de Diagramación:** Herramientas populares como **Microsoft Visio** (a menudo combinada con Visible Analyst) u **OmniGraffle** (que cuenta con librerías específicas para símbolos de UML y diagramas Entidad-Relación) ayudan a los analistas a dibujar, modificar y visualizar de manera ágil los límites de un proyecto y cómo encajan sus partes dentro de la organización.

En resumen, dado que el Marco Zachman es una matriz clasificatoria, no requiere de una herramienta única; se implementa combinando **repositorios de EA**, **lenguajes estandarizados como UML y ArchiMate**, y **herramientas CASE o de diagramación** para dar vida y conectar de forma coherente cada una de sus 36 celdas.

