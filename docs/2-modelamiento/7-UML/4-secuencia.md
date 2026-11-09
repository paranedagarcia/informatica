---
id: secuencia
title: "Secuencia"
sidebar_label: "📄 Diagrama de secuencia"
description: "Diagrama de Secuencia"
---


---
## **Diagrama de Secuencia**

Un **Diagrama de Secuencia** es un diagrama de comportamiento e interacción en el Lenguaje Unificado de Modelado (**UML**) que ilustra la sucesión de interacciones y el intercambio de mensajes entre objetos o componentes del sistema a lo largo del tiempo. 

![](img/sec-infografia.jpg)


A diferencia de los diagramas de clases (que muestran la estructura estática) o de los casos de uso (que muestran metas desde una caja negra), el diagrama de secuencia adopta una visión dinámica de "caja transparente". Su eje vertical representa el **paso del tiempo** (avanzando de arriba hacia abajo) y su eje horizontal representa los **participantes u objetos** involucrados.



### Elementos Principales

* **Líneas de Vida y Objetos (*Lifelines*):** Representadas en la parte superior por rectángulos etiquetados con la sintaxis `nombreObjeto:Clase` o `:Clase` (subrayado para denotar instancia) y una línea punteada vertical descendente que indica la duración de la existencia del objeto durante el escenario.
* **Mensajes (*Messages*):** Flechas horizontales dibujadas entre las líneas de vida que representan invocaciones de métodos u operaciones:
  * **Mensaje Sincrónico (flecha con punta sólida):** El emisor se bloquea a la espera de que el receptor complete la ejecución.
  * **Mensaje Asincrónico (flecha con punta abierta):** El emisor envía la señal y continúa su ejecución sin esperar respuesta.
  * **Respuesta / Retorno (flecha discontinua):** Devuelve el control o un valor de retorno al objeto origen al finalizar la operación.
* **Foco de Control / Cajas de Activación (*Activation Bars*):** Rectángulos verticales delgados situados sobre la línea de vida que indican el intervalo de tiempo exacto durante el cual el objeto está ejecutando una operación activa o se encuentra en la pila de llamadas.
* **Creación y Destrucción de Objetos:** La instanciación de un nuevo objeto se representa enviando un mensaje `create` que apunta directamente al encabezado del nuevo objeto. La destrucción explícita de un objeto se marca con un símbolo de cruz (`X` o `<<destroy>>`) al final de su línea de vida.
* **Fragmentos Combinados (*Interaction Fragments*):** Recuadros con etiquetas que agrupan flujos condicionales o iterativos:
  * **`alt` / `else`:** Muestra caminos alternativos mutuamente exclusivos según condiciones de guarda.
  * **`loop`:** Indica la repetición o iteración sobre un conjunto de mensajes.



### Principales Usos

1. **Realización de Casos de Uso:** Traduce los escenarios de texto plano y eventos de los casos de uso en una solución técnica de objetos que colaboran.
2. **Descubrimiento de Métodos y Firma de Clases:** Cada mensaje enviado a un objeto receptor en el diagrama de secuencia se convierte posteriormente en un **método público** dentro del Diagrama de Clases de Diseño (DCD) y en el código fuente.
3. **Estructuración en Arquitectura por Capas:** Permite organizar visualmente los componentes respetando las tres capas fundamentales del software:
   * **Capa de Presentación / Límite (*Boundary*):** Formularios, vistas o interfaces de usuario.
   * **Capa de Dominio / Negocio (*Control*):** Controladores de caso de uso que aplican las reglas del negocio.
   * **Capa de Persistencia / Entidad (*Entity*):** Tablas de base de datos o repositorios que almacenan el estado del sistema.
4. **Validación y Refinamiento del Diseño:** Permite a los arquitectos y desarrolladores verificar la lógica de integración y detectar problemas de acoplamiento o datos faltantes antes de escribir código.



## **Ejemplos**

### Pago con tarjeta crédito
Tomando el escenario de pago con tarjeta de crédito/débito, la secuencia de mensajes entre las capas del sistema funciona de la siguiente manera:

1. **Invocación de Pago:** El actor `:Cliente` envía el mensaje `procesarPago(datosTarjeta, montoTotal)` hacia el objeto de presentación/dominio `:ControladorVenta`.
2. **Validación Local:** El `:ControladorVenta` se envía un mensaje a sí mismo (`validarFormatoTarjeta()`) para comprobar la sintaxis antes de llamar a servicios externos.
3. **Autorización Financiera:** El `:ControladorVenta` invoca el mensaje `autorizarTransaccion(datosTarjeta, montoTotal)` en el objeto adaptador `:ServicioPago`, el cual retorna el `codigoAprobacion` y el estado de la operación.
4. **Evaluación de la Transacción (`alt / else`):**
   * **Camino de Éxito (`alt`):** Si la transacción es aprobada, el `:ControladorVenta` envía los mensajes `registrarVenta(ordenId, montoTotal)` y `decrementarStock(listaArticulos)` al `:ServidorBaseDatos`. Finalmente, retorna una respuesta de éxito con el comprobante al `:Cliente`.
   * **Camino de Excepción (`else`):** Si el pago es rechazado, el `:ControladorVenta` devuelve un mensaje de error notificando la causa del rechazo al `:Cliente`.



![](img/sec-diagrama.jpg)


### Atención de salud

A continuación tienes el **diagrama de secuencia en Mermaid** que modela el flujo completo de atención médica, estructurado según las etapas de interacción entre los diferentes actores y el sistema de información clínica (HIS / Ficha Médica Electrónica).


#### Diagrama de Secuencia en Mermaid


```mermaid
---
config:
  theme: 'default'
  themeVariables:
     fontSize: 20px
     fontFamily: 'verdana'
     darkMode: false
---
sequenceDiagram
    autonumber
    actor Paciente as 👤 Paciente
    actor Admin as 📋 Administrativo
    actor Enfermera as 🩺 Enfermera (Triage)
    actor Medico as 👨‍⚕️ Médico
    participant Sistema as 💻 Sistema Clínico<br> (HIS)

    %% ==========================================
    %% FASE 1: REGISTRO Y ADMISIÓN
    %% ==========================================
    rect rgb(240, 248, 255)
    Note over Paciente,Sistema: FASE 1: REGISTRO Y ADMISIÓN
    Paciente->>Admin: Solicita atención y presenta documento de identidad
    Admin->>Sistema: Consultar antecedentes del paciente (RUT / DNI)
    Sistema-->>Admin: Retorna datos de filiación y cobertura previsional
    Admin->>Sistema: Registrar ingreso a lista de espera de Triage
    Sistema-->>Admin: Confirmación de ingreso (N° de atención asignado)
    Admin->>Paciente: Entrega comprobante e indica pasar a sala de espera
    end

    %% ==========================================
    %% FASE 2: EVALUACIÓN DE ENFERMERÍA (TRIAGE)
    %% ==========================================
    rect rgb(255, 250, 240)
    Note over Paciente,Sistema: FASE 2: EVALUACIÓN Y SIGNOS VITALES (TRIAGE)
    Enfermera->>Sistema: Consultar siguiente paciente en lista de espera
    Sistema-->>Enfermera: Datos del paciente asignado
    Enfermera->>Paciente: Llama al paciente a box de categorización
    Enfermera->>Paciente: Toma signos vitales (presión, FC, saturación, T°) y motivo
    Enfermera->>Sistema: Registrar signos vitales y categorización clínica (Triage)
    Sistema-->>Enfermera: Registro guardado y actualizado en cola médica
    Enfermera->>Paciente: Deriva a sala de espera de atención médica
    end

    %% ==========================================
    %% FASE 3: ATENCIÓN MÉDICA Y DIAGNÓSTICO
    %% ==========================================
    rect rgb(245, 255, 245)
    Note over Paciente,Sistema: FASE 3: CONSULTA MÉDICA Y DIAGNÓSTICO
    Medico->>Sistema: Llamar paciente priorizado según Triage
    Sistema-->>Medico: Muestra ficha clínica y signos vitales registrados
    Medico->>Paciente: Llama a consulta e inicia anamnesis / examen físico
    Paciente-->>Medico: Describe síntomas y evolución del cuadro
    Medico->>Medico: Evalúa signos, síntomas y antecedentes clínicos
    Medico->>Sistema: Registrar hipótesis / diagnóstico definitivo (CIE-10/CIE-11)
    end

    %% ==========================================
    %% FASE 4: DEFINICIÓN DE TRATAMIENTO Y ALTA
    %% ==========================================
    rect rgb(255, 245, 245)
    Note over Paciente,Sistema: FASE 4: PLAN TERAPÉUTICO Y CIERRE
    Medico->>Sistema: Generar receta médica electrónica e indicaciones terapéuticas
    Sistema-->>Medico: Comprobante digital de prescripción médica generado
    Medico->>Paciente: Explica diagnóstico, entrega receta e indicaciones de cuidado
    Medico->>Sistema: Marcar atención médica como "Finalizada / Alta"
    Sistema-->>Medico: Cierre de episodio de atención confirmado
    end
```



#### Participantes y Fases

1. **Participantes / Líneas de Vida (*Lifelines*):**
   * **`Paciente` (Actor):** Usuario que inicia la demanda de salud y colabora en el interrogatorio clínico.
   * **`Administrativo` (Actor):** Gestiona la identificación del usuario, valida coberturas y registra el ingreso formal al servicio.
   * **`Enfermera` (Actor):** Ejecuta el primer filtro clínico (*Triage*), mide parámetros fisiológicos objetivos (presión arterial, temperatura, saturación de \\(O_2\\)) y clasifica el nivel de urgencia.
   * **`Médico` (Actor):** Realiza el examen físico, establece el juicio diagnóstico y prescribe el plan terapéutico.
   * **`Sistema Clínico` (Componente de Software):** Ficha Médica Electrónica o sistema hospitalario que centraliza la persistencia de datos, asegura la trazabilidad temporal del episodio y actualiza el estado de las colas de espera.

2. **Flujo de Información y Buenas Prácticas UML:**
   * **Mensajes Síncronos (`->>`):** Representan solicitudes activas de acción o consultas directas al sistema.
   * **Mensajes de Respuesta (`-->>`):** Indican la devolución de datos procesados (por ejemplo, ficha del paciente, confirmación de registro o receta emitida).
   * **Bloques Agrupadores (`rect`):** Delimitan claramente las cuatro transiciones de estado del paciente: Admisión \\(\rightarrow\\) Triage \\(\rightarrow\\) Consulta/Diagnóstico \\(\rightarrow\\) Tratamiento/Alta.