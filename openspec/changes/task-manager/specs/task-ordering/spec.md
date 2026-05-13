## ADDED Requirements

### Requirement: El usuario puede filtrar tareas por estado
El sistema DEBE permitir que el usuario filtre sus tareas según su estado (pendiente, en_curso, hecho).

#### Scenario: Filtrar por estado pendiente
- **WHEN** el usuario selecciona filtro "pendiente"
- **THEN** el sistema muestra solo las tareas con estado "pendiente"

#### Scenario: Filtrar por estado en curso
- **WHEN** el usuario selecciona filtro "en_curso"
- **THEN** el sistema muestra solo las tareas con estado "en_curso"

#### Scenario: Filtrar por estado hecho
- **WHEN** el usuario selecciona filtro "hecho"
- **THEN** el sistema muestra solo las tareas con estado "hecho"

#### Scenario: Sin filtro (mostrar todas)
- **WHEN** el usuario deselecciona todos los filtros
- **THEN** el sistema muestra todas las tareas

### Requirement: El usuario puede ordenar tareas
El sistema DEBE permitir que el usuario ordene sus tareas por diferentes criterios.

#### Scenario: Ordenar por más reciente
- **WHEN** el usuario selecciona ordenar por "reciente"
- **THEN** las tareas se muestran con las más recientes primero (createdAt DESC)

#### Scenario: Ordenar por más antiguo
- **WHEN** el usuario selecciona ordenar por "antiguo"
- **THEN** las tareas se muestran con las más antiguas primero (createdAt ASC)

#### Scenario: Ordenar por estado
- **WHEN** el usuario selecciona ordenar por "estado"
- **THEN** las tareas se agrupan/ordenan por estado (pendiente → en_curso → hecho)