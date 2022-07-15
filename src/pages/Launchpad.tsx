import React, { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import { isEqual } from "lodash";

import OVerifyTokenForm from "../components/organisms/launchpad/OVerifyTokenForm";
import UseFormLaunchpad from "../hooks/launchpad/Form";
import ODefiLaunchpadForm from "../components/organisms/launchpad/ODefiLaunchpadForm";
import OResultForm from "../components/organisms/launchpad/OResultForm";

const steps = ["Verify Token", "DeFi launchpad Info", "Finish"];

const Launchpad = () => {
  const [activeStep, setActiveStep] = useState(0);
  const {
    handleSubmit,
    dirty,
    errors,
    handleChange,
    setTouched,
    touched,
    values,
    isSubmitting,
  } = UseFormLaunchpad();

  return (
    <form onSubmit={handleSubmit} className="pt-5">
      <section>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </section>

      {isEqual(activeStep, 0) && (
        <OVerifyTokenForm
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
          errors={errors}
          touched={touched}
          setTouched={setTouched}
          dirty={dirty}
        />
      )}
      {isEqual(activeStep, 1) && (
        <ODefiLaunchpadForm
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleChange={handleChange}
          values={values}
          errors={errors}
          touched={touched}
          setTouched={setTouched}
          dirty={dirty}
        />
      )}
      {isEqual(activeStep, 2) && (
        <OResultForm
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          errors={errors}
          touched={touched}
          setTouched={setTouched}
          dirty={dirty}
          isSubmitting={isSubmitting}
        />
      )}
    </form>
  );
};

export default Launchpad;
