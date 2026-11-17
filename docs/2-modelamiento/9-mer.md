---
id: mer
title: "Modelo Entidad–Relación"
sidebar_label: "📄 Modelo Entidad–Relación"
description: "Modelo Entidad–Relación avanzado"
---

El modelado de datos en la informática y la ingeniería de software es el proceso formal mediante el cual se definen las estructuras, relaciones y restricciones del mundo real que deben ser gestionadas por un sistema informático. Tradicionalmente, el diseño de bases de datos transcurre a través de tres fases progresivas de abstracción: la **fase conceptual**, la **fase lógica** y la **fase física**.

Dentro de este ciclo de vida destacan dos paradigmas fundamentales: el **Modelo Entidad–Relación (MER)**, perteneciente al plano conceptual, y el **Modelo Relacional**, que opera como el estándar matemático y lógico sobre el cual se construyen los motores de bases de datos modernos.



## **Modelo Entidad–Relación (MER)**

El **Modelo Entidad–Relación** fue propuesto originalmente por **Peter Chen en 1976**. Su propósito fundamental es ofrecer una representación gráfica y conceptual de alto nivel que describa los datos y sus asociaciones de manera comprensible para los usuarios de negocio y los diseñadores, **con total independencia del sistema gestor de bases de datos (SGBD) o la tecnología física que se utilice para implementarlo**.

El artefacto principal de esta fase es el **Diagrama Entidad–Relación (DER o ERD)**.

#### Componentes Fundamentales del MER:

*   **Entidades y Conjuntos de Entidades:** Una entidad es un objeto o concepto identificable del mundo real que es distinguible de otros (por ejemplo, un cliente particular o un producto específico). Las entidades con características comunes se agrupan en **conjuntos de entidades** (representados clásicamente como **rectángulos**).
*   **Atributos:** Son las propiedades o categorías descriptivas que caracterizan a una entidad (como el nombre, precio, dirección o fecha de contratación). Se clasifican en:
    *   *Simples/Atómicos:* No divisibles (ej. edad o precio).
    *   *Compuestos:* Descomponibles en partes con significado propio (ej. una dirección compuesta por calle, ciudad y código postal).
    *   *Monovaluados y Multivaluados:* Atributos que admiten un único valor o una lista de valores simultáneos (ej. múltiples números telefónicos para un mismo individuo).
    *   *Atributo Clave (Identificador):* Uno o más atributos cuyos valores identifican unívocamente a cada entidad dentro del conjunto.
*   **Relaciones y Conjuntos de Relaciones:** Una relación es una asociación o interacción del mundo real entre dos o más entidades (por ejemplo, el hecho de que un cliente *compra* un producto o que un empleado *pertenece a* un departamento). Gráficamente se representan mediante **rombos** que interconectan las entidades.
*   **Cardinalidad y Tipos de Asociación:** La cardinalidad delimita el número mínimo y máximo de instancias de una entidad que pueden asociarse con instancias de otra entidad. Se clasifican principalmente en:
    *   **Uno a Uno (1:1):** Cada instancia de la entidad A se asocia con un máximo de una instancia de la entidad B, y viceversa.
    *   **Uno a Muchos (1:N):** Una instancia en A se asocia con múltiples instancias en B, pero cada instancia en B corresponde únicamente a una en A (ej. una categoría clasifica muchos productos).
    *   **Muchos a Muchos (N:M):** Múltiples instancias en A se vinculan con múltiples instancias en B (ej. los productos comprados dentro de múltiples órdenes de venta).
*   **Extensiones de Abstracción Estructural:**
    *   *Generalización y Especialización (Jerarquía "IS-A"):* Proceso inductivo o deductivo donde entidades comparten atributos comunes en una superclase y divergen en subclases especializadas (ej. empleados divididos en gerentes, especialistas y practicantes).
    *   *Agregación ("PART-OF"):* Representación en la que una relación entre entidades se eleva conceptualmente para comportarse como una entidad de orden superior (ej. una estructura corporativa o listas jerárquicas de materiales).


## **Modelo Relacional**

Propuesto formalmente por **Edgar F. Codd en 1970** en los laboratorios de IBM, el **Modelo Relacional** supuso una revolución al desvincular la representación lógica de los datos de su implementación física en disco. Está sólidamente fundamentado en dos ramas matemáticas: la **teoría de conjuntos** y la **lógica de predicados de primer orden**.

En este modelo, el universo del discurso se concibe exclusivamente como un conjunto de **relaciones matemáticas**.

#### Elementos Estructurales:

*   **Relación (Tabla):** Matemáticamente, una relación $R$ es un subconjunto del producto cartesiano de una serie de dominios: $R \subseteq D_1 \times D_2 \times \dots \times D_n$. En la práctica se visualiza como una **tabla bidimensional de filas y columnas**.
*   **Tupla (Fila o Registro):** Corresponde a un elemento del conjunto de la relación. Representa una instancia única de hechos.
*   **Atributo (Columna):** Cada columna con nombre único que define una propiedad particular sobre la relación.
*   **Dominio:** Conjunto finito de valores atómicos homogéneos y válidos permitidos para un atributo determinado.

#### Propiedades Intrínsecas de una Relación Formal:
1.  **Atomicidad de los datos:** Cada celda contiene un único valor escalar indivisible proveniente de su dominio (requisito estricto de la **Primera Forma Normal o 1NF**).
2.  **Unicidad de tuplas:** No pueden existir filas duplicadas idénticas dentro de una misma relación (formalmente garantizado por la definición de conjunto).
3.  **Indiferencia del orden:** Ni el orden secuencial de las columnas ni el orden físico de las filas poseen relevancia semántica.

#### Reglas de Integridad Estructural del Modelo Relacional:
*   **Integridad de Entidad:** Establece que cada tabla debe poseer una **Clave Primaria (Primary Key)** constituida por uno o varios atributos que identifiquen unívocamente cada fila. Ninguna columna partícipe de la clave primaria puede aceptar valores nulos (`NOT NULL`).
*   **Integridad Referencial:** Regula las dependencias lógicas entre tablas mediante el uso de **Claves Foráneas (Foreign Keys)**. Una clave foránea es un atributo en una tabla secundaria cuyos valores deben coincidir exactamente con un valor de clave primaria existente en la tabla padre referenciada o, en su defecto, ser nulo. Se complementa con reglas de manipulación ante borrados o modificaciones en la tabla padre:
    *   *Restringida (`ON DELETE RESTRICT` / `NO ACTION`):* Impide borrar el registro padre si existen hijos asociados.
    *   *En cascada (`ON DELETE CASCADE`):* Elimina automáticamente los registros dependientes para evitar tuplas huérfanas.
    *   *Set Null (`ON DELETE SET NULL`):* Convierte la clave foránea en nula al suprimirse el registro padre.
*   **Integridad de Dominio:** Garantiza que los valores almacenados en una columna respeten el tipo de dato, formato y restricciones adicionales definidas (como sentencias `CHECK`, `DEFAULT` o cláusulas `UNIQUE`).



### Mapeo y Transformación
**Del Modelo ER al Modelo Relacional**

Para trasladar un diseño conceptual (MER) al esquema lógico de una base de datos relacional, los analistas aplican un conjunto de **reglas sistemáticas de derivación**:

| Elemento en Modelo ER | Mapeo al Modelo Relacional | Justificación Técnica |
| :--- | :--- | :--- |
| **Entidad Regular** | **Tabla base independiente** | La clave del conjunto de entidades se convierte en la clave primaria (`PRIMARY KEY`) de la tabla y sus atributos simples en columnas. |
| **Relación 1:N** | **Inclusión de Clave Foránea (`FOREIGN KEY`)** | El identificador de la entidad del lado "1" se migra como clave foránea dentro de la tabla ubicada en el lado "N" de la relación. |
| **Relación N:M** | **Tabla de Rompimiento / Intersección (Junction Table)** | Se construye una nueva tabla cuyo identificador es una clave primaria compuesta (`Composite PK`) integrada por las claves primarias de ambas entidades participantes actuando simultáneamente como claves foráneas. |
| **Relación 1:1** | **Clave Foránea Única o Fusión** | Se coloca la clave primaria de una de las tablas dentro de la otra marcándola con restricción `UNIQUE`, o se fusionan en una única tabla cuando comparten ciclo de vida. |



### Cuadro comparativo

| Dimensión de Análisis | Modelo Entidad–Relación (MER) | Modelo Relacional |
| :--- | :--- | :--- |
| **Nivel de Abstracción** | **Conceptual / Semántico**. Captura la semántica del negocio sin atarse a tecnologías. | **Lógico / Arquitectónico**. Estructura los datos para su consumo por el motor de BD. |
| **Sustento Teórico** | Notación gráfica descriptiva y taxonomías de modelado. | **Álgebra relacional, cálculo relacional y teoría de conjuntos**. |
| **Estructuras Primitivas** | Entidades, Atributos y Relaciones. | Relaciones (Tablas), Tuplas (Filas) y Atributos (Columnas). |
| **Tratamiento de Relaciones N:M** | Se modela de manera nativa y directa como un rombo de asociación. | **No puede implementarse directamente**; requiere obligatoriamente una tabla intermedia o de unión. |
| **Preservación de Integridad** | Declarativa mediante cardinalidades mínimas y máximas en diagramas. | Restricciones formales ejecutables en motor: `PRIMARY KEY`, `FOREIGN KEY`, `CHECK` y `UNIQUE`. |

---

## **Normalización**

La **normalización de bases de datos relacionales** es una técnica formal de diseño lógico cuyo objetivo es organizar las tablas y columnas para **eliminar redundancias innecesarias** y **prevenir anomalías de modificación** (inserción, actualización y borrado). 

En los sistemas transaccionales orientados al procesamiento en línea (**OLTP**), la normalización asegura que cada hecho o pieza independiente de información se almacene en **un único lugar** del sistema.

---

### Las Anomalías del Modelo Denormalizado

Para analizar el proceso formal, partimos de una **tabla plana y denormalizada** que consolida en una sola estructura los pedidos, clientes, productos y empleados de **Northwind**:

```math
\text{Northwind\_Denormalizada}(\underline{\text{OrderID}}, \text{OrderDate}, \text{CustomerID}, \text{CompanyName}, \text{City}, \text{EmployeeID}, \text{EmployeeName}, \text{ProductsList})
```

Donde `ProductsList` contiene listas de productos, cantidades y precios (por ejemplo: `"[Chai: 10 a $18.00; Chang: 5 a $19.00]"`).

Esta estructura genera tres fallas críticas de integridad:
1. **Anomalía de Inserción:** No es posible registrar un nuevo cliente si este aún no ha realizado ningún pedido, ya que la clave primaria `OrderID` no admitiría valores nulos (`NULL`).
2. **Anomalía de Borrado:** Si se cancela y elimina el único pedido existente de un cliente, se borra inadvertidamente el registro del cliente y sus datos de contacto de la base de datos.
3. **Anomalía de Modificación (Actualización):** Si el cliente traslada su sede a otra ciudad, es necesario actualizar todas y cada una de las filas históricas donde figure dicho cliente; si una fila se omite, la base de datos queda en un estado inconsistente.



### Primera Forma Normal (1NF)
**Atomicidad y Eliminación de Grupos Repetitivos**

#### Definición Formal
Una relación $R$ está en **Primera Forma Normal (1NF)** si y solo si:
* Todos los dominios subyacentes contienen únicamente **valores atómicos (indivisibles)**.
* No existen **grupos repetitivos**, listas, conjuntos o atributos multivaluados dentro de una misma celda.
* Cada fila es única y posee una clave primaria bien definida.

#### Transformación en Northwind
Desglosamos la lista compuesta `ProductsList` creando una fila por cada producto individual dentro de la orden. Esto fuerza a que la clave primaria de la tabla deje de ser un atributo simple y pase a ser una **clave primaria compuesta**: $(\text{OrderID}, \text{ProductID})$.

```math
\text{Tabla\_1NF}(\underline{\text{OrderID}}, \underline{\text{ProductID}}, \text{OrderDate}, \text{CustomerID}, \text{CompanyName}, \text{City}, \text{EmployeeID}, \text{EmployeeName}, \text{ProductName}, \text{UnitPrice}, \text{Quantity})
```


### Segunda Forma Normal (2NF)
**Eliminación de Dependencias Parciales**

#### Definición Formal
Una relación $R$ está en **Segunda Forma Normal (2NF)** si:
1. Está en **1NF**.
2. Todo atributo no primo (aquél que no forma parte de ninguna clave candidata) tiene **dependencia funcional completa** respecto a cada clave candidata.

Si una clave primaria es compuesta $(K_1, K_2)$, no se permite ninguna **dependencia parcial** de la forma $K_1 \rightarrow A$ o $K_2 \rightarrow A$. *(Las tablas cuya clave primaria consta de un solo atributo están automáticamente en 2NF).*

#### Análisis de Dependencias en `Tabla_1NF`
* Clave Primaria Compuesta: $(\text{OrderID}, \text{ProductID})$.
* **Dependencia Completa:** $(\text{OrderID}, \text{ProductID}) \rightarrow \text{Quantity}$, $(\text{OrderID}, \text{ProductID}) \rightarrow \text{UnitPrice}$ *(precio negociado al momento de la venta)*.
* **Dependencias Parciales:**
  * $\text{OrderID} \rightarrow \text{OrderDate}, \text{CustomerID}, \text{CompanyName}, \text{City}, \text{EmployeeID}, \text{EmployeeName}$. *(Dependen únicamente de la orden, no del producto)*.
  * $\text{ProductID} \rightarrow \text{ProductName}$. *(Depende únicamente del producto, no de la orden)*.

#### Descomposición 2NF
Se separan los atributos parcialmente dependientes en tablas independientes junto con la porción de clave de la que dependen funcionalmente:
* **`OrderDetails`** $(\underline{\text{OrderID}}, \underline{\text{ProductID}}, \text{UnitPrice}, \text{Quantity})$
* **`Products_2NF`** $(\underline{\text{ProductID}}, \text{ProductName})$
* **`Orders_2NF`** $(\underline{\text{OrderID}}, \text{OrderDate}, \text{CustomerID}, \text{CompanyName}, \text{City}, \text{EmployeeID}, \text{EmployeeName})$



### Tercera Forma Normal (3NF)
**Eliminación de Dependencias Transitivas**

#### Definición Formal
Una relación $R$ está en **Tercera Forma Normal (3NF)** si:
1. Está en **2NF**.
2. Ningún atributo no primo depende **transitivamente** de la clave primaria.

Existe una dependencia transitiva cuando dadas las dependencias funcionales $A \rightarrow B$ y $B \rightarrow C$ (donde $A$ es la clave primaria, $B$ no determina funcionalmente a $A$, y $C$ es un atributo no primo), se deduce indirectamente que $A \rightarrow C$.

#### Análisis de Dependencias en `Orders_2NF`
* Clave Primaria: $\text{OrderID}$.
* $\text{OrderID} \rightarrow \text{CustomerID}$ y $\text{CustomerID} \rightarrow \text{CompanyName}, \text{City}$.
  * Como $\text{CustomerID} \not\rightarrow \text{OrderID}$, se genera la transitividad: $\text{OrderID} \rightarrow \text{CompanyName}, \text{City}$.
* $\text{OrderID} \rightarrow \text{EmployeeID}$ y $\text{EmployeeID} \rightarrow \text{EmployeeName}$.
  * Como $\text{EmployeeID} \not\rightarrow \text{OrderID}$, se genera la transitividad: $\text{OrderID} \rightarrow \text{EmployeeName}$.

#### Descomposición 3NF
Se extraen los atributos determinados por claves intermedias hacia sus propias relaciones:
* **`Customers`** $(\underline{\text{CustomerID}}, \text{CompanyName}, \text{City})$
* **`Employees`** $(\underline{\text{EmployeeID}}, \text{EmployeeName})$
* **`Orders`** $(\underline{\text{OrderID}}, \text{OrderDate}, \text{CustomerID}, \text{EmployeeID})$ *(donde `CustomerID` y `EmployeeID` permanecen como claves foráneas)*.



### Forma Normal de Boyce-Codd (BCNF)
**Determinantes Estrictos**

#### Definición Formal
Una relación $R$ está en **Forma Normal de Boyce-Codd (BCNF)** si y solo si:
* Para toda dependencia funcional no trivial $X \rightarrow Y$, el determinante $X$ es una **superclave** (o clave candidata).

#### La Diferencia entre 3NF y BCNF
En 3NF se tolera que en la dependencia $X \rightarrow Y$, si $X$ no es superclave, la condición se cumpla siempre que $Y$ sea un **atributo primo** (parte de alguna clave candidata alternativa). BCNF suprime esta excepción, exigiendo que **todo determinante sea estrictamente una superclave**.

#### Escenario en Northwind: Asignación de Gestores de Cuentas por Territorio
Supongamos que extendemos el modelo con la siguiente regla de negocio:
> *"Un cliente en una ciudad puede ser atendido por un Gestor Comercial (`ManagerID`). Cada Gestor Comercial está asignado a una única Ciudad, pero una Ciudad puede tener varios Gestores asignados."*

Diseñamos la tabla:
```math
\text{CustomerManagerCity}(\underline{\text{CustomerID}}, \underline{\text{City}}, \text{ManagerID})
```

Dependencias funcionales presentes:
1. $(\text{CustomerID}, \text{City}) \rightarrow \text{ManagerID}$ *(El cliente en esa ciudad tiene un gestor asignado)*.
2. $\text{ManagerID} \rightarrow \text{City}$ *(El gestor solo opera en una ciudad específica)*.

* **Claves candidatas:** $(\text{CustomerID}, \text{City})$ y $(\text{CustomerID}, \text{ManagerID})$.
* **Evaluación en 3NF:** Para $\text{ManagerID} \rightarrow \text{City}$, el determinante $\text{ManagerID}$ no es superclave, pero el consecuente $\text{City}$ sí es un atributo primo (forma parte de la clave candidata). Por ende, la tabla **cumple con 3NF**.
* **Evaluación en BCNF:** Como $\text{ManagerID}$ determina a $\text{City}$ sin ser una superclave por sí solo, **viola BCNF**. Esto provoca anomalías: si un gestor no tiene clientes asignados, no se puede almacenar en qué ciudad opera sin meter nulos en la clave.

#### Descomposición BCNF
Descomponemos la relación en dos tablas donde cada determinante sea superclave:
* **`ManagerTerritory`** $(\underline{\text{ManagerID}}, \text{City})$ *(Clave: `ManagerID`)*.
* **`CustomerAssignment`** $(\underline{\text{CustomerID}}, \text{ManagerID})$ *(Clave: `CustomerID`, `ManagerID` es FK)*.



### Resumen Comparativo de Formas Normales

| Forma Normal | Condición Estructural / Dependencia Eliminada | Anomalía Prevenida |
| :--- | :--- | :--- |
| **1NF** | Requiere dominios atómicos y descarta atributos multivaluados o grupos repetitivos. | Imposibilidad de indexar y consultar elementos de forma escalar. |
| **2NF** | Exige 1NF y elimina **dependencias parciales** de atributos sobre claves compuestas. | Redundancia de atributos descriptivos en transacciones repetidas. |
| **3NF** | Exige 2NF y elimina **dependencias transitivas** entre atributos no primos. | Pérdida colateral de entidades secundarias al eliminar transacciones. |
| **BCNF** | Exige que **todo determinante sea superclave**, incluso para atributos primos. | Inconsistencias al modelar claves candidatas solapadas. |


