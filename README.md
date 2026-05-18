# test_claude

Proyecto de prueba para Claude Code con configuración básica y documentación.

## Requisitos Previos

- **Node.js** 18 o superior
- **npm** 9 o superior
- **Git**
- **Claude Code CLI**

## Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd test_claude
```

2. Instalar dependencias:
```bash
npm install
```

3. Autenticar con Claude Code:
```bash
claude-code /login
```

## Uso Rápido

### Comandos Principales

```bash
# Verificar estado de autenticación
claude-code /status

# Ejecutar una tarea con Claude Code
claude-code "descripción de tu tarea"

# Cerrar sesión
claude-code /logout
```

## Flujo de Trabajo Git

### Crear una nueva rama:
```bash
git checkout -b feature/nombre-de-la-rama
```

### Hacer cambios y confirmar:
```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Crear commit
git commit -m "descripción clara del cambio"
```

### Enviar cambios:
```bash
git push origin feature/nombre-de-la-rama
```

## Checklist de Desarrollo

- ✓ Guardar cambios antes de ejecutar comandos
- ✓ Revisar cambios antes de hacer commit
- ✓ No borrar archivos sin confirmar
- ✓ Mantener CLAUDE.md y README.md actualizados

## Solución de Problemas

### Error: `401 Authentication`
Ejecuta nuevamente el comando de login:
```bash
claude-code /login
```

### Error: `command not found`
Verifica que la variable de entorno esté configurada:
```bash
echo $ANTHROPIC_API_KEY
```

### Sesión expirada
Cierra sesión y vuelve a iniciar:
```bash
claude-code /logout
claude-code /login
```

## Documentación Adicional

- Ver `CLAUDE.md` para configuración específica de Claude Code
- Consultar git log para historial de cambios: `git log --oneline`

## Última actualización

18 de Mayo de 2026

---

Para más información sobre Claude Code, consulta la [documentación oficial](https://claude.com/claude-code).
