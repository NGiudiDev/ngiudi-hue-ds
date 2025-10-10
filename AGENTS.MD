# AGENTS.MD - Guía de Desarrollo para ngiudi-hue-ds

## 📋 Información General

Este documento contiene las reglas de programación, convenciones y guías para desarrolladores que trabajen en el Design System **ngiudi-hue-ds**. Todas las reglas han sido deducidas del análisis del código existente y deben ser seguidas para mantener la consistencia del proyecto.

**Última actualización**: Octubre 2025

---

## 🏗️ ARQUITECTURA Y ESTRUCTURA

### Estructura de Componentes
Cada componente debe seguir esta estructura obligatoria:

```
src/components/ComponentName/
├── ComponentName.jsx          # Componente principal
├── ComponentName.styles.js    # Estilos con styled-components
├── ComponentName.stories.jsx  # Documentación Storybook con argTypes
└── ComponentName.docs.jsx     # Documentación extendida (obligatorio)
```

**Ejemplo:**
```jsx
// Box/Box.jsx
import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

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

Box.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};
```

### Separación de Responsabilidades
- **`.jsx`**: Lógica del componente, props, validaciones
- **`.styles.js`**: Todos los estilos usando styled-components
- **`.stories.jsx`**: Configuración de Storybook, argTypes y playground
- **`.docs.jsx`**: Documentación completa y detallada del componente

### Patrón de Composición
Para componentes complejos, usar patrón de composición:

```jsx
// Panel/Panel.jsx
import { PanelContent } from "./components/PanelContent";
import { PanelFooter } from "./components/PanelFooter";
import { PanelWrapper } from "./components/PanelWrapper";

export const Panel = {
  Content: PanelContent,
  Footer: PanelFooter,
  Wrapper: PanelWrapper,
};

// Uso:
// <Panel.Wrapper>
//   <Panel.Content>Content</Panel.Content>
//   <Panel.Footer>Footer</Panel.Footer>
// </Panel.Wrapper>
```

### Organización del Tema
El directorio `/theme` debe contener archivos específicos:
- `colors.js` - Paleta de colores y tokens
- `typography.js` - Tipos de texto y estilos
- `icons.js` - Iconos del sistema
- `breakpoints.js` - Puntos de quiebre responsivos
- `shadows.js` - Sombras del sistema
- `animations.js` - Animaciones y transiciones

### ThemeProvider como Wrapper Global
**REGLA**: Usar ThemeProvider para envolver toda la aplicación y proporcionar acceso a tokens del tema.

```jsx
// App.jsx
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

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
  color: PropTypes.string,
};
```

### 2. Patrón DEFAULT_PROPS con Lodash Merge
**REGLA**: Usar constante `DEFAULT_PROPS` y `merge` de lodash para combinar props.

```jsx
import { merge } from "lodash";

const DEFAULT_PROPS = {
  children: null,
  margin: "a-0",
  padding: "a-0",
  color: "primary.main",
  textProps: {
    color: "white.main",
    type: "captionSemibold",
  },
};

export const Component = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);
  // usar attrs en lugar de props
};
```

**Ventajas de merge vs spread operator:**
- Merge profundo de objetos anidados (ej: `textProps`)
- Mejor manejo de propiedades complejas
- Más predecible con configuraciones avanzadas

### 3. Prefijo $ para Styled-Components
**REGLA**: Todas las props pasadas a styled-components deben tener prefijo `$`, siempre y cuando no sean html tags.

```jsx
// ✅ CORRECTO
<Wrapper $margin={attrs.margin} $padding={attrs.padding} $color={attrs.color}>

// ❌ INCORRECTO  
<Wrapper margin={attrs.margin} padding={attrs.padding} color={attrs.color}>
```

### 4. Naming Conventions
- **Componentes**: PascalCase (`Badge`, `GridWrapper`, `PanelFooter`)
- **Props**: camelCase (`margin`, `padding`, `onClick`, `textProps`)
- **Archivos**: PascalCase para componentes, camelCase para utilities
- **Styled Components**: PascalCase (`Wrapper`, `IconItem`, `Divider`)
- **Exports de docs**: PascalCase + "Docs" suffix (`BadgeDocs`, `DividerDocs`)

---

## 🎨 ESTILOS Y STYLING

### 1. Styled-Components como Librería Principal
**REGLA**: Usar exclusivamente styled-components para estilos.

```jsx
// ComponentName.styles.js
import styled from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";
import { getColorValue } from "../../utils/colors";

const Wrapper = styled("div")`
  background-color: ${(props) => getColorValue(props.theme.colors, props.$color)};
  border-radius: 4px;
  
  ${(props) => marginProperties(props)}
  ${(props) => paddingProperties(props)}
`;

export const Styles = {
  Wrapper,
};
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
margin="l-32 r-8 y-8" // combinaciones complejas
```

### 3. Tokens de Diseño
**REGLA**: Usar siempre tokens del tema, nunca valores hardcodeados.

```jsx
// ✅ CORRECTO
color="primary.main"
color="error.light"
color="black.mediumEmphasis"
textProps={{ type: "bodyRegular" }}

// ❌ INCORRECTO
color="#FF0000"
fontSize="16px"
style={{ color: "red" }}
```

### 4. Estructura de Exportación de Estilos
**REGLA**: Exportar styled-components bajo objeto `Styles` o nombre descriptivo.

```jsx
// Badge.styles.js
export const Styles = {
  Wrapper: styled("div")`...`,
};

// Divider.styles.js (componente simple)
const Divider = styled("hr")`...`;

export const Styles = {
  Divider,
};
```

### 5. Utilidades de Spacing y Color
**REGLA**: Usar las utilidades del sistema para spacing y colores.

```jsx
import { marginProperties, paddingProperties } from "../../utils/spacing";
import { getColorValue } from "../../utils/colors";

// En styled-components:
${(props) => marginProperties(props)}
${(props) => paddingProperties(props)}

background-color: ${(props) => getColorValue(props.theme.colors, props.$color)};
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
  textProps: {},   // Objetos deben tener fallback
  data: {},        // Arrays/objetos siempre con valor por defecto
};
```

---

## 📚 TESTING Y DOCUMENTACIÓN

### 1. Storybook como Documentación Principal
**REGLA**: Todo componente DEBE tener archivo `.stories.jsx` con argTypes completos.

```jsx
// Component.stories.jsx
import React from "react";

import { ComponentDocs } from "./Component.docs";
import { Component } from "./Component";

const meta = {
  argTypes: {
    children: {
      control: { type: "text" },
      description: "El contenido que se mostrará dentro del componente.",
    },
    color: {
      control: { type: "text" },
      description: "Define el color del componente. Acepta tokens de color del tema (ej: 'primary.main', 'error.light').",
    },
    margin: {
      control: { type: "text" },
      description: "Establece el margen alrededor del componente. Acepta tokens de espaciado del sistema (ej: 'a-0', 'x-8 y-4').",
    },
  },
  component: Component,
  parameters: {
    docs: {
      page: ComponentDocs,
    },
  },
  tags: ["autodocs"],
  title: "Components/Component",
};

// Playground interactivo para probar todas las props
export const Playground = {
  args: {
    children: "Content",
    color: "primary.main",
    margin: "a-0",
  },
  render: (args) => (
    <Component {...args} />
  ),
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
  textProps: {
    control: { type: "object" },
    description: "Propiedades que se pasan al componente Text interno.",
  },
}
```

### 3. Documentación Extendida (.docs.jsx)
**REGLA**: Todo componente DEBE tener documentación extendida con estructura consistente.

```jsx
// Component.docs.jsx
import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Box } from "../Box/Box";
import { Grid } from "../Grid/Grid";
import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";
import { Component } from "./Component";

export const ComponentDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Component
        </Text>

        <Text margin="b-16 x-8">
          Descripción completa del componente y su propósito.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Principio 1
          </Text>
          <Text>
            Explicación del principio.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />
        <Controls />

        <Text margin="b-16" type="title">
          Variantes y Ejemplos
        </Text>

        {/* Ejemplos visuales con código */}

        <Text margin="b-16" type="title">
          Casos de Uso Comunes
        </Text>

        {/* Casos de uso reales */}

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          <Text margin="b-4">&bull; Práctica recomendada 1</Text>
          <Text margin="b-4">&bull; Práctica recomendada 2</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          <Text margin="b-4">&bull; Anti-patrón 1</Text>
          <Text margin="b-4">&bull; Anti-patrón 2</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};
```

**Estructura de la documentación extendida:**
1. **Título y descripción**: Introducción al componente
2. **Principios**: Fundamentos de diseño y comportamiento
3. **Propiedades**: Canvas y Controls de Storybook
7. **Accesibilidad**: Consideraciones de a11y
8. **Buenas prácticas**: Recomendaciones y anti-patrones

### 4. Documentación en Español
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
  "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
}
```

### Convenciones de Formato
- **Comillas**: Siempre comillas dobles (`"text"`)
- **Comillas en JSX**: Escapar con entidades HTML (`&ldquo;`, `&rdquo;`, `&quot;`)
- **Semicolons**: Obligatorios al final de statements
- **Líneas vacías**: Máximo 1 línea vacía consecutiva
- **EOF**: No newline al final del archivo
- **Imports**: Orden alfabético, con líneas vacías entre grupos

**Orden de imports:**
```jsx
// 1. React y PropTypes
import React from "react";
import PropTypes from "prop-types";

// 2. Componentes internos
import { Text } from "../Text/Text";

// 3. Estilos
import { Styles } from "./Component.styles";

// 2. Utils
import { merge } from "lodash";

// 5. Constantes
import { colors } from "../../theme/colors";
```

---

## 📦 DEPENDENCIAS Y TOOLING

### Stack Tecnológico Principal
- **React**: 19+ (obligatorio)
- **Styled-Components**: 6+ (obligatorio) 
- **Lodash**: 4.17+ (obligatorio para merge)
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
npm run start          # Desarrollo con Storybook (puerto 6006)
npm run docs           # Storybook en modo docs
npm run build          # Build para producción  
npm run deploy         # Deploy a GitHub Pages
npm run lint           # Ejecutar linting
npm run build-storybook # Build de Storybook estático
```

---

## 🎯 COMPONENTES DEL DESIGN SYSTEM

### Componentes Disponibles

#### Primitivos
- **Badge**: Etiquetas y estados visuales
- **Box**: Contenedor básico con spacing
- **Divider**: Separador horizontal con colores del tema
- **Icon**: Sistema de iconos SVG
- **Text**: Sistema tipográfico con variantes

#### Layouts
- **Grid**: Sistema de grillas responsivo (Container + Item)
- **Panel**: Contenedores elevados (Wrapper + Content + Footer)

#### Providers
- **ThemeProvider**: Proveedor de tema global

### Patrón de Uso Común

```jsx
import { Box } from "./components/Box/Box";
import { Text } from "./components/Text/Text";
import { Badge } from "./components/Badge/Badge";
import { Grid } from "./components/Grid/Grid";
import { Panel } from "./components/Panel/Panel";
import { Divider } from "./components/Divider/Divider";
import { Icon } from "./components/Icon/Icon";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Grid.Container>
        <Grid.Item xs={12} md={8}>
          <Panel.Wrapper>
            <Panel.Content>
              <Text type="title" margin="b-8">
                Título
              </Text>
              <Badge color="success.main" margin="b-16">
                Activo
              </Badge>
              <Divider margin="y-16" />
              <Text type="bodyRegular">
                Contenido del panel
              </Text>
            </Panel.Content>
          </Panel.Wrapper>
        </Grid.Item>
      </Grid.Container>
    </ThemeProvider>
  );
}
```

---

## ✅ CHECKLIST DE REVISIÓN

Antes de hacer commit, verificar:

- [ ] Componente tiene archivo `.jsx`, `.styles.js`, `.stories.jsx` y `.docs.jsx`
- [ ] PropTypes definidos para todas las props
- [ ] DEFAULT_PROPS constante implementada
- [ ] Usa `merge` de lodash para combinar DEFAULT_PROPS y props
- [ ] Props de styled-components tienen prefijo `$`
- [ ] Tokens de tema usados en lugar de valores hardcodeados
- [ ] Sistema de spacing seguido correctamente
- [ ] Validaciones defensivas implementadas
- [ ] Console.warns para debugging cuando corresponda
- [ ] Documentación en Storybook con argTypes completos
- [ ] Documentación extendida (.docs.jsx) con estructura consistente
- [ ] Descripciones en español en argTypes y documentación
- [ ] ESLint sin errores
- [ ] Imports organizados en el orden correcto
- [ ] Props organizados alfabéticamente
- [ ] Comillas escapadas correctamente en JSX
- [ ] No hay newline al final de archivos

---

## 🚫 ANTI-PATRONES A EVITAR

### ❌ No hacer:
```jsx
// Valores hardcodeados
<Component style={{color: "#FF0000", margin: "10px"}} />

// Spread operator en lugar de merge
const attrs = { ...DEFAULT_PROPS, ...props };

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

// Documentación incompleta
// Falta .docs.jsx o argTypes vacíos

// Imports desordenados
import { Styles } from "./Component.styles";
import React from "react";
import { merge } from "lodash";
```

### ✅ Hacer:
```jsx
// Tokens del tema
<Component color="primary.main" margin="a-16" />

// Merge de lodash
import { merge } from "lodash";
const attrs = merge({}, DEFAULT_PROPS, props);

// Props con validación
Component.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

// Styled-components con prefijo $
<Wrapper $margin={spacing} $color={theme} />

// Estilos separados
const Wrapper = styled.div`
  color: ${props => getColorValue(props.theme.colors, props.$color)};
`;

// Documentación completa
// .jsx + .styles.js + .stories.jsx + .docs.jsx

// Imports ordenados correctamente
import React from "react";
import PropTypes from "prop-types";
import { merge } from "lodash";

import { Text } from "../Text/Text";

import { Styles } from "./Component.styles";
```

---

## 📖 RECURSOS ADICIONALES

### Documentación de Referencia
- [React 19 Docs](https://react.dev/)
- [Styled-Components Docs](https://styled-components.com/)
- [Storybook 9 Docs](https://storybook.js.org/)
- [Lodash Docs](https://lodash.com/docs/)

### Herramientas Útiles
- **Storybook**: `npm run start` - Puerto 6006
- **Lint**: `npm run lint` - Verificar errores
- **Build**: `npm run build` - Generar distribución

---

Este documento debe ser actualizado cuando se introduzcan nuevos patrones o se modifiquen las convenciones existentes. Todos los desarrolladores deben familiarizarse con estas reglas antes de contribuir al proyecto.