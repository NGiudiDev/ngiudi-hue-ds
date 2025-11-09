import React from "react";
import PropTypes from "prop-types";

import { Step } from "./components/Step";

import { Styles } from "./Steps.styles";

import { merge } from "lodash";

const DEFAULT_PROPS = {
  labels: [],
  margin: null,
  step: 1,
  steps: 3,
};

export const Steps = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  const stepsArray = Array.from({ length: attrs.steps }, (_, index) => index + 1);

  return (
    <Styles.Wrapper $margin={attrs.margin}>
      {stepsArray.map((stepNumber, index) => {
        return (
          <React.Fragment key={index}>
            <Step
              isCompleted={stepNumber <= attrs.step}
              label={attrs.labels[index]}
              step={stepNumber}
            />

            {stepNumber < attrs.steps && <Styles.Line />}
          </React.Fragment>
        );
      })}
    </Styles.Wrapper>
  );
};

Steps.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  margin: PropTypes.string,
  step: PropTypes.number,
  steps: PropTypes.number,
};