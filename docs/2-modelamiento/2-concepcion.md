---
id: concebir
title: "Concebir"
sidebar_label: "📄 Concepción"
description: "Concepción de un problema y viabilidad de una solución tecnológica"
---


En la fase inicial de un **Ciclo de Vida Predictivo Tradicional (SDLC)**, el analista asume un rol sociotécnico y de consultoría para identificar correctamente los problemas, objetivos y oportunidades del negocio antes de comprometer recursos en un estudio detallado. 

Para delimitar el alcance, proponer alternativas y evaluar la viabilidad técnica, económica y operativa de la solución, se emplean de manera integrada las siguientes metodologías y herramientas estructuradas:



### Metodologías de Negocio e Inicio de Proyecto
*   **El Caso de Negocios (*Business Case*):** Es el documento fundamental que justifica si es conveniente o no realizar la inversión. En esta etapa se documenta formalmente la necesidad de negocio, se describen los beneficios esperados, se identifican los riesgos de alto nivel y se proponen las alternativas iniciales (incluyendo la opción de "no hacer nada").

*   **El Acta de Constitución del Proyecto (*Project Charter*):** Es el documento que autoriza formalmente el inicio del proyecto. Define de manera preliminar los objetivos del producto, nombra al director del proyecto, explicita los límites (qué incluye y qué no incluye) y establece los supuestos y restricciones clave que guiarán la planeación posterior.

*   **Identificación y Análisis de Interesados (*Stakeholders*):** Metodología clave para registrar a todas las personas u organizaciones afectadas por el sistema, evaluando sus intereses, influencias y requerimientos funcionales desde el primer día para evitar que coloquen trabas o bloqueos una vez iniciado el desarrollo.

### Herramientas para el Alcance del Sistema
*   **Diagrama de Flujo de Datos (DFD) a Nivel de Contexto:** Es una representación gráfica de alto nivel (Diagrama 0) que muestra los límites del sistema. Permite visualizar de forma clara qué entidades, personas o sistemas externos (actores) interactuarán con el nuevo sistema y qué flujos de datos cruzarán esa frontera.

*   **Diagramas y Escenarios de Casos de Uso:** Utilizados para identificar las interacciones esenciales entre los usuarios (actores) y el sistema desde una perspectiva de negocio. En la fase de inicio no se detallan exhaustivamente, sino que se analiza una muestra representativa (el 10% o 20% de las transacciones más complejas) para entender la magnitud global del esfuerzo.

### Técnicas para Evaluar la Viabilidad
Para que el analista recomiende la aprobación de un proyecto, este debe demostrar su factibilidad bajo tres dimensiones a través de un **Estudio de Viabilidad**:

*   **Viabilidad Técnica:** Evalúa si la organización cuenta con los medios informáticos adecuados, si la tecnología necesaria existe en el mercado, si se puede actualizar el sistema actual o si se requiere contratar personal externo con habilidades especializadas.

*   **Viabilidad Operativa:** Pronostica si el sistema realmente funcionará y será utilizado por los miembros de la empresa una vez instalado, analizando la resistencia al cambio de los usuarios y las interfaces humanas elegidas.

*   **Viabilidad Económica:** Compara los costos y beneficios tangibles (cuantificables en dinero, como la velocidad de procesamiento) e intangibles (difíciles de medir, como la moral de los empleados o la reputación de la empresa). 

### Técnicas Cuantitativas y Financieras
Para justificar económicamente el proyecto, el analista emplea técnicas financieras clásicas de evaluación:
*   **Análisis del Punto de Equilibrio (*Break-even analysis*):** Determina el volumen de operaciones o el momento en el que el costo acumulado del sistema actual se cruza con el del propuesto, indicando a partir de qué punto el nuevo sistema computacional comienza a ser rentable.

*   **Método de Retribución o Período de Recupero (*Payback Period*):** Mide de forma simple cuánto tiempo tardarán los beneficios tangibles acumulados del sistema en compensar y retribuir la inversión inicial de desarrollo.

*   **Análisis de Flujo de Efectivo (*Cash Flow*):** Examina la dirección, tamaño y patrón de los desembolsos e ingresos de dinero a lo largo de toda la vida útil esperada del sistema de información.

*   **Análisis del Valor Presente / Valor Neto Actual (VNA/VAN):** Evalúa el valor del dinero en el tiempo, aplicando una tasa de descuento para comparar de forma matemáticamente rigurosa los flujos de costos y beneficios futuros con el dinero del día de hoy.

*   **Modelos de Medición de Beneficios (Modelos de Calificación Ponderada):** Permiten evaluar alternativas de proyectos asignando pesos relativos a criterios clave de la empresa (rentabilidad, imagen, posicionamiento) y calificando cada opción para obtener un promedio ponderado objetivo.

*   **Modelos Matemáticos de Optimización:** Utilización de programación lineal, programación entera o dinámica (usando herramientas como *Solver* en Excel) para seleccionar la combinación óptima de proyectos independientes de un portafolio bajo restricciones presupuestarias estrictas.

