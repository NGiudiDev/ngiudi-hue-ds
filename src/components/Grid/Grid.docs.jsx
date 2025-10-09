import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Panel } from "../Panel/Panel";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const GridDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Grid
        </Text>

        <Text margin="b-16 x-8">
          El sistema Grid proporciona un layout flexbox responsivo basado en un sistema de 12 columnas. Utiliza el patrón de composición con <Text as="span" type="bodySemibold">Grid.Container</Text> y <Text as="span" type="bodySemibold">Grid.Item</Text> para crear layouts adaptativos y consistentes.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Mobile First
          </Text>

          <Text>
            Los breakpoints están diseñados con enfoque mobile-first, comenzando desde dispositivos pequeños hacia pantallas más grandes.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Flexbox Nativo
          </Text>

          <Text>
            Utiliza las propiedades nativas de CSS Flexbox para un rendimiento óptimo y comportamiento predecible.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Composición Clara
          </Text>

          <Text>
            El patrón Container/Item hace explícita la relación padre-hijo y mejora la legibilidad del código.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Componentes
        </Text>

        <Text margin="b-16" type="bodySemibold">
          Grid.Container
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8">
            Contenedor principal que establece el contexto flexbox y contiene todos los Grid.Item.
          </Text>
          
          <Text type="captionSemibold" margin="b-4">Props disponibles:</Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">children</Text>: Elementos Grid.Item
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">margin</Text>: Espaciado externo del container
          </Text>
          
          <Text type="captionRegular">&bull;
            <Text as="span" type="captionSemibold">padding</Text>: Espaciado interno del container
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="bodySemibold">
          Grid.Item
        </Text>

        <Panel.Wrapper margin="b-24 x-8">
          <Text margin="b-8">
            Elemento individual del grid que define el ancho en cada breakpoint y contiene el contenido.
          </Text>
          
          <Text type="captionSemibold" margin="b-4">
            Props disponibles:
          </Text>

          <Text type="captionRegular" margin="b-2">
            &bull;<Text as="span" type="captionSemibold">xs, sm, md, lg, xl</Text>: Ancho en columnas (1-12) o &quot;auto&quot;
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">align</Text>: Alineación del texto (&quot;left&quot;, &quot;center&quot;, &quot;right&quot;, &quot;justify&quot;)
          </Text>
          
          <Text type="captionRegular" margin="b-2">
            &bull; <Text as="span" type="captionSemibold">padding</Text>: Espaciado interno del item
          </Text>
          
          <Text type="captionRegular">
            &bull; <Text as="span" type="captionSemibold">children</Text>: Contenido del item
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
            &bull; Siempre define la prop xs como fallback para las pantallas más pequeñas
          </Text>
          
          <Text margin="b-4">
            &bull; Usa padding en Grid.Item en lugar de margin para el espaciado
          </Text>
          
          <Text margin="b-4">
            &bull; Combina Grid con el componente Box para un control adicional del layout
          </Text>
          
          <Text margin="b-4">
            &bull; Mantén el contenido de Grid.Item semántico y accesible
          </Text>
          
          <Text>
            &bull; Prueba los layouts en todos los breakpoints definidos
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">
            &bull; No anidar Grid.Container dentro de Grid.Item directamente
          </Text>
          
          <Text margin="b-4">
            &bull; No usar valores de columna que excedan 12
          </Text>
          
          <Text margin="b-4">
            &bull; No aplicar estilos CSS directos al Grid (usar Box o componentes styled)
          </Text>
          
          <Text margin="b-4">
            &bull; No omitir la prop xs (puede causar layouts rotos en móvil)
          </Text>
          
          <Text>
            &bull; No usar Grid para layouts de una sola columna simple (usar Box en su lugar)
          </Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};