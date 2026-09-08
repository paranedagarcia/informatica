
---
## ROI

El cálculo del **Retorno sobre la Inversión (ROI)** —también denominado *RSI* o *Return on Investment*— en el ámbito del software es un componente crítico del **Business Case**. Su propósito es cuantificar la rentabilidad de una iniciativa tecnológica para que la gerencia pueda evaluar de manera objetiva si el proyecto merece la asignación de recursos frente a otras opciones del portafolio.

En la ingeniería de software, calcular el ROI requiere comprender dos enfoques financieros (el nominal y el descontado), además de aprender a ponderar los beneficios que no siempre se traducen fácilmente a dinero.



### 1. La Fórmula Básica del ROI (Enfoque Nominal)
El ROI nominal se calcula dividiendo los **beneficios netos esperados del proyecto** entre la **inversión inicial** (multiplicado por 100 para obtener un porcentaje):

$\text{ROI Nominal (\%)} = \left( \frac{\text{Beneficios Netos del Proyecto}}{\text{Inversión Inicial}} \right) \times 100$

En donde:
*   **Inversión Inicial (Costo de Desarrollo):** Incluye los costos únicos de adquisición de hardware, licencias de software, tiempo de analistas/programadores y salarios dedicados a la construcción de la solución.
*   **Beneficios Netos del Proyecto:** Representan los beneficios operacionales tangibles acumulados durante la vida útil del software (por ejemplo, reducción de nómina, menor tiempo de procesamiento o incremento en ventas) **menos** los costos recurrentes de operación y mantenimiento del sistema (como soporte de TI, hosting o capacitación de personal).

*Nota de BPM:* En la gestión de procesos, este beneficio neto se conceptualiza bajo la ecuación de **valor neto ($V_{neto}$)**, que resta al nuevo valor producido ($V_{nuevo}$) el costo de los procesos, el tiempo del ciclo de desarrollo y los puntos de ineficiencia o capacidades sin utilizar.



### 2. El Enfoque Descontado: El valor del dinero en el tiempo
Para proyectos de software con horizontes de planeación medianos o largos (de 3 años o más), el análisis nominal es insuficiente e impreciso. Un dólar recibido en el tercer año no vale lo mismo que un dólar invertido en el "Año 0".

Para resolver esto, se utiliza el **ROI Descontado**, el cual trabaja en conjunto con el **Valor Neto Actual (VNA)**. El analista de sistemas aplica una **tasa de descuento** (que refleja el costo de oportunidad del dinero de la empresa, típicamente entre el 8% y el 15% anual) para traer los flujos de efectivo futuros a moneda del día de hoy.



### 3. Ejemplo Práctico Detallado: Desarrollo "In-House"
Supongamos que una empresa evalúa el desarrollo interno (*in-house*) de un sistema para automatizar sus flujos de trabajo. El horizonte de evaluación es de 3 años y la tasa de descuento de la empresa es del **15% anual**.

#### Paso 1: Identificación de Flujos de Efectivo (Tabla de Costo-Beneficio)
*   **Año 0 (Inversión inicial):** Costo de desarrollo único = **\$300,000**. Costo operativo de instalación = **\$80,000**. (Desembolso total inicial = **\$380,000**).
*   **Año 1:** Costos de operación = \$180,000; Beneficios tangibles por automatización = \$250,000. **Flujo Neto = +\$70,000**.
*   **Año 2:** Costos de operación = \$200,000; Beneficios tangibles = \$350,000. **Flujo Neto = +\$150,000**.
*   **Año 3:** Costos de operación = \$225,000; Beneficios tangibles = \$450,000. **Flujo Neto = +\$225,000**.

#### Paso 2: Cálculo del ROI Nominal (Ignorando el tiempo)
*   **Beneficio Neto Acumulado de Operación:** \$1,050,000 (Beneficios) - \$685,000 (Costos de Operación) = **\$365,000**.
*   **Inversión de Desarrollo:** **\$300,000**.
*   **ROI Nominal:**
    $\text{ROI} = \left( \frac{\$365,000 - \$300,000}{\$300,000} \right) \times 100 = \mathbf{21.67\%}$
    
    *(O expresado como una relación beneficio-costo nominal de $365,000 / 300,000 = \mathbf{1.22}$, lo que indica que los beneficios exceden la inversión en un 22%)*.

#### Paso 3: Aplicación del Descuento por Valor Presente (La Verdadera Viabilidad)
Para evaluar con rigor, descontamos cada flujo anual neto dividiéndolo entre $(1 + 0.15)^t$, donde $t$ es el año correspondiente:
*   **Año 0:** -\$380,000 / $1.15^0$ = **-\$380,000**
*   **Año 1:** +\$70,000 / $1.15^1$ = **+\$60,870**
*   **Año 2:** +\$150,000 / $1.15^2$ = **+\$113,422**
*   **Año 3:** +\$225,000 / $1.15^3$ = **+\$147,941**

Sumando estos valores presentes obtenemos el **VNA (Valor Neto Actual)**:
$\text{VNA} = -\$380,000 + \$60,870 + \$113,422 + \$147,941 = \mathbf{-\$57,768}$

#### Conclusión del Ejemplo:
Aunque el **ROI Nominal es positivo (21.67%)**, al considerar el valor del dinero en el tiempo la inversión arroja un **VNA negativo (-\$57,768)**. Esto significa que el proyecto no rinde el 15% mínimo exigido por la empresa (su Tasa Interna de Retorno real es de apenas el 7%). **Financieramente, el proyecto debe ser rechazado**.



### 4. El Desafío de los "Intangibles" en el Software
Uno de los mayores obstáculos al calcular el ROI en sistemas de información es que los modelos financieros tradicionales tienden a ignorar los **beneficios intangibles** (como el aumento en la satisfacción del cliente, una mejor toma de decisiones organizacionales o la reputación de innovador) debido a la incertidumbre para medirlos. 

Si un analista descarta los intangibles, el software puede parecer financieramente poco atractivo, sesgando la decisión hacia no invertir. Por ello, las mejores prácticas de la disciplina sugieren:
1.  **Valorar los intangibles en unidades monetarias** mediante estimaciones estructuradas (ej. estimando el costo de perder clientes debido a un mal servicio frente a retenerlos con el nuevo software).
2.  Utilizar **modelos de calificación ponderada** (multi-criterio) donde la rentabilidad financiera (ROI/VNA) es solo uno de varios factores a evaluar, conviviendo con el alineamiento estratégico y la mitigación de riesgos.
3.  Tener en cuenta el concepto de **dilución de impacto**: el valor de las inversiones de software suele apreciarse con total claridad a nivel de infraestructura básica de TI, pero se diluye o se vuelve difícil de rastrear cuando se intenta medir directamente desde los indicadores globales de balance de la compañía.