### Herramientas de Descubrimiento y Consenso
Durante las actividades de recolección de datos y "tormentas de ideas" en grupo, el analista actúa como facilitador utilizando técnicas creativas y visuales para descubrir los problemas y objetivos esenciales:
*   **Diagramas de causa-efecto (Ishikawa o espina de pescado):** Para identificar de forma gráfica las causas raíz de las ineficiencias del sistema actual.

*   **Diagramas de Pareto:** Histogramas ordenados descendentemente que permiten priorizar las causas de los problemas bajo la regla del 80-20.

*   **Técnicas de consenso y priorización:** Mapas mentales, multivotación, votación por puntos (*dot voting*), técnica de grupo nominal, escritura de ideas en silencio (*brainwriting*) y diagramas de afinidad para consolidar los requisitos reales de los usuarios.

### Soporte Tecnológico y Software
*   **Herramientas CASE Superiores (*Computer Aided Software Engineering*):** Plataformas como **Visible Analyst (VA)** que proveen un repositorio centralizado de datos (enciclopedia) para almacenar elementos, diagramas de contexto, DFDs y analizar de forma automática la consistencia sintáctica y lógica del diseño desde las etapas tempranas.

*   **Herramientas de Diagramación Visual:** Software como **Microsoft Visio** para dibujar y modificar con rapidez mapas de procesos, diagramas de casos de uso y diagramas organizacionales.

*   **Sistemas de Soporte de Decisiones (DSS):** Herramientas como **Expert Choice** diseñadas específicamente para guiar los procesos matemáticos de ponderación y asignación de prioridades de los objetivos del proyecto de sistemas.

*   **Hojas de Cálculo Electrónicas (Microsoft Excel):** Utilizadas para modelar flujos de caja, automatizar los análisis de valor presente (VNA), realizar simulaciones estadísticas de escenarios (como simulaciones Monte Carlo para el retorno de inversión) y ejecutar optimizaciones de recursos.

*   **Software de Gestión de Proyectos:** Software como **Microsoft Project** para realizar desgloses preliminares de trabajo (WBS) y diagramación PERT/CPM para evaluar estimaciones iniciales de tiempos y programar rutas críticas de las actividades de análisis.

---

## **Viabilidad Técnica**

La **viabilidad técnica** (o factibilidad técnica) es una de las tres dimensiones fundamentales de un estudio de viabilidad inicial dentro de la ingeniería de sistemas. Consiste en evaluar de manera rigurosa si la organización dispone de los recursos tecnológicos y las capacidades humanas necesarias para desarrollar, implementar y operar con éxito el sistema propuesto, o si estos deben ser adquiridos en el exterior.

Este análisis se centra en responder a la pregunta fundamental de los analistas: **¿Se puede construir el sistema de esta manera y con la tecnología disponible?**


### Dimensiones clave de la viabilidad técnica

Para determinar si un proyecto es técnicamente viable, el analista de sistemas debe examinar tres frentes críticos:

#### 1. Recursos de Hardware y Software (Disponibilidad y Compatibilidad)
El primer paso es evaluar el entorno computacional existente y su capacidad de integración:
*   **Complemento al sistema actual:** Se debe determinar si los recursos técnicos actuales de la organización son suficientes para soportar la nueva solución. De no ser así, el analista evalúa si es viable actualizar, modificar o complementar la infraestructura existente para cumplir con los requerimientos.

*   **Existencia de la tecnología:** Si los sistemas actuales no pueden actualizarse, se investiga si existe en el mercado la tecnología adecuada (hardware, bases de datos o telecomunicaciones) que cumpla con las especificaciones requeridas.

*   **Capacidad para cargas de trabajo (*workloads*):** Es indispensable estimar las cargas de trabajo actuales y proyectadas para asegurar que el hardware y el software tengan la capacidad física de manejar el volumen de transacciones sin sufrir colapsos o degradación del rendimiento.

#### 2. Viabilidad del Factor Humano y Capacidades Técnicas
La tecnología por sí sola no garantiza el éxito de un sistema; se requiere evaluar la capacidad de las personas para construirla y operarla:
*   **Personal interno:** El analista debe verificar si los especialistas de TI de la empresa cuentan con las destrezas lógicas, lenguajes de programación y conocimientos de arquitectura específicos para desarrollar el sistema.

*   **Alternativas de personal y outsourcing:** Si el personal interno no cuenta con las habilidades necesarias, se debe analizar la viabilidad de capacitar al equipo, contratar nuevos programadores, probadores y expertos con destrezas específicas, o bien subcontratar a un tercero para que asuma la responsabilidad técnica del desarrollo.

#### 3. Análisis del Estado del Arte y Alternativas de Construcción
La viabilidad técnica requiere analizar si conviene construir el sistema desde cero o adquirir una solución ya diseñada:
*   **Evaluar COTS (Commercial Off-The-Shelf) vs. Personalizado:** Se analiza si existen paquetes de software comercial disponibles que cubran las necesidades del negocio para evitar "reinventar la rueda" y disminuir el riesgo técnico, o si las necesidades particulares exigen un desarrollo completamente a la medida.

*   **Uso de Pruebas de Concepto (PoC):** En proyectos de alta complejidad o incertidumbre tecnológica, se suele evaluar la viabilidad creando prototipos de pruebas de conceptos técnicos pequeños para explorar de forma empírica y a bajo costo si las herramientas de software propuestas (como bases de datos o frameworks) funcionan correctamente bajo las restricciones físicas dadas.



### ¿Por qué es un paso tan crítico?
Tomar decisiones técnicas apresuradas o equivocadas durante el estudio inicial puede tener repercusiones devastadoras para la vida económica del proyecto. En el peor de los casos, un mal diagnóstico de viabilidad técnica puede provocar la **cancelación tardía de un proyecto viable** o, por el contrario, la **continuación de un proyecto inviable** que drenará el presupuesto y generará un enorme desgaste organizacional.


---

## **El Punto de equilibrio**

El **Análisis del Punto de Equilibrio** (*Break-Even Analysis*) es una técnica financiera y de control utilizada por el analista en las etapas iniciales para determinar en qué momento o bajo qué volumen de operaciones un nuevo sistema de información propuesto comenzará a ser rentable para la empresa.

Se detalla su concepto, su funcionamiento matemático y sus limitaciones:


### ¿Qué representa el Punto de Equilibrio?
Al comparar los costos por sí solos, el punto de equilibrio se define como **el punto exacto en el que la curva de costos totales del sistema actual y la del sistema propuesto se cruzan**. 

Este cruce geométrico representa el umbral a partir del cual **es rentable para la organización reemplazar la tecnología actual y adquirir el nuevo sistema de información**.

### La Composición de los Costos en el Gráfico
Para graficar y calcular este punto, el analista de sistemas divide los costos tangibles en dos grandes categorías:
1.  **Costos Únicos de Desarrollo:** Son los costos de instalación, adquisición de hardware/software, diseño y puesta en marcha que se pagan una sola vez al inicio del proyecto.

2.  **Costos Recurrentes de Operación:** Son los costos continuos que ocurren a lo largo del tiempo de operación del sistema (mantenimiento, personal, suministros).

#### La dinámica del sistema actual vs. el propuesto:
*   **El Sistema Actual (ej. Manual):** Suele carecer de costos de desarrollo iniciales, pero sus costos operativos incrementales se elevan rápidamente a medida que aumenta el volumen de transacciones de la empresa debido al uso intensivo de mano de obra.

*   **El Sistema Computacional Propuesto:** Exige una inversión inicial elevada (un salto drástico en el eje Y del costo), pero sus costos operativos incrementales por transacciones adicionales son sumamente bajos.



#### Ejemplo Práctico: El Sistema de Inventarios
Imagina una pequeña tienda que gestiona su inventario mediante un sistema de registro manual. 
*   A medida que el negocio crece y el volumen de ventas se eleva, los costos de este sistema manual se disparan de forma incremental (se necesita más personal, más tiempo, hay más errores).
*   El analista propone un sistema computarizado. Aunque este software cuesta una suma importante al principio (Día 1), su costo marginal por procesar transacciones adicionales es insignificante.
*   Al graficar ambas curvas (Costo vs. Unidades Vendidas), se observa que **ambas líneas se cruzan en las 600 unidades semanales**. 
    *   **Por debajo de 600 unidades:** Es más barato quedarse con el sistema manual.
    *   **Por encima de 600 unidades (Punto de Equilibrio):** El sistema computarizado se vuelve altamente efectivo en costos y comienza a ahorrarle dinero a la empresa.



#### Utilidad y Limitaciones del Análisis
*   **Cuándo utilizarlo:** Es sumamente valioso cuando la organización se encuentra en una etapa de expansión y el **volumen de transacciones/operaciones es la variable clave** que define los costos operativos del negocio.

*   **Su gran desventaja:** El análisis tradicional del punto de equilibrio parte del supuesto de que **los beneficios permanecen exactamente iguales sin importar el sistema que se use**. En la práctica de TI, sabemos que esto no es realista, ya que un sistema computarizado moderno no solo reduce costos, sino que aporta beneficios adicionales tangibles e intangibles (como una mejor experiencia del cliente o velocidad de servicio) que modifican los ingresos.

#### El Análisis de Sensibilidad y el Punto de Equilibrio
El punto de equilibrio no es estático; se puede someter a un **análisis de sensibilidad de una sola variable**. Esto permite evaluar de forma matemática cómo se desplaza este punto si cambian factores críticos de la operación:
*   *¿Qué pasa con el punto de equilibrio si aumentan los costos fijos totales?* (El umbral de unidades requeridas para ser rentables se desplaza hacia arriba).
*   *¿Qué pasa si el precio de venta del producto baja o el costo variable unitario sube?* (El margen de contribución disminuye, requiriendo un mayor volumen operativo para alcanzar la rentabilidad).
