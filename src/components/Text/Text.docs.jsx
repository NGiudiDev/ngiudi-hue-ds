import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Box } from "../Box/Box";
import { Grid } from "../Grid/Grid";
import { Panel } from "../Panel/Panel";
import { Text } from "./Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

import { typography } from "../../theme/typography";

export const TextDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Text
        </Text>

        <Text margin="b-16 x-8">
          El componente Text es la base tipográfica del Design System. Proporciona una API consistente para renderizar texto con diferentes estilos, colores, alineaciones y elementos HTML semánticos, garantizando coherencia visual y accesibilidad en toda la aplicación.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Consistencia Tipográfica
          </Text>

          <Text>
            Utiliza un sistema de tokens tipográficos predefinidos que garantizan coherencia visual en todos los textos de la aplicación.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Semántica HTML
          </Text>

          <Text>
            Permite especificar el elemento HTML correcto (h1, h2, p, span, label) manteniendo la separación entre estilo visual y significado semántico.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Accesibilidad
          </Text>

          <Text>
            Soporta propiedades específicas como htmlFor para labels y elementos semánticos apropiados para lectores de pantalla.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Flexibilidad Controlada
          </Text>

          <Text>
            Ofrece opciones de personalización (color, alineación, decoración) dentro de un marco estructurado que mantiene la coherencia del sistema.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Sistema Tipográfico
        </Text>

        <Text margin="b-16 x-8">
          El componente Text utiliza un sistema tipográfico basado en tokens que define diferentes escalas y pesos para crear jerarquía visual clara.
        </Text>

        <Panel.Wrapper margin="b-24 x-8">
          <Text margin="b-16" type="bodySemibold">
            Escala Tipográfica Disponible
          </Text>
          
          <Grid.Container>
            {Object.entries(typography).map(([key, value]) => (
              <Grid.Item key={key} xs={12} sm={6} md={4}>
                <Box margin="b-16" padding="a-12">
                  <Text type="bodySemibold" margin="b-8">
                    {key}
                  </Text>
                  
                  <Text type="captionRegular" color="grey.main" margin="b-4">
                    Tamaño: {value.size}
                  </Text>
                  
                  <Text type="captionRegular" color="grey.main" margin="b-4">
                    Peso: {value.weight}
                  </Text>

                  <Text type="captionRegular" color="grey.main">
                    Altura de línea: {value.lineHeight}
                  </Text>
                </Box>
              </Grid.Item>
            ))}
          </Grid.Container>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Elementos HTML Semánticos
        </Text>

        <Text margin="b-16 x-8">
          La prop <Text as="span" type="bodySemibold">as</Text> permite especificar el elemento HTML apropiado, separando la semántica del estilo visual.
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-16" type="bodySemibold">
            Elementos de Encabezado
          </Text>
          
          <Box margin="b-12">
            <Text as="pre" margin="b-4">
              {"<Text as=\"h1\" type=\"pageTitle\">Título Principal</Text>"}
            </Text>
            
            <Text type="captionRegular" color="grey.main">
              Para títulos principales de página
            </Text>
          </Box>
          
          <Box margin="b-12">
            <Text as="pre" margin="b-4">
              {"<Text as=\"h2\" type=\"title\">Título de Sección</Text>"}
            </Text>

            <Text type="captionRegular" color="grey.main">
              Para títulos de secciones importantes
            </Text>
          </Box>
          
          <Box margin="b-12">
            <Text as="pre" margin="b-4">
              {"<Text as=\"h3\" type=\"subtitle\">Subtítulo</Text>"}
            </Text>
            
            <Text type="captionRegular" color="grey.main">
              Para subsecciones y títulos menores
            </Text>
          </Box>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-16" type="bodySemibold">
            Elementos de Contenido
          </Text>
          
          <Box margin="b-12">
            <Text as="pre" margin="b-4">
              {"<Text as=\"p\" type=\"bodyRegular\">Párrafo</Text>"}
            </Text>
            
            <Text type="captionRegular" color="grey.main">
              Para bloques de texto y contenido principal
            </Text>
          </Box>
          
          <Box margin="b-12">
            <Text as="pre" margin="b-4">
              {"<Text as=\"span\" type=\"bodySemibold\">Texto inline</Text>"}
            </Text>
            
            <Text type="captionRegular" color="grey.main">
              Para texto dentro de línea o destacados
            </Text>
          </Box>
          
          <Box>
            <Text as="pre" margin="b-4">
              {"<Text as=\"label\" htmlFor=\"input-id\">Etiqueta</Text>"}
            </Text>
            
            <Text type="captionRegular" color="grey.main">
              Para etiquetas de formularios con asociación accesible
            </Text>
          </Box>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Sistema de Colores
        </Text>

        <Text margin="b-16 x-8">
          El componente Text soporta todos los tokens de color del tema, permitiendo coherencia visual con el resto del sistema.
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-16" type="bodySemibold">
            Uso de Tokens de Color
          </Text>
          
          <Box margin="b-12">
            <Text as="pre" margin="b-4">
              {"<Text color=\"primary.main\">Texto primario</Text>"}
            </Text>
            
            <Text type="captionRegular" color="grey.main">
              Usa tokens del tema para consistencia
            </Text>
          </Box>
          
          <Box margin="b-12">
            <Text as="pre" margin="b-4">
              {"<Text color=\"error.light\">Texto de error</Text>"}
            </Text>
            
            <Text type="captionRegular" color="grey.main">
              Accede a variantes específicas de color
            </Text>
          </Box>
          
          <Box>
            <Text as="pre" margin="b-4">
              {"<Text color=\"black.mediumEmphasis\">Texto secundario</Text>"}
            </Text>
            
            <Text type="captionRegular" color="grey.main">
              Para texto de menor jerarquía visual
            </Text>
          </Box>
        </Panel.Wrapper>

        <Text margin="b-16" type="bodySemibold">
          Formularios Accesibles
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8">
            Para crear formularios con etiquetas correctamente asociadas.
          </Text>

          <Text as="pre" margin="b-8">
  {`<Text as="label" 
        type="bodySemibold" 
        htmlFor="email-input"
        margin="b-8">
    Correo Electrónico
  </Text>
  
  <input 
    id="email-input" 
    type="email" 
    placeholder="tu@email.com" 
  />

  <Text as="label" 
        type="bodySemibold" 
        htmlFor="message-input"
        margin="b-8 t-16">
    Mensaje
  </Text>

  <textarea 
    id="message-input" 
    placeholder="Escribe tu mensaje..."
  />`}
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="bodySemibold">
          Contenido Editorial
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8">
            Para artículos, blogs y contenido largo con tipografía optimizada para lectura.
          </Text>

          <Text as="pre" margin="b-8">
  {`<article>
    <Text as="h1" type="pageTitle" margin="b-16">
      Título del Artículo
    </Text>
    
    <Text type="captionRegular" 
          color="grey.main" 
          margin="b-24">
      Publicado el 15 de Octubre, 2024
    </Text>
    
    <Text as="p" type="bodyRegular" margin="b-16">
      Primer párrafo del contenido...
    </Text>
    
    <Text as="h2" type="title" margin="t-32 b-16">
      Sección del Artículo
    </Text>
    
    <Text as="p" type="bodyRegular" margin="b-16">
      Más contenido del artículo...
    </Text>
  </article>`}
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
            &bull; Usar tokens de color del tema en lugar de valores hardcodeados
          </Text>
          
          <Text margin="b-4">
            &bull; Especificar elementos HTML semánticamente correctos con la prop as
          </Text>
          
          <Text margin="b-4">
            &bull; Usar htmlFor cuando as=&quot;label&quot; para asociación accesible
          </Text>
          
          <Text margin="b-4">
            &bull; Mantener jerarquía tipográfica clara (pageTitle &gt; title &gt; subtitle)
          </Text>
          
          <Text margin="b-4">
            &bull; Usar tipos específicos según el contexto (bodyRegular para párrafos, captionRegular para metadatos)
          </Text>
          
          <Text>
            &bull; Aplicar espaciado consistente usando el sistema de tokens
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">
            &bull; No usar colores hardcodeados (#FF0000) en lugar de tokens del tema
          </Text>
          
          <Text margin="b-4">
            &bull; No usar elementos semánticamente incorrectos (div cuando debería ser h1)
          </Text>
          
          <Text margin="b-4">
            &bull; No omitir htmlFor en labels de formularios
          </Text>
          
          <Text margin="b-4">
            &bull; No saltar niveles de heading (h1 directamente a h3)
          </Text>
          
          <Text margin="b-4">
            &bull; No usar tipos tipográficos inconsistentes para el mismo propósito
          </Text>
          
          <Text>
            &bull; No aplicar estilos CSS directos al componente Text
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Consideraciones de Accesibilidad
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Jerarquía de Encabezados
          </Text>
          
          <Text margin="b-4">
            &bull; Usar h1, h2, h3... en orden secuencial
          </Text>
          
          <Text margin="b-4">
            &bull; No saltar niveles de heading
          </Text>
          
          <Text>
            &bull; Una sola etiqueta h1 por página
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Formularios
          </Text>
          
          <Text margin="b-4">
            &bull; Siempre usar htmlFor con elements label
          </Text>
          
          <Text margin="b-4">
            &bull; Asociar correctamente labels con inputs</Text>
          
          <Text>
            &bull; Proporcionar instrucciones claras en labels
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            Contraste y Legibilidad
          </Text>
          
          <Text margin="b-4">
            &bull; Los tokens de color del tema cumplen estándares de contraste
          </Text>
          
          <Text margin="b-4">
            &bull; Usar color apropiado según la importancia del contenido
          </Text>
          
          <Text>
            &bull; Evitar texto en colores muy claros para contenido principal
          </Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};