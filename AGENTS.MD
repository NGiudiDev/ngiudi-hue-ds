# AGENTS.MD - Guía de Desarrollo para ngiudi-hue-ds

## 📋 Información General

Este documento contiene las reglas de programación, convenciones y guías para desarrolladores que trabajen en el Design System **ngiudi-hue-ds**. Todas las reglas han sido deducidas del análisis del código existente y deben ser seguidas para mantener la consistencia del proyecto.

---

## 🏗️ ARQUITECTURA Y ESTRUCTURA

### Estructura de Componentes
Cada componente debe seguir esta estructura obligatoria:

```
src/components/ComponentName/
├── ComponentName.jsx          # Componente principal
├── ComponentName.styles.js    # Estilos con styled-components
├── ComponentName.stories.jsx  # Documentación Storybook
└── ComponentName.docs.jsx     # Documentación extendida (opcional)
```

**Ejemplo:**
```jsx
// Box/Box.jsx
import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./Box.styles";

const DEFAULT_PROPS = {
  children: null,
  margin: "a-0",
  padding: "a-0",
};

export const Box = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Wrapper $margin={attrs.margin} $padding={attrs.padding}>
      {attrs.children}
    </Wrapper>
  );
};
```

### Separación de Responsabilidades
- **`.jsx`**: Lógica del componente, props, validaciones
- **`.styles.js`**: Todos los estilos usando styled-components
- **`.stories.jsx`**: Documentación y ejemplos para Storybook
- **`.docs.jsx`**: Documentación extendida (cuando sea necesario)

### Patrón de Composición
Para componentes complejos, usar patrón de composición:

```jsx
// Grid/Grid.jsx
import { GridItem } from "./components/GridItem";
import { GridWrapper } from "./components/GridWrapper";

export const Grid = {
  Container: GridWrapper,
  Item: GridItem,
};

// Uso:
// <Grid.Container>
//   <Grid.Item>Content</Grid.Item>
// </Grid.Container>
```

### Organización del Tema
El directorio `/theme` debe contener archivos específicos:
- `colors.js` - Paleta de colores y tokens
- `typography.js` - Tipos de texto y estilos
- `icons.js` - Iconos del sistema
- `spacing.js` - Sistema de espaciado
- `breakpoints.js` - Puntos de quiebre responsivos
- `shadows.js` - Sombras del sistema
- `animations.js` - Animaciones y transiciones

---

## 💻 CONVENCIONES DE CÓDIGO

### 1. PropTypes Obligatorios
**REGLA**: Todo componente DEBE incluir PropTypes para validación.

```jsx
import PropTypes from "prop-types";

export const Component = (props) => {
  // ... lógica del componente
};

Component.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func,
};
```

### 2. Patrón DEFAULT_PROPS
**REGLA**: Usar constante `DEFAULT_PROPS` para valores por defecto.

```jsx
const DEFAULT_PROPS = {
  children: null,
  margin: "a-0",
  padding: "a-0",
  color: "black",
};

export const Component = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);
  // usar attrs en lugar de props
};
```

### 3. Prefijo $ para Styled-Components
**REGLA**: Todas las props pasadas a styled-components deben tener prefijo `$`.

```jsx
// ✅ CORRECTO
<Wrapper $margin={attrs.margin} $padding={attrs.padding}>

// ❌ INCORRECTO  
<Wrapper margin={attrs.margin} padding={attrs.padding}>
```

### 4. Naming Conventions
- **Componentes**: PascalCase (`Box`, `GridWrapper`, `IconItem`)
- **Props**: camelCase (`margin`, `padding`, `onClick`)
- **Archivos**: PascalCase para componentes, camelCase para utilities
- **Styled Components**: PascalCase (`Wrapper`, `IconItem`, `TextWrapper`)

---

## 🎨 ESTILOS Y STYLING

### 1. Styled-Components como Librería Principal
**REGLA**: Usar exclusivamente styled-components para estilos.

```jsx
// ComponentName.styles.js
import styled, { css } from "styled-components";

export const Wrapper = styled("div")`
  ${(props) => css`
    ${marginProperties(props)}
    ${paddingProperties(props)}
  `}
`;
```

### 2. Sistema de Spacing Unificado
**REGLA**: Usar formato `"direction-value"` para spacing.

- `a-{value}`: all (todos los lados)
- `x-{value}`: horizontal (left + right)
- `y-{value}`: vertical (top + bottom)  
- `t-{value}`: top
- `b-{value}`: bottom
- `l-{value}`: left
- `r-{value}`: right

```jsx
// Ejemplos válidos:
margin="a-0"        // margin: 0px all sides
margin="x-16 y-8"   // margin: 8px 16px
padding="t-4 b-8"   // padding-top: 4px; padding-bottom: 8px
```

### 3. Tokens de Diseño
**REGLA**: Usar siempre tokens del tema, nunca valores hardcodeados.

```jsx
// ✅ CORRECTO
color="primary.main"
color="error.light"
size="major"

// ❌ INCORRECTO
color="#FF0000"
fontSize="16px"
```

### 4. Estructura de Exportación de Estilos
**REGLA**: Exportar styled-components bajo objeto `Styles` o nombre descriptivo.

```jsx
// Icon.styles.js
export const Styles = {
  IconWrapper: styled("div")`...`,
  IconItem: styled("svg")`...`,
};

// O para componentes simples:
export const Wrapper = styled("div")`...`;
```

---

## ⚡ VALIDACIONES Y ERROR HANDLING

### 1. Validación Defensiva
**REGLA**: Validar existencia de tokens/props antes de usar.

```jsx
// Validación de iconos
const iconData = icons[attrs.name];
if (!iconData) { 
  console.warn(`Icon "${attrs.name}" not found`);
  return null;
}

// Validación de typography
if (!typography[attrs.type]) {
  console.warn(`Typography type "${attrs.type}" not found. Using default "bodyRegular".`);
  attrs.type = "bodyRegular";
}
```

### 2. Console.warn para Debugging
**REGLA**: Usar `console.warn` para alertar sobre props incorrectas, con fallbacks seguros.

```jsx
// ✅ CORRECTO: Warning + fallback
if (!validValue) {
  console.warn(`Invalid prop value. Using fallback.`);
  value = fallbackValue;
}

// ❌ INCORRECTO: Error sin fallback
if (!validValue) {
  throw new Error("Invalid prop");
}
```

### 3. Manejo de Props Undefined/Null
**REGLA**: Manejar defensivamente props undefined/null.

```jsx
const DEFAULT_PROPS = {
  children: null,  // Valor por defecto explícito
  onClick: null,   // Funciones pueden ser null
  data: {},        // Objetos deben tener fallback
};
```

---

## 📚 TESTING Y DOCUMENTACIÓN

### 1. Storybook como Documentación Principal
**REGLA**: Todo componente DEBE tener archivo `.stories.jsx`.

```jsx
// Component.stories.jsx
import React from "react";
import { Component } from "./Component";

const meta = {
  title: "Components/Component",
  component: Component,
  argTypes: {
    prop: {
      control: { type: "text" },
      description: "Descripción en español de la prop.",
    },
  },
};

export default meta;
```

### 2. ArgTypes Detallados
**REGLA**: Incluir `description` en español y `control` apropiado para cada prop.

```jsx
argTypes: {
  color: {
    control: { type: "text" },
    description: "Define el color del componente. Acepta tokens de color del tema.",
  },
  size: {
    control: { type: "select" },
    options: ["small", "medium", "large"],
    description: "Especifica el tamaño del componente.",
  },
  onClick: {
    action: "clicked",
    control: { type: "none" },
    description: "Función callback ejecutada al hacer clic.",
  },
}
```

### 3. Documentación en Español
**REGLA**: Toda documentación user-facing debe estar en español.

---

## 🔧 LINTING Y FORMATTING

### Reglas de ESLint Obligatorias

```javascript
// eslint.config.js
rules: {
  "eol-last": ["error", "never"],                    // No newline al final
  "quotes": ["error", "double"],                     // Comillas dobles obligatorias
  "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  "semi": ["error", "always"],                       // Semicolons obligatorios
}
```

### Convenciones de Formato
- **Comillas**: Siempre comillas dobles (`"text"`)
- **Semicolons**: Obligatorios al final de statements
- **Líneas vacías**: Máximo 1 línea vacía consecutiva
- **EOF**: No newline al final del archivo
- **Imports**: Orden alfabético, imports absolutos desde `src`

---

## 📦 DEPENDENCIAS Y TOOLING

### Stack Tecnológico Principal
- **React**: 19+ (obligatorio)
- **Styled-Components**: 6+ (obligatorio) 
- **PropTypes**: Para validación (obligatorio)
- **Storybook**: 9+ para documentación (obligatorio)

### Herramientas de Build
- **Vite**: Como bundler principal
- **Babel**: Para transpilación
- **ESLint**: Para linting con configuración custom

### Deployment
- **GitHub Pages**: Para deploy automático de Storybook
- **NPM Scripts**: Usar scripts definidos en package.json

```bash
npm run start          # Desarrollo con Storybook
npm run build          # Build para producción  
npm run deploy         # Deploy a GitHub Pages
npm run lint           # Ejecutar linting
```

---

## ✅ CHECKLIST DE REVISIÓN

Antes de hacer commit, verificar:

- [ ] Componente tiene archivo `.jsx`, `.styles.js` y `.stories.jsx`
- [ ] PropTypes definidos para todas las props
- [ ] DEFAULT_PROPS constante implementada
- [ ] Props de styled-components tienen prefijo `$`
- [ ] Tokens de tema usados en lugar de valores hardcodeados
- [ ] Sistema de spacing seguido correctamente
- [ ] Validaciones defensivas implementadas
- [ ] Console.warns para debugging cuando corresponda
- [ ] Documentación en Storybook con descriptions en español
- [ ] ESLint sin errores
- [ ] Imports organizados alfabéticamente
- [ ] Props organizados alfabéticamente

---

## 🚫 ANTI-PATRONES A EVITAR

### ❌ No hacer:
```jsx
// Valores hardcodeados
<Component style={{color: "#FF0000", margin: "10px"}} />

// Props sin validación
export const Component = (props) => {
  return <div>{props.children}</div>;
};

// Styled-components sin prefijo $
<Wrapper margin={spacing} color={theme} />

// Lógica de estilos en el componente
const Component = () => {
  const styles = {color: "red"}; // ❌
  return <div style={styles}>Content</div>;
};
```

### ✅ Hacer:
```jsx
// Tokens del tema
<Component color="primary.main" margin="a-16" />

// Props con validación
Component.propTypes = {
  children: PropTypes.node,
};

// Styled-components con prefijo $
<Wrapper $margin={spacing} $color={theme} />

// Estilos separados
const Wrapper = styled.div`
  color: ${props => props.theme.colors.primary.main};
`;
```

---

Este documento debe ser actualizado cuando se introduzcan nuevos patrones o se modifiquen las convenciones existentes. Todos los desarrolladores deben familiarizarse con estas reglas antes de contribuir al proyecto.