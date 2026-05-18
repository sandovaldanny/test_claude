# test_claude - Documentación de Claude Code

## Stack
- Node.js 18+
- npm 9+
- Claude Code CLI
- Git
- Antigravity IDE

## Comandos
```bash
# Iniciar sesión
claude-code /login

# Ver estado
claude-code /status

# Ejecutar tarea
claude-code "tu instrucción aquí"

# Salir
claude-code /logout
```

## Reglas Críticas
- Siempre guardar cambios antes de ejecutar comandos
- No borrar archivos sin confirmar
- Revisar cambios antes de hacer commit
- Mantener CLAUDE.md actualizado

## Errores Frecuentes
- **401 Authentication**: Ejecuta `claude-code /login`
- **command not found**: Verifica `echo $ANTHROPIC_API_KEY`
- **Sesión expirada**: Logout y login de nuevo

## Flujo Git
```bash
# Crear rama
git checkout -b feature/nombre

# Hacer cambios
# ... edita archivos ...

# Agregar cambios
git add .

# Commit
git commit -m "descripción"

# Push
git push origin feature/nombre
```

## Última actualización
18 de Mayo de 2026