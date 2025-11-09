import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Step.styles";

import { merge } from "lodash";

const DEFAULT_PROPS = {
  isCompleted: false,
  label: "",
  step: 0,
};

export const Step = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Wrapper step={attrs.step}>
      <Styles.Circle $isCompleted={attrs.isCompleted}>
        <Styles.Number $isCompleted={attrs.isCompleted}>
          {attrs.step}
        </Styles.Number>
      </Styles.Circle>

      {!!attrs.label && (
        <Styles.Label $isCompleted={attrs.isCompleted}>
          {attrs.label}
        </Styles.Label>
      )}
    </Styles.Wrapper>
  );
};

Step.propTypes = {
  isCompleted: PropTypes.bool,
  label: PropTypes.string,
  step: PropTypes.number,
};