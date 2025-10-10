import React from "react";

import { Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "./ThemeProvider";

export const ThemeProviderDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          ThemeProvider
        </Text>

        <Text margin="b-16 x-8">
          ThemeProvider es el componente proveedor de tema que debe envolver toda la aplicación para proporcionar acceso a los tokens de diseño del Design System. Utiliza el ThemeProvider de styled-components para hacer disponibles colores, tipografía, espaciado, sombras y otros elementos del tema a todos los componentes.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Proveedor Central
          </Text>

          <Text>
            Actúa como fuente única de verdad para todos los tokens de diseño, garantizando consistencia en toda la aplicación.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Acceso Universal
          </Text>

          <Text>
            Proporciona acceso a los tokens del tema a través de props.theme en todos los styled-components y componentes del sistema.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Optimización de Recursos
          </Text>

          <Text>
            Incluye preconexiones a Google Fonts y optimizaciones de carga para mejorar el rendimiento de la aplicación.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estructura Sistemática
          </Text>

          <Text>
            Organiza los tokens en categorías lógicas (colores, tipografía, espaciado) para facilitar su uso y mantenimiento.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Controls />

        <Text margin="b-16" type="title">
          Configuración e Instalación
        </Text>

        <Text margin="b-16" type="bodySemibold">
          Configuración Básica
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8">
            ThemeProvider debe envolver el componente raíz de tu aplicación para proporcionar acceso global al tema.
          </Text>

          <Text as="pre" margin="b-8">
  {`  import React from "react";

  import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
  import { MainContent } from "./components/MainContent";

  function App() {
    return (
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    );
  }

  export default App;
  `}
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="bodySemibold">
          Acceso al Tema en Styled-Components
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8">
            Una vez configurado ThemeProvider, todos los styled-components tienen acceso automático al tema a través de props.
          </Text>

          <Text as="pre" margin="b-8">
  {`import styled from "styled-components";

  const StyledComponent = styled.div\`
  /* Acceso a colores */
  color: \${props => props.theme.colors.primary.main};
  background-color: \${props => props.theme.colors.white.surface};

  /* Acceso a tipografía */
  font-size: \${props => props.theme.typography.title.size};
  font-weight: \${props => props.theme.typography.title.weight};
  line-height: \${props => props.theme.typography.title.lineHeight};

  /* Acceso a sombras */
  box-shadow: \${props => props.theme.shadows.level2};

  /* Media queries con breakpoints */
  @media (min-width: \${props => props.theme.breakpoints.md}) {
    font-size: \${props => props.theme.typography.pageTitle.size};
  }
  \`;`}
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="bodySemibold">
          Uso con Hook useTheme
        </Text>

        <Panel.Wrapper margin="b-24 x-8">
          <Text margin="b-8">
            Para acceder al tema en componentes funcionales sin styled-components.
          </Text>

          <Text as="pre" margin="b-8">
  {`import React from "react";
  import { useTheme } from "styled-components";

  const MyComponent = () => {
  const theme = useTheme();

  const dynamicStyles = {
    color: theme.colors.primary.main,
    fontSize: theme.typography.bodyRegular.size,
    boxShadow: theme.shadows.level1,
  };

  return (
    <div style={dynamicStyles}>
      Contenido con estilos del tema
    </div>
  );
  };`}
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          
          <Text margin="b-4">
            &bull; Envolver toda la aplicación con ThemeProvider en el componente raíz
          </Text>
          
          <Text margin="b-4">
            &bull; Usar tokens del tema en lugar de valores hardcodeados
          </Text>
          
          <Text margin="b-4">
            &bull; Acceder al tema a través de props.theme en styled-components
          </Text>
          
          <Text margin="b-4">
            &bull; Mantener los archivos de tema organizados por categoría
          </Text>
          
          <Text margin="b-4">
            &bull; Documentar tokens personalizados cuando extendas el tema
          </Text>
          
          <Text>
            &bull; Usar useTheme hook para acceso al tema en componentes funcionales
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">
            &bull; No anidar múltiples ThemeProvider sin propósito específico
          </Text>
          
          <Text margin="b-4">
            &bull; No acceder directamente a archivos de tema fuera de ThemeProvider
          </Text>
          
          <Text margin="b-4">
            &bull; No usar valores hardcodeados cuando existan tokens equivalentes
          </Text>
          
          <Text margin="b-4">
            &bull; No modificar el objeto tema directamente en tiempo de ejecución
          </Text>
          
          <Text>
            &bull; No omitir ThemeProvider en aplicaciones que usan el Design System
          </Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};