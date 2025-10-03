//import React from "react";

//import { ThemeDS } from "../ThemeDS/ThemeDS";
import { Text } from "../Text/Text";

const meta = {
  argTypes: {
    align: {
      control: { type: "select" },
      description: "Define la alineación del texto.",
      options: ["center", "end", "start"],
    },
    as: {
      control: { type: "select" },
      description: "Especifica la etiqueta HTML que se utilizará para el texto.",
      options: ["label", "p", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    children: {
      control: { type: "text" },
      description: "Contenido del texto a mostrar.",
    },
    color: {
      control: { type: "text" },
      description: "Establece el color del texto. Puede ser una clave del tema (ej: 'black.main', 'primary') o un color CSS válido.",
    },
    decoration: {
      control: { type: "select" },
      description: "Aplica un estilo decorativo al texto.",
      options: ["none", "underline", "line-through"],
    },
    htmlFor: {
      control: { type: "text" },
      description: "Debe usarse únicamente cuando el texto tenga la propiedad `as` con el valor `label`.",
    },
    margin: {
      control: { type: "text" },
      description: "Define los márgenes alrededor del texto usando el formato del sistema de espaciado.",
    },
    padding: {
      control: { type: "text" },
      description: "Define el relleno interno del texto usando el formato del sistema de espaciado.",
    },
    type: {
      control: { type: "select" },
      description: "Selecciona el estilo del texto o título según la categoría deseada.",
      options: [
        "bodyRegular",
        "bodySemibold",
        "captionRegular",
        "captionSemibold",
        "pageTitle",
        "subtitle",
        "title",
      ],
    },
  },
  component: Text,
  tags: ["autodocs"],
  title: "Components/Text",
};

/* export const Model = (args) => {
  return (
    <ThemeDS>
      <Text {...args}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

Model.args = {
  align: "start",
  as: "p",
  color: "black",
  decoration: "none",
  htmlFor: "",
  margin: "a-0",
  padding: "a-0",
  type: "bodyRegular",
};

export const Types = () => {
  return (
    <ThemeDS>
      <Text margin="b-32" type="pageTitle">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="y-32" type="title">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="subtitle">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="bodySemibold">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="bodyRegular">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text margin="b-32" type="captionSemibold">
        Lorem Ipsum is simply dummy text
      </Text>

      <Text type="captionRegular">
        Lorem Ipsum is simply dummy text
      </Text>
    </ThemeDS>
  );
};

export const Styles = () => {
  return (
    <ThemeDS>
      <Text margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text decoration="underline" margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text decoration="line-through">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export const Align = () => {
  return (
    <ThemeDS>
      <Text margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text align="center" margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Text align="end">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </ThemeDS>
  );
};

export const Colors = () => {
  return (
    <ThemeDS>
      <Text margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. (Default black)
      </Text>

      <Text color="primary" margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. (Primary color)
      </Text>

      <Text color="primary.light" margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. (Primary light variant)
      </Text>

      <Text color="error.main" margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. (Error color)
      </Text>

      <Text color="#FF6B35" margin="b-24">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. (Custom hex color)
      </Text>

      <Text color="highlight.main">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. (Highlight color)
      </Text>
    </ThemeDS>
  );
};

export const SemanticElements = () => {
  return (
    <ThemeDS>
      <Text as="h1" type="pageTitle" margin="b-16">
        This is a main heading (h1)
      </Text>

      <Text as="h2" type="title" margin="b-16">
        This is a secondary heading (h2)
      </Text>

      <Text as="h3" type="subtitle" margin="b-16">
        This is a tertiary heading (h3)
      </Text>

      <Text as="p" type="bodyRegular" margin="b-16">
        This is a paragraph with regular body text.
      </Text>

      <Text as="span" type="captionRegular" margin="b-16">
        This is an inline span with caption text.
      </Text>

      <div style={{ marginBottom: "16px" }}>
        <Text as="label" htmlFor="example-input" type="bodySemibold" margin="b-8">
          Label for input field:
        </Text>
        <input 
          id="example-input" 
          type="text" 
          placeholder="Type something..." 
          style={{ display: "block", padding: "8px", border: "1px solid #ccc" }}
        />
      </div>
    </ThemeDS>
  );
};

export const LongTextHandling = () => {
  return (
    <ThemeDS>
      <div style={{ maxWidth: "300px", border: "1px solid #ccc", padding: "16px" }}>
        <Text margin="b-16" type="subtitle">
          Long Text Wrapping Example
        </Text>
        
        <Text margin="b-16">
          This is a very long text that should wrap properly when it reaches the container boundaries. 
          The component handles word-wrap and overflow-wrap to ensure text doesn&apos;t break the layout.
        </Text>
        
        <Text>
          Supercalifragilisticexpialidocious pneumonoultramicroscopicsilicovolcanoconiosisantidisestablishmentarianism
        </Text>
      </div>
    </ThemeDS>
  );
}; */

export default meta;