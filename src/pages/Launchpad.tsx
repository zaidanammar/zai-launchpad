import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = ["Verify Token", "DeFi launchpad Info", "Finish"];

const Launchpad = () => {
  return (
    <main className="pt-5">
      <section className="">
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </section>

      <section className="bg-white p-6 mt-10 shadow-sm text-sm font-medium">
        <div>
          <h1>Token Address</h1>
        </div>
      </section>
    </main>
  );
};

export default Launchpad;
