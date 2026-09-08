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


### Dimensiones clave

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



#### ¿Por qué es un paso tan crítico?
Tomar decisiones técnicas apresuradas o equivocadas durante el estudio inicial puede tener repercusiones devastadoras para la vida económica del proyecto. En el peor de los casos, un mal diagnóstico de viabilidad técnica puede provocar la **cancelación tardía de un proyecto viable** o, por el contrario, la **continuación de un proyecto inviable** que drenará el presupuesto y generará un enorme desgaste organizacional.


---

## **El Punto de equilibrio**

El **Análisis del Punto de Equilibrio** (*Break-Even Analysis*) es una técnica financiera y de control utilizada por el analista en las etapas iniciales para determinar en qué momento o bajo qué volumen de operaciones un nuevo sistema de información propuesto comenzará a ser rentable para la empresa.

Se detalla su concepto, su funcionamiento matemático y sus limitaciones:


#### ¿Qué representa el Punto de Equilibrio?
Al comparar los costos por sí solos, el punto de equilibrio se define como **el punto exacto en el que la curva de costos totales del sistema actual y la del sistema propuesto se cruzan**. 

Este cruce geométrico representa el umbral a partir del cual **es rentable para la organización reemplazar la tecnología actual y adquirir el nuevo sistema de información**.

#### La Composición de los Costos en el Gráfico
Para graficar y calcular este punto, el analista de sistemas divide los costos tangibles en dos grandes categorías:
1.  **Costos Únicos de Desarrollo:** Son los costos de instalación, adquisición de hardware/software, diseño y puesta en marcha que se pagan una sola vez al inicio del proyecto.

2.  **Costos Recurrentes de Operación:** Son los costos continuos que ocurren a lo largo del tiempo de operación del sistema (mantenimiento, personal, suministros).

**La dinámica del sistema actual vs. el propuesto:**

*   **El Sistema Actual (ej. Manual):** Suele carecer de costos de desarrollo iniciales, pero sus costos operativos incrementales se elevan rápidamente a medida que aumenta el volumen de transacciones de la empresa debido al uso intensivo de mano de obra.

*   **El Sistema Computacional Propuesto:** Exige una inversión inicial elevada (un salto drástico en el eje Y del costo), pero sus costos operativos incrementales por transacciones adicionales son sumamente bajos.



**Ejemplo Práctico: El Sistema de Inventarios**

Imagina una pequeña tienda que gestiona su inventario mediante un sistema de registro manual. 
*   A medida que el negocio crece y el volumen de ventas se eleva, los costos de este sistema manual se disparan de forma incremental (se necesita más personal, más tiempo, hay más errores).
*   El analista propone un sistema computarizado. Aunque este software cuesta una suma importante al principio (Día 1), su costo marginal por procesar transacciones adicionales es insignificante.
*   Al graficar ambas curvas (Costo vs. Unidades Vendidas), se observa que **ambas líneas se cruzan en las 600 unidades semanales**. 
    *   **Por debajo de 600 unidades:** Es más barato quedarse con el sistema manual.
    *   **Por encima de 600 unidades (Punto de Equilibrio):** El sistema computarizado se vuelve altamente efectivo en costos y comienza a ahorrarle dinero a la empresa.



**Utilidad y Limitaciones del Análisis**

*   **Cuándo utilizarlo:** Es sumamente valioso cuando la organización se encuentra en una etapa de expansión y el **volumen de transacciones/operaciones es la variable clave** que define los costos operativos del negocio.

*   **Su gran desventaja:** El análisis tradicional del punto de equilibrio parte del supuesto de que **los beneficios permanecen exactamente iguales sin importar el sistema que se use**. En la práctica de TI, sabemos que esto no es realista, ya que un sistema computarizado moderno no solo reduce costos, sino que aporta beneficios adicionales tangibles e intangibles (como una mejor experiencia del cliente o velocidad de servicio) que modifican los ingresos.

**El Análisis de Sensibilidad y el Punto de Equilibrio**

El punto de equilibrio no es estático; se puede someter a un **análisis de sensibilidad de una sola variable**. Esto permite evaluar de forma matemática cómo se desplaza este punto si cambian factores críticos de la operación:
*   *¿Qué pasa con el punto de equilibrio si aumentan los costos fijos totales?* (El umbral de unidades requeridas para ser rentables se desplaza hacia arriba).
*   *¿Qué pasa si el precio de venta del producto baja o el costo variable unitario sube?* (El margen de contribución disminuye, requiriendo un mayor volumen operativo para alcanzar la rentabilidad).

---

