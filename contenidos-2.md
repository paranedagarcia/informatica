En el ámbito de la formación académica de la **Ingeniería Civil Informática** (carrera de larga duración y alto rigor técnico, común en países como Chile, Perú y Colombia), la asignatura de **"Ingeniería de Sistemas"** (que en algunas mallas curriculares también se denomina *Teoría de Sistemas*, *Análisis y Diseño de Sistemas* o *Ingeniería de Software I*) tiene un rol fundamental. Su objetivo es transicionar al estudiante desde la programación básica hacia una visión holística, metodológica y arquitectónica para la concepción de sistemas complejos y socio-técnicos [[101]].

A continuación, se presenta una lista organizada y jerarquizada de los temas (contenidos) que debiera abordar esta asignatura, estructurada desde lo macro (pensamiento abstracto) hasta lo micro (diseño y gestión concreta).

---

### 1. Fundamentos del Pensamiento Sistémico (Nivel Macro)
*Este módulo establece la base filosófica y teórica para entender los sistemas más allá del código.*
- **Teoría General de Sistemas (TGS):** Conceptos de sistema, subsistema, frontera, entorno, entradas/salidas, retroalimentación (*feedback*) y homeostasis.
- **Tipología de sistemas:** Sistemas abiertos vs. cerrados, deterministas vs. estocásticos, y la naturaleza de los sistemas socio-técnicos (interacción entre personas, procesos y tecnología).
- **Enfoque sistémico vs. reduccionista:** Cómo abordar la resolución de problemas complejos de ingeniería descomponiéndolos sin perder la visión del conjunto.

### 2. Ciclo de Vida y Procesos de Desarrollo
*Introduce los marcos de trabajo que ordenan el esfuerzo ingenieril a lo largo del tiempo.*
- **Modelos de Ciclo de Vida de Desarrollo de Sistemas (SDLC):** Modelos tradicionales (Cascada, Espiral, Incremental, Iterativo) y sus casos de uso.
- **Metodologías Ágiles:** Principios del Manifiesto Ágil, marcos de trabajo como Scrum y Kanban, y su contraste con modelos predictivos.
- **Estándares y Normativas Internacionales:** Introducción a la ISO/IEC/IEEE 15288 (Procesos de ciclo de vida del sistema) y la ISO/IEC/IEEE 12207 (Procesos de ciclo de vida del software) [[82]].

### 3. Ingeniería de Requisitos (El "Qué" del sistema)
*La fase más crítica para el éxito de un proyecto, enfocada en entender la necesidad real.*
- **Técnicas de Elicitación (Recopilación):** Entrevistas, talleres (*workshops*), observación, análisis de documentos y prototipado rápido.
- **Clasificación y Especificación:** Requisitos funcionales, requisitos no funcionales (rendimiento, seguridad, usabilidad, escalabilidad) y reglas de negocio.
- **Documentación:** Estructura y elaboración del Documento de Especificación de Requisitos de Software (SRS).
- **Gestión de Requisitos:** Trazabilidad, técnicas de priorización (ej. método MoSCoW) y control de cambios.

### 4. Modelado y Diseño de Sistemas (El "Cómo" del sistema)
*Traduce los requisitos en un plano técnico comprensible para desarrolladores y stakeholders.*
- **Lenguajes de Modelado:** Dominio de UML (*Unified Modeling Language*) como estándar de la industria, con una introducción a SysML para sistemas de mayor escala o hardware-software.
- **Diagramas Estructurales:** Casos de uso, Clases, Componentes y Despliegue.
- **Diagramas de Comportamiento:** Secuencia, Actividades y Máquina de estados.
- **Principios de Diseño:** Acoplamiento, cohesión, modularidad, principio de responsabilidad única (SOLID) y patrones de diseño arquitectónico (Arquitectura en capas, Cliente-Servidor, Microservicios, MVC).

### 5. Arquitectura e Integración de Sistemas
*Aborda cómo los componentes individuales se comunican para formar un todo funcional.*
- **Toma de decisiones arquitectónicas:** Atributos de calidad (disponibilidad, modificabilidad, rendimiento) y su impacto en la arquitectura.
- **Interoperabilidad e Integración:** Conceptos de APIs (REST, GraphQL), *middleware*, servicios web y mensajería asíncrona.
- **Sistemas Empresariales:** Introducción conceptual a la integración de sistemas ERP, CRM y arquitecturas orientadas a servicios (SOA).

### 6. Verificación, Validación y Calidad
*Asegura que el sistema construido cumple con lo especificado y es apto para su propósito.*
- **Verificación vs. Validación:** "¿Construimos el sistema correctamente?" vs. "¿Construimos el sistema correcto?".
- **Estrategias de Pruebas:** Pirámide de pruebas (unitarias, de integración, de sistema y de aceptación del usuario - UAT).
- **Aseguramiento de la Calidad del Software (SQA):** Revisiones, auditorías y métricas básicas de calidad.
- **Evolución del ciclo de vida:** Introducción a prácticas de DevOps, Integración Continua y Despliegue Continuo (CI/CD).

### 7. Gestión de Proyectos de Sistemas y Aspectos Profesionales
*Contextualiza el desarrollo técnico dentro de las restricciones del mundo real.*
- **Estimación y Planificación:** Técnicas básicas de estimación de esfuerzo (historias de usuario, puntos de función) y cronogramas.
- **Gestión de Riesgos y Configuración:** Identificación de riesgos técnicos y control de versiones/configuración del sistema.
- **Ética y Responsabilidad Profesional:** Impacto social, sostenibilidad, privacidad de datos y sesgos algorítmicos en el desarrollo de sistemas [[27]].

---

### Competencias que debe lograr el estudiante al finalizar:
1. **Abstracción:** Capacidad para modelar problemas del mundo real como sistemas de información estructurados.
2. **Comunicación Técnica:** Habilidad para documentar y comunicar diseños complejos mediante notaciones estándar (UML/SysML) a audiencias técnicas y no técnicas.
3. **Visión Integral:** Comprensión de las restricciones económicas, legales, éticas y de negocio que enmarcan cualquier solución tecnológica.

### Nota sobre la denominación curricular:
Dependiendo del plan de estudios específico de la universidad, es posible que estos contenidos estén distribuidos en dos asignaturas correlativas: una más teórica llamada **"Teoría de Sistemas"** (enfocada en los niveles 1 y 2) y otra más aplicada llamada **"Ingeniería de Software"** o **"Análisis y Diseño de Sistemas"** (enfocada en los niveles 3 al 7) [[100]], [[102]]. Sin embargo, el núcleo de conocimientos permanece alineado con la jerarquía presentada.