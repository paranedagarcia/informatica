## **Guía Práctica:** 

**Diseño de la Estructura de Desglose del Trabajo (EDT/WBS) y Diccionario de la EDT en Proyectos de Tecnología**


### **1.1 Propósito y Definición en la Gestión del Alcance**

En el marco de la dirección formal de proyectos estructurada bajo los estándares del Project Management Institute (PMI) y la *Guía del PMBOK®*, la gestión del alcance del proyecto contempla como pilar metodológico el proceso **5.4 Crear la EDT/WBS**. La Estructura de Desglose del Trabajo (EDT) o *Work Breakdown Structure* (WBS) es el artefacto técnico central diseñado para descomponer el alcance total del proyecto en partes jerárquicas más pequeñas, manejables y medibles.

En el ámbito de la Arquitectura de Información y Sistemas de TI, la EDT/WBS actúa como la representación estructural que traduce las necesidades del negocio y las especificaciones funcionales en componentes concretos de software, infraestructura y gestión. Ya sea que se adopte un ciclo de vida predictivo o una aproximación híbrida/adaptativa, la EDT provee el marco organizativo necesario para alinear las expectativas de los interesados, delimitar las fronteras operativas y prevenir desviaciones sistemáticas como la corrupción del alcance (*scope creep*). Mientras que en proyectos tradicionales la EDT se establece de manera exhaustiva en las fases iniciales, en entornos híbridos sirve como la superestructura arquitectónica que organiza las capacidades del sistema antes de su refinamiento detallado.

**Propósito Principal de la EDT/WBS:** La EDT/WBS es una descomposición jerárquica orientada a entregables del trabajo total que debe ejecutar el equipo del proyecto para cumplir con los objetivos del proyecto y crear los entregables requeridos, estableciendo la estructura fundamental sobre la cual se planifican, estiman y controlan el alcance, los costos, el cronograma y la calidad.

### **1.2 Niveles Jerárquicos, Paquetes de Trabajo y Componentes Clave**

La EDT/WBS se estructura en una jerarquía en árbol que desciende desde la visión global del sistema hasta los elementos operativos de menor nivel:

1. **Nivel 1: Nombre del Proyecto o Fases Principales del Ciclo de Vida**  
   * Representa la totalidad del alcance del proyecto o las grandes etapas del ciclo de vida de ingeniería (por ejemplo: Gestión, Análisis de Requisitos, Arquitectura y Diseño, Desarrollo de Software, Pruebas y Aseguramiento de Calidad, e Infraestructura y Despliegue).  
2. **Nivel 2: Entregables Principales o Subfases de Arquitectura**  
   * Desagrega los componentes mayores, subsistemas de software o fases intermedias requeridos para completar los nodos del Nivel 1\.  
3. **Nivel 3: Sub-entregables / Módulos de Software e Integración**  
   * Descomposición técnica orientada a capas arquitectónicas (módulos funcionales, servicios de integración, modelos de datos o conjuntos de pruebas).  
4. **Nivel 4 (o N inferior): Paquete de Trabajo (*Work Package*)**  
   * Representa el nivel más bajo de la EDT/WBS, donde el trabajo y los entregables se definen con el detalle suficiente para permitir la asignación de recursos y la estimación precisa.

Un **Paquete de Trabajo** (*Work Package*) es la unidad técnica mínima no divisible en la EDT. En el contexto de TI, un paquete de trabajo describe un resultado discreto —como el desarrollo de un microservicio de autenticación o la configuración de un *pipeline* de CI/CD— cuya ejecución puede ser asignada a un único responsable o equipo multidisciplinario. En este nivel se realizan las estimaciones definitivas de costos (evaluando el gasto operativo o *run rate* del personal) y duraciones (basadas en tiempo de ciclo o esfuerzo técnico estimado).

### **1.3 Cuentas de Control y Paquetes de Planificación**

Para garantizar un gobierno riguroso sobre los aspectos financieros y operativos, la EDT/WBS integra unidades de supervisión como las Cuentas de Control (*Control Accounts*) y los Paquetes de Planificación (*Planning Packages*):

| Concepto | Definición | Función en el Control del Proyecto |
| :---- | :---- | :---- |
| **Paquete de Trabajo** (*Work Package*) | Nivel más bajo de la EDT/WBS con un entregable técnico o resultado de trabajo detallado y asignable. | Base para la estimación analítica de costos y duraciones, asignación de responsabilidades directas y verificación de la calidad mediante criterios de aceptación concretos. |
| **Paquete de Planificación** (*Planning Package*) | Componente de la EDT bajo una cuenta de control con alcance conocido pero sin el detalle técnico o arquitectónico suficiente para su ejecución inmediata. | Permite reservar alcance e integrar la **Planificación Gradual** (*Rolling Wave Planning*), manteniendo el trabajo futuro en un nivel macro hasta que los requisitos técnicos maduren. |
| **Cuenta de Control** (*Control Account*) | Punto de integración gerencial donde se consolidan el alcance, el costo real y el cronograma para la medición del desempeño. | Permite aplicar la Técnica del Valor Ganado (EVM), evaluando variaciones de costo (CV, CPI) y cronograma (SV, SPI) asociadas a un grupo de paquetes de trabajo o paquetes de planificación. |

#### **Sintesis e Integración con Marcos Ágiles e Híbridos**

En entornos tecnológicos modernos, la EDT/WBS no se contrapone a la agilidad; por el contrario, se sintetiza armónicamente con ella. Un Paquete de Trabajo (*Work Package*) de nivel 3 o 4 en la EDT equivale conceptualmente a una **Épica** (*Epic*) o una **Característica** (*Feature*) dentro de la jerarquía de un *Product Backlog*.

Durante las sesiones de refinamiento (*Backlog Refinement*), estas características estructuradas en la EDT se descomponen progresivamente en **Historias de Usuario** (*User Stories*) y tareas técnicas para la planificación de *sprints*. Asimismo, la **Planificación Gradual** (*Rolling Wave Planning*) conecta directamente con el concepto de Paquetes de Planificación: los módulos que se desarrollarán en fases posteriores del proyecto permanecen como Paquetes de Planificación en la EDT y se convierten en Paquetes de Trabajo e Historias de Usuario accionables a medida que la arquitectura del sistema y las necesidades del negocio se esclarecen.

Estructura Tradicional (EDT/WBS)       Entorno Adaptativo / Híbrido (Agile)

\================================       \====================================

Cuenta de Control (Nivel 2/3)   \-----\> Áreas Temáticas / Epicas Mayor

Paquete de Trabajo (Nivel 3/4)  \-----\> Epica / Feature (Característica)

Paquete de Planificación        \-----\> Scope de Iteraciones Futuras (Rolling Wave)

(Descomposición para Ejecución) \-----\> Historias de Usuario / Tasks (Sprint Backlog)

### **1.4 La Regla del 100% y Principios de Calidad de la Descomposición**

La **Regla del 100%** es el principio axiológico de la EDT/WBS. Establece que la EDT debe incluir obligatoriamente el 100% del trabajo definido en el alcance del proyecto y capturar la totalidad de los entregables —incluyendo los técnicos, de infraestructura, de soporte y de gestión— sin incluir ningún trabajo fuera de él (*out of scope*). La suma del trabajo de los niveles secundarios debe ser exactamente igual al 100% del trabajo representado en el nodo superior correspondiente.

Para validar que una EDT/WBS en proyectos de tecnología ha sido construida con la calidad arquitectónica requerida, se aplican cuatro reglas de oro:

* **Exhaustividad y Exclusión Mutua:** Cada nodo de la EDT debe definir un alcance único y mutuamente excluyente. No debe existir solapamiento técnico ni funcional entre paquetes de trabajo (ej. las responsabilidades entre la API Gateway y el servicio Backend deben estar nítidamente delimitadas).  
* **Orientación a Entregables Comprobables:** La descomposición debe centrarse en productos, componentes de software o artefactos arquitectónicos verificables (servicios API, esquemas de BD, documentos de arquitectura) y no en actividades administrativas aisladas.  
* **Aplicación del Principio de Simplicidad:** Maximizar la cantidad de trabajo no realizado eliminando redundancias arquitectónicas. Los paquetes de trabajo deben mantener una escala que facilite la estimación y asignación sin introducir burocracia en el seguimiento.  
* **Criterios Claros de Entrada y Salida (DoR y DoD):** Integrar una estricta Definición de "Listo" (*Definition of Ready*) para autorizar el inicio de un paquete de trabajo y una Definición de "Terminado" (*Definition of Done*) alineada con el **Control de Calidad (Proceso 8.3 del PMBOK)**. Esta última debe respaldarse en pruebas automatizadas (*smoke tests*, unitarias, de integración) e integración continua para prevenir la acumulación de **deuda técnica** (*technical debt*), demostrando que la entrega en lotes pequeños (*small batch sizes*) reduce sustancialmente el costo del cambio en las etapas tempranas del ciclo de vida.

## **2\. Metodología Paso a Paso para la Descomposición Jerárquica Descendente (Top-Down)**

### **2.1 Fase 1: Identificación de los Entregables Principales y Fases del Ciclo de Vida**

El proceso de descomposición en ingeniería de software y sistemas de información requiere una aproximación estructurada orientada de arriba hacia abajo (*top-down*). Para ejecutar esta fase de manera activa, el equipo de proyecto y el Arquitecto de TI deben seguir la siguiente secuencia:

1. **Analizar el Acta de Constitución y el Enunciado del Alcance:** Extraer los objetivos del negocio, las restricciones tecnológicas (ej. requisitos de alta disponibilidad, normativas de ciberseguridad) y los límites del proyecto fijados en los documentos de inicio.  
2. **Establecer el Criterio de Estructuración del Nivel 1:** Determinar si la EDT se desglosará por Fases del Ciclo de Vida de Software (Análisis, Diseño, Construcción, Pruebas, Despliegue) o por Capas de Arquitectura/Subsistemas (Frontend, Backend, Integración, Infraestructura). En sistemas complejos, el enfoque por fases facilita el control de hitos.  
3. **Mapear los Entregables de Alto Nivel:** Identificar los productos de software e infraestructura indispensables para la validez del sistema (ej. Especificación de Requisitos de Arquitectura, Modelo de Datos, Servicios API REST, Suite de Pruebas Automatizadas, Entorno de Producción en la Nube).

### **2.2 Fase 2: Descomposición Sistemática y Criterios de Parada**

Consiste en subdividir progresivamente los entregables principales en sub-entregables y paquetes de trabajo. Para evitar tanto una descomposición insuficiente (que oculte riesgos técnicos) como una descomposición excesiva (que genere microgestión), se debe aplicar el siguiente checklist de criterios de parada:

\=====================================================================

CHECKLIST DE VERIFICACIÓN DE PARADA DE DESCOMPOSICIÓN DE LA EDT

\=====================================================================

\[ \] 1\. ¿El paquete representa un entregable único con un resultado medible?

\[ \] 2\. ¿Es posible asignar la responsabilidad total a un rol o equipo técnico?

\[ \] 3\. ¿Las estimaciones de tiempo y costo son claras, fiables y acotadas?

\[ \] 4\. ¿Los criterios de aceptación y la "Definición de Terminado" están definidos?

\[ \] 5\. ¿La duración del paquete se ajusta a un timebox o sprint gestionable?

\[ \] 6\. ¿El paquete puede ejecutarse sin dependencias bloqueantes no resueltas?

\=====================================================================

Criterio de Parada: Si todas las respuestas son AFIRMATIVAS, la descomposición 

ha alcanzado el nivel óptimo de Paquete de Trabajo (Work Package).

\=====================================================================

### **2.3 Fase 3: Asignación de Códigos de Identificación (Código de Cuentas)**

El Código de Cuentas (*Code of Accounts*) es un sistema de numeración alfanumérico jerárquico que asigna una dirección lógica única a cada elemento de la EDT/WBS. Esta codificación vincula directamente los elementos del alcance con el sistema de contabilidad de costos de la organización, habilita el rastreo de requisitos y permite la agregación acumulativa de costos y métricas de avance hacia las Cuentas de Control.

La estructura de numeración jerárquica se ilustra a continuación mediante sintaxis indentada:

1.0 Sistema de Información Web de Comercio Electrónico (Proyecto)

    1.1 Gestión del Proyecto

        1.1.1 Planificación y Alineación Estratégica

        1.1.2 Seguimiento y Control de Integración

    1.2 Arquitectura y Diseño del Sistema

        1.2.1 Especificación de Arquitectura de Microservicios

        1.2.2 Modelo de Datos y Esquema de Persistencia

    1.3 Desarrollo y Construcción de Software

        1.3.1 Módulo de Pasarela de Pagos Transaccional

            1.3.1.1 Componente de Tokenización y Cifrado (PCI-DSS)

            1.3.1.2 Integración de API Gateway con Proveedor Financiero

            1.3.1.3 Pruebas Unitarias Automatizadas de Pasarela

## **3\. Caso de Estudio Práctico: Desarrollo de un Sistema de Información Web**

### **3.1 Descripción del Proyecto y Alcance General**

El proyecto contempla el diseño, desarrollo e implementación de un "Portal Web de Comercio Electrónico y Gestión de Inventario en Tiempo Real". La solución requiere una arquitectura orientada a microservicios altamente escalable, capaz de procesar transacciones electrónicas seguras, gestionar existencias de almacén de forma síncrona e integrarse mediante contratos de interfaz API RESTful con el sistema ERP corporativo (SAP). Las restricciones principales imponen el cumplimiento de la normativa PCI-DSS para el manejo de datos financieros, disponibilidad del sistema del 99.9%, un presupuesto cerrado para la infraestructura en la nube y la entrega mediante incrementos de software funcionales.

| Parámetro del Proyecto | Detalle del Caso de Estudio de TI |
| :---- | :---- |
| **Nombre del Proyecto** | Portal Web de Comercio Electrónico y Gestión de Inventario |
| **Objetivo General** | Desplegar una plataforma transaccional de comercio electrónico desacoplada, con integración a ERP SAP y gestión de stock en tiempo real. |
| **Arquitectura Objetivo** | Microservicios, API Gateway, Capa de Persistencia NoSQL/Relacional, Frontend SPA/PWA e Infraestructura como Código en la Nube. |
| **Restricciones Clave** | Certificación PCI-DSS, latencia transaccional \< 200ms, presupuesto de *cloud rate* fijo y soporte multi-entorno (Sandbox/Staging/Producción). |
| **Estrategia de Entrega** | Despliegue híbrido incremental respaldado por pipelines de CI/CD e integración continua. |
| **Entregables Clave** | Documentación de arquitectura, conectores ERP, módulos funcionales, suite de QA y entorno Cloud con IaC. |

### **3.2 Estructura Jerárquica Desglosada de la EDT (Niveles 1 a 4\)**

La siguiente lista multinivel representa la EDT/WBS técnica completa del caso de estudio. Para mantener el rigor analítico, la descomposición de la rama `1.4 (Desarrollo y Construcción de Software)` ha sido estandarizada en el Nivel 4 en todos sus subsistemas funcionales, reflejando fielmente la arquitectura de información y las capas tecnológicas del sistema:

* **1.0 Portal Web de Comercio Electrónico y Gestión de Inventario**  
  * **1.1 Gestión del Proyecto**  
    * 1.1.1 Acta de Constitución y Contrato Social del Equipo  
    * 1.1.2 Plan de la Línea Base del Alcance, Cronograma y Costos  
    * 1.1.3 Informes de Desempeño y Métrica de Valor Ganado (EVM)  
    * 1.1.4 Governança de Fase, Demostraciones y Retrospectivas  
  * **1.2 Análisis de Requisitos y Especificación de Arquitectura**  
    * 1.2.1 Levantamiento de Historias de Usuario y Casos de Uso  
    * 1.2.2 Arquitectura de Dominio, Microservicios y Contratos API (OpenAPI/Swagger)  
    * 1.2.3 Matriz de Requisitos No Funcionales (Ciberseguridad y Escalabilidad)  
  * **1.3 Diseño UX/UI y Prototipado**  
    * 1.3.1 Arquitectura de Información, Wireframes y flujos de Usuario  
    * 1.3.2 Design System y Componentes UI Reutilizables  
    * 1.3.3 Prototipo Interactivo de Alta Fidelidad y Pruebas de Usabilidad  
  * **1.4 Desarrollo y Construcción de Software**  
    * **1.4.1 Módulo de Catálogo e Inventario (Persistencia y Lógica de Negocio)**  
      * 1.4.1.1 Esquema de Base de Datos Relacional/NoSQL para Inventario  
      * 1.4.1.2 Microservicio Backend RESTful de Gestión de Existencias  
      * 1.4.1.3 Componente UI Frontend para Búsqueda, Filtros y Vista de Productos  
      * 1.4.1.4 Pruebas Unitarias de Capa de Persistencia y Lógica de Catálogo  
    * **1.4.2 Módulo de Pasarela de Pagos Transaccional y Seguridad**  
      * 1.4.2.1 Componente de Procesamiento de Tarjetas y Tokenización PCI-DSS  
      * 1.4.2.2 Integración de API Gateway con Entidades Financieras Externas  
      * 1.4.2.3 Componente UI Frontend de Checkout, Carrito y Confirmación  
      * 1.4.2.4 Servicio de Notificaciones Asíncronas y Emisión de Recibos Digitales  
    * **1.4.3 Capa de Integración Middleware con Sistema ERP (SAP)**  
      * 1.4.3.1 Contratos de Interfaz APIREST/SOAP y Conectores SAP  
      * 1.4.3.2 Servicio de Sincronización Asíncrona de Pedidos y Stock  
      * 1.4.3.3 Lógica de Manejo de Excepciones, Reintentos y Colas de Mensajería (RabbitMQ/Kafka)  
      * 1.4.3.4 Pruebas de Integración Middleware-ERP en Entorno Staging  
    * **1.4.4 Módulo de Administración, Autenticación y Reportes**  
      * 1.4.4.1 Servicio Backend de Autenticación, Usuarios y Control de Acceso (OAuth2/SSO/JWT)  
      * 1.4.4.2 Panel de Control Frontend para Administradores y Métricas  
      * 1.4.4.3 Microservicio de Generación de Reportes Financieros y Métricas de Venta  
      * 1.4.4.4 Pruebas de Seguridad y Control de Acceso Basado en Roles (RBAC)  
    * **1.4.5 Infraestructura como Código (IaC) y Canalizaciones CI/CD**  
      * 1.4.5.1 Plantillas de Infraestructura como Código (Terraform/CloudFormation)  
      * 1.4.5.2 Pipelines de Integración y Despliegue Continuo (GitLab CI/GitHub Actions)  
      * 1.4.5.3 Configuración de Entornos Aislados (Sandbox, Staging, Producción)  
      * 1.4.5.4 Automatización de Smoke Tests en el Pipeline de Despliegue  
  * **1.5 Verificación y Aseguramiento de la Calidad (QA)**  
    * 1.5.1 Suite de Pruebas de Integración y Pruebas Regresivas Automatizadas  
    * 1.5.2 Pruebas No Funcionales de Carga, Estrés y Latencia  
    * 1.5.3 Pruebas de Ciberseguridad y Escaneo de Vulnerabilidades (SAST/DAST)  
    * 1.5.4 Pruebas de Aceptación del Usuario (UAT) y Firma de Conformidad  
  * **1.6 Despliegue, Migración y Puesta en Producción**  
    * 1.6.1 Configuración Definitiva del Entorno de Producción en la Nube  
    * 1.6.2 Scripting y Ejecución de la Migración Inicial de Datos de Inventario  
    * 1.6.3 Plan de Transferencia Operativa, Capacitación y Documentación Técnica  
    * 1.6.4 Puesta en Marcha (*Go-Live*) y Monitoreo Posdespliegue

## **4\. Estructura y Componentes Indispensables del Diccionario de la EDT**

### **4.1 Definición y Rol en la Línea Base del Alcance**

El **Diccionario de la EDT** es el artefacto normativo que complementa la EDT/WBS proporcionando una descripción detallada y técnica de cada uno de sus componentes (paquetes de trabajo, paquetes de planificación y cuentas de control). Debido a que los nodos de la EDT se expresan sintéticamente mediante títulos breves, el Diccionario de la EDT evita la ambigüedad, precisando el trabajo exacto a realizar, los límites de la entrega y las condiciones de aceptación.

De acuerdo con el estándar del PMI en el proceso **5.4 Crear la EDT/WBS**, el Diccionario de la EDT, junto con la **EDT/WBS** y el **Enunciado del Alcance del Proyecto** (*Project Scope Statement*), constituye formalmente la **Línea Base del Alcance** (*Scope Baseline*). En proyectos de TI, el Diccionario de la EDT es la herramienta fundamental para prevenir la interpretación subjetiva del alcance, regular la relación entre los líderes técnicos y los proveedores externos, y servir como filtro previo ante solicitudes de cambio no autorizadas.

### **4.2 Componentes Clave del Diccionario de la EDT**

| Campo | Descripción y Propósito en Arquitectura de TI |
| :---- | :---- |
| **1\. Código ID de la EDT** | Identificador alfanumérico derivado del Código de Cuentas que ubica el paquete en la jerarquía (ej. 1.4.2.1). |
| **2\. Nombre del Paquete** | Título descriptivo del entregable o componente de software a desarrollar. |
| **3\. Responsable Asignado** | Rol técnico, especialista o equipo multidisciplinario (ej. Líder Backend, Equipo DevSecOps) que asume la propiedad directa del paquete. |
| **4\. Criterios de Aceptación** | Parámetros técnicos, funcionales y de calidad cuantitativos exigidos para validar la conformidad de la entrega (ej. cobertura de pruebas, tiempos de latencia). |
| **5\. Entregables Asociados** | Artefactos tangibles generados (código fuente, OpenAPI spec, scripts de BD, infraestructura provisionada). |
| **6\. Supuestos y Restricciones** | Condicionantes técnicos asumidos (disponibilidad de APIs externas) y limitaciones operativas (marcos normativos, latencias máximas). |
| **7\. Recursos Asignados** | Talento humano especializado, licencias de software, entorno en la nube e instrumental de desarrollo/pruebas. |
| **8\. Duración Estimada** | Tiempo previsto para completar la entrega técnica (expresado en días hábiles o *timebox* de iteración/sprint). |
| **9\. Costo Estimado** | Presupuesto asignado calculado a partir del *run rate* del personal, licencias y costos de consumo *cloud*. |
| **10\. Hitos de Control** | Eventos clave de verificación, revisiones de código (*Code Reviews*), ejecuciones de canalización y fechas de liberación. |

## **5\. Plantilla de Trabajo Práctica y Rellenable para Estudiantes**

### **5.1 Guía de Aplicación Pedagógica**

La presente sección ha sido concebida como un instrumento de entrenamiento práctico en proyectos de ingeniería de sistemas. Se encomienda a los estudiantes seleccionar un Paquete de Trabajo de Nivel 4 de la EDT desglosada en la Sección 3 y cumplimentar cada campo de la ficha técnica. El objetivo pedagógico radica en desarrollar la capacidad de traducir requisitos abstractos de software en parámetros arquitectónicos y de calidad rigurosos, eliminando la ambigüedad en los criterios de aceptación.

### **5.2 Plantilla Estandarizada del Diccionario de la EDT (Formulario de Trabajo)**

#### **EJEMPLO RESUELTO DE TRABAJO (Basado en el Caso de Estudio)**

\========================================================================================

FICHA TÉCNICA DEL DICCIONARIO DE LA EDT (EJEMPLO RESUELTO)

\========================================================================================

1\. CÓDIGO ID DE LA EDT:

   1.4.2.1

2\. NOMBRE DEL PAQUETE DE TRABAJO:

   Componente de Procesamiento de Tarjetas y Tokenización (PCI-DSS)

3\. RESPONSABLE ASIGNADO:

   Especialista Senior Backend & Ingeniero de Ciberseguridad (Equipo de Desarrollo Backend)

4\. CRITERIOS DE ACEPTACIÓN:

   \- Cumplimiento verificado de la normativa de seguridad de datos PCI-DSS Nivel 1 para el 

     cifrado de datos en tránsito (TLS 1.3) y en reposo (AES-256).

   \- Tiempo de respuesta/latencia del servicio de tokenización \< 150 ms en el percentil 95 (P95).

   \- Cobertura de pruebas unitarias y de integración automatizadas \> 85% del código fuente.

   \- Escaneo de seguridad estático (SAST) y dinámico (DAST) con cero vulnerabilidades críticas o altas.

   \- Especificación API documentada formalmente bajo el estándar OpenAPI 3.0 (Swagger) y aprobada.

   \- Validación y firma de conformidad en la sesión de demo/UAT con el Dueño del Producto.

5\. ENTREGABLES ASOCIADOS:

   \- Microservicio funcional de tokenización desplegado en entorno Staging.

   \- Repositorio de código fuente con controladores, servicios y pruebas integradas.

   \- Archivo de especificación OpenAPI 3.0 (Swagger UI).

   \- Informe de auditoría de seguridad y escaneo de vulnerabilidades sin hallazgos críticos.

6\. SUPUESTOS Y RESTRICCIONES:

   \- Supuesto: El API Sandbox del adquirente bancario mantendrá un Uptime del 99.9% durante las pruebas.

   \- Restricción: Queda estrictamente prohibido almacenar el Código de Validación (CVV) o el PAN 

     de las tarjetas en bases de datos locales o registros de logs.

7\. RECURSOS ASIGNADOS:

   \- 2 Desarrolladores Senior Backend, 1 Especialista en Ciberseguridad, 1 QA Automation Engineer.

   \- Credenciales de acceso a API Gateway Sandbox del adquirente.

   \- Entorno Cloud AWS (Instancias EC2/EKS, AWS KMS para gestión de llaves) y herramienta SonarQube.

8\. DURACIÓN ESTIMADA:

   10 días hábiles (correspondiente a un timebox / sprint de 2 semanas).

9\. COSTO ESTIMADO:

   \$5,200 USD (calculado en base a 80 horas de labor técnica multidisciplinaria más consumo cloud).

10\. HITOS DE CONTROL ASOCIADOS:

    \- Hito 1: Cierre y aprobación de contrato de interfaz OpenAPI (Día 2).

    \- Hito 2: Aprobación de Pruebas Unitarias y Escaneo de Ciberseguridad en CI/CD (Día 7).

    \- Hito 3: Despliegue en Staging, demostración funcional y aceptación por Product Owner (Día 10).

\========================================================================================

#### **PLANTILLA EN BLANCO PARA CUMPLIMENTAR POR EL ESTUDIANTE**

\========================================================================================

FICHA TÉCNICA DEL DICCIONARIO DE LA EDT (FORMULARIO PARA EL ESTUDIANTE)

\========================================================================================

1\. CÓDIGO ID DE LA EDT:

   \[Completar con el código jerárquico de cuentas, ej. 1.4.1.2\]

2\. NOMBRE DEL PAQUETE DE TRABAJO:

   \[Completar con el nombre técnico del entregable/componente\]

3\. RESPONSABLE ASIGNADO:

   \[Completar con el rol o equipo responsable de la ejecución\]

4\. CRITERIOS DE ACEPTACIÓN:

   \- \[Completar Criterio 1: Métrica técnica de rendimiento, latencia o cobertura\]

   \- \[Completar Criterio 2: Estándar de calidad, ciberseguridad o arquitectura\]

   \- \[Completar Criterio 3: Condición de validación funcional o aprobación UAT\]

5\. ENTREGABLES ASOCIADOS:

   \- \[Completar Entregable 1: Código, esquema de BD, API spec, etc.\]

   \- \[Completar Entregable 2: Scripts de prueba, documentación o pipelines\]

6\. SUPUESTOS Y RESTRICCIONES:

   \- Supuestos: \[Completar premisas operativas o de infraestructura asumidas\]

   \- Restricciones: \[Completar limitaciones técnicas, normativas o presupuestarias\]

7\. RECURSOS ASIGNADOS:

   \- \[Completar Personal técnico especializado / Licencias / Entornos Cloud\]

8\. DURACIÓN ESTIMADA:

   \[Completar duración estimada en días hábiles o timebox de Sprint\]

9\. COSTO ESTIMADO:

   \[Completar presupuesto asignado / Costo de labor / Run Rate\]

10\. HITOS DE CONTROL ASOCIADOS:

    \- Hito 1: \[Completar Hito de Diseño / Arquitectura\]

    \- Hito 2: \[Completar Hito de Construcción / QA\]

    \- Hito 3: \[Completar Hito de Demostración / Validación\]

\========================================================================================

