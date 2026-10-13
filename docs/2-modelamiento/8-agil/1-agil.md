---
id: agil
title: "Desarrollo Agil"
sidebar_label: "📄 Desarrollo Agil"
description: "Desarrollo ágil y gestión del flujo"
---

## **Manifiesto Agil**

El **Manifiesto Ágil** (o *Agile Manifesto*) es el documento fundacional que define oficialmente los valores y principios del agilismo. Fue formalizado en **marzo de 2001** en Salt Lake City (Utah, EE. UU.) por un grupo de **17 líderes y expertos** de la industria del software (entre ellos Kent Beck, Ken Schwaber, Jeff Sutherland y Alistair Cockburn). 

Surgió con un espíritu desafiante frente a los modelos tradicionales de desarrollo basados en procesos (como CMM-SW, PMI o SPICE), los cuales consideraban excesivamente pesados, rígidos y dependientes de planificaciones exhaustivas que no lograban adaptarse a los entornos dinámicos e inestables.

En lugar de ser una metodología rígida, el agilismo se concibe como una **mentalidad (*mindset*) definida por cuatro valores clave, guiada por doce principios básicos y manifestada a través de diversas prácticas** en el día a día.


### Los 4 Valores del Manifiesto Ágil
El manifiesto se sostiene sobre cuatro postulados esenciales:

1. **A los individuos y su interacción** por encima de los procesos y las herramientas. *(Los procesos guían, pero son las personas motivadas y con el talento adecuado las que resuelven los problemas y generan resultados).*
2. **El software (o producto) que funciona** por encima de la documentación exhaustiva. *(Interactuar con prototipos y partes del sistema funcional genera un aprendizaje y una retroalimentación mucho más ricos que leer un extenso documento de requisitos).*
3. **La colaboración con el cliente** por encima de la negociación contractual. *(El cliente se integra como un miembro activo del equipo de desarrollo, buscando el mayor valor de forma conjunta en vez de limitarse a defender cláusulas de un contrato).*
4. **La respuesta al cambio** por encima del seguimiento de un plan. *(En entornos inciertos, la adaptabilidad y la capacidad de pivotar son mucho más competitivas que aferrarse de forma rígida a un plan inicial cerrado).*

> **Aclaración fundamental del Manifiesto:** *“Aunque hay valor en los elementos de la derecha, valoramos más los de la izquierda”*.


### Los 12 Principios Detrás del Manifiesto
De estos valores se desprenden doce principios de diseño y comportamiento, entre los que destacan:
* **Satisfacción del cliente** mediante la entrega temprana y continua de producto con valor.
* **Dar la bienvenida a los cambios** en los requisitos, incluso en etapas avanzadas, como ventaja competitiva.
* **Entregar productos funcionales de forma frecuente** (en ciclos de pocas semanas o meses).
* **Trabajo conjunto y cotidiano** entre la gente de negocio y los desarrolladores.
* **Construir proyectos en torno a personas motivadas**, dándoles el entorno, el apoyo y la confianza necesaria.
* **La conversación cara a cara** como el método más eficiente y efectivo para transmitir información.
* **La simplicidad** entendida como "el arte de maximizar la cantidad de trabajo no realizado".
* **Equipos autoorganizados** de los cuales emergen las mejores arquitecturas y diseños.
* **Reflexión y ajuste periódico** sobre cómo ser más efectivos para optimizar el comportamiento del equipo.



### Su Conexión con la Arquitectura Empresarial (AE)
Aunque nació estrictamente para el desarrollo de software, este movimiento se ha expandido con éxito a sectores como la salud, la educación y la manufactura. Su impacto es tan amplio que, conectando con nuestra discusión anterior sobre **Arquitectura Empresarial (AE)**, los autores adaptan el Manifiesto Ágil al ámbito del diseño de AE de la siguiente manera:

* **Tomadores de decisiones (*sense-makers*)** por encima de procesos y herramientas.
* **Coherencia en la empresa** por encima de su documentación exhaustiva.
* **Promoción de la colaboración de Negocio y TI** por encima de la negociación de contratos.
* **Aprovechar las oportunidades inmediatas** por encima de seguir un plan.

Esto demuestra que los principios ágiles, al igual que el pensamiento sistémico, no son una moda técnica, sino un cambio cultural profundo sobre cómo las organizaciones gestionan el conocimiento y la adaptación en el siglo XXI.

## **Marcos de trabajo**

**Scrum** y **Kanban** son las dos herramientas y marcos de proceso ágiles más utilizados y populares de la industria. Aunque ambos comparten un origen Lean y están completamente alineados con los valores y principios del Manifiesto Ágil (como los sistemas de planificación "Pull" de tipo *Just In Time* y la mejora continua empírica), cada uno implementa esta filosofía mediante mecánicas operativas muy diferentes.

A continuación se detalla cómo cada marco pone en práctica la agilidad y el flujo de trabajo:


### Scrum: Agilidad a través de la Disciplina del Sprint (Cadencia Fija)
Scrum se enfoca en dividir el trabajo y el tiempo en bloques fijos para optimizar la predictibilidad y la adaptabilidad del equipo. Es un marco **más prescriptivo** (tiene más reglas y roles predefinidos):

* **Cadencia Fija (Sprints):** El tiempo se divide en iteraciones fijas de un mes o menos (comúnmente de 2 a 4 semanas), denominadas **Sprints**. 
* **Roles Prescritos:** Define estrictamente tres roles esenciales: el **Dueño del Producto** (Product Owner - define el "qué" y prioriza), el **Equipo de Desarrollo** (multidisciplinar y autoorganizado que implementa) y el **Scrum Master** (líder de servicio que remueve obstáculos y asegura el proceso).
* **Eventos Estructurados:** Cada sprint incluye reuniones obligatorias con objetivos y límites de tiempo (*timeboxes*) claros: Planificación del Sprint (*Sprint Planning*), Scrum Diario de 15 minutos (*Daily Scrum*), Revisión del Sprint (*Demo*) y Retrospectiva.
* **Control del Cambio:** Scrum **se resiste a los cambios durante el sprint**. Una vez que el equipo se compromete con un conjunto de tareas (*Sprint Backlog*), el alcance se congela para permitir que el equipo trabaje enfocado y sin interrupciones.
* **Límite de WIP Indirecto:** El Trabajo en Progreso (WIP) se restringe de forma **indirecta por unidad de tiempo** (por iteración). El equipo solo acepta la cantidad de trabajo que su **velocidad histórica** (puntos de historia completados por sprint) indica que puede finalizar.
* **Tablero Dinámico:** El tablero de tareas se limpia por completo al terminar cada Sprint y se inicia uno nuevo desde cero.



### Kanban: Agilidad a través del Flujo Continuo (Gestión Visual)
Inspirado en el sistema de manufactura *Just In Time* de Toyota, Kanban es un método **altamente adaptable y menos prescriptivo** que se enfoca en optimizar el flujo de trabajo continuo y reducir el desperdicio. Su lema es *"comienza con lo que haces ahora"*:

* **Visualización del Flujo:** El trabajo se divide en bloques (tarjetas) y se coloca en un tablero visual con columnas que representan estados específicos del proceso (p. ej., Pendiente, En Desarrollo, En Pruebas, Completado).
* **Límite de WIP Directo y Sistema "Pull":** La columna o estado de trabajo tiene asignado un **límite de WIP numérico explícito**. Ninguna columna puede exceder ese número, lo que obliga a un sistema **"Pull" (arrastre)**: el equipo no empieza un nuevo trabajo hasta que se termina y "arrastra" un elemento anterior hacia la siguiente fase. Esto previene la sobrecarga y expone de inmediato los cuellos de botella.
* **Cadencia y Entregas Flexibles:** No prescribe iteraciones de tiempo fijo. Las actividades de planificación, retrospectivas y lanzamientos se pueden hacer bajo demanda o de manera regular según convenga. El tablero es **persistente** y no se limpia entre ciclos.
* **Sin Roles ni Estimaciones Obligatorias:** No prescribe roles específicos (puedes conservar tu estructura actual) ni exige estimar el esfuerzo de las tareas. Se prioriza la simplicidad y la descomposición en elementos de tamaño similar.
* **Altamente Adaptativo al Cambio:** Las prioridades pueden cambiar en cualquier momento en la cola de entrada (*Ready / Pendiente*); el equipo responderá al cambio tan pronto como se libere espacio en el límite de WIP.
* **Métricas de Flujo:** Se enfoca en medir el **Lead Time** (tiempo total desde que se solicita una tarea hasta que se entrega) y el **Cycle Time** (tiempo activo de procesamiento de la tarea).


### Tabla Comparativa

| Dimensión | Scrum | Kanban |
| :--- | :--- | :--- |
| **Roles** | 3 Roles prescritos (*PO, SM, Equipo*) | Ninguno prescrito (opcional) |
| **Iteraciones** | Obligatorias y de tiempo fijo (1-4 semanas) | Opcionales (flujo continuo) |
| **Límite de WIP** | Indirecto (por Sprint según capacidad) | Directo (por columna/estado de flujo) |
| **Gestión de Cambios** | No se permiten cambios durante el Sprint | Se añaden tareas en cuanto hay WIP disponible |
| **Métricas Clave** | Velocidad (puntos de historia) | Lead Time (tiempo de entrega) y Cycle Time |
| **Persistencia del Tablero** | Se limpia al final de cada Sprint | Persistente (continuo) |
| **Estimación de Esfuerzo** | Prescrita y obligatoria | Opcional |



### 3. La Síntesis: Scrumban y la Mezcla de Enfoques
En la práctica, los equipos exitosos rara vez se limitan a un solo marco en su forma más pura; tienden a adaptar las prácticas a su contexto. La mezcla más común implica la utilización coordinada de **Scrum** para la estructura, roles, cadencia de retrospectivas y revisiones de negocio, y el **tablero Kanban** con límites de WIP para gestionar la visibilidad diaria de las tareas y resolver impedimentos. 

Esta combinación híbrida (conocida como **Scrumban**) ayuda a transicionar hacia un flujo continuo de valor sin perder la disciplina, la cohesión del equipo y el involucramiento de los interesados que aporta Scrum.

