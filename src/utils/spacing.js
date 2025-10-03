/**
 * receives a string in a specific format and transforms it into CSS
 * properties.
 *
 * @param {string} spacingString string with spacing values.
 * @param {string} type spacing type.
 * @return {string} spacing css code.
 */
const handleSpacing = (spacingString, type) => {
  let spacingsObj = {};
  let obj = {};

  const spacings = spacingString.split(" ");

  spacings.forEach((elem) => {
    const keys = elem.split("-");
    const border = keys[0];
    const value = keys[1];

    spacingsObj[border] = value;
  });

  obj[`${type}Bottom`] = `${
    spacingsObj.b || spacingsObj.y || spacingsObj.a || 0
  }px;`;

  obj[`${type}Left`] = `${
    spacingsObj.l || spacingsObj.x || spacingsObj.a || 0
  }px;`;

  obj[`${type}Right`] = `${
    spacingsObj.r || spacingsObj.x || spacingsObj.a || 0
  }px;`;

  obj[`${type}Top`] = `${
    spacingsObj.t || spacingsObj.y || spacingsObj.a || 0
  }px;`;

  return obj;
};

/**
 * receives a string in a specific format and transforms it into CSS margins.
 *
 * @param {string} props components properties.
 * @param {string} defaultValue used if margin property is not received.
 * @return {string} string with margin values.
 */
export const marginProperties = (props, defaultValue) => {
  let obj = "";

  if (props.$margin || defaultValue) {
    obj = handleSpacing(props.$margin || defaultValue, "margin");
  }

  return obj;
};

/**
 * receives a string in a specific format and transforms it into CSS paddings.
 *
 * @param {string} props components properties.
 * @param {string} defaultValue used if padding property is not received.
 * @return {string} string with padding values.
 */
export const paddingProperties = (props, defaultValue) => {
  let obj = {};

  if (props.$padding || defaultValue) {
    obj = handleSpacing(props.$padding || defaultValue, "padding");
  }

  return obj;
};