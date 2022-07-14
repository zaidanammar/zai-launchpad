import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import UseFormLaunchpad from "../../../hooks/launchpad/Form";
import AButton from "../../atoms/AButton";
import ATextField from "../../atoms/ATextField";
import { isEmpty } from "lodash";

type Props = {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
  handleChange: any;
  handleSubmit: any;
  values: any;
  errors: any;
  touched: any;
  setTouched: any;
  dirty: any;
};

const ODefiLaunchpadForm = ({
  setActiveStep,
  activeStep,
  dirty,
  errors,
  touched,
  setTouched,
  handleChange,
  values,
}: Props) => {
  //   const { setTouched, errors, handleChange, values, touched, dirty } =
  //     UseFormLaunchpad();

  const handleBackStep = (step: number) => {
    setActiveStep(step);
  };

  const handleNextStep = (step: number) => {
    if (dirty && isEmpty(errors)) setActiveStep(step);
    else {
      setTouched({ token: true });
    }
  };

  return (
    <section className="bg-white p-6 mt-10 shadow-sm text-sm font-medium">
      <div>
        <h1 className="mb-1.5">Presale Rate</h1>
        <ATextField
          handleChange={handleChange}
          value={values.token}
          type="text"
          name="token"
          placeholder="ex: PinkMoon"
        />
        {errors.token && touched.token && (
          <p className="text-red-500 text-xs font-rom mt-1">{errors.token}</p>
        )}
      </div>

      <div className="mt-4">
        <h1 className="mb-1.5">Whitelist</h1>
        <FormControl>
          <RadioGroup
            row
            onChange={handleChange}
            name="whitelist"
            value={values.currency}
          >
            <FormControlLabel
              value="disabled"
              control={<Radio />}
              label={<p className="text-sm">Disabled</p>}
            />
            <FormControlLabel
              value="enabled"
              control={<Radio />}
              label={<p className="text-sm">Enabled</p>}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <aside className="sm:flex gap-5 mt-4">
        <div className="sm:w-1/2 w-full">
          <h1 className="mb-1.5">Minimum Buy</h1>
          <ATextField
            handleChange={handleChange}
            value={values.token}
            type="text"
            name="token"
            placeholder="ex: PinkMoon"
          />
          {errors.token && touched.token && (
            <p className="text-red-500 text-xs font-rom mt-1">{errors.token}</p>
          )}
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="mb-1.5">Maximum Buy</h1>
          <ATextField
            handleChange={handleChange}
            value={values.token}
            type="text"
            name="token"
            placeholder="ex: PinkMoon"
          />
          {errors.token && touched.token && (
            <p className="text-red-500 text-xs font-rom mt-1">{errors.token}</p>
          )}
        </div>
      </aside>

      <aside className="sm:flex gap-5 mt-4">
        <div className="sm:w-1/2 w-full">
          <h1 className="mb-1.5">Liquidity (%)</h1>
          <ATextField
            handleChange={handleChange}
            value={values.token}
            type="text"
            name="token"
            placeholder="ex: PinkMoon"
          />
          {errors.token && touched.token && (
            <p className="text-red-500 text-xs font-rom mt-1">{errors.token}</p>
          )}
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="mb-1.5">Listing Rate</h1>
          <ATextField
            handleChange={handleChange}
            value={values.token}
            type="text"
            name="token"
            placeholder="ex: PinkMoon"
          />
          {errors.token && touched.token && (
            <p className="text-red-500 text-xs font-rom mt-1">{errors.token}</p>
          )}
        </div>
      </aside>

      <div className="flex gap-3 justify-center items-center mt-6">
        <div className="w-fit">
          <AButton
            onClick={() => handleBackStep(activeStep - 1)}
            title="Back"
          />
        </div>
        <div className="w-fit">
          <AButton
            onClick={() => handleNextStep(activeStep + 1)}
            title="Next"
          />
        </div>
      </div>
    </section>
  );
};

export default ODefiLaunchpadForm;