## **Business Case**

El **Business Case** (o Caso de Negocio) dentro del ciclo de vida del desarrollo de software (SDLC) es un análisis financiero y estratégico detallado que se realiza para **justificar si es conveniente o no llevar a cabo una inversión** en un nuevo sistema de información u otro proyecto de software. Su propósito fundamental es responder a la pregunta de si el proyecto aportará valor real y medible a la organización antes de comprometer recursos masivos.

Es un documento de toma de decisiones que justifica la realización de una inversión o proyecto. A diferencia del Project Charter—que formaliza el inicio de los trabajos—, el Business Case se elabora en una fase previa y tiene como objetivo responder a una pregunta fundamental: **¿Por qué deberíamos hacer este proyecto?** o **¿Tiene sentido financiero y estratégico invertir recursos en esto?**

Sus componentes clave e integración en el ciclo de vida:


### Detalles y Componentes
Para que un Business Case sea persuasivo y riguroso para la junta directiva o los patrocinadores, debe estructurarse con las siguientes secciones elementales:

*   **Resumen Ejecutivo:** Una síntesis de una página que resume el problema, la solución propuesta, los costes estimativos, los beneficios financieros esperados (como el ROI o el tiempo de recuperación) y la recomendación final.

*   **Definición del Problema u Oportunidad:** Describir con precisión y claridad la necesidad de negocio que origina la iniciativa (como resolver una ineficiencia operativa, pérdida de clientes, adaptarse a un cambio regulatorio o aprovechar un nuevo nicho de mercado, obsolescencia tecnológica o cumplimiento de normativas).

*   **Alineación Estratégica:** Detallar cómo el sistema propuesto apoya directamente el cumplimiento de las metas generales, la visión y la estrategia de la organización.

*   **Análisis de Alternativas:** Evaluar de forma exhaustiva las distintas formas de abordar el problema. Un análisis comparativo de los diferentes caminos posibles para solucionar el problema. Por norma general, siempre deben evaluarse al menos tres opciones:
    *   **Opción 0 (No hacer nada / Status Quo):** Evaluar el impacto y coste que sufriría la empresa si continúa operando exactamente igual.
    *   **Opción A (Comprar una solución de terceros):** Analizar la viabilidad de adquirir un software o servicio ya existente en el mercado.
    *   **Opción B (Desarrollar una solución interna a la medida):** La propuesta recomendada que se defenderá en el documento.

*   **Análisis Financiero (Costo-Beneficio):** Proyectar los flujos de dinero en el tiempo y justificar la inversión empleando métricas de rentabilidad capital como el **Valor Neto Actual (VNA)**, la **Tasa Interna de Retorno (TIR)**, el **Periodo de Recuperación de la Inversión (Payback)** o el **Retorno sobre la Inversión (ROI)**.
    *   *Costes:* Coste de desarrollo (horas de ingeniería), infraestructura, licencias de software, mantenimiento y costes de capacitación.
    *   *Beneficios:* Retorno de inversión (ROI), ahorros en tiempo de mano de obra, reducción de errores y aumento de la productividad.

*   **Identificación de Riesgos y Factores Críticos de Éxito (CSF):** Mapear los posibles factores de riesgo que podrían obstaculizar el éxito (técnicos, comerciales, regulatorios o de cambio cultural) y proponer planes de mitigación preliminares.



### Integración
El Business Case no es una actividad de programación; es el detonador estratégico del software:

*   **Fase de Inicio (Inception / Pre-conceptual):** Ocurre antes de que comience el desarrollo formal del producto. El Business Case representa la **base estructural que justifica el "porqué" de un proyecto**. Utilizando una analogía de la industria petrolera, equivale a decidir si hay evidencias suficientes que justifiquen perforaciones de exploración antes de invertir en la excavación real.

*   **Filtro de Selección de Portafolio:** La alta gerencia, el Director de Portafolio o la PMO evalúan y comparan de manera objetiva diferentes Business Cases en competencia para decidir racionalmente a cuáles de ellos se les asignará el presupuesto limitado de la compañía.

*   **Mapeo de Beneficios:** El documento establece las métricas de negocio con las que el equipo evaluará el impacto del software una vez que el proyecto finalice y entre en producción, asegurando que se cumplan las metas prometidas.

*   **La Brecha del Director del Proyecto:** Una de las grandes patologías en el desarrollo de software es que las empresas suelen excluir al Director del Proyecto (DP) de la redacción del Business Case porque asumen que los ingenieros no comprenden de finanzas. Esto suele derivar en que marketing o ventas elaboren un Business Case "altamente optimista" sin rigor técnico. Al asignarse el DP en fases tardías, este se ve presionado a aceptar suposiciones poco realistas de costo o tiempo, y si el proyecto falla debido a estas promesas ficticias, la culpa suele recaer injustamente en el equipo técnico.


