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

const OVerifyTokenForm = ({
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

  const handleNextStep = (step: number) => {
    if (dirty && isEmpty(errors)) setActiveStep(step);
    else {
      setTouched({ token: true });
    }
  };

  console.log(values);

  return (
    <section className="bg-white p-6 mt-10 shadow-sm text-sm font-medium">
      <div>
        <h1 className="mb-1.5">Token Address</h1>
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
        <h1 className="mb-1.5">Currency</h1>
        <FormControl>
          <RadioGroup
            onChange={handleChange}
            name="currency"
            value={values.currency}
          >
            <FormControlLabel
              value="eth"
              control={<Radio />}
              label={<p className="text-sm">ETH</p>}
            />
            <FormControlLabel
              value="usdt"
              control={<Radio />}
              label={<p className="text-sm">USDT</p>}
            />
            <FormControlLabel
              value="usdc"
              control={<Radio />}
              label={<p className="text-sm">USDC</p>}
            />
          </RadioGroup>
        </FormControl>
      </div>
      
      <div className="mt-4">
        <h1 className="mb-1.5">Fee Options</h1>
        <FormControl>
          <RadioGroup onChange={handleChange} name="fee" value={values.fee}>
            <FormControlLabel
              value="5%"
              control={<Radio />}
              label={<p className="text-sm">5%</p>}
            />
            <FormControlLabel
              value="2%"
              control={<Radio />}
              label={<p className="text-sm">2%</p>}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="flex justify-center items-center mt-4">
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

export default OVerifyTokenForm;
