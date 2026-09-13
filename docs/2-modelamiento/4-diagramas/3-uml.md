---
id: uml
title: "UML"
sidebar_label: "📄 UML"
description: "UML y modelamiento de requisitos"
---
import YouTubeVideo from '@site/src/components/YouTubeVideo';


- UML Tutorial. Diagrama de Clases
<YouTubeVideo id="Z0yLerU0g-Q" title="Etica y regulación en la IA" />

**UML** responde a las siglas de **Unified Modeling Language** (Lenguaje Unificado de Modelado). Es el **estándar visual de facto y de iure** en la industria del software, respaldado y mantenido por el **Object Management Group (OMG)**, utilizado para especificar, visualizar, construir y documentar los artefactos de sistemas de software, así como para el modelado de negocios y otros sistemas no relacionados con el software.



### El Origen: Unificación de Lenguajes
Antes de la creación de UML a mediados de la década de 1990, los ingenieros de software se enfrentaban a una "guerra de metodologías" con cientos de notaciones de modelado orientado a objetos que eran incompatibles entre sí (como OMT de James Rumbaugh, Booch de Grady Booch y Objectory de Ivar Jacobson). Esta fragmentación dificultaba que las herramientas de diseño y la experiencia de los desarrolladores se transfirieran fácilmente de un proyecto a otro.

En 1994, Booch y Rumbaugh unificaron sus notaciones (a los que luego se unió Jacobson, siendo conocidos colectivamente como **"los tres amigos"**), dando origen a la primera versión de UML, la cual fue adoptada como estándar internacional por el OMG en **1997**.



### UML no es una Metodología
En tu bibliografía de estudio, el autor Craig Larman hace una advertencia crucial para la formación de ingenieros de software: **UML es simplemente una notación visual, no es un método de diseño ni un proceso de desarrollo**. 
*   Aprender la sintaxis de UML y saber dibujar diagramas visuales en una herramienta CASE no convierte a alguien en un diseñador competente, del mismo modo que el proverbio indica que **"tener un martillo no te hace un arquitecto"**.
*   La habilidad verdaderamente crítica y difícil de dominar es el **Análisis y Diseño Orientado a Objetos (A/DOO)**, que consiste en saber cómo "pensar en objetos", estructurar colaboraciones lógicas y asignar responsabilidades de forma hábil (por ejemplo, aplicando los principios de patrones de diseño GRASP o GoF). UML es simplemente el lenguaje de planos que empleamos para plasmar y comunicar estas decisiones.



### Las Tres Perspectivas de Modelado en UML
UML es sumamente flexible. Un mismo elemento gráfico (como una caja rectangular que representa una clase) se puede interpretar bajo **tres perspectivas conceptuales distintas** según la etapa del ciclo de vida en la que te encuentres:

1.  **Perspectiva Conceptual o Esencial:** Los diagramas describen cosas, conceptos o eventos del mundo real del dominio de interés. Un ejemplo es el *Modelo del Dominio*, donde las clases representan entidades reales de la empresa y no contienen código, métodos de programación ni especificaciones técnicas.

2.  **Perspectiva de Especificación:** Los diagramas describen abstracciones de software, componentes e interfaces (lo que la clase conoce y sabe hacer), pero **sin comprometerse con una tecnología o lenguaje de programación específico**.

3.  **Perspectiva de Implementación:** Los diagramas describen detalladamente clases reales de software listas para ser programadas en un lenguaje particular (como Java, C# o C++), definiendo tipos de variables, visibilidad (pública o privada) y el código de implementación de sus métodos.



### Los Componentes del Lenguaje
La ontología interna de UML se organiza de forma estricta en tres grandes bloques de construcción:
*   **Cosas (Things):** Los elementos primarios del modelo, divididos en estructurales (ej. clases, casos de uso, interfaces), de comportamiento (ej. interacciones, estados), de agrupación (paquetes) y de anotación (notas aclaratorias).

*   **Relaciones:** El pegamento semántico que une los elementos. Incluye dependencias, asociaciones, generalizaciones (herencia) y agregaciones/composiciones (relaciones todo-parte).

*   **Diagramas:** Las vistas que describen aspectos específicos del sistema. UML 2.0 clasifica sus diagramas principales en dos ramas fundamentales:

#### A. Diagramas Estructurales
Modelan los objetos y las entidades físicas o lógicas que componen el sistema en un instante de tiempo, sin enfocarse en su comportamiento dinámico:
*   **Diagrama de Clases:** El más importante y utilizado. Muestra los tipos de objetos, sus atributos, métodos públicos o privados y sus relaciones estáticas.

*   **Diagrama de Objetos:** Muestra instancias concretas de clases y sus enlaces de datos en un momento del tiempo.

*   **Diagramas de Componentes y de Despliegue:** Ilustran la arquitectura física de los entregables (ejecutables, archivos) y cómo se distribuyen en los servidores de hardware y topología de red.

#### B. Diagramas de Comportamiento
Modelan el funcionamiento interno del software, las interacciones en el tiempo y las reacciones ante eventos:
*   **Diagrama de Casos de Uso:** Como el que acabamos de diseñar en tu reporte comparativo, define los límites del sistema, sus actores externos y los flujos de servicio de valor que interactúan.

*   **Diagramas de Secuencia y de Comunicación (Interacción):** Muestran paso a paso cómo colaboran los objetos enviándose mensajes a través del tiempo para completar una operación del negocio.

*   **Diagrama de Actividad:** Muestra la secuencia de actividades del proceso de negocio, permitiendo modelar flujos de trabajo paralelos, bifurcaciones y decisiones.

*   **Diagrama de Estados:** Mapea las transiciones y los distintos estados internos por los que pasa un objeto reactivo complejo ante eventos a lo largo de su ciclo de vida.



**La ventaja sistémica de UML:**
Al utilizar UML de forma iterativa, garantizas una **trazabilidad de principio a fin** en el ciclo de vida del desarrollo de software. Te permite conectar sin fisuras una historia o caso de uso del usuario (Requisitos) con los diagramas de interacción (Diseño), estructurar las clases estáticas (DCD) y transformarlos finalmente en código ejecutable con calidad de producción en tu lenguaje preferido.

---
## **Diagrama de Clases**

---
## **Casos de Uso**

**Casos de Uso y diagramas de casos de uso**
<YouTubeVideo id="iFcDoP6jEeE" title="Casos de Uso y diagramas de casos de uso" />

**Casos de Uso**
<YouTubeVideo id="5ezWOj0k02k" title="Casos de Uso (UML)" />
---
## **Diagramas de Secuencia**

---
## **Diagrama de Actividad**