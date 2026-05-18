# test_claude - Documentación de Claude Code

## Descripción del Proyecto

Proyecto Next.js completo con frontend y backend API integrado. Incluye página de inicio responsive y endpoint de health check.

## Stack Tecnológico

- **Framework**: Next.js 15
- **React**: 19
- **Node.js**: 18+ (requerido)
- **npm**: 9+ (requerido)
- **Lenguaje**: TypeScript
- **IDE**: Antigravity IDE / VS Code
- **VCS**: Git

## Estructura del Proyecto

```
test_claude/
├── src/
│   └── app/
│       ├── layout.tsx          # Layout principal
│       ├── page.tsx            # Página de inicio (frontend)
│       └── api/
│           └── health/
│               └── route.ts    # API endpoint GET /api/health
├── public/                     # Archivos estáticos
├── package.json                # Dependencias del proyecto
├── next.config.js              # Configuración de Next.js
├── tsconfig.json               # Configuración de TypeScript
├── CLAUDE.md                   # Este archivo
└── README.md                   # Documentación general
```

## Comandos

### Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (localhost:3000)
npm run dev

# Build para producción
npm build

# Iniciar servidor de producción
npm start

# Verificación de tipos
npm run type-check

# Linting
npm run lint
```

### Claude Code CLI

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

## Endpoints API

### GET /api/health

Verifica el estado de la API.

**Respuesta exitosa (200):**
```json
{
  "status": "ok",
  "message": "API is healthy",
  "timestamp": "2026-05-18T12:00:00.000Z",
  "version": "1.0.0",
  "service": "test_claude"
}
```

## Flujo de Trabajo Git

### Crear rama de feature
```bash
git checkout -b feature/nombre-descriptivo
```

### Hacer cambios y confirmar
```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Crear commit descriptivo
git commit -m "feat: descripción del cambio"

# Push a rama remota
git push origin feature/nombre-descriptivo
```

### Convención de commits

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bugs
- `refactor:` - Cambios sin funcionalidad nueva
- `docs:` - Cambios de documentación
- `style:` - Cambios de formato/estilo
- `test:` - Agregar/modificar tests

## Reglas Críticas

1. **Siempre guardar cambios antes de ejecutar comandos**
2. **No borrar archivos sin confirmar**
3. **Revisar cambios antes de hacer commit** - Usa `git status` y `git diff`
4. **Mantener documentación actualizada** - CLAUDE.md, README.md, comentarios en código
5. **Verificación de tipos** - Ejecuta `npm run type-check` antes de push
6. **No hacer force push** - A menos que sea absolutamente necesario y confirmado

## Desarrollo Local

### Requerimientos del Sistema

```bash
# Verificar Node.js
node --version  # Debe ser >= 18.0.0

# Verificar npm
npm --version   # Debe ser >= 9.0.0

# Verificar git
git --version
```

### Primeros pasos después de clonar

```bash
# 1. Instalar dependencias
npm install

# 2. Crear rama de trabajo
git checkout -b feature/tu-rama

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abre http://localhost:3000 en el navegador
```

## Solución de Problemas

### Error: `401 Authentication`
```bash
# Re-ejecuta login
claude-code /login

# Verifica variable de entorno
echo $ANTHROPIC_API_KEY
```

### Error: `npm: command not found`
```bash
# Verifica instalación de Node.js
node --version
npm --version

# En macOS, instala Homebrew y Node.js:
brew install node
```

### Error: `Port 3000 already in use`
```bash
# Usa puerto diferente
npm run dev -- -p 3001
```

### Error de TypeScript
```bash
# Verifica tipos antes de push
npm run type-check

# Limpia caché
rm -rf .next
npm run dev
```

## Buenas Prácticas

1. **Type Safety**: Mantener `strict: true` en tsconfig.json
2. **Componentes**: Crear componentes reutilizables en `src/app/components/`
3. **API Routes**: Agrupar endpoints relacionados en carpetas
4. **Environment Variables**: Usar `.env.local` para secretos (no commitear)
5. **Testing**: Agregar tests conforme se desarrolla (Jest + React Testing Library)
6. **Linting**: Ejecutar `npm run lint` antes de commits

## Referencias

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación React](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Claude Code Docs](https://claude.com/claude-code)

## Última actualización

18 de Mayo de 2026

---

**Nota**: Este archivo debe mantenerse actualizado con cambios significativos en la estructura o flujo del proyecto.
