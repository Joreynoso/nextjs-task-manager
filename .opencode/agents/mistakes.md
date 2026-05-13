# Errores de UI y animaciones

## Regla: contenedor con hijos superpuestos

Si dos o más elementos van a ocupar el **mismo espacio** (apilados, animados entre sí),
todos deben ser `absolute`. Ninguno puede estar en flujo normal.

> Un solo hijo en flujo normal contamina las dimensiones del contenedor
> y hace que los demás sean impredecibles.

**Patrón correcto:**
┌─ contenedor (relative) ──────────────────┐
│  <span invisible>  ← define el tamaño   │
│  <span absolute>   ← elemento A         │
│  <span absolute>   ← elemento B         │
└──────────────────────────────────────────┘

**Regla de oro:**
- ¿Vas a animar o superponer elementos? → todos `absolute`
- ¿El contenedor colapsa? → agregá un hijo invisible en flujo normal con el texto más largo