## ADDED Requirements

### Requirement: El usuario puede crear una tarea
El sistema DEBE permitir que un usuario autenticado cree una nueva tarea con título y opcionalmente descripción.

#### Scenario: Crear tarea con título
- **WHEN** el usuario envía un título (obligatorio)
- **THEN** el sistema crea la tarea con estado "pendiente" y fecha de creación actual

#### Scenario: Crear tarea con título y descripción
- **WHEN** el usuario envía título y descripción
- **THEN** la tarea se crea con ambos campos

#### Scenario: Crear tarea sin título
- **WHEN** el usuario intenta crear una tarea sin título
- **THEN** el sistema retorna error indicando que el título es requerido

### Requirement: El usuario puede ver sus tareas
El sistema DEBE permitir que un usuario autenticado vea todas sus tareas.

#### Scenario: Ver tareas del usuario
- **WHEN** el usuario autenticado solicita sus tareas
- **THEN** el sistema retorna solo las tareas pertenecientes a ese usuario

#### Scenario: Ver tareas vacío
- **WHEN** el usuario no tiene tareas
- **THEN** el sistema retorna una lista vacía

### Requirement: El usuario puede editar una tarea
El sistema DEBE permitir que un usuario autenticado modifique el título, descripción o estado de sus propias tareas.

#### Scenario: Editar título de tarea
- **WHEN** el usuario modifica el título de una tarea
- **THEN** el sistema actualiza el título en la base de datos

#### Scenario: Editar descripción de tarea
- **WHEN** el usuario modifica la descripción de una tarea
- **THEN** el sistema actualiza la descripción en la base de datos

#### Scenario: Cambiar estado de tarea
- **WHEN** el usuario cambia el estado (pendiente/en_curso/hecho)
- **THEN** el sistema actualiza el estado en la base de datos

### Requirement: El usuario puede eliminar una tarea
El sistema DEBE permitir que un usuario autenticado elimine sus propias tareas.

#### Scenario: Eliminar tarea existente
- **WHEN** el usuario elimina una tarea existente
- **THEN** la tarea se elimina de la base de datos

### Requirement: El usuario puede reordenar sus tareas
El sistema DEBE permitir que un usuario reordene sus tareas mediante drag & drop. El sistema DEBE mantener el orden personalizado.

#### Scenario: Reordenar tareas
- **WHEN** el usuario arrastra una tarea a una nueva posición
- **THEN** el sistema actualiza el campo 'order' de todas las tareas afectadas

### Scenario: Al cambiar entre ordenes, el drag and drop se inahibilita 
- **WHEN** el usuario cambia entre ordenes
- **THEN** el drag and drop se inahibilita

### Requirement: Solo el propietario puede modificar sus tareas
El sistema DEBE impedir que un usuario modifique las tareas de otro usuario.

#### Scenario: Intentar acceder a tarea de otro usuario
- **WHEN** un usuario intenta editar/eliminar una tarea que no le pertenece
- **THEN** el sistema retorna error de acceso no autorizado