### Ejemplo Práctico 
**El Caso de "Marathon Vitamin Shops"**

Imaginemos el escenario de **Marathon Vitamin Shops**, una cadena minorista tradicional que vende suplementos alimenticios en tiendas físicas y mediante un catálogo de pedidos por correspondencia. Los propietarios identifican que, para seguir siendo competitivos frente al mercado digital, deben dar soporte a compras electrónicas.

Un Business Case estructurado para este proyecto de TI se formularía de la siguiente manera:

*   **Problema/Oportunidad:** Los canales tradicionales (tiendas físicas y pedidos por correo) son estáticos y limitados. La empresa necesita establecer un sitio web de comercio electrónico con la capacidad de vender productos directamente, automatizar el procesamiento de pedidos y ofrecer información de salud personalizada para capturar nuevos segmentos de mercado.

*   **Análisis de Alternativas:**
    1.  *Crear un paquete a medida:* Desarrollar un software único desde cero.
    2.  *Comprar COTS:* Adquirir licencias de un software comercial de comercio electrónico estándar (como QuickBooks Pro).
    3.  *Subcontratar un ASP:* Alquilar una plataforma de software en la nube de un tercero (los "Magos del Jardín").

*   **Análisis Financiero:** Al evaluar la rentabilidad con una tasa de descuento de capital de la empresa del 15%, se estima que la alternativa del **ASP/SaaS** requiere una inversión inicial de configuración baja y se estabiliza con un costo operativo mensual predecible. Mediante un análisis de flujo de caja y punto de equilibrio, se demuestra que con un volumen de ventas moderado, la inversión se recuperará completamente en el tercer trimestre del segundo año, ofreciendo un VNA superior a las demás opciones.

*   **Evaluación de Riesgos:** Al recurrir a un proveedor externo (ASP), el Business Case identifica un riesgo alto de pérdida de control general sobre los datos del negocio, problemas de privacidad y confidencialidad en los registros de los clientes, y la dependencia directa de la viabilidad financiera de esa empresa externa. Por lo tanto, se define que el contrato debe incluir acuerdos de nivel de servicio (SLA) rigurosos para mitigar la amenaza.

Una vez aprobado este Business Case por el comité directivo, se designa al Director de Proyecto y se firma el Acta de Constitución (*Project Charter*). El equipo de desarrollo puede entonces iniciar el modelado técnico en UML traduciendo los objetivos comerciales en requisitos lógicos y de comportamiento, comenzando con casos de uso clave al nivel de Procesos de Negocios Elementales, como el caso de uso *Procesar Venta*.



#### Formas de Crear un Business Case

La elaboración de un Business Case sólido requiere un balance entre el análisis cuantitativo y la consulta con las áreas afectadas:

*   **Entrevistas con Usuarios y Clientes:** Para dimensionar de forma precisa el dolor o la ineficiencia (el "coste de no hacer nada").

*   **Estimación por Analogía:** Utilizar datos históricos de proyectos de desarrollo similares dentro de la empresa para proyectar los tiempos y costes técnicos.

*   **Talleres de Cocreación:** Reunir a los líderes de Ingeniería, Finanzas y Operaciones para acordar los supuestos de negocio y asegurar que los beneficios proyectados sean realistas y medibles.


---
## **Project Charter**

El **Project Charter** (o *Acta de Constitución del Proyecto*) es el documento formal que marca el nacimiento oficial de un proyecto. En la ingeniería de sistemas y el análisis de negocio tradicionales, antes de comprometer grandes cantidades de tiempo, presupuesto y recursos técnicos, es vital delimitar qué se va a construir y bajo qué condiciones.

El Project Charter es el documento que **autoriza formalmente el inicio del proyecto**. Al ser firmado por los patrocinadores (*sponsors*) o interesados clave, cumple tres funciones de gobernanza críticas:

1.  **Formaliza la autoridad:** Otorga el poder organizacional al Director de Proyecto (*Project Manager*) para utilizar los recursos de la empresa en las actividades del proyecto.

2.  **Establece la frontera del proyecto:** Explicita de forma clara y preliminar los límites del producto, definiendo con precisión **qué incluye y qué queda fuera del alcance**. Esto evita el crecimiento descontrolado del alcance (*scope creep*).

3.  **Sirve de base para la planificación:** Documenta los supuestos (hipótesis que se dan por ciertas) y las restricciones (factores limitantes como fechas de entrega o tecnologías obligatorias) que guiarán la planeación detallada posterior.

#### ⚖️ Diferencia clave con el *Business Case*
Es muy común confundir estos dos documentos en la fase de concepción inicial, pero tienen propósitos totalmente distintos:
*   **Business Case (Caso de Negocio):** Es un paso previo. Justifica **si es conveniente o no** realizar la inversión financiera, evaluando la necesidad de negocio, beneficios esperados, riesgos de alto nivel y alternativas (como la opción de "no hacer nada").

*   **Project Charter:** Se redacta **una vez aprobado** el Business Case. Su objetivo no es justificar la inversión, sino **autorizar y arrancar formalmente el trabajo** definiendo las reglas del juego.



#### Componentes clave para crear un Project Charter

Aunque los formatos organizacionales pueden variar, un Project Charter estructurado debe contener al menos los siguientes elementos esenciales:

1.  **Título del Proyecto y Descripción General:** Identificación clara de la iniciativa.
2.  **Objetivos del Producto / Proyecto:** Qué se espera lograr al finalizar, expresado en términos preliminares y medibles.
3.  **Nombramiento del Project Manager:** Quién liderará el proyecto y el nivel de autoridad que se le asigna.
4.  **Límites de Alcance (Inclusiones y Exclusiones):** Qué entregables están cubiertos y cuáles están estrictamente excluidos.
5.  **Supuestos y Restricciones:** Circunstancias que se asumen como verdaderas y límites físicos, presupuestarios o tecnológicos de partida.



#### Ejemplo Práctico: Proyecto "SafeRoad Data Pipeline"

Para ilustrar su aplicación real, consideremos el escenario de la startup de ciencia de datos **SafeRoad**, la cual requiere un sistema para analizar la accidentalidad vehicular en Chicago.

#### **Acta de Constitución del Proyecto: SafeRoad Pipeline**

*   **1. Propósito y Objetivos del Producto:**  
    Desarrollar un flujo de datos (*data pipeline*) personalizado que se conecte de manera automática al portal de datos abiertos de la ciudad de Chicago para extraer, limpiar y modelar los datos de accidentes de tránsito. El objetivo final es permitir que los analistas de SafeRoad identifiquen los factores clave que causan estos incidentes.
*   **2. Designación del Director de Proyecto:**  
    Se nombra a *[Nombre del Project Manager]* como Director del Proyecto, con autoridad para coordinar las actividades del equipo de ingeniería de datos y administrar el uso de los entornos de desarrollo, prueba y producción.
*   **3. Límites del Alcance (Scope Boundaries):**  
    *   **Inclusiones:** Extracción de datos del portal de Chicago mediante API, desarrollo del pipeline de transformación en Python, y almacenamiento en una base de datos relacional PostgreSQL modelada a la medida.
    *   **Exclusiones:** Queda fuera de este proyecto el desarrollo de la interfaz gráfica de usuario (*frontend*) o la realización de los modelos de analítica predictiva de ciencia de datos; nuestra firma solo entregará el repositorio de datos PostgreSQL optimizado y listo para su consumo.
*   **4. Restricciones Clave:**  
    *   **Tecnológica:** Los datos deben modelarse obligatoriamente utilizando una base de datos PostgreSQL, según las directivas de arquitectura técnica del cliente.
    *   **Temporal:** El pipeline debe estar completamente validado y en producción en un plazo no mayor a 12 semanas.
*   **5. Supuestos:**  
    *   La API del portal de datos abiertos de Chicago mantendrá su disponibilidad y su estructura de datos GeoJSON/JSON durante el transcurso del desarrollo.
    *   El cliente (SafeRoad) proveerá la infraestructura del servidor de base de datos PostgreSQL con accesos SSH activos a partir de la semana 4 de desarrollo.



#### Formas de Creación en la Práctica
Para crear este documento de forma colaborativa durante las fases de concepción, el analista de sistemas asume un rol sociotécnico y de facilitación, apoyándose en:
*   **Técnicas de Consenso en Grupo:** Se organizan lluvias de ideas y mapas de afinidad utilizando votación por puntos (*dot voting*) o la técnica de grupo nominal para que los principales interesados se pongan de acuerdo en los límites del proyecto.

*   **Análisis de Interesados (Stakeholders):** Identificar desde el primer día a todos los afectados por el sistema para incorporar sus restricciones y requerimientos de negocio en el acta, evitando trabas organizacionales una vez iniciado el desarrollo.

