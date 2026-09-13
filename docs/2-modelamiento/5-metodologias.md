---
id: metodologias
title: "Metodologías de desarrollo"
sidebar_label: "📄 Metodologías"
description: "Metodologías de desarrollo, casos y selección"
---

## M**arcos de desarrollo**

### Enfoques y Modelos Principales

* **Ciclo de Vida Predictivo (Cascada / *Waterfall*):** Enfoque tradicional secuencial. Gran parte de la planificación y definición de requisitos ocurre por adelantado en una sola pasada rígida; una fase no comienza hasta que finaliza la anterior. Es adecuado cuando los requisitos están completamente fijos y probados.
* **Ciclo de Vida Iterativo:** Enfoque que permite obtener retroalimentación temprana sobre el trabajo sin terminar para revisar, ajustar y modificar la solución en ciclos sucesivos.
* **Ciclo de Vida Incremental:** Prioriza la velocidad de entrega; produce subconjuntos funcionales y terminados que el cliente puede utilizar de inmediato.
* **Ciclo de Vida Ágil (ej. Scrum, XP):** Combina los enfoques **iterativo e incremental**. Organiza el proyecto en bloques de tiempo delimitados (*sprints* de 1 a 4 semanas) donde se entregan pequeños incrementos de software funcionando, adaptándose continuamente a los cambios y reduciendo el riesgo.
* **Modelos Híbridos:** Combinan fases predictivas para los componentes conocidos y fases adaptativas/ágiles para los módulos con mayor incertidumbre o innovación.

### Selección de un marco de trabajo

Para seleccionar el marco de desarrollo adecuado en un proyecto informático, es necesario evaluar las características del entorno, el nivel de incertidumbre tecnológica, la inestabilidad de los requisitos y la criticidad del producto. 

A continuación se presenta un **cuadro comparativo de criterios de elección** entre los tres modelos representativos actuales, siempre puede evolucionar y aparecer nuevos marcos, en la ingeniería de software: el modelo en **Cascada (Predictivo)**, el marco **Scrum (Ágil de equipo)** y el **Proceso Unificado (UP / RUP - Iterativo y Centrado en la Arquitectura)**.


#### Cuadro Comparativo de Criterios de Selección

| Criterio de Selección | Modelo en Cascada (*Waterfall*) | Marco Scrum (*Agile*) | Proceso Unificado (*UP / RUP*) |
| :--- | :--- | :--- | :--- |
| **Enfoque Principal** | Predictivo y orientado al plan (*Plan-driven*). | Adaptativo y orientado a la entrega de valor. | Iterativo, adaptable, dirigido por casos de uso y centrado en la arquitectura. |
| **Tratamiento de Requisitos** | Fijos, detallados y "congelados" en las fases iniciales. | Dinámicos, cambiantes y gestionados mediante un *Product Backlog* prioritario. | Evolutivos y refinados iterativamente mediante casos de uso y modelo FURPS+. |
| **Estructura Temporal** | Secuencial por fases lineales (Requisitos → Diseño → Codificación → Pruebas). | Bloques de tiempo fijos (*Timeboxes* / *Sprints*) de 1 a 4 semanas. | Organizado en 4 fases (*Inicio, Elaboración, Construcción, Transición*) divididas en iteraciones. |
| **Frecuencia de Entrega** | Entrega única del producto completo al final del ciclo de vida. | Entregas pequeñas, frecuentes y funcionales en cada *Sprint*. | Entregas incrementales en versiones ejecutables internas al final de cada iteración. |
| **Mitigación del Riesgo** | Tardía; los riesgos de integración y pruebas se afrontan al final del proyecto. | Temprana e empírica; reducida por la brevedad del *Sprint* y la retroalimentación. | Temprana y estructural; aborda los riesgos técnicos y de arquitectura en la fase de *Elaboración*. |
| **Participación del Cliente** | Limitada a hitos específicos de aprobación y pruebas de aceptación finales. | Continua y diaria mediante la figura del *Product Owner* y demostraciones. | Continua en talleres de requisitos y evaluaciones al cierre de cada iteración. |
| **Documentación y Artefactos** | Exhaustiva, rígida y formalizada antes de comenzar la codificación. | Mínima indispensable; código funcionando por encima de documentación densa. | Seleccionada según el contexto (*Marco de Desarrollo* / *UP Ágil*), usando diagramas UML. |
| **Tamaño y Perfil del Equipo** | Equipos grandes con especialización funcional por departamentos/fases. | Equipos pequeños (3 a 9 miembros), multidisciplinarios y auto-organizados. | Escalable; adaptable desde pequeños equipos (*UP Ágil*) hasta grandes proyectos corporativos. |
| **Métrica de Progreso** | Cumplimiento del plan, cronograma de hitos y presupuesto original. | Incremento funcional de software "Terminado" (*Done*) y velocidad del equipo. | Arquitectura ejecutable estabilizada e incremento de casos de uso probados. |



#### Guía de Decisión: ¿Cuándo seleccionar cada modelo?

**1. Seleccionar el Modelo en Cascada (Predictivo) cuando:**

*   Los **requisitos del sistema están completamente definidos, claros e inmutables**.
*   Existe una comprensión profunda y probada de la tecnología a utilizar (baja incertidumbre técnica).
*   El contrato con el cliente es de precio y plazo cerrados (licitaciones públicas o rígidas).
*   La gerencia exige la documentación formal completa de cada fase antes de autorizar el presupuesto de la siguiente.

**2. Seleccionar Scrum (Ágil) cuando:**

*   Existe **alta incertidumbre en los requisitos** o el negocio opera en un entorno de mercado volátil.
*   Es prioritario reducir el tiempo de salida al mercado (*Time-to-Market*) y entregar valor utilizable de inmediato al cliente.
*   El cliente o *Product Owner* está disponible para colaborar de manera cotidiana con el equipo.
*   El desarrollo puede ser abordado por un equipo multidisciplinario pequeño enfocado en la auto-organización y la mejora continua.

**3. Seleccionar el Proceso Unificado (UP / RUP) cuando:**

*   El sistema es de **alta complejidad técnica o de gran escala** y requiere un núcleo arquitectónico sólido y probado antes de agregar todas las funcionalidades.
*   Se requiere combinar la disciplina de modelado gráfico (UML, Casos de Uso, FURPS+) con la flexibilidad del desarrollo iterativo e incremental.
*   Es crucial **identificar y mitigar los riesgos de arquitectura y desempeño en las fases tempranas** (Fase de Elaboración) para evitar fallas catastróficas en producción.
*   Se busca un enfoque adaptable (*UP Ágil*) que permita seleccionar solo los artefactos que aportan valor real al proyecto.



#### La Síntesis Moderna: Enfoques Híbridos
En la práctica de la ingeniería de software actual, la decisión no es una "guerra dogmática" entre procesos estáticos y agilidad. Las organizaciones suelen emplear **modelos híbridos**: utilizan el ciclo de vida iterativo del Proceso Unificado o el marco de Scrum para las fases de exploración e implementación de software, combinándolos con la disciplina predictiva o de conformidad formal para el despliegue o la auditoría regulatoria.

