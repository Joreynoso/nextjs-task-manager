## ADDED Requirements

### Requirement: El usuario puede reordenar tareas manualmente
El sistema DEBE permitir que el usuario reordene sus tareas arrastrándolas, solo cuando el orden seleccionado es "custom".

#### Scenario: Reordenar tareas con drag & drop
- **GIVEN** el usuario tiene la vista de tareas ordenada por "custom"
- **WHEN** el usuario arrastra una tarea a una nueva posición
- **THEN** las tareas se reacomodan visualmente en tiempo real
- **AND** al soltar, el nuevo orden se persiste en la base de datos

#### Scenario: Drag handle no visible en otros tipos de orden
- **GIVEN** el usuario tiene la vista de tareas ordenada por "reciente", "antiguo" o "estado"
- **THEN** el icono de arrastrar (GripVertical) no es visible

#### Scenario: Animación al soltar
- **WHEN** el usuario suelta una tarea arrastrada
- **THEN** hay una transición suave hacia la nueva posición