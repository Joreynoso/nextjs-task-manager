## ADDED Requirements

### Requirement: El usuario puede registrarse con email y password
El sistema DEBE permitir que un nuevo usuario se registre proporcionando un email único y un password. El password DEBE ser hasheado con bcrypt antes de almacenarse.

#### Scenario: Registro exitoso
- **WHEN** el usuario envía un email válido y password de al menos 6 caracteres
- **THEN** el sistema crea el usuario y retorna éxito

#### Scenario: Email ya existente
- **WHEN** el usuario intenta registrarse con un email que ya existe
- **THEN** el sistema retorna error indicando que el email ya está en uso

#### Scenario: Password muy corto
- **WHEN** el usuario envía un password de menos de 6 caracteres
- **THEN** el sistema retorna error indicando que el password debe tener al menos 6 caracteres

### Requirement: El usuario puede iniciar sesión
El sistema DEBE permitir que un usuario registrado inicie sesión proporcionando su email y password. El sistema DEBE verificar el password y crear una sesión.

#### Scenario: Login exitoso
- **WHEN** el usuario envía credenciales válidas
- **THEN** el sistema retorna éxito y crea una sesión activa

#### Scenario: Credenciales inválidas
- **WHEN** el usuario envía email o password incorrectos
- **THEN** el sistema retorna error de autenticación

#### Scenario: Usuario no existe
- **WHEN** el usuario envía un email que no existe en la base de datos
- **THEN** el sistema retorna error de autenticación (sin revelar si el email existe)

### Requirement: El usuario puede cerrar sesión
El sistema DEBE permitir que un usuario autenticado cierre su sesión.

#### Scenario: Logout exitoso
- **WHEN** el usuario hace clic en "Cerrar sesión"
- **THEN** la sesión se elimina y el usuario es redirigido al login