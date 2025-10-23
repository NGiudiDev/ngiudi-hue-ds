/******************************************************************/
/*                                                                */
/*  ## Como actualizar el deploy en githup pages?                */
/*                                                                */
/*    1. El siguiente comando va a crear el build y va a          */
/*    publicar la pagina.                                         */
/*                                                                */
/*      npm run deploy                                            */
/*                                                                */
/*    2. Si en consola vemos el mensaje `Publish`, se ha          */
/*    publicado con exito la pagina.                              */
/*                                                                */
/*  ## Como publicar en npm?                                     */
/*                                                                */
/*    1. Actualizar la version en el package json, si no se hace  */
/*    esto, va a fallar al momento de intentar publicar en npm.   */
/*                                                                */
/*    2. Construir el nuevo proyecto                              */
/*                                                                */
/*      npm run build                                             */
/*                                                                */
/*    3. Publicar el nuevo paquete                                */
/*                                                                */
/*      npm publish                                               */
/*                                                                */
/******************************************************************/

export { Badge } from "./components/Badge/Badge";

export { Box } from "./components/Box/Box";

export { Button } from "./components/Button/Button";

export { Divider } from "./components/Divider/Divider";

export { Grid } from "./components/Grid/Grid";

export { Icon } from "./components/Icon/Icon";

export { Link } from "./components/Link/Link";

export { Panel } from "./components/Panel/Panel";

export { Text } from "./components/Text/Text";

export { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";