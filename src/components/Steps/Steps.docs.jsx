import React from "react";

import { Canvas, Controls, Unstyled } from "@storybook/addon-docs/blocks";

import { Grid } from "../Grid/Grid";
import { Panel } from "../Panel/Panel";
import { Steps } from "./Steps";
import { Text } from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

export const StepsDocs = () => {
  return (
    <ThemeProvider>
      <Unstyled>
        <Text margin="b-16" type="pageTitle">
          Steps
        </Text>

        <Text margin="b-16 x-8">
          El componente Steps es un indicador de progreso visual que muestra la posición actual del usuario dentro de un proceso de múltiples pasos. Utiliza una representación numerada con círculos conectados por líneas para comunicar la secuencia, el estado de avance y las etapas restantes de un flujo de trabajo.
        </Text>

        <Text margin="b-24" type="title">
          Principios
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Claridad de Progreso
          </Text>

          <Text>
            Muestra visualmente cuántos pasos hay en total, en cuál se encuentra el usuario actualmente y cuántos faltan por completar, proporcionando contexto claro del avance.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Estados Diferenciados
          </Text>

          <Text>
            Utiliza estados visuales claros (completado vs. pendiente) mediante cambios de color y estilo para distinguir entre pasos realizados y pasos futuros en el proceso.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Etiquetas Descriptivas
          </Text>

          <Text>
            Soporta etiquetas textuales opcionales para cada paso, permitiendo describir claramente cada etapa del proceso y mejorar la comprensión del flujo.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-32 x-8">
          <Text margin="b-8" type="bodySemibold">
            Composición Modular
          </Text>

          <Text>
            Utiliza internamente un componente Step reutilizable que encapsula la lógica de cada paso individual, facilitando la renderización dinámica de cualquier cantidad de pasos.
          </Text>
        </Panel.Wrapper>

        <Text type="title">
          Propiedades
        </Text>

        <Canvas />

        <Controls />

        <Text margin="b-16" type="title">
          Ejemplos de Uso
        </Text>

        <Text margin="b-8 x-8">
          El componente Steps se adapta a diferentes cantidades de pasos y estados de progreso:
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Panel.Content>
            <Text margin="b-8" type="bodySemibold">
              Proceso con 3 pasos - Primer paso
            </Text>
            <Steps
              labels={["Información", "Confirmación", "Finalizado"]}
              step={1}
              steps={3}
            />
          </Panel.Content>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Panel.Content>
            <Text margin="b-8" type="bodySemibold">
              Proceso con 3 pasos - Segundo paso
            </Text>
            <Steps
              labels={["Información", "Confirmación", "Finalizado"]}
              step={2}
              steps={3}
            />
          </Panel.Content>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Panel.Content>
            <Text margin="b-8" type="bodySemibold">
              Proceso con 3 pasos - Completado
            </Text>
            <Steps
              labels={["Información", "Confirmación", "Finalizado"]}
              step={3}
              steps={3}
            />
          </Panel.Content>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-24 x-8">
          <Panel.Content>
            <Text margin="b-8" type="bodySemibold">
              Proceso con 5 pasos - Paso 3 de 5
            </Text>
            <Steps
              labels={["Vendedor", "Productos", "Envío", "Pago", "Fin"]}
              step={3}
              steps={5}
            />
          </Panel.Content>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Sin Etiquetas
        </Text>

        <Text margin="b-8 x-8">
          El componente también puede usarse sin etiquetas cuando el contexto es claro:
        </Text>

        <Panel.Wrapper margin="b-24 x-8">
          <Panel.Content>
            <Steps
              step={2}
              steps={4}
            />
          </Panel.Content>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Casos de Uso Comunes
        </Text>

        <Grid.Container margin="b-24">
          <Grid.Item padding="a-16" xs={12} md={6}>
            <Panel.Wrapper>
              <Panel.Content>
                <Text margin="b-8" type="bodySemibold">
                  Formularios Multi-paso
                </Text>
                <Text margin="b-16" type="bodyRegular">
                  Guiar al usuario a través de formularios extensos divididos en secciones lógicas (datos personales, dirección, pago, confirmación).
                </Text>
              </Panel.Content>
            </Panel.Wrapper>
          </Grid.Item>

          <Grid.Item padding="a-16" xs={12} md={6}>
            <Panel.Wrapper>
              <Panel.Content>
                <Text margin="b-8" type="bodySemibold">
                  Procesos de Compra
                </Text>
                <Text margin="b-16" type="bodyRegular">
                  Mostrar el progreso en checkout de e-commerce (carrito → envío → pago → confirmación).
                </Text>
              </Panel.Content>
            </Panel.Wrapper>
          </Grid.Item>

          <Grid.Item padding="a-16" xs={12} md={6}>
            <Panel.Wrapper>
              <Panel.Content>
                <Text margin="b-8" type="bodySemibold">
                  Onboarding de Usuarios
                </Text>
                <Text margin="b-16" type="bodyRegular">
                  Comunicar el avance durante procesos de registro o configuración inicial de cuenta.
                </Text>
              </Panel.Content>
            </Panel.Wrapper>
          </Grid.Item>

          <Grid.Item padding="a-16" xs={12} md={6}>
            <Panel.Wrapper>
              <Panel.Content>
                <Text margin="b-8" type="bodySemibold">
                  Configuración de Productos
                </Text>
                <Text margin="b-16" type="bodyRegular">
                  Indicar progreso en configuradores personalizados (selección de modelo → características → accesorios → resumen).
                </Text>
              </Panel.Content>
            </Panel.Wrapper>
          </Grid.Item>
        </Grid.Container>

        <Text margin="b-16" type="title">
          Accesibilidad
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Indicadores Visuales Claros
          </Text>
          
          <Text margin="b-8">
            Utiliza diferencias de color, tamaño y estilo para distinguir claramente entre pasos completados y pendientes, asegurando que sea comprensible sin depender únicamente del color.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Etiquetas Descriptivas
          </Text>
          
          <Text margin="b-8">
            Las etiquetas textuales proporcionan contexto claro para cada paso, beneficiando a todos los usuarios especialmente aquellos que usan lectores de pantalla.
          </Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            Semántica Apropiada
          </Text>
          
          <Text margin="b-8">
            Considera agregar atributos ARIA apropiados como aria-label=&quot;Paso 2 de 5: Productos&quot; o role=&quot;navigation&quot; aria-label=&quot;Progreso del formulario&quot; para mejorar la experiencia con tecnologías asistivas.
          </Text>
        </Panel.Wrapper>

        <Text margin="b-16" type="title">
          Buenas Prácticas
        </Text>

        <Panel.Wrapper margin="b-16 x-8">
          <Text margin="b-8" type="bodySemibold">
            ✅ Recomendado
          </Text>
          
          <Text margin="b-4">&bull; Usar entre 3 y 7 pasos para mantener claridad visual</Text>
          <Text margin="b-4">&bull; Proporcionar etiquetas descriptivas y concisas para cada paso</Text>
          <Text margin="b-4">&bull; Mantener el componente visible en todo momento durante el proceso</Text>
          <Text margin="b-4">&bull; Usar nombres de pasos que describan acciones o contenido (&quot;Envío&quot;, &quot;Pago&quot;)</Text>
          <Text margin="b-4">&bull; Actualizar el estado inmediatamente cuando el usuario complete un paso</Text>
          <Text margin="b-4">&bull; Combinar con navegación que permita volver a pasos anteriores cuando sea apropiado</Text>
          <Text>&bull; Asegurarse de que todos los pasos sean necesarios para el proceso</Text>
        </Panel.Wrapper>

        <Panel.Wrapper margin="x-8">
          <Text margin="b-8" type="bodySemibold">
            ❌ Evitar
          </Text>
          
          <Text margin="b-4">&bull; No usar más de 7-8 pasos (dividir en procesos más pequeños si es necesario)</Text>
          <Text margin="b-4">&bull; No omitir etiquetas en procesos complejos donde el contexto no es obvio</Text>
          <Text margin="b-4">&bull; No permitir navegación libre a pasos futuros que requieren completar pasos previos</Text>
          <Text margin="b-4">&bull; No usar etiquetas demasiado largas que rompan el diseño</Text>
          <Text margin="b-4">&bull; No cambiar el número total de pasos durante el proceso</Text>
          <Text margin="b-4">&bull; No usar el componente para procesos que no son lineales o secuenciales</Text>
          <Text>&bull; No ocultar el indicador de pasos en dispositivos móviles (considerar versión compacta)</Text>
        </Panel.Wrapper>
      </Unstyled>
    </ThemeProvider>
  );
};