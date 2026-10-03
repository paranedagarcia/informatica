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

Su funcionamiento y estructura se organizan de la siguiente manera:



### La Matriz de 6x6
El marco toma la forma de una matriz de doble entrada que intersecta **seis interrogantes básicas (las columnas)** con **seis perspectivas de los interesados (las filas)**, dando lugar a un esquema de clasificación descriptivo de 36 celdas en total:

**Las Columnas: Las Interrogantes (Abstracciones del Producto)**

Cada columna aborda un aspecto específico y diferenciado de la organización:
* **¿Qué? (Descripción de Datos - *What*):** Se enfoca en los elementos e información importantes para el negocio y sus relaciones estructurales. *(Ejemplo: clases de entidades de negocio, modelos semánticos)*.
* **¿Cómo? (Descripción de Funciones - *How*):** Describe cómo funcionan las partes del sistema tanto de forma independiente como conjunta. *(Ejemplo: procesos de negocio, funciones de computadora)*.
* **¿Dónde? (Descripción de Red - *Where*):** Muestra los aspectos de distribución física y de red, la ubicación de los elementos y sus dependencias. *(Ejemplo: nodos de hardware, protocolos de red)*.
* **¿Quién? (Descripción de Personas - *Who*):** Identifica a los agentes, roles y unidades organizacionales involucradas. *(Ejemplo: organigramas, modelos de flujo de trabajo)*.
* **¿Cuándo? (Descripción de Tiempo - *When*):** Describe los aspectos temporales y de programación significativos. *(Ejemplo: calendarios maestros, ciclos de negocio, eventos del sistema)*.
* **¿Por qué? (Descripción de Motivación - *Why*):** Proporciona los requerimientos lógicos y de justificación detrás de las decisiones. *(Ejemplo: metas de negocio, planes estratégicos, reglas de negocio)*.

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

---
## **Marco TOGAF**
**The Open Group Architecture Framework**

<center>
![](img/togaf.jpg)
</center>

El **Marco TOGAF** (*The Open Group Architecture Framework*) es un enfoque y una metodología altamente popular diseñada para el diseño, planificación, implementación y gobernanza de la Arquitectura Empresarial (AE) de una organización. 

Aunque convencionalmente se le denomina "marco de referencia", en realidad, **TOGAF no es un marco arquitectónico estático**, sino un manual detallado de fases y procesos metodológicos que guían a los arquitectos en la creación y evolución de su propia arquitectura de TI.

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

---
## 📝 **Test:** Marcos de trabajo

Antes de continuar, comprueba tus conocimientos.


import QuizComponent from '@site/src/components/Quiz';
import quiz from '@site/src/components/Quiz/data/ae.json';


<QuizComponent quiz={quiz} showInstantFeedback